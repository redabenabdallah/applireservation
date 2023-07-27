import { times } from 'lodash'
import moment from 'moment'

export class NavigationPo {

    goToPage(dateString) {
        const dateFormat = new Date(moment(dateString, "DD/MM/YYYY HH:mm:SS").format('YYYY-MM-DDTHH:mm:SS'))
        cy.log(dateString)
        cy.log(moment(dateString , "DD/MM/YYYY HH:mm:SS").format('YYYY-MM-DDTHH:mm:SS'))
        cy.clock(dateFormat.getTime(), ['Date'])
        cy.visit('http://localhost:3000/')
    }

    checkBtnPage(nbBtn, libelleBtn) {
        cy.get('button').contains(libelleBtn).should('have.length', nbBtn)
    }

    verifDateConnex(dateCnx) {
        cy.get('#dateResa').should('have.text', 'Date: Nous sommes le ' + dateCnx.trimLeft())
    }

    verifMessageInformationNoel(msg) {
        cy.get('#txtResa').should('have.text', 'Message Important : ' + msg)
    }

    verifListePizzas(listePizz) {
        let listeActu = new Array()
        cy.get('body').find('[id*=pizzaModel-]').each((pizz) => {
            listeActu.push(pizz.text())
        }).wrap(listeActu).then((listeActu) => {
            expect(listeActu.join(',')).to.equals(listePizz)
        })
    }

    commandePizza(nbPizz, typePizz) {
        times(nbPizz, () => {
            cy.get('body').find('[id*=pizzaModel-]').contains(new RegExp("^" + typePizz + "$", "g"))
                .parents('li').eq(0).find('button').eq(0).click()
        })
    }

    clickBtn(btn) {
        cy.get('body').find('button').contains(new RegExp("^" + btn + "$", "g")).eq(0).click()
    }
}
