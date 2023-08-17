import { Then, When } from "@badeball/cypress-cucumber-preprocessor";
import { FormulairePo } from "../pages/formulairePo";

let formulairePo= new FormulairePo()

Then(/Pour le champs de label (.*) j'ai la valeur (.*)/, (nomLabel, value) => {
    formulairePo.verifValeurChampFromLabel(nomLabel, value)
})

When(/Je choisis comme image (.*) pour ma photo de profil/, (nomImage) =>{
    formulairePo.upLoadImage(nomImage)
})

Then(/L'image de ma photo de profil du champs label (.*) est bien mise à jour et visible/, (nomLabel) =>{
    formulairePo.checkUpLoadImage(nomLabel)
})

Then(/L'image de ma photo de profil du champs label (.*) n'est pas mise à jour/, (nomLabel) =>{
    formulairePo.checkUpLoadImageKO(nomLabel)
})