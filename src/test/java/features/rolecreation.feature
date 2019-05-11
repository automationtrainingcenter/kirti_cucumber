@role
Feature: role creation functionality

Background:
	Given user is in bank home page
	And user do login with valid credentials
	And user clicks on roles button
	And user clicks on new role button

@valid	
Scenario: role creation with valid data
	When user enters role name "someNewRole"
	And user enters role description "new role"
	And user selects role type "E"
	And user clicks on submit button
	Then user can see an error message saying role created successfully with some id
	
@reset
Scenario: role creation reset
	When user enters role name "someNewRole"
	And user enters role description "new role"
	And user selects role type "E"
	And user clicks on reset button
	Then user can see role creation form with empty fields
	