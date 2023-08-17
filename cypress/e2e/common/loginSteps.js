import {When, Then} from '@badeball/cypress-cucumber-preprocessor';
import {NavigationPo} from "../pages/navigationPo";

const navigationPo = new NavigationPo()

When(/^Je me connecte en tant que (.*) avec le mot de passe (.*) à la page de réservation de pizza à la date du (.*)/, (userConx,pwdCnx, dateCnx) => {
    navigationPo.goToPage(userConx,pwdCnx, dateCnx)
});

Then(/^J'ai (\d+) bouton (.*)/, (nbBtn, libelleBtn) => {
    navigationPo.checkBtnPage(nbBtn, libelleBtn)
});

Then(/^La date de réservation affichée est la date du (.*)/, (dateCnx) => {
    navigationPo.verifDateConnex(dateCnx)
});

Then(/^Le message indique bien que (.*)/, (msg) => {
    navigationPo.verifMessageInformationNoel(msg)
});

Then(/^Dans le catalogue de pizzas disponibles, j'ai les pizzas suivantes (.*)/, (listePizz) => {
    navigationPo.verifListePizzas(listePizz)
});

When(/Je commande (\d+) pizza (.*)/, (nbPizz, typePizz) => {
    navigationPo.commandePizza(nbPizz, typePizz)
})

When(/Je clique sur le bouton (.*)/, (btn) => {
    navigationPo.clickBtn(btn)
})

Then(/Les liens disponibles sont uniquement (.*)/, (listeLiens) =>{
    navigationPo.verifLiens(listeLiens)
})

When(/Je clique sur le lien (.*)/, (nomLien)=>{
    navigationPo.clickLien(nomLien)
})

Then(/Le bouton (.*) est indisponible de base/, (nomBtn) => {
    navigationPo.verifDispoBtn(nomBtn, false)
})


