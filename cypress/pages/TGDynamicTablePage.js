const TGBasePage = require('./TGBasePage')

class DynamicTablePage extends TGBasePage {

    getProductButton() {
        return cy.get('#add_product_btn')
    }



    getPopUpwindow(){
        return cy.get('.modal-card')
    }
    getCloseButton(){
        return cy.get('.delete')
    }

}



module.exports = DynamicTablePage