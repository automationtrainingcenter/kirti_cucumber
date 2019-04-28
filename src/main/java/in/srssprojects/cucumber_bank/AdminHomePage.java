package in.srssprojects.cucumber_bank;

import org.openqa.selenium.WebDriver;
//using Page factory
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

public class AdminHomePage {

	WebDriver driver;

	// home
	@FindBy(how = How.CSS, using = "a[href='adminflow.aspx']")
	private WebElement home;

	// logout
	@FindBy(css = "a[href='home.aspx']")
	private WebElement logout;

	// branches
	@FindBy(how = How.CSS, using = "a[href='admin_banker_master.aspx']")
	private WebElement branches;

	// roles
	@FindBy(how = How.CSS, using = "a[href='Admin_Roles_details.aspx']")
	private WebElement roles;

	// employees
	@FindBy(how = How.CSS, using = "a[href='Admin_Emp_details.aspx']")
	private WebElement employees;

	public AdminHomePage(WebDriver driver) {
		this.driver = driver;
		PageFactory.initElements(driver, this);
	}

	// click home button
	public void clickHome() {
		this.home.click();
	}

	// click logout button
	public void clickLogout() {
		this.logout.click();
	}

	// click branches
	public void clickBranches() {
		this.branches.click();
	}

	// click roles
	public void clickRoles() {
		this.roles.click();
	}

	// click employess
	public void clickEmployees() {
		this.employees.clear();
	}

}
