import {Then} from '@badeball/cypress-cucumber-preprocessor';
import {TableauPo} from "../pages/tableauPo";

const tableauPo = new TableauPo()



Then(/^J'ai un tableau récapitulatif de ma commande avec comme header (.*)/, (header) => {
    tableauPo.checkHeaderTabListCommandes(header)
});

Then(/^J'ai un tableau récapitulatif avec la commande (.*)/, (maCommande) => {
    tableauPo.checkTabListCommandes(maCommande)
});

Then(/^J'ai un tableau total avec comme header (.*)/, (header) => {
    tableauPo.checkHeaderTabListTotal(header)
});

Then(/^J'ai un tableau total avec un montant de (.*)/, (total) => {
    tableauPo.checkTotal(total)
});


