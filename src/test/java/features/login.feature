@login
Feature: login functionality
  description: verify login functionality with valid, invlaid and blank data

  Background: 
    Given user is in bank home page

  @valid
  Scenario: verify login functionality with valid credentials
    When user enters valid username
    And user enters valid password
    And user clicks on login button
    Then user can see admin home page with welcome to admin message

  @invalid
  Scenario: verify login functionality with invlaid password
    When user enters valid username
    But user enter invalid password
    And user clicks on login button
    Then user can see an error message saying incorrect bankname or password

  @blank
  Scenario: verify login functionality with blank data
    When user clicks on login button
    Then user can see an error message saying please fill the following fields
