import PricingPage from "../pages/PricingPage"

const pricing = new PricingPage()

const liteBenefits = ["Bookable Website",
    "Property Management System",
    "Channel Manager",
    "Reservation & Payment System",
    "Guest Messaging",
    "Instant Booking"
]

const startersBenefits = ["Lower Booking Fee",
    "Request to Book",
    "Ad-Free Branding",
    "Email Support"
]

const professionalsBenefits = ["No Booking Fee",
    "Manual Payments",
    "Damage Protection Pre-Authorization",
    "Advanced Guest Messaging",
    "Google Vacation Rentals",
    "Phone Support"
]

const ultimateBenefits = ["Expanded Dashboard",
    "Cleaning & Task Management ",
    "Accounting",
    "Owner Management",
    "Guest App",
    "Priority Customer Support across All Channels "
]

context('Lodgify Pricing Page', () => {

    beforeEach(() => {

        pricing.visit()
        Cypress.Cookies.debug(false)
        cy.clearCookies()
        pricing.getAcceptCookiesButton().click()

    })


    it('Verify the benefits list for all plan are displayed correctly', () => {

        //Select Monhly payment option
        pricing.selectMonthlyPricingOption()

        //Choose number of rentals
        pricing.selectRetalsAmount(50)

        //Check the plan details
        pricing.checkPlanDetails('Starter', '88')
        pricing.checkPlanDetails('Professional', '526')
        pricing.checkPlanDetails('Ultimate', '804')

    });


    it('Verify that the change of currency functionality works properly', () => {

        pricing.changePricingCurrency('€ EUR', 'eur')

        //Select Monhly payment option
        pricing.selectMonthlyPricingOption()

        //Choose number of rentals
        pricing.selectRetalsAmount(50)

        //Check Starter plan
        pricing.checkPlanDetails('Starter', '73')
            .find('.text-sm').contains('All the main features to get your vacation rental business started.')

        //Check Professional plan
        pricing.checkPlanDetails('Professional', '435')
            .find('.text-sm').contains('Everything you need for growing businesses.')

        //Check Ultimate plan
        pricing.checkPlanDetails('Ultimate', '666')
            .find('.text-sm').contains('Best for scaling businesses with advanced property needs.')

    });


    it('Verify all plans benefits are listed correctly', () => {

        pricing.getPlanBenefitList().first().each((item, index) => {
            cy.wrap(item)
                .should('contain.text', liteBenefits[index])
        })

        pricing.getPlanBenefitList().next().each((item, index) => {
            cy.wrap(item)
                .should('contain.text', startersBenefits[index])
        })

        pricing.getPlanBenefitList().first().each((item, index) => {
            cy.wrap(item)
                .should('contain.text', professionalsBenefits[index])
        })

        pricing.getPlanBenefitList().last().each((item, index) => {
            cy.wrap(item)
                .should('contain.text', ultimateBenefits[index])
        })

    });
})