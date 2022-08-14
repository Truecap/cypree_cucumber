Feature: Telnyx

    Background:
        When I Log In
        And I Click Measaging button

    Scenario: Create a new Messaging Profile
        When I click Create your first account button
        And I enter "test" to input field Profile Name
        And I click Save button
        Then I see my created profile

    Scenario: Delete Messaging Profile
        When I Click icon trash button
        And I click delete button on pop-up window
        Then I see create your first profile button