export function open() {
  browser.deleteCookies();
  browser.url("https://app.notarize.com/login");
}

export function enterTextToField(text, element) {
  $(element).waitForClickable(3000);
  $(element).addValue(text);
}

export function click(element) {
  $(element).waitForClickable(3000);
  $(element).click();
}

export function verifyElementExists(element) {
  $(element).waitForDisplayed(3000);
  return $(element).isExisting();
}

export function getElementText(element) {
  $(element).waitForDisplayed(3000);
  return $(element).getText();
}

export const elements = {
  emailField: { selector: "//input[@name='email']", locateStrategy: 'xpath' },
  passwordField: { selector: "//input[@name='password']", locateStrategy: 'xpath' },
  continueButtonActive: { selector: "//div[text()='Continue']/..", locateStrategy: 'xpath' },
  loggedInHeader: { selector: "//header[@data-automation-id='account-header-element']", locateStrategy: 'xpath' },
  logInH1: { selector: "(//h1)[1]", locateStrategy: 'xpath' },
  logInH3: { selector: "(//h3)[1]", locateStrategy: 'xpath' },
};