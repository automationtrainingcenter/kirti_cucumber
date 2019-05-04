package stepdefinitions;

import org.junit.Assert;
import org.openqa.selenium.support.PageFactory;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import in.srssprojects.cucumber_bank.AdminHomePage;
import in.srssprojects.cucumber_bank.BankHomePage;
import utilities.BrowserHelper;

public class LoginSteps extends BrowserHelper{
	BankHomePage bankHomePage;
	@Given("user is in bank home page")
	public void user_is_in_bank_home_page() {
		launchBrowser("chrome", "http://srssprojects.in");
		bankHomePage = new BankHomePage(driver);
	}

	@When("user enters valid username")
	public void user_enters_valid_username() {
		bankHomePage.setUserName("Admin");
	}

	@When("user enters valid password")
	public void user_enters_valid_password() {
		bankHomePage.setPassword("Admin");
	}

	@When("user clicks on login button")
	public void user_clicks_on_login_button() {
		bankHomePage.clickLogin();
	}

	@Then("user can see admin home page with welcome to admin message")
	public void user_can_see_admin_home_page_with_welcome_to_admin_message() {
		AdminHomePage adminHomePage = PageFactory.initElements(driver, AdminHomePage.class);
		Assert.assertTrue(driver.getPageSource().toLowerCase().contains("welcome"));
	}

}
