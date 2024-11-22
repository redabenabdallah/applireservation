import moment from 'moment'

export class GestionPo {

    idInputName = '#addUserName'
    idInputAge = '#addUserAge'
    idInputDateBirth = '#addUserBirthDay'
    idFieldRole = '#addUserRole'
    idBtnAjout = '#addUser'

    ajoutUtilisateur(nom, ancienneté,birth, role){
        cy.get(this.idInputName).find('input').eq(0).clear({force: true}).type(nom)
        cy.get(this.idInputAge).find('input').eq(0).clear({force: true}).type(ancienneté)
        cy.get(this.idInputDateBirth).find('input').eq(0).clear({force: true}).type(moment(birth).format('YYYY-MM-DD'))
        cy.get(this.idFieldRole).find('select').select(role, {force: true})
        cy.get(this.idBtnAjout).click()
    }

    fillFieldAjoutUtilisateur(field, value){
        const idField = field.toString().toLowerCase() === 'nom' ? this.idInputName : field.toString().toLowerCase() === 'ancienneté' ? this.idInputAge : this.idFieldRole
        if(field.toString().toLowerCase() === 'nom' || field.toString().toLowerCase() === 'ancienneté'){
            cy.get(idField).find('input').eq(0).clear({force: true}).type(value)
        }else {
            cy.get(this.idFieldRole).find('select').select(value, {force: true})
        }
    }
}