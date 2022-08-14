Feature: Telnyx

    Background:
        When I Log In

    Scenario: Create a call control App
        When I Click call control button
        And I click Create your first application button
        And I type "test" to App name input
        And I type "https://test.com" to url input
        And I press save button
        Then I see green succesful message
