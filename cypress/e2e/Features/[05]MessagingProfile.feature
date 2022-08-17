Feature: Telnyx

    Background:
        When I Log In if needed
        And I Click Measaging button

    Scenario: Create a new Messaging Profile
        When I click Create your first account button
        And I enter "test" to input field Profile Name
        And I click Save button
        Then I see my created profile

    Scenario: Try to create new Hosted Sms order with invalid phone number
        When I Click Numbers button
        And I Click Hosted SMS button
        And I Click Create new order button
        And I enter '+380977777777' to order data input
        And I select my messaging profile
        And I click Create Order button
        Then I see error message Hosted Sms


    Scenario: Delete Messaging Profile
        When I Click icon trash button
        And I click delete button on pop-up window
        Then I see create your first profile button