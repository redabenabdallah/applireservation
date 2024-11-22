import { times } from 'lodash'
import moment from 'moment'


export class NavigationPo {

    goToPage(userCnx, pwdCnx, dateString) {
        const dateFormat = new Date(moment(dateString, "DD/MM/YYYY HH:mm:SS").format('YYYY-MM-DDTHH:mm:SS'))

        cy.clock(dateFormat.getTime(), ['Date'])
        cy.visit('http://localhost:3000/')
        cy.get('#inputUserLogin').clear({force: true}).type(userCnx)
        cy.get('#inputUserPwd').clear({force: true}).type(pwdCnx)
        cy.get('#loginUserBtn').click({force: true})
        cy.url().should((url)=>{
            expect(url.toString().endsWith('mesPizzas')).to.equals(true)
        })
    }

    checkBtnPage(nbBtn, libelleBtn) {
        cy.get('button').contains(libelleBtn).should('have.length', nbBtn)
    }

    verifDateConnex(dateCnx) {
        cy.get('#dateResa').should('have.text', 'Date: Nous sommes le ' + dateCnx.trimLeft())
    }

    verifPerfDateConnex(temps, dateCnx){
        cy.window()
        .its('performance')
        .invoke('mark', 'afficheDateCnx')
        this.verifDateConnex(dateCnx)
        cy.window()
        .its('performance')
        .invoke('measure', 'afficheDateCnx')
        .its('duration', { timeout: 0 })
        .should('be.lessThan', temps)
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
                .parents('span').eq(0).find('button').eq(0).click({force: true})
        })
    }

    clickBtn(btn) {
        cy.get('body').find('button').contains(new RegExp("^" + btn + "$", "g")).eq(0).click({force: true})
    }

    verifLiens(listeLiens){
        let listeActuLien = new Array();
        cy.get('body').find('a').each((lien)=>{
            listeActuLien.push(lien.text().trimEnd().trimStart())
        }).wrap(listeActuLien).then((listeActuLien)=> {
            expect(listeActuLien.join(',')).to.equals(listeLiens)
        })
    }

    clickLien(nomLien){
        cy.get('body').find('a').contains(new RegExp("\\s" + nomLien + "\\s", "g")).eq(0).click({force: true})
    }

    verifDispoBtn(nomBtn, isDispo){
        isDispo ? cy.get('body').find('button').contains( nomBtn).should('not.have.attr', 'disabled')
        : cy.get('body').find('button').contains(nomBtn).should('have.attr', 'disabled')
    }

    verifRadioBtn(pageAcc, listeMusic, tagTitre, titre){
        const toArrayMusic = new Array()
            cy.get('a').contains(pageAcc).eq(0).click({force: true})
            cy.get('body').find(tagTitre).contains(titre).should('have.length', 1)
            cy.get('body').find(tagTitre).contains(titre).eq(0).nextAll('div').should('have.length',3)
            cy.get('body').find(tagTitre).contains(titre).eq(0).nextAll('div').each((el)=>{
                expect(el.find('[type="radio"]').length === 1).to.equal(true)
                expect(el.find('label').length === 1).to.equal(true)
                toArrayMusic.push(el.find('label').eq(0).text())
            }).wrap(toArrayMusic).then((toArrayMusic)=>{
                expect(toArrayMusic.join(',')).to.equal(listeMusic)
            })
    }

    clickRdBtn(rdBtn){
        cy.intercept('POST', '**/GenerateIT').as('maRequete')
        cy.get('body').find('label').contains(rdBtn).prev('input[type="radio"]').eq(0).check()
        cy.wait('@maRequete')
    }

    checkVideoToPlay(music){
        cy.iframe().find('[class="ytp-title-text"]').eq(0).as('titleContent')
        cy.get('iframe').its('0.contentDocument')
        .should('not.be.empty')

        cy.get('@titleContent').should((content) => {
            expect(content.text()).to.include(music)
        })
    }

    playOrStopVideo(isPlaying){
        cy.iframe().find('video').should('have.prop', 'paused', !isPlaying)
        .and('have.prop', 'ended', false)
        .then(($video) => {
            if(!isPlaying){
                $video[0].playbackRate = 2
            }
            
          $video[0].click({force: true})
        })
        if(!isPlaying){
            cy.wait(5000)
        }       
        }


    

    checkVideoPlays(isPlaying){
        cy.iframe().find('video')
        .should('have.prop', 'paused', !isPlaying)
        .and('have.prop', 'ended', false)
    }
}
