class ContactPage {

    constructor() {
        this.url = 'https://npreview-all-properties.lodgify.com/en/contact-us'
        this.title = "Contact us'"
    }

    visit() {
        cy.visit(this.url)
    }

    verifyPageTitle() {
        cy.title().should('eq', this.title)
    }

    verifyPageHeader(header) {
        return cy.get('.content .header').contains(header)
    }

    clickSendButton() {
        return cy.get("[data-testid='button']").click()
    }

    enterUserName(name) {
        return cy.get("[name='name']")
            .parent()
            .should('have.text', 'Name is mandatory')
            .type(name)
    }

    enterUserEmail(email) {
        return cy.get("[name='email']")
            .parent()
            .should('have.text', 'Email is mandatory')
            .type(email)
    }

    enterPhoneNumber(phoneNumber) {
        return cy.get("[data-testid='phone-input']").type(phoneNumber)
    }

    enterGuestsAmount(amount) {
        return cy.get("[name='guests']")

        .type(amount)
    }

    enterComment(comment) {
        return cy.get("[placeholder='Comment']")
            .parent()
            .should('have.text', 'Comment is mandatory')
            .type(comment)
    }

    checkPlanDetails(title, totalSum) {
        return cy.get('.plan-name')
            .contains(title)
            .parent()
            .find('.total-sum')
            .contains(totalSum)
    }

    clickTheArrivalField() {
        return cy.get('input[aria-label="Arrival"]').click();
    }

    selectArivalAndDepatureDate(day, month, date) {
        return cy.get(`[aria-label="${day}, ${month} ${date}, 2023"]`).click()
    }
}

module.exports = ContactPage