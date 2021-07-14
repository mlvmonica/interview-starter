import * as LoginPage from "../pages/login.page";
const loginElements = LoginPage.elements;

describe('Login page ui and redirections', () => {
  it('should have welcome text', () => {
    LoginPage.open();

    //Verify welcome text
    expect(LoginPage.getElementText(loginElements.logInH1)).toEqual("Welcome back!");
    expect(LoginPage.getElementText(loginElements.logInH3)).toEqual("Sign into your signer account");
  });

  it('should allow for google sign in', () => {
    LoginPage.open();

    LoginPage.click(loginElements.googleSignInButton);

    //Verify Google sign in button 
    expect(LoginPage.getUrlOfPopUpWindow()).toContain("https://accounts.google.com/o/oauth2/auth/identifier");
  });

  it('should redirect to Sign Up page', () => {
    LoginPage.open();

    LoginPage.click(loginElements.signUpLink);

    //Verify Sign Up link
    expect(browser).toHaveUrl("https://www.notarize.com/pricing");
  });

  it('should redirect to reset password page', () => {
    LoginPage.open();

    //Enter email
    LoginPage.enterTextToField("vivarmlv@gmail.com", loginElements.emailField);
    LoginPage.click(loginElements.continueButton);

    //Verify forgot password link
    LoginPage.click(loginElements.forgotPasswordLink);
    expect(LoginPage.verifyElementExists(loginElements.resetPasswordH1)).toBeTrue;
  });

  it('should show/hide password', () => {
    LoginPage.open();

    //Enter email
    LoginPage.enterTextToField("vivarmlv@gmail.com", loginElements.emailField);
    LoginPage.click(loginElements.continueButton);

    //Enter password
    LoginPage.enterTextToField("N0tar!ze", loginElements.passwordField);

    //Verify show hide button after entering password
    LoginPage.click(loginElements.showPasswordButton);
    expect(LoginPage.getElementProperty(loginElements.passwordField, "type")).toEqual("text");
    LoginPage.click(loginElements.hidePasswordButton);
    expect(LoginPage.getElementProperty(loginElements.passwordField, "type")).toEqual("password");
  });

  it('should take you back when you click back link', () => {
    LoginPage.open();

    //Enter email
    LoginPage.enterTextToField("vivarmlv@gmail.com", loginElements.emailField);
    LoginPage.click(loginElements.continueButton);

    //Verify back button takes you back to email form
    LoginPage.click(loginElements.backLink);
    expect(LoginPage.getElementText(loginElements.logInH1)).toEqual("Welcome back!");    
  });
});

describe('Invalid email logins', () => {
  it('should not login with invalid email', () => {
    LoginPage.open();

    //Enter invalid email
    LoginPage.enterTextToField("email@fake.com", loginElements.emailField);
    LoginPage.click(loginElements.continueButton);

    //Enter password
    LoginPage.enterTextToField("N0tar!ze", loginElements.passwordField);
    LoginPage.click(loginElements.continueButton);

    //Verify invalid login with invalid email
    expect(LoginPage.verifyElementExists(loginElements.invalidLoginResponse)).toBeTrue;
  });

  it('should not login with invalid email format', () => {
    LoginPage.open();

    //Enter invalid email format
    LoginPage.enterTextToField("fakeEmail.com", loginElements.emailField);
    LoginPage.click(loginElements.continueButton);

    //Verify invalid login with invalid email format
    expect(LoginPage.verifyElementExists(loginElements.emailErrorResponse)).toBeTrue;
  });

  it('should not login with empty email', () => {
    LoginPage.open();

    //Enter no email
    LoginPage.click(loginElements.emailField);
    LoginPage.click(loginElements.continueButton);

    //Verify invalid login with empty email
    expect(LoginPage.verifyElementExists(loginElements.emailErrorResponse)).toBeTrue;
  });
});

describe('Invalid password logins', () => {
  it('should not login with invalid password', () => {
    LoginPage.open();

    //Enter email
    LoginPage.enterTextToField("vivarmlv@gmail.com", loginElements.emailField);
    LoginPage.click(loginElements.continueButton);

    //Enter invalid password
    LoginPage.enterTextToField("invalid", loginElements.passwordField);
    LoginPage.click(loginElements.continueButton);

    //Verify invalid login with invalid password 
    expect(LoginPage.verifyElementExists(loginElements.invalidLoginResponse)).toBeTrue;
  });

  it('should not login with empty password', () => {
    LoginPage.open();

    //Enter email
    LoginPage.enterTextToField("vivarmlv@gmail.com", loginElements.emailField);
    LoginPage.click(loginElements.continueButton);

    //Enter password
    LoginPage.click(loginElements.passwordField);

    //Verify invalid login with empty password 
    expect(LoginPage.verifyElementIsDisabled(loginElements.continueButton)).toBeTrue;
  });
});

describe('Valid login', () => {
  it('should login to notarize', () => {
    LoginPage.open();

    //Enter email
    LoginPage.enterTextToField("vivarmlv@gmail.com", loginElements.emailField);
    LoginPage.click(loginElements.continueButton);

    //Enter password
    LoginPage.enterTextToField("N0tar!ze", loginElements.passwordField);
    LoginPage.click(loginElements.continueButton);

    //Verify valid login
    expect(LoginPage.verifyElementExists(loginElements.loggedInHeader)).toBeTrue;
  });
});