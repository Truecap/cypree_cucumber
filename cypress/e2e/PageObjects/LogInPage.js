class LoginPage {
  emailInput = 'form>div>div input[name="email"]';
  passwordInput = 'form>div>div input[name="password"]';
  submitButton = 'button[class*="LoginForm__LoginButton"]';

  enterEmail(username) {
    return cy.get(this.emailInput);
  }
  enterPassword(pswd) {
    return cy.get(this.passwordInput);
  }
  submit() {
    return cy.get(this.submitButton);
  }
}
export default LoginPage;
