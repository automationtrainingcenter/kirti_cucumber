$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/features/branch.feature");
formatter.feature({
  "name": "branch creation functionality",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@branch"
    }
  ]
});
formatter.scenarioOutline({
  "name": "branch creation with multiple sets of data",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@data_driven"
    }
  ]
});
formatter.step({
  "name": "user enters branch name \"\u003cbranchName\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user enters address \"\u003caddress1\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user enters zipcode \"\u003czipcode\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user selects country \"\u003ccountry\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user selects state \"\u003cstate\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user selects city \"\u003ccity\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on submit button in branch creation form",
  "keyword": "And "
});
formatter.step({
  "name": "user can see a message saying branch created successfully",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "branchName",
        "address1",
        "zipcode",
        "country",
        "state",
        "city"
      ]
    },
    {
      "cells": [
        "branchOneOne",
        "address",
        "56454",
        "INDIA",
        "Delhi",
        "Delhi"
      ]
    },
    {
      "cells": [
        "branchOneTwo",
        "address",
        "56454",
        "INDIA",
        "Delhi",
        "Delhi"
      ]
    },
    {
      "cells": [
        "branchOneThree",
        "address",
        "56454",
        "INDIA",
        "Delhi",
        "Delhi"
      ]
    },
    {
      "cells": [
        "branchOneFour",
        "address",
        "56454",
        "INDIA",
        "Delhi",
        "Delhi"
      ]
    },
    {
      "cells": [
        "branchOneFive",
        "address",
        "56454",
        "INDIA",
        "Delhi",
        "Delhi"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is in bank home page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.user_is_in_bank_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user do login with valid credentials",
  "keyword": "And "
});
formatter.match({
  "location": "RoleCreationSteps.user_do_login_with_valid_credentials()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on branches button",
  "keyword": "And "
});
formatter.match({
  "location": "BranchCreationSteps.click_on_branches_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on new branch button",
  "keyword": "And "
});
formatter.match({
  "location": "BranchCreationSteps.click_on_new_branch_button()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "branch creation with multiple sets of data",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@branch"
    },
    {
      "name": "@data_driven"
    }
  ]
});
formatter.step({
  "name": "user enters branch name \"branchOneOne\"",
  "keyword": "When "
});
formatter.match({
  "location": "BranchCreationSteps.user_enters_branch_name(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters address \"address\"",
  "keyword": "And "
});
formatter.match({
  "location": "BranchCreationSteps.user_enters_address(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters zipcode \"56454\"",
  "keyword": "And "
});
formatter.match({
  "location": "BranchCreationSteps.user_enters_zipcode(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects country \"INDIA\"",
  "keyword": "And "
});
formatter.match({
  "location": "BranchCreationSteps.user_selects_country(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects state \"Delhi\"",
  "keyword": "And "
});
formatter.match({
  "location": "BranchCreationSteps.user_selects_state(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects city \"Delhi\"",
  "keyword": "And "
});
formatter.match({
  "location": "BranchCreationSteps.user_selects_city(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on submit button in branch creation form",
  "keyword": "And "
});
formatter.match({
  "location": "BranchCreationSteps.user_clicks_on_submit_button_in_branch_creation_form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user can see a message saying branch created successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "BranchCreationSteps.user_can_see_a_message_saying_branch_created_successfully()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is in bank home page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.user_is_in_bank_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user do login with valid credentials",
  "keyword": "And "
});
formatter.match({
  "location": "RoleCreationSteps.user_do_login_with_valid_credentials()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on branches button",
  "keyword": "And "
});
formatter.match({
  "location": "BranchCreationSteps.click_on_branches_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on new branch button",
  "keyword": "And "
});
formatter.match({
  "location": "BranchCreationSteps.click_on_new_branch_button()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "branch creation with multiple sets of data",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@branch"
    },
    {
      "name": "@data_driven"
    }
  ]
});
formatter.step({
  "name": "user enters branch name \"branchOneTwo\"",
  "keyword": "When "
});
formatter.match({
  "location": "BranchCreationSteps.user_enters_branch_name(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters address \"address\"",
  "keyword": "And "
});
formatter.match({
  "location": "BranchCreationSteps.user_enters_address(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters zipcode \"56454\"",
  "keyword": "And "
});
formatter.match({
  "location": "BranchCreationSteps.user_enters_zipcode(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects country \"INDIA\"",
  "keyword": "And "
});
formatter.match({
  "location": "BranchCreationSteps.user_selects_country(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects state \"Delhi\"",
  "keyword": "And "
});
formatter.match({
  "location": "BranchCreationSteps.user_selects_state(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects city \"Delhi\"",
  "keyword": "And "
});
formatter.match({
  "location": "BranchCreationSteps.user_selects_city(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on submit button in branch creation form",
  "keyword": "And "
});
formatter.match({
  "location": "BranchCreationSteps.user_clicks_on_submit_button_in_branch_creation_form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user can see a message saying branch created successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "BranchCreationSteps.user_can_see_a_message_saying_branch_created_successfully()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is in bank home page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.user_is_in_bank_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user do login with valid credentials",
  "keyword": "And "
});
formatter.match({
  "location": "RoleCreationSteps.user_do_login_with_valid_credentials()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on branches button",
  "keyword": "And "
});
formatter.match({
  "location": "BranchCreationSteps.click_on_branches_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on new branch button",
  "keyword": "And "
});
formatter.match({
  "location": "BranchCreationSteps.click_on_new_branch_button()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "branch creation with multiple sets of data",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@branch"
    },
    {
      "name": "@data_driven"
    }
  ]
});
formatter.step({
  "name": "user enters branch name \"branchOneThree\"",
  "keyword": "When "
});
formatter.match({
  "location": "BranchCreationSteps.user_enters_branch_name(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters address \"address\"",
  "keyword": "And "
});
formatter.match({
  "location": "BranchCreationSteps.user_enters_address(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters zipcode \"56454\"",
  "keyword": "And "
});
formatter.match({
  "location": "BranchCreationSteps.user_enters_zipcode(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects country \"INDIA\"",
  "keyword": "And "
});
formatter.match({
  "location": "BranchCreationSteps.user_selects_country(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects state \"Delhi\"",
  "keyword": "And "
});
formatter.match({
  "location": "BranchCreationSteps.user_selects_state(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects city \"Delhi\"",
  "keyword": "And "
});
formatter.match({
  "location": "BranchCreationSteps.user_selects_city(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on submit button in branch creation form",
  "keyword": "And "
});
formatter.match({
  "location": "BranchCreationSteps.user_clicks_on_submit_button_in_branch_creation_form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user can see a message saying branch created successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "BranchCreationSteps.user_can_see_a_message_saying_branch_created_successfully()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is in bank home page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.user_is_in_bank_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user do login with valid credentials",
  "keyword": "And "
});
formatter.match({
  "location": "RoleCreationSteps.user_do_login_with_valid_credentials()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on branches button",
  "keyword": "And "
});
formatter.match({
  "location": "BranchCreationSteps.click_on_branches_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on new branch button",
  "keyword": "And "
});
formatter.match({
  "location": "BranchCreationSteps.click_on_new_branch_button()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "branch creation with multiple sets of data",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@branch"
    },
    {
      "name": "@data_driven"
    }
  ]
});
formatter.step({
  "name": "user enters branch name \"branchOneFour\"",
  "keyword": "When "
});
formatter.match({
  "location": "BranchCreationSteps.user_enters_branch_name(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters address \"address\"",
  "keyword": "And "
});
formatter.match({
  "location": "BranchCreationSteps.user_enters_address(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters zipcode \"56454\"",
  "keyword": "And "
});
formatter.match({
  "location": "BranchCreationSteps.user_enters_zipcode(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects country \"INDIA\"",
  "keyword": "And "
});
formatter.match({
  "location": "BranchCreationSteps.user_selects_country(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects state \"Delhi\"",
  "keyword": "And "
});
formatter.match({
  "location": "BranchCreationSteps.user_selects_state(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects city \"Delhi\"",
  "keyword": "And "
});
formatter.match({
  "location": "BranchCreationSteps.user_selects_city(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on submit button in branch creation form",
  "keyword": "And "
});
formatter.match({
  "location": "BranchCreationSteps.user_clicks_on_submit_button_in_branch_creation_form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user can see a message saying branch created successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "BranchCreationSteps.user_can_see_a_message_saying_branch_created_successfully()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is in bank home page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.user_is_in_bank_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user do login with valid credentials",
  "keyword": "And "
});
formatter.match({
  "location": "RoleCreationSteps.user_do_login_with_valid_credentials()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on branches button",
  "keyword": "And "
});
formatter.match({
  "location": "BranchCreationSteps.click_on_branches_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on new branch button",
  "keyword": "And "
});
formatter.match({
  "location": "BranchCreationSteps.click_on_new_branch_button()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "branch creation with multiple sets of data",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@branch"
    },
    {
      "name": "@data_driven"
    }
  ]
});
formatter.step({
  "name": "user enters branch name \"branchOneFive\"",
  "keyword": "When "
});
formatter.match({
  "location": "BranchCreationSteps.user_enters_branch_name(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters address \"address\"",
  "keyword": "And "
});
formatter.match({
  "location": "BranchCreationSteps.user_enters_address(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters zipcode \"56454\"",
  "keyword": "And "
});
formatter.match({
  "location": "BranchCreationSteps.user_enters_zipcode(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects country \"INDIA\"",
  "keyword": "And "
});
formatter.match({
  "location": "BranchCreationSteps.user_selects_country(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects state \"Delhi\"",
  "keyword": "And "
});
formatter.match({
  "location": "BranchCreationSteps.user_selects_state(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects city \"Delhi\"",
  "keyword": "And "
});
formatter.match({
  "location": "BranchCreationSteps.user_selects_city(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on submit button in branch creation form",
  "keyword": "And "
});
formatter.match({
  "location": "BranchCreationSteps.user_clicks_on_submit_button_in_branch_creation_form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user can see a message saying branch created successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "BranchCreationSteps.user_can_see_a_message_saying_branch_created_successfully()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});