
export class GestionSupplementsPo{

    ajoutSupplementCommande(monSupplement, idCommande){
        cy.dragDropSupplements('#supplement-' + monSupplement,idCommande)
    }

    verifTableauRecap(numCommande, colonne, value){
        cy.verifTableau('#tableauRecap', numCommande, colonne, value)
    }

    supprimeSupplementCommande(nomSupplement, numCommande){
        cy.getIndexColonneTableau('#tableauRecap', 'Liste Suppléments').then((indexCol) => {
            cy.get('#tableauRecap').find('tbody').find('tr').eq(numCommande - 1).find('td')
            .eq(indexCol).find('span').contains(nomSupplement).eq(0).find('i').eq(0).click()
        })

    }

}