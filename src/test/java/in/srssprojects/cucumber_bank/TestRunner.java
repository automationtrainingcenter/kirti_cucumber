package in.srssprojects.cucumber_bank;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		dryRun = false
		,monochrome = true
		,features= {"src/test/java/features"}
		,glue = {"stepdefinitions"}
		,plugin = {"pretty", "html:target/html", "json:target/json/report.json"}
		)

public class TestRunner {

}
