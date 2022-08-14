Feature: Telnyx

    Scenario: Try to be added to the waiting list on storage
        When I focus on Products tab
        And I click Storage button
        And I click Join the waitlist button
        And I fill the form
        And I click Apply now button
        Then I see: You're on the waitlist! text