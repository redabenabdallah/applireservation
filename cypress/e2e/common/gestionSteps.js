import { When } from "@badeball/cypress-cucumber-preprocessor";
import { GestionPo } from "../pages/gestionPo";

let gestionPo = new GestionPo()

When(/Je crée un utilisateur nommé (.*), d'ancienneté (.*) ans, de date de naissance (.*) et dont le role est (.*)/, (nom, ancienneté, birth, role) => {
    gestionPo.ajoutUtilisateur(nom, ancienneté,birth, role)
})

When(/Je renseigne la valeur (.*) pour le champs (.*) pour l'ajout de mon utilisateur/,(value, field) => {
    gestionPo.fillFieldAjoutUtilisateur(field, value)
})