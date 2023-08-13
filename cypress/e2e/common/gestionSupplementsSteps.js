import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import {GestionSupplementsPo} from '../pages/gestionSupplements.po'

const gestionSupplementsPo = new GestionSupplementsPo()

When(/Je  drag and drop le supplément (.*) sur la commande N°(\d+)/, (nomSupplement, numCommande)=>{
    gestionSupplementsPo.ajoutSupplementCommande(nomSupplement, numCommande)
})

Then(/Dans le tableau récapitulatif, pour la commande N°(\d+), la colonne (.*) a pour valeur (.*)/, (numCommande, colonne, value) => {
    gestionSupplementsPo.verifTableauRecap(numCommande, colonne, value)
})

When(/Je supprime le supplément (.*) de la commande N°(\d+)/, (nomSupplement, numCommande) =>{
    gestionSupplementsPo.supprimeSupplementCommande(nomSupplement, numCommande)
})

Then(/Dans le tableau récapitulatif, pour la commande N°(\d+), la colonne (.*) est vide/, (numCommande, colonne) => {
    gestionSupplementsPo.verifTableauRecap(numCommande, colonne, '')
})