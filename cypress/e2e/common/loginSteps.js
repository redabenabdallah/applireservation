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

Then(/^En moins de (\d+) ms, la date de réservation affichée est la date du (.*)/, (temps, dateCnx) => {
    navigationPo.verifPerfDateConnex(temps, dateCnx)
});

Then(/^Dans le catalogue de pizzas disponibles, j'ai les pizzas suivantes (.*)/, (listePizz) => {
    navigationPo.verifListePizzas(listePizz)
});

Then(/^En moins de (\d+) ms, dans le catalogue de pizzas disponibles, j'ai les pizzas suivantes (.*)/, (temps,listePizz) => {
    navigationPo.verifPerfListePizzas(listePizz)
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

Then(/Dans la page d'accueil (.*), j'ai le choix des musiques (.*) sous le titre (.*) de libellé (.*)/, (pageAcc, listeMusic, tagTitre, titre)=>{
    navigationPo.verifRadioBtn(pageAcc, listeMusic, tagTitre, titre)
})

When(/Je clique sur le radio bouton (.*)/, (rdBtn)=> {
    navigationPo.clickRdBtn(rdBtn)
})

Then(/La video (.*) est prête à être jouée/, (m)=> {
    navigationPo.checkVideoToPlay(m)
})

When(/Je joue la video/, ()=> {
    navigationPo.playOrStopVideo(false)
})

When(/Je stoppe la video/, ()=> {
    navigationPo.playOrStopVideo(true)
})

Then(/La video est jouée/, ()=> {
    navigationPo.checkVideoPlays(true)
})

Then(/La video est mise en pause/, ()=> {
    navigationPo.checkVideoPlays(false)
})


