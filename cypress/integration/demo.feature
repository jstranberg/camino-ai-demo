Feature: Book a demo

    As a site visitor  
        I can book a demo of Camino

Scenario: Access the demo request form
    Given I visit the Camino homepage
    When I click on any "Schedule a Demo" button
    Then I am taken to the /schedule-a-demo page

Scenario: Submit an incomplete demo request form
    When I submit the following information
    Then I am shown the error message
    And the url contains /schedule-a-demo

Scenario: Submit a complete demo request form
    When I submit the valid information below
    Then a verification message will be displayed
