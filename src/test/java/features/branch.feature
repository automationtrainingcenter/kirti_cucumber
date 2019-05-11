@branch
Feature: branch creation functionality

  Background: 
    Given user is in bank home page
    And user do login with valid credentials
    And click on branches button
    And click on new branch button

  @data_driven
  Scenario Outline: branch creation with multiple sets of data
    When user enters branch name "<branchName>"
    And user enters address "<address1>"
    And user enters zipcode "<zipcode>"
    And user selects country "<country>"
    And user selects state "<state>"
    And user selects city "<city>"
    And user clicks on submit button in branch creation form
    Then user can see a message saying branch created successfully

    Examples: 
      | branchName     | address1 | zipcode | country | state | city  |
      | branchOneOne   | address  |   56454 | INDIA   | Delhi | Delhi |
      | branchOneTwo   | address  |   56454 | INDIA   | Delhi | Delhi |
      | branchOneThree | address  |   56454 | INDIA   | Delhi | Delhi |
      | branchOneFour  | address  |   56454 | INDIA   | Delhi | Delhi |
      | branchOneFive  | address  |   56454 | INDIA   | Delhi | Delhi |
