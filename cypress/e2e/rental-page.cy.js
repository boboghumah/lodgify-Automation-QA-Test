import RentalPage from "../pages/RentalPage"

const rental = new RentalPage()

context('Test First Rental Page', () => {
    beforeEach(() => {
        rental.visit()
        cy.clearCookies()
    })

    it('Validate that each section is correctly displayed', () => {

        rental.verifyPageSectionNavBars('0', 'Description')

        rental.verifyPageSectionNavBars('1', 'Pictures')

        rental.verifyPageSectionNavBars('2', 'Amenities')

        rental.verifyPageSectionNavBars('3', 'Location')

        rental.verifyPageSectionNavBars('4', 'Rates')

        rental.verifyPageSectionNavBars('5', 'Availability')

        rental.verifyPageSectionNavBars('6', 'Reviews')

    })

    it('Validate that the Add a review button works properly', () => {

        rental.clickAddReviewButton()
        cy.url().should('contain', '#new-review')
    })

    it('Validate that the currency dropdown works correctly and currencies are changed all over the page', () => {
        rental.clickCurrencyDropdown()

        rental.selectCurrency()


        cy.get('#50.item', { force: true }).click()

        rental.getPriceRate().contains('$')
    })

    it('E2e Rental page scenarios', () => {

        //Should pick a date range of 6 days and validate the price changes on "Book for" button

        //Click the rental button
        rental.clickBookNowButton()

        //Select number of guests (4)
        rental.clickGuestField()
        rental.selectNumberOfGuests()

        //Select Arrival and Departure dates
        rental.clickTheArrivalField()
        rental.selectArivalAndDepatureDate('Saturday', 'April', '15')
        rental.selectArivalAndDepatureDate('Friday', 'April', '21')

        rental.clickSearchButton()

        //Validate the checkout page and dates and number of guests are correct'
        cy.get('.title').contains('Apr 15, 2023 - Apr 21, 2023')
        cy.url().should('contain', 'preview-checkout.lodgify')

        rental.clickCheckoutBookNowButton()

        //Fill the Guest Details form on step 3 and click Request to Book'
        rental.enterfirstName('Test ')
        rental.enterlastName('Last')
        rental.enterUserEmail('testlast@new.com')
        rental.clickRequestToBookButton()

        //Check the success page
        rental.getSuccessPageHeading()
            .contains('Thank you for your booking!')
        rental.getSuccessPageResult()
            .contains('Your booking is now confirmed. We have sent you an email with the booking details.')

    })



})