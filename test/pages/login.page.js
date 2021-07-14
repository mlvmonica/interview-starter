export function open() {
  browser.deleteCookies();
  browser.url("https://app.notarize.com/login");
}

export function enterTextToField(text, element) {
  $(element).waitForClickable(3000);
  $(element).addValue(text);
}

export function click(element) {
  $(element).waitForDisplayed(3000);
  $(element).click();
}

export function verifyElementExists(element) {
  $(element).waitForDisplayed(3000);
  return $(element).isExisting();
}

export function verifyElementIsDisabled(element) {
  $(element).waitForDisplayed(3000);
  return !($(element).isEnabled());
}

export function getElementText(element) {
  $(element).waitForDisplayed(3000);
  return $(element).getText();
}

export function getElementProperty(element, property) {
  $(element).waitForDisplayed(3000);
  return $(element).getProperty(property);
}

export function getUrlOfPopUpWindow() {
  let popUpUrl;
  const handles = browser.getWindowHandles()

  //switch to the google popup to get the url
  browser.switchToWindow(handles[1])
  popUpUrl = browser.getUrl();

  //go back to the main window
  browser.closeWindow()
  browser.switchToWindow(handles[0])
  
  return popUpUrl;
}

export const elements = {
  emailField: "//input[@name='email']",
  passwordField: "//input[@name='password']",
  continueButton: "//div[text()='Continue']/..",
  loggedInHeader: "//header[@data-automation-id='account-header-element']",
  logInH1: "(//h1)[1]",
  logInH3: "(//h3)[1]",
  googleSignInButton: "//button[@data-automation-id='google-sign-in-button']",
  signUpLink: "//a[text()='Sign up']",
  forgotPasswordLink: "//a[text()='Forgot password?']",
  resetPasswordH1: "//h1[text()='Reset Password']",
  backLink: "//a[text()='Back']",
  invalidLoginResponse: "//p[text()='* Email or password invalid']",
  emailErrorResponse: "//div[@id='field-error-message-id-email']",
  //should the password shown and password hidden values be reversed?
  hidePasswordButton: "//img[@alt='Password hidden']",
  showPasswordButton: "//img[@alt='Password shown']"
};