import {Then, When} from '@badeball/cypress-cucumber-preprocessor';
import {TableauPo} from "../pages/tableauPo";

const tableauPo = new TableauPo()



Then(/^J'ai un tableau récapitulatif de ma commande avec comme header (.*)/, (header) => {
    tableauPo.checkHeaderTab(header, 'recapCommandes')
});

Then(/^En moins de (\d+) ms, je vois un tableau récapitulatif de ma commande avec comme header (.*)/, (tempsMax, header) => {
    tableauPo.checkHeaderTabPerf(tempsMax,header, 'recapCommandes')
});

Then(/^J'ai un tableau récapitulatif avec la commande (.*)/, (maCommande) => {
    tableauPo.checkTabListCommandes(maCommande)
});

Then(/^J'ai un tableau total avec comme header (.*)/, (header) => {
    tableauPo.checkHeaderTab(header, 'totalPrix')
});

Then(/^J'ai un tableau total avec un montant de (.*)/, (total) => {
    tableauPo.checkTotal(total)
});

Then(/^J'ai un tableau d'utilisateurs avec comme header (.*)/, (header) => {
    tableauPo.checkHeaderTab(header, 'users')
});

When(/Je clique sur la colonne (.*) du tableau d'utilisateurs/, (nomCol)=>{
    tableauPo.clickHeaderTab(nomCol , 'users')
})

Then(/La colonne (.*) du tableau utilisateurs est trié de manière croissante/, (nomCol)=>{
    tableauPo.checkOrderColTab(nomCol , 'users', 'asc')
})

Then(/La colonne (.*) du tableau utilisateurs est trié de manière décroissante/, (nomCol)=>{
    tableauPo.checkOrderColTab(nomCol , 'users', 'dsc')
})

Then(/^J'ai un tableau historique de commandes avec comme header (.*)/, (header) => {
    tableauPo.checkHeaderTab(header, 'historique')
});

Then(/^A la ligne N° (\d+), la colonne (.*) du tableau (.*) a pour valeur (.*)/, (numLigne, nomCol, tab, valeur) => {
    tableauPo.checkValeurColTab(numLigne,nomCol, tab, valeur)
});
