export class TableauPo {

    isInt(n) {
        return /^[+-]?\d+$/.test(n);
      }

    getIdTab(nomTableau){
        let idTab = ''
        switch(nomTableau) {
            case 'users': 
                    idTab= '#listeUsers'
                    break;
            
            case 'historique': 
            idTab= '#histoTab'
                break;
            
            case 'recapCommandes': 
            idTab= '#tableauRecap'
                break;
            
            case 'totalPrix': 
            idTab= '#tableauPrixTotal'
                break;
            default:
                idTab= 'table'
            
        }
        return idTab
    }

    checkHeaderTab(header, tab) {
        const idTab = this.getIdTab(tab)
        let listeActu = new Array()
        cy.get(idTab).find('th').each(col => {
            listeActu.push(col.text())
        }).wrap(listeActu).then(listeActu => {
            expect(listeActu.join(',')).to.equals(header)
        })
    }

    checkHeaderTabPerf(tempsMax,header, tab){
        cy.window()
        .its('performance')
        .invoke('mark', 'afficheTab')

        cy.get('#tableauRecap').should('exist')
        cy.window()
        .its('performance')
        .invoke('measure', 'afficheTab')
        .its('duration', { timeout: 0 })
        .should('be.lessThan', tempsMax)

    }

    checkTabListCommandes(maCommande) {

    }

    checkTotal(total) {
        cy.get('#tableauPrixTotal').find('tbody').find('tr').should('have.text', total).and('have.length', 1)
    }



    clickHeaderTab(nomCol , tab){
        const idTab = this.getIdTab(tab)
        cy.get(idTab).find('th').contains(nomCol).eq(0).click()
    }

    checkOrderColTab(nomCol , tab, orderExpected){
        const idTab = this.getIdTab(tab)
        let listeContenuCol = new Array()
        cy.get(idTab).find('th').contains(nomCol).invoke('index').then((indexCol) => {
            cy.get(idTab).find('tbody').find('tr').each((ligne) => {
                cy.wrap(ligne).find('td').eq(indexCol).each((col) => {
                    listeContenuCol.push(col.text())
                }).wrap(listeContenuCol).then((listeContenuCol) => {
                    for (let i=1;i < listeContenuCol.length;i++){
                        let val1 = listeContenuCol.at(i -1).trimEnd().trimStart()
                        let val2 = listeContenuCol.at(i).trimEnd().trimStart()
                        if(this.isInt(val1) && this.isInt(val2)){
                            val1=parseInt(val1)
                            val2=parseInt(val2)
                        }
                        orderExpected === 'asc' ? expect(val1 <= val2).to.equals(true) :
                        expect(val1 >= val2).to.equals(true)
                    }

                })
            })
        })
    }

    checkValeurColTab(numLigne,nomCol, tab, valeur){
        const idTab = this.getIdTab(tab)
        cy.get(idTab).find('th').contains(nomCol).invoke('index').then((indexCol) => {
            cy.get(idTab).find('tbody').find('tr').eq(numLigne - 1).find('td').eq(indexCol).should('have.text', valeur)
        })
    }
}