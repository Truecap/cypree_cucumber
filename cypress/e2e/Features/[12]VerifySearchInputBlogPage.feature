Feature: Telnyx

    Background:
        When I focus on Resources tab

    Scenario: verify search input on Blog page
        When I click Blog button from resources tab
        And I type "Number pool" to search input
        Then I see search result
