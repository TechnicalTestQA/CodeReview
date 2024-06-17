Feature: The Internet Guinea Pig Website

  Scenario: Login
    Given I am on the login page
    When I click on the username input field
      And enter username 'tomsmith'
    When I click on the password input field
      And enter password 'abc123'
    When I click on login button
    Then I should see a hotel search section
