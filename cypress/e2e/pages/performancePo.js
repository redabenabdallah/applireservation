
export class PerformancePo{

    checkReponseDelay(timeExpected){
        cy.request('GET', 'https://jsonplaceholder.cypress.io/comments').then((reponse) => {
            expect(reponse.duration).to.be.below(timeExpected)
            expect(reponse.body[0]).to.have.property('postId')
        })
    }
}