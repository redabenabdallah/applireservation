import 'cypress-iframe';

Cypress.Commands.add('dragDropSupplements', (dragSelector, dropSelector) => {
    cy.get(dragSelector).should('exist')
    const dataTransfer = new DataTransfer();
    cy.get(dragSelector).trigger('dragstart', {dataTransfer})
    cy.get('#tableauRecap').find('th').contains('Liste Suppléments').invoke('index').then((indexCol) => {
        cy.get('#tableauRecap').find('tbody').find('tr').eq(dropSelector - 1).find('td').eq(indexCol).trigger('drop',{
            dataTransfer
          })
    })
    }
)

Cypress.Commands.add('verifTableau', (idTableau, numCommande, colonne, value) => {
    cy.get(idTableau).find('th').contains(colonne).invoke('index').then((indexCol) => {
        cy.get(idTableau).find('tbody').find('tr').eq(numCommande - 1).find('td').eq(indexCol).should('have.text', value)
    })
})

Cypress.Commands.add('getIndexColonneTableau', (idTableau, colonne) => {
   return cy.get(idTableau).find('th').contains(colonne).invoke('index').then((indexCol) => {
        return indexCol
    })
})