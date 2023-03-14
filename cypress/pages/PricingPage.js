class PricingPage {

    constructor() {
        this.url = 'https://www.lodgify.com/pricing/'
        this.title = "Blog"
    }

    visit() {
        cy.visit(this.url)
    }

    getAcceptCookiesButton() {
        return cy.get('#onetrust-accept-btn-handler')
    }

    selectMonthlyPricingOption() {
        return cy.get("[data-price-period='1']").click()
    }

    selectRetalsAmount(amount) {
        return cy.get('#scroll-prop-plan')
            .clear()
            .type(amount)
    }

    checkPlanDetails(title, totalSum) {
        return cy.get('.plan-name')
            .contains(title)
            .parent()
            .find('.total-sum')
            .contains(totalSum)
    }

    changePricingCurrency(currency, currencyName) {
        return cy.get('select').select(currency).should('have.value ', currencyName)
    }

    getPlanBenefitList() {
        return cy.get('.plan-feature-lists .list-left-sm')
    }

}

module.exports = PricingPage