export class FormulairePo {

    verifValeurChampFromLabel(nomLabel, value){
       cy.get('label').contains(nomLabel).eq(0).next('span').should('have.text', value)
    }

    upLoadImage(nomImage){
        cy.get('input[type=file]').selectFile('cypress/fixtures/images/' + nomImage, {force: true})
    }

    checkUpLoadImage(nomLabel){
        cy.get('i').contains("Fichier accepté").should('have.length', 1)
        cy.get('i').contains("Seuls les fichiers JPG, PNG, GIF sont acceptés").should('have.length', 0)
        cy.get('label').contains(nomLabel).nextUntil('img').eq(0).should('be.visible')
        cy.get('label').contains(nomLabel).nextUntil('img').eq(0).should(($img) => {
            expect($img[0].clientWidth).to.be.greaterThan(0)
          })
    }

    checkUpLoadImageKO(nomLabel){
        cy.get('i').contains("Fichier accepté").should('have.length', 0)
        cy.get('i').contains("Seuls les fichiers JPG, PNG, GIF sont acceptés").should('have.length', 1)
        cy.get('body').find('img').should('not.exist')
    }
}