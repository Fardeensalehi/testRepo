$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Features/TekSchoolScenarios.feature");
formatter.feature({
  "line": 1,
  "name": "Tek School Scenarios",
  "description": "",
  "id": "tek-school-scenarios",
  "keyword": "Feature"
});
formatter.before({
  "duration": 11810058100,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User is on TekSchool page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User Click on Test Environment link",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "User should see Test Environment page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinitions.user_is_on_TekSchool_page()"
});
formatter.result({
  "duration": 7350625000,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinitions.user_Click_on_Test_Environment_link()"
});
formatter.result({
  "duration": 3059497300,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinitions.user_should_see_Test_Environment_page()"
});
formatter.result({
  "duration": 26009300,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "SDET2019AUG_SDET_Register_Form_Test",
  "description": "",
  "id": "tek-school-scenarios;sdet2019aug-sdet-register-form-test",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 31,
      "name": "@SDET_RF"
    }
  ]
});
formatter.step({
  "line": 33,
  "name": "User click on myAccount menu on top of the page",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "User click on register on myAccount menu",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "User fill register form with below information",
  "rows": [
    {
      "comments": [
        {
          "line": 36,
          "value": "#firstname|lastName|email|phone|password|"
        }
      ],
      "cells": [
        "Shaiq",
        "Darwish",
        "sdarwish@gmail.com",
        "2021234455",
        "Test123"
      ],
      "line": 37
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "User click on \u0027yes\u0027 radio button for Subscribe",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "User click on continue button",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "User should see \u0027Your Account Has Been Created!\u0027",
  "keyword": "Then "
});
formatter.match({
  "location": "TekSchoolScenariosStepDefinitions.user_click_on_myAccount_menu_on_top_of_the_page()"
});
formatter.result({
  "duration": 3242600,
  "error_message": "cucumber.runtime.CucumberException: Failed to instantiate class stepDefinitions.TekSchoolScenariosStepDefinitions\r\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.cacheNewInstance(DefaultJavaObjectFactory.java:47)\r\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.getInstance(DefaultJavaObjectFactory.java:33)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:89)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:41)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:541)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:763)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:463)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:209)\r\nCaused by: java.lang.reflect.InvocationTargetException\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.cacheNewInstance(DefaultJavaObjectFactory.java:41)\r\n\t... 32 more\r\nCaused by: java.lang.RuntimeException: java.lang.IllegalAccessException: Can not set static final org.openqa.selenium.WebElement field pageObjects.TekSchoolScenariosPageObject.emailFieldValue to com.sun.proxy.$Proxy18\r\n\tat org.openqa.selenium.support.PageFactory.proxyFields(PageFactory.java:119)\r\n\tat org.openqa.selenium.support.PageFactory.initElements(PageFactory.java:105)\r\n\tat org.openqa.selenium.support.PageFactory.initElements(PageFactory.java:92)\r\n\tat org.openqa.selenium.support.PageFactory.initElements(PageFactory.java:79)\r\n\tat pageObjects.TekSchoolScenariosPageObject.\u003cinit\u003e(TekSchoolScenariosPageObject.java:18)\r\n\tat stepDefinitions.TekSchoolScenariosStepDefinitions.\u003cinit\u003e(TekSchoolScenariosStepDefinitions.java:17)\r\n\t... 37 more\r\nCaused by: java.lang.IllegalAccessException: Can not set static final org.openqa.selenium.WebElement field pageObjects.TekSchoolScenariosPageObject.emailFieldValue to com.sun.proxy.$Proxy18\r\n\tat sun.reflect.UnsafeFieldAccessorImpl.throwFinalFieldIllegalAccessException(Unknown Source)\r\n\tat sun.reflect.UnsafeFieldAccessorImpl.throwFinalFieldIllegalAccessException(Unknown Source)\r\n\tat sun.reflect.UnsafeQualifiedStaticObjectFieldAccessorImpl.set(Unknown Source)\r\n\tat java.lang.reflect.Field.set(Unknown Source)\r\n\tat org.openqa.selenium.support.PageFactory.proxyFields(PageFactory.java:117)\r\n\t... 42 more\r\n",
  "status": "failed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "TekSchoolScenariosStepDefinitions.user_fill_register_form_with_below_information(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "yes",
      "offset": 15
    }
  ],
  "location": "TekSchoolScenariosStepDefinitions.user_click_on_yes_radio_button_for_Subscribe(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "TekSchoolScenariosStepDefinitions.user_click_on_continue_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "TekSchoolScenariosStepDefinitions.user_should_see_Your_Account_Has_Been_Created()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1210270100,
  "status": "passed"
});
});