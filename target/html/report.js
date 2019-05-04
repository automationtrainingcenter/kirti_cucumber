$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/features/login.feature");
formatter.feature({
  "name": "login functionality",
  "description": "  description: verify login functionality with valid, invlaid and blank data",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "verify login functionality with valid credentials",
  "description": "",
  "keyword": "Scenario"
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
  "name": "user enters valid username",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.user_enters_valid_username()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters valid password",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.user_enters_valid_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.user_clicks_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user can see admin home page with welcome to admin message",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.user_can_see_admin_home_page_with_welcome_to_admin_message()"
});
formatter.result({
  "status": "passed"
});
});