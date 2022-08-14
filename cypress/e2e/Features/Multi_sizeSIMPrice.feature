Feature: Telnyx

    Scenario: Finding price for Multi-size SIM card for Ukraine
        When I focus on Pricing
        And I click Wireless button
        And I select Ukraine
        Then I see price for Multi-size SIM card

    Scenario: Verify change the price for Multi-size SIM card for Ukraine if we change the currency on EUR
        When I focus on Pricing tab
        And I click Wireless button in tab
        And I select Ukraine from drop-down
        And I see price for Multi-size SIM card in USD
        And I change the currency for Euro
        Then I see price for Multi-size SIM card in EUR

