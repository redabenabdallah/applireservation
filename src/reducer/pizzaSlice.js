import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    commandePizza: [],
    prixTotal: 0,
    nbCommandesByPizza: 0,
    isCommandeByPizzaPossible: true,
    isPanierAlreadyOpen: false,
    libelleBtnPanier: 'Voir mon panier',
    hasChangePagePanier: false,
    listeSupplements : []
};
let nextId = 1
export const pizzaSlice = createSlice({
    name: 'listeCommande',
    initialState: initialState,

    reducers: {
        addPizza: (state, action) => {
            state.commandePizza = [...state.commandePizza, {
                idCommande: nextId,
                type: action.payload.type,
                sauce: action.payload.sauce,
                piquant: action.payload.piquant,
                prix: action.payload.prix,
                nbTotal: action.payload.nbTotal,
                nbCommandes: 1
            }]
            state.nbCommandesByPizza = state.commandePizza.filter(item => item.type === action.payload.type).length++
            state.prixTotal = state.prixTotal + parseFloat(action.payload.prix.toString().split(' ')[0])
            nextId += 1
        },
        removePizza: (state, action) => {
            state.commandePizza = state.commandePizza.filter(item => item.idCommande !== action.payload.pizz.idCommande)
            state.nbCommandesByPizza = state.commandePizza.filter(item => item.type === action.payload.pizz.type).length - 1
            state.prixTotal = state.prixTotal - parseFloat(action.payload.pizz.prix.toString().split(' ')[0])
            let listSupplementByCommandeToRemove = state.listeSupplements.filter(x => x.idCommande === action.payload.pizz.idCommande);
            if(listSupplementByCommandeToRemove.length > 0){
                let prixSupplementCommande = listSupplementByCommandeToRemove.map((x) => (x.prix)).reduce((partialSum, a) => partialSum + a, 0);
                state.prixTotal = state.prixTotal - prixSupplementCommande
            }
            state.listeSupplements = state.listeSupplements.filter(x => x.idCommande !== action.payload.pizz.idCommande)

            state.commandePizza.forEach(x => {
                if (x.idCommande > action.payload.pizz.idCommande) {
                    x.idCommande--
                }
            })
            if (state.commandePizza.length === 0) {
                nextId = 1
            }
            state.listeSupplements.forEach(x => {
                if (x.idCommande > action.payload.pizz.idCommande) {
                    x.idCommande--
                }
            })
        },
        getStockPizza: (state, action) => {
            state.nbCommandesByPizza = state.commandePizza.filter(item => item.type === action.payload.type).length
        },
        clickOnPanier: (state, action) => {
            state.libelleBtnPanier = state.libelleBtnPanier === 'Fermer Panier' ? 'Voir mon panier' : 'Fermer Panier'
            state.isPanierAlreadyOpen =  state.libelleBtnPanier === 'Fermer Panier';
        },
        pageHasChanged: (state, action) => {
            state.hasChangePagePanier = true
        },
        updateAfterDrop:(state, action) =>{
            let nbOccurenceSupplForCommande = state.listeSupplements.filter(x => x.idCommande === action.payload.idCommande && action.payload.item.text === x.supplement).length
            if(nbOccurenceSupplForCommande === 0){
                state.listeSupplements = [...state.listeSupplements, {"idCommande" : action.payload.idCommande, "supplement":action.payload.item.text , "prix" : action.payload.item.prix}]
                state.prixTotal = state.prixTotal + action.payload.item.prix
            }

        },
        removeSupplement :(state, action) =>{
            let listSupplementToRemoveByCommande = state.listeSupplements.filter(x => x.idCommande === action.payload.idCommande && action.payload.monSupplement.supplement === x.supplement);
            state.listeSupplements = state.listeSupplements.filter(x => x.idCommande !== action.payload.idCommande || (x.idCommande === action.payload.idCommande && x.supplement !== action.payload.monSupplement.supplement));
            state.prixTotal = state.prixTotal - listSupplementToRemoveByCommande.at(0).prix

        }
    },
});

export const {addPizza, removePizza, clickOnPanier, pageHasChanged, updateAfterDrop, removeSupplement} = pizzaSlice.actions;

export const selectItems = (state) => state.pizzas.commandePizza;
export const isPanierAlreadyOpen = (state) => state.pizzas.isPanierAlreadyOpen;
export const libellePanier = (state) => state.pizzas.libelleBtnPanier;
export const hasChangePagePanier = (state) => state.pizzas.hasChangePagePanier;
export const listeSupplementsActual = (state) => state.pizzas.listeSupplements;
export const prixTotal = (state) => state.pizzas.prixTotal;
export default pizzaSlice.reducer;