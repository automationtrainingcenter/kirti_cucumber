Feature: login functionality
  description: verify login functionality with valid, invlaid and blank data

  Scenario: verify login functionality with valid credentials
    Given user is in bank home page
    When user enters valid username
    And user enters valid password
    And user clicks on login button
    Then user can see admin home page with welcome to admin message
