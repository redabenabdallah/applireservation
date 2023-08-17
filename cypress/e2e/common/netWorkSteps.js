import { When } from "@badeball/cypress-cucumber-preprocessor";
import { NetWorkPo } from "../pages/netWorkPo";


const networkPo = new NetWorkPo()

When(/Je veux voir mes points bonus/, () =>{
    networkPo.mockResponseBeforeClickBtn('GET', '/mesBonus', '#getBonus', 'mockReponse/bonus.json')
})

When(/Je veux voir mon historique de commandes/, () =>{
    networkPo.mockResponseBeforeClickBtn('GET', '/monHistorique', '#getHistorique','mockReponse/tableauHistorique.json')
})

