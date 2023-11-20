const { When, Then } = require('@badeball/cypress-cucumber-preprocessor')
const TGDynamicTablePage = require('../../../pages/TGDynamicTablePage')

const tgDynamicTablePage = new TGDynamicTablePage()



    Then(/^user should see Add New Product pop-up$/, () => {
        tgDynamicTablePage.getPopUpwindow().should('be.visible')
    })

    
Then(/^user should not see Add New Product pop-up$/, () => {
	tgDynamicTablePage.getPopUpwindow().should('not.be.exist')
});

    






