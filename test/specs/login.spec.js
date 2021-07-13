import * as LoginPage from "../pages/login.page";

//Verify the login page loads with welcome text
//Verify the login page redirect links (Google sign in\Sign Up link)
//Verify forgot password link
//Verify show hide button before entering password and after
//Verify back button takes you back to email form
describe('Login page ui and redirections', () => {
  it('should have welcome text', () => {
    LoginPage.open();

    //Verify welcome text
    expect(LoginPage.getElementText(LoginPage.elements["logInH1"].selector)).toEqual("Welcome back!");
    expect(LoginPage.getElementText(LoginPage.elements["logInH3"].selector)).toEqual("Sign into your signer account");
  });
});

//Verify invalid login with invalid email
//Verify invalid login with invalid email format
//Verify invalid login with empty email
describe('Login page', () => {
  it('should load with welcome text', () => {
    LoginPage.open();
  });
});

//Verify invalid login with invalid password 
//Verify invalid login with empty password 
describe('Login page', () => {
  it('should load with welcome text', () => {
    LoginPage.open();
  });
});

//Verify not prompted with login on same session

//Verify valid login
describe('Valid login', () => {
  it('should login to notarize', () => {
    LoginPage.open();

    //Enter email
    LoginPage.enterTextToField("vivarmlv@gmail.com", LoginPage.elements["emailField"].selector);
    LoginPage.click(LoginPage.elements["continueButtonActive"].selector);

    //Enter password
    LoginPage.enterTextToField("N0tar!ze", LoginPage.elements["passwordField"].selector);
    LoginPage.click(LoginPage.elements["continueButtonActive"].selector);

    //Verify logged in
    expect(LoginPage.verifyElementExists(LoginPage.elements["loggedInHeader"].selector)).toBeTrue;
  });
});