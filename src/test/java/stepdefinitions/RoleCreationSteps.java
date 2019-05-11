package stepdefinitions;

import org.junit.Assert;
import org.openqa.selenium.Alert;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.support.PageFactory;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import gherkin.formatter.Reporter;
import in.srssprojects.cucumber_bank.AdminHomePage;
import in.srssprojects.cucumber_bank.BankHomePage;
import in.srssprojects.cucumber_bank.RoleCreationPage;
import in.srssprojects.cucumber_bank.RoleDetailsPage;
import net.masterthought.cucumber.ReportResult;
import utilities.BrowserHelper;
import utilities.JavaScriptHelper;

public class RoleCreationSteps extends BrowserHelper{
	RoleDetailsPage roleDetailsPage;
	RoleCreationPage roleCreationPage;
	Alert alert;
	
	@Given("user do login with valid credentials")
	public void user_do_login_with_valid_credentials() {
	    BankHomePage bankHomePage = new BankHomePage(driver);
	    bankHomePage.setUserName("Admin");
	    bankHomePage.setPassword("Admin");
	    bankHomePage.clickLogin();
	    		
	}

	@Given("user clicks on roles button")
	public void user_clicks_on_roles_button() {
		AdminHomePage adminHomePage = PageFactory.initElements(driver, AdminHomePage.class);
		roleDetailsPage = adminHomePage.clickRoles();
	}

	@Given("user clicks on new role button")
	public void user_clicks_on_new_role_button() {
	   roleCreationPage = roleDetailsPage.clickNewRole();
	}

	@When("user enters role name {string}")
	public void user_enters_role_name(String roleName) {
		roleCreationPage.setRoleName(roleName);
	}

	@When("user enters role description {string}")
	public void user_enters_role_description(String roleDescription) {
	   
	}

	@When("user selects role type {string}")
	public void user_selects_role_type(String roleType) {
	   roleCreationPage.selectRoleType(roleType);
	}

	@When("user clicks on submit button")
	public void user_clicks_on_submit_button() {
	   alert = roleCreationPage.clickSubmit();
	}

	@Then("user can see an error message saying role created successfully with some id")
	public void user_can_see_an_error_message_saying_role_created_successfully_with_some_id() {
	    String text = alert.getText();
	    alert.accept();
	    Assert.assertTrue(text.toLowerCase().contains("created sucessfully"));
	}

	@When("user clicks on reset button")
	public void user_clicks_on_reset_button() {
		roleCreationPage.clickReset();
	}

	@Then("user can see role creation form with empty fields")
	public void user_can_see_role_creation_form_with_empty_fields() {
		Assert.assertTrue(roleCreationPage.isFormReset());
	}
}
