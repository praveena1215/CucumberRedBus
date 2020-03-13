package stepDefinition;

import org.openqa.selenium.Keys;
import org.openqa.selenium.remote.RemoteWebDriver;

import com.redbus.BaseScenario;

import cucumber.api.java.en.Then;

public class ModifyBooking extends BaseScenario{

	public RemoteWebDriver driver;
	@Then("^click on modify button$")
	public void click_on_modify_button() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		//driver = new ChromeDriver();	
		//driver = DriverUtility.getMyDriver();
		driver= (RemoteWebDriver) getDriver();
		driver.findElementByXPath("//div[@class=('onward-modify-btn g-button clearfix fl')]").click();
		
	    
	}

	@Then("^go to from text box and modify \"([^\"]*)\"$")
	public void go_to_from_text_box_and_modify(String arg1) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		driver.findElementByXPath("//input[@id='src']").clear();
		driver.findElementByXPath("//input[@id='src']").sendKeys(arg1);
		Thread.sleep(7000);
		driver.findElementByXPath("//input[@id='src']").sendKeys(Keys.DOWN.ENTER);
	    
	}

	@Then("^go to to text box and modify \"([^\"]*)\"$")
	public void go_to_to_text_box_and_modify(String arg1) throws Throwable { 
	    // Write code here that turns the phrase above into concrete actions
		driver.findElementByXPath("//input[@id='dest']").clear();
		driver.findElementByXPath("//input[@id='dest']").sendKeys(arg1);
		driver.findElementByXPath("//input[@id='dest']").sendKeys(Keys.DOWN.ENTER);
		Thread.sleep(7000);		
		driver.findElementByXPath("//button[text()='SEARCH']").click();
		
		
	   
	}
}
