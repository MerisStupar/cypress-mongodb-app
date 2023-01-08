Cypress.Commands.add("LoginFieldsVisibility", () => {
  cy.fixture("./LoginForm/loginForm").then((el) => {
    cy.get(el.emailField).should("be.visible");
    cy.get(el.passwordField).should("be.visible");
    cy.get(el.loginBtn)
      .eq(2)
      .should("be.visible")
      .and("contain.text", "Log in");
  });
});

Cypress.Commands.add("EmptyForm", () => {
  cy.fixture("./LoginForm/loginForm").then((el) => {
    cy.get(el.emailField).should("be.visible");
    cy.get(el.passwordField).should("be.visible");
    cy.get(el.loginBtn)
      .eq(2)
      .should("be.visible")
      .and("contain.text", "Log in")
      .click();
    cy.get(el.emailField)
      .should("be.visible")
      .then(($input) => {
        expect($input[0].validationMessage).to.equal(
          "Please fill out this field."
        );
      });
  });
});

Cypress.Commands.add("EmptyForm_Password", () => {
  cy.fixture("./LoginForm/loginForm").then((el) => {
    cy.get(el.emailField)
      .should("be.visible")
      .clear()
      .type("test@1secmail.com");
    cy.get(el.passwordField).should("be.visible");
    cy.get(el.loginBtn)
      .eq(2)
      .should("be.visible")
      .and("contain.text", "Log in")
      .click();
    cy.get(el.passwordField)
      .should("be.visible")
      .then(($input) => {
        expect($input[0].validationMessage).to.equal(
          "Please fill out this field."
        );
      });
  });
});

Cypress.Commands.add("EmptyForm_Email", () => {
  cy.fixture("./LoginForm/loginForm").then((el) => {
    cy.get(el.emailField).should("be.visible");
    cy.get(el.passwordField).should("be.visible").type("Test1234");
    cy.get(el.loginBtn)
      .eq(2)
      .should("be.visible")
      .and("contain.text", "Log in")
      .click();
    cy.get(el.emailField)
      .should("be.visible")
      .then(($input) => {
        expect($input[0].validationMessage).to.equal(
          "Please fill out this field."
        );
      });
  });
});

Cypress.Commands.add("LoginUser", () => {
  cy.fixture("./LoginForm/loginForm").then((el) => {
    cy.get(el.emailField)
      .clear()
      .should("be.visible")
      .type("meris@1secmail.com");
    cy.get(el.passwordField).clear().should("be.visible").type("Test1234");
    cy.get(el.loginBtn)
      .eq(2)
      .should("be.visible")
      .and("contain.text", "Log in")
      .click();
    cy.url().should("eq", "http://localhost:3000/feed");
  });
});
