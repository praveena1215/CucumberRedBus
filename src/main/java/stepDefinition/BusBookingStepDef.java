package stepDefinition;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;

import com.redbus.BaseScenario;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class BusBookingStepDef extends BaseScenario {

	public WebDriver driver;
	

	@Given("^launch the browser \"([^\"]*)\"$")
	public void launch_the_browser(String url) throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		driver = getDriver();
		driver.get(url);

	}

	

	@Then("^enter the destination From \"([^\"]*)\"$")
	public void enter_the_destination_From(String arg1) throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		driver.findElement(By.xpath("//input[@id='src']")).sendKeys(arg1);
		Thread.sleep(7000);
		driver.findElement(By.xpath("//input[@id='src']")).sendKeys(Keys.DOWN);
		driver.findElement(By.xpath("//input[@id='src']")).sendKeys(Keys.DOWN);
		driver.findElement(By.xpath("//input[@id='src']")).sendKeys(Keys.DOWN.ENTER);
		//driver.findElementByXPath("//input[@id='src']").click();

	}

	@Then("^enter the destination TO \"([^\"]*)\"$")
	public void enter_the_destination_TO(String arg1) throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		driver.findElement(By.xpath("//input[@id='dest']")).sendKeys(arg1);
		Thread.sleep(7000);
		driver.findElement(By.xpath("//input[@id='dest']")).sendKeys(Keys.DOWN);
		driver.findElement(By.xpath("//input[@id='dest']")).sendKeys(Keys.DOWN);
		driver.findElement(By.xpath("//input[@id='dest']")).sendKeys(Keys.DOWN.ENTER);
		//driver.findElementByXPath("//input[@id='dest']").click();

	}

	@Then("^select the onward date$")
	public void select_the_onward_date() throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		driver.findElement(By.xpath("//*[@id='search']/div/div[3]/div/label")).click();
		driver.findElement(By.xpath("//*[@id='rb-calendar_onward_cal']/table/tbody/tr[6]/td[5]")).click();
		//driver.findElement(By.xpath("//label[text()='Onward Date']")).sendKeys(Keys.TAB);
		//driver.findElementByXPath("//label[text()='Return Date']").sendKeys(Keys.TAB);
		
	}

	@Then("^click on search button to list the buses$")
	public void click_on_search_button_to_list_the_buses() throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		driver.findElement(By.xpath("//button[text()='Search Buses']")).sendKeys(Keys.ENTER);
		Thread.sleep(7000);
//	    WebElement click = driver.findElementByXPath("//button[text()='Search Buses']");
//		Actions obj = new Actions(driver);
//		obj.moveToElement(click).perform();
	   
		//closeDriver();
		//quitDriver();
		
		
	}
	
	

}
