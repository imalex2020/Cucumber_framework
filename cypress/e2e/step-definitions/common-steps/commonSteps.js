const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor')
const TGHtmlElementsPage = require('../../../pages/TGHtmlElementsPage')
const TGDynamicTablePage = require('../../../pages/TGDynamicTablePage')

const tgDynamicTablePage = new TGDynamicTablePage()
const tgHtmlElementsPage = new TGHtmlElementsPage()

Given('user navigates to {string}', (url) =>{
    cy.visit(url)
    
})

Then('user should see the {string} page heading', (headingText) => {
    switch(headingText){
        case 'Html Elements':
            tgHtmlElementsPage.getHeading().should('have.text', headingText)
            break
        case 'Project - Dynamic Tables':
            tgDynamicTablePage.getHeading().should('have.text', headingText)
            break
            default:
                break
          
    }

    
 
})

When('user click on the {string} button', (button) => {
    switch (button) {
        case 'Register':
            tgHtmlElementsPage.clickButtonByText(button)
            break
        case 'Sign in':
            tgHtmlElementsPage.clickButtonByText(button)
            break
        case 'ADD PRODUCT':
             tgDynamicTablePage.getProductButton().click()
             break
             case 'CLOSE':
                tgDynamicTablePage.getCloseButton().click()
                break
        default:
           break
    }
})