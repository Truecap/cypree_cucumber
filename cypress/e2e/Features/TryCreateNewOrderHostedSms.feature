Feature: Telnyx

    Background:
        When I Log In


    Scenario: Try to create new Hosted Sms order with invalid phone number
        When I Click Numbers button
        And I Click Hosted SMS button
        And I Click Create new order button
        And I enter '+380977777777' to order data input
        And I select my messaging profile
        And I click Create Order button
        Then I see error message Hosted Sms
