package stepdefinitions;

import org.junit.Assert;
import org.openqa.selenium.Alert;
import org.openqa.selenium.support.PageFactory;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import in.srssprojects.cucumber_bank.AdminHomePage;
import in.srssprojects.cucumber_bank.BranchCreationPage;
import in.srssprojects.cucumber_bank.BranchDetailsPage;
import utilities.BrowserHelper;

public class BranchCreationSteps extends BrowserHelper {

	private BranchDetailsPage branchDetailsPage;
	private BranchCreationPage branchCreationPage;
	private Alert alert;

	@Given("click on branches button")
	public void click_on_branches_button() {
		AdminHomePage adminHomePage = PageFactory.initElements(driver, AdminHomePage.class);
		branchDetailsPage = adminHomePage.clickBranches();
	}

	@Given("click on new branch button")
	public void click_on_new_branch_button() {
		branchCreationPage = branchDetailsPage.clickNewBranchButton();
	}

	@When("user enters branch name {string}")
	public void user_enters_branch_name(String branchName) {
		branchCreationPage.setBranchName(branchName);
	}

	@When("user enters address {string}")
	public void user_enters_address(String address1) {
		branchCreationPage.setAddress1(address1);
	}

	@When("user enters zipcode {string}")
	public void user_enters_zipcode(String zipCode) {
		branchCreationPage.setZipCode(zipCode);
	}

	@When("user selects country {string}")
	public void user_selects_country(String country) {
		branchCreationPage.selectCountry(country);
	}

	@When("user selects state {string}")
	public void user_selects_state(String state) {
		branchCreationPage.selectState(state);
	}

	@When("user selects city {string}")
	public void user_selects_city(String city) {
		branchCreationPage.selectCity(city);
	}

	@When("user clicks on submit button in branch creation form")
	public void user_clicks_on_submit_button_in_branch_creation_form() {
		alert = branchCreationPage.clickSubmit();
	}

	@Then("user can see a message saying branch created successfully")
	public void user_can_see_a_message_saying_branch_created_successfully() {
		String text = alert.getText();
		alert.accept();
		Assert.assertTrue(text.toLowerCase().contains("created sucessfully"));
	}

}
