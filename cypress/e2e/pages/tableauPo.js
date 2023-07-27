export class TableauPo {


    checkHeaderTabListCommandes(header) {
        let listeActu = new Array()
        cy.get('#tableauRecap').find('th').each(col => {
            listeActu.push(col.text())
        }).wrap(listeActu).then(listeActu => {
            expect(listeActu.join(',')).to.equals(header)
        })
    }

    checkTabListCommandes(maCommande) {

    }

    checkHeaderTabListTotal(header) {
        let listeActu = new Array()
        cy.get('#tableauPrixTotal').find('th').each(col => {
            listeActu.push(col.text())
        }).wrap(listeActu).then(listeActu => {
            expect(listeActu.join(',')).to.equals(header)
        })
    }

    checkTotal(total) {
        cy.get('#tableauPrixTotal').find('tbody').find('tr').should('have.text', total).and('have.length', 1)
    }
}