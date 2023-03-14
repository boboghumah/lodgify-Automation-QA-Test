import ContactPage from "../pages/ContactPage"

const contact = new ContactPage()

context('Lodgify Contact Page', () => {

    beforeEach(() => {
        contact.visit()
        cy.clearCookies()

    })

    it('Verify the benefits list for all plan are displayed correctly', () => {

        contact.verifyPageTitle()

        contact.verifyPageHeader('Contact')

        contact.clickSendButton();

        contact.enterUserName('Test name')

        contact.enterUserEmail('Testname@to.com')

        contact.enterPhoneNumber('1234567')

        contact.enterGuestsAmount('3')

        contact.clickTheArrivalField()

        contact.selectArivalAndDepatureDate('Saturday', 'April', '15')
        contact.selectArivalAndDepatureDate('Thursday', 'April', '20')

        contact.enterComment('This is a comment')

        contact.clickSendButton();

    });


})