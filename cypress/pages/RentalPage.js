class RentalPage {

    constructor() {
        this.url = 'https://npreview-all-properties.lodgify.com/en/first-rental'
        this.title = "Contact us'"
    }

    visit() {
        cy.visit(this.url)
    }

    verifyPageSectionNavBars(sectionNumber, sectionName) {
        return cy.get(`[data-testid="horizontalMenu-menu-item-${sectionNumber}"]`)
            .should('have.text', sectionName)
    }

    clickAddReviewButton() {
        return cy.get('[data-testid="reviews-add-review-button"]')
            .should('have.text', 'Add a review')
            .click()
    }

    clickBookNowButton() {
        return cy.get("[data-testid='button']").click()
    }

    clickGuestField() {
        return cy.get('.dropdown-container > .ui > span').click()

    }

    selectNumberOfGuests() {
        return cy.get('[name="plus"]').dblclick()
            .click()
    }

    enterGuestsAmount(amount) {
        return cy.get("[name='guests']")

        .type(amount)
    }


    clickTheArrivalField() {
        return cy.get('input[aria-label="Arrival"]')
            .should('be.visible')
            .click()
    }

    selectArivalDate(day, month, date) {
        return cy.get(`[aria-label="${day}, ${month} ${date}, 2023"]`)
            .first()
            .click({ force: true })
    }

    selectDepatureDate(day, month, date) {
        return cy.get(`[aria-label ="${day}, ${month} ${date}, 2023"]`)
            .click()
    }

    clickSearchButton() {
        return cy.get('[data-testid="search-button"]')
            .should('contain', 'Book for €559')
            .click()
    }

    clickCheckoutBookNowButton() {
        return cy.get('[data-testid="checkout-pay"]').click()
    }

    enterfirstName(name) {
        return cy.get('[data-testid="checkout-payment-firstName"]')
            .type(name)
    }

    enterlastName(name) {
        return cy.get('[data-testid="checkout-payment-lastName"]')
            .type(name)
    }

    enterUserEmail(email) {
        return cy.get('[data-testid="checkout-payment-email"]')
            .type(email)
    }

    clickRequestToBookButton() {
        return cy.get('[data-testid="checkout-pay"]').click()
    }

    getSuccessPageHeading() {
        return cy.get('h1 > span')
    }

    getSuccessPageResult() {
        return cy.get('.checkout-result > p > span')
    }

    clickCurrencyDropdown() {
        return cy.get('[data-testid="rates.head.currency-dropdown"]').click()
    }

    selectCurrency() {
        return cy.get('div.menu.transition')
            .invoke('attr', 'style', 'display: block')
            .find('[id="73"] span.text')
            .click()
    }

    getPriceRate() {
        return cy.get('.rate-price-column')
    }
}

module.exports = RentalPage