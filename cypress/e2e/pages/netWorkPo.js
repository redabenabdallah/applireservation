export class NetWorkPo {

    mockResponseBeforeClickBtn(method, urlCall,idBtn, mockReponse){
        cy.intercept(method, urlCall, { fixture:  mockReponse})
        cy.get(idBtn).click()
    }
}