Feature: Telnyx

  Scenario: Log In with invalid credentials
    When I click on Log In button
    And I type invalid email "test@gmail.com", and password "test1234"
    And I click on LogIn button
    Then I see error message
