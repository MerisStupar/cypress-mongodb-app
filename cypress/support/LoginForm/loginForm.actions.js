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

    //Asserting toast notification
    cy.get(el.toastNotf)
      .should("be.visible")
      .and("contain.text", "You have been logged in.");
    cy.wait(3000);
  });
});

Cypress.Commands.add("LogoutUser", () => {
  cy.fixture("./LoginForm/loginForm").then((el) => {
    cy.url().should("eq", "http://localhost:3000/feed");
    //Getting avatar button - to logout userž
    cy.get(el.avatarBtn).should("be.visible").click();

    //Assertanje sa atributom za padajuci meni da je aktivan
    cy.get(el.menu)
      .should("have.attr", "aria-hidden", "true")
      .contains("Sign out")
      .click();

    //Asserting toast notf
    cy.get(el.toastNotf)
      .should("be.visible")
      .contains("You have been signed out");

    //Asserting right url when user is logout
    cy.url().should("eq", "http://localhost:3000/feed");
  });
});
