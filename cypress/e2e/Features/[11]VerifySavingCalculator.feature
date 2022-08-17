Feature: Telnyx

    Background:
        When I focus on Resources tab

    Scenario: verify saving calculator
        When I click Saving Calculator button
        And I click Meassaging Api button
        And I click Continue button
        And I Enter "01" to input local number
        And I Enter "01" to input toll free  number
        And I again click Continue button
        Then I see possible savings

