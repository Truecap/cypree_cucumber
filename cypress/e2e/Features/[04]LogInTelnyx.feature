Feature: Telnyx

  Background:
    Given Login out if loginned in
    Given Im on home page


  Scenario: Log In with invalid credentials
    When I click on Log In button
    And I type email "test@gmail.com", and password "test1234"
    And I click on LogIn button
    Then I see error message


  Scenario: Log in if needed
    When I Log In if needed


