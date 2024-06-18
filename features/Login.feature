Feature: Login

  Scenario: Login

    Given I am on the login page
    When I enter username 'tomsmith'
    And I enter password 'abc123'
    And I click on login button
    Then I should see Hotel Search section
