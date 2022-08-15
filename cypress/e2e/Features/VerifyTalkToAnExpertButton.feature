Feature: Telnyx

    Scenario: verify talk to an expert button
        When I click Talk to us button
        And I fill the need form
        And I click submit button
        Then I see Thanks for Reaching Out! text