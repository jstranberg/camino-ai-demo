const SCHEDULE_A_DEMO = '.box > .button'
const NAME = "#wpforms-68-field_1"
const EMAIL = "#wpforms-68-field_2"
const PHONE_NUMBER = "#wpforms-68-field_5"
const CITY_OR_JURISDICTION = "#wpforms-68-field_3"
const SUBMIT_BUTTON = "#wpforms-submit-68"
const NAME_ERROR = "#wpforms-68-field_1-error"
const EMAIL_ERROR = "#wpforms-68-field_2-error"
const CITY_ERROR = "#wpforms-68-field_3-error"

class CaminoDemo{
    static visitHomepage () {
        cy.visit('/')
    }

    static scheduleADemo () {
        cy.get(SCHEDULE_A_DEMO).click()
    }

    static verifyDemoUrl () {
        cy.url().should('include', '/schedule-a-demo/')
    }

    static submitIncompleteForm () {
        cy.get(SUBMIT_BUTTON).click()
    }

    static verifyErrorMessage () {
        cy.get(NAME_ERROR)
            .should('be.visible')
            .and('contain', 'This field is required.')
        cy.get(EMAIL_ERROR)
            .should('be.visible')
            .and('contain', 'This field is required.')
        cy.get(CITY_ERROR)
            .should('be.visible')
            .and('contain', 'This field is required.')
    }

    static submitCompleteForm () {
        cy.get(NAME).type('Seijin')
        cy.get(EMAIL).type('SeijTranberg@gmail.com')
        cy.get(PHONE_NUMBER).type('4702775962')
        cy.get(CITY_OR_JURISDICTION).type('QA Applicant Demo For Mike')
        cy.get(SUBMIT_BUTTON).click()
    }

    static verifyBookingSuccess () {
        cy.get('#wpforms-confirmation-68')
            .should('be.visible')
            .and('contain', 'Thanks for contacting us! We will be in touch with you shortly.')
    }
}

export default CaminoDemo