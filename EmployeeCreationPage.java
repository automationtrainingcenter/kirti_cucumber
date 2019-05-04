package in.srssprojects.cucumber_bank;

import org.openqa.selenium.Alert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;

public class EmployeeCreationPage {
	private WebDriver driver;

	// employee name
	@FindBy(how = How.ID, using = "txtUname")
	private WebElement EmpName;

	// login password
	@FindBy(how = How.ID, using = "txtLpwd")
	private WebElement Password;

	// role
	@FindBy(how = How.ID, using = "lst_Roles")
	private WebElement Role;

	// branch
	@FindBy(how = How.ID, using = "lst_Branch")
	private WebElement Branch;

	// submit
	@FindBy(how = How.ID, using = "BtnSubmit")
	private WebElement Submit;

	// reset
	@FindBy(how = How.ID, using = "btnreset")
	private WebElement Reset;

	// cancel
	@FindBy(how = How.ID, using = "btnCancel")
	private WebElement Cancel;

	// constructor
	public EmployeeCreationPage (WebDriver driver) {
		this.driver = driver;
		PageFactory.initElements(driver, this);
	}

	// setEmployeeName
	public void setEmploeeName(String EmpName) {
		this.EmpName.sendKeys(EmpName);
	}

	// setLoginPassword
	public void setLoginPassword(String LPass) {
		this.Password.sendKeys(LPass);
	}

	// selectRole
	public void selectRole(String Role) {
		new Select(this.Role).selectByVisibleText(Role);
	}

	// selectBranch
	public void selectCountry(String Branch) {
		new Select(this.Branch).selectByVisibleText(Branch);
	}

	// clickSubmit - returns Alert
	public Alert clickSubmit() {
		this.Submit.click();
		return driver.switchTo().alert();
	}

	// clickReset
	public void clickReset() {
		this.Reset.click();
	}

	// clickCancel - returns EmployeeDetailsPage
	public BranchDetailsPage clickCancel() {
		return PageFactory.initElements(driver, BranchDetailsPage.class);
	}

}
