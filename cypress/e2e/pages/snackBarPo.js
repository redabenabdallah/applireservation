export class SnackbarPo {

    idSnackBar = '[role="presentation"]'

    verifMsgSnackBar(msg){
        cy.get(this.idSnackBar).should('have.text', msg)
    }
}