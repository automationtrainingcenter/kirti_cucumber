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
		,tags = {"@branch"}
		)

public class TestRunner {

}
//anding tags
//tags = {"@tag1", "@tag2", "@tag3"}

//oring tags
//tags ={"@tag1,@tag2,@tag3"}