import { When } from "@badeball/cypress-cucumber-preprocessor";
import { PerformancePo } from "../pages/performancePo";

let performancePo = new PerformancePo()

When(/Je teste le test WS, alors le temps de réponse API est en dessous de (\d+) ms/, (time) =>{
    performancePo.checkReponseDelay(time)
})