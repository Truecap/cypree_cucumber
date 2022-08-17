Feature: Telnyx

    Background:
        When I Log In if needed
        And I Click call control button

    Scenario: Create a call control App
        Then I click Create your first application button
        And I type "test" to App name input
        And I type "https://test.com" to url input
        And I press save button
        Then I see green succesful message

    Scenario: Delete a call control App
        Then I click icon trash button on call control page
        And I see attention pop-up window
        And I click delete button on popup window
        Then I see Create your first Call Control App again
