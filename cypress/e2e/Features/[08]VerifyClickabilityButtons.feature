Feature: Telnyx

    Scenario: Verify buttons clickability
        When I focus on Solutions
        And I click Contact Cener button
        And I click Explore Elastic SIP Trunking button and click back
        And I click Explore SMS Api button and click back
        Then I click Explore WebRTC button
