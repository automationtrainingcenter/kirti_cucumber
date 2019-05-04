package in.srssprojects.cucumber_bank;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

public class EmployeeDetailsPage {
	private WebDriver driver;
	
	// new employee button
	@FindBy(how = How.ID, using = "BtnNew")
	private WebElement newEmploee;
	
	//constructor
	public EmployeeDetailsPage(WebDriver driver) {
		this.driver = driver;
		PageFactory.initElements(driver, this);
	}
	
	//click new employee button - returns EmployeeCreationPage
	public EmployeeCreationPage clickNewEmploeeButton() {
		this.newEmploee.click();
		return PageFactory.initElements(driver, EmployeeCreationPage.class);
	}

}
