import {Given, When, Then, And} from 'cypress-cucumber-preprocessor/steps'
import CaminoDemo from './demoSteps.js'

Given ('I visit the Camino homepage', () => {
    CaminoDemo.visitHomepage()
})

When ('I click on any "Schedule a Demo" button', () => {
    CaminoDemo.scheduleADemo()
})

Then ('I am taken to the /schedule-a-demo page', () => {
    CaminoDemo.verifyDemoUrl()
})



When ('I submit the following information', () => {
    CaminoDemo.submitIncompleteForm()
})

Then ('I am shown the error message', () => {
    CaminoDemo.verifyErrorMessage()
})

And ('the url contains /schedule-a-demo', () => {
    CaminoDemo.verifyDemoUrl()
})



When ('I submit the valid information below', () => {
    CaminoDemo.submitCompleteForm()
})

Then ('a verification message will be displayed', () => {
    CaminoDemo.verifyBookingSuccess()
})

