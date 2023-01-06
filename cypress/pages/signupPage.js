class signupPage {
  elements = {
    emailField: () => cy.get("[type=email]"),
    passowrdField: () => cy.get("[type=password]"),
    usernameField: () => cy.get("[class=Input_root__RKa3c]"),
    nameField: () => cy.get("[class=Input_root__RKa3c]"),
    signupBtn: () => cy.get(".Button_button__QHarr"),
    tostNotification_Password: () => cy.get("[class=go3958317564]"),
    toastNotification_Email: () => cy.get("[class=go3958317564]"),
  };

  navigate() {
    cy.visit("/sign-up");
    return this;
  }
  
  emptySignupForm() {
    this.elements.emailField().should("be.visible").should("be.empty");
    this.elements.passowrdField().should("be.visible").should("be.empty");
    return this;
  }

  typeEmail(email) {
    this.elements.emailField().type(email);
  }

  typePassword(password) {
    this.elements.passowrdField().type(password);
  }

  typeUsername(username) {
    this.elements.usernameField().type(username);
  }

  typeName(name) {
    this.elements.nameField().type(name);
  }

  clickSignupBtn() {
    this.elements.signupBtn().click();
  }
}

module.exports = new signupPage();
