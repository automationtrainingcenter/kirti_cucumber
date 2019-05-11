package stepdefinitions;

import org.junit.Assert;
import org.openqa.selenium.Alert;
import org.openqa.selenium.support.PageFactory;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import in.srssprojects.cucumber_bank.AdminHomePage;
import in.srssprojects.cucumber_bank.BankHomePage;
import utilities.BrowserHelper;

public class LoginSteps extends BrowserHelper {
	BankHomePage bankHomePage;
	@Before
	public void setUp() {
		launchBrowser("chrome", "http://srssprojects.in");
	}
	
	@After
	public void tearDown() {
		closeBrowser();
	}

	@Given("user is in bank home page")
	public void user_is_in_bank_home_page() {
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

	@When("user enter invalid password")
	public void user_enter_invalid_password() {
		bankHomePage.setPassword("Adminnnnn");
	}

	@Then("user can see an error message saying incorrect bankname or password")
	public void user_can_see_an_error_message_saying_incorrect_bankname_or_password() {
		Alert alert = driver.switchTo().alert();
		String text = alert.getText();
		alert.accept();
		Assert.assertTrue(text.toLowerCase().contains("incorrect"));
	}

	@Then("user can see an error message saying please fill the following fields")
	public void user_can_see_an_error_message_saying_please_fill_the_following_fields() {
		Alert alert = driver.switchTo().alert();
		String text = alert.getText();
		alert.accept();
		Assert.assertTrue(text.toLowerCase().contains("please fill "));
	}

}
