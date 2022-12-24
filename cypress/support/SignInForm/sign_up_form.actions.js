Cypress.Commands.add("LoginFormFields", () => {
  cy.fixture("./SignUpForm/sign_up_form").then((el) => {
    cy.get(el.emailField).should("be.visible").should("be.empty");
    cy.get(el.passowrdField).should("be.visible").should("be.empty");
    cy.get(el.usernameField).eq(2).should("be.visible");
    cy.get(el.nameField).eq(3).should("be.visible");
    cy.get(el.signupBtn).eq(2).should("be.visible").and("have.text", "TEST");
  });
});

Cypress.Commands.add("Emptyform", () => {
  var usernameField = 'input[placeholder="Username"]';
  var nameField = 'input[placeholder="Your name"]';

  cy.fixture("./SignUpForm/sign_up_form").then((el) => {
    cy.get(el.emailField)
      .should("be.visible")
      .should("be.empty")
      .then(($input) => {
        expect($input[0].validationMessage).to.equal(
          "Please fill out this field."
        );
      });

    cy.get(el.passowrdField)
      .should("be.visible")
      .should("be.empty")
      .then(($input) => {
        expect($input[0].validationMessage).to.equal(
          "Please fill out this field."
        );
      });

    cy.get(usernameField)
      .should("be.visible")
      .then(($input) => {
        expect($input[0].validationMessage).to.equal(
          "Please fill out this field."
        );
      });

    cy.get(nameField)
      .should("be.visible")
      .then(($input) => {
        expect($input[0].validationMessage).to.equal(
          "Please fill out this field."
        );
      });

    cy.get(el.signupBtn)
      .eq(2)
      .should("be.visible")
      .and("have.text", "Sign up")
      .click();
  });
});

Cypress.Commands.add("WrongEmail", () => {
  var wrongEmail = "wrong-email";
  var correctEmail = "wrong-email@gmail.com";

  cy.fixture("./SignUpForm/sign_up_form").then((el) => {
    cy.get(el.emailField)
      .should("be.visible")
      .should("be.empty")
      .type(correctEmail);

    if (correctEmail.match(el.emailField)) {
      cy.get(el.emailField).then(($input) => {
        expect($input[0].validationMessage).to.contain(``);
      });
    } else {
      cy.get(el.emailField).then(($input) => {
        expect($input[0].validationMessage).to.contain(
          `Please include an '@' in the email address. '${wrongEmail}' is missing an '@'.`
        );
      });
    }

    cy.get(el.signupBtn)
      .eq(2)
      .should("be.visible")
      .and("have.text", "Sign up")
      .click();
  });
});

Cypress.Commands.add("WrongEmailIncomplete", () => {
  var wrongEmail = "wrong-email@";
  var correctEmail = "test@gmail.com";

  cy.fixture("./SignUpForm/sign_up_form").then((el) => {
    cy.get(el.emailField)
      .should("be.visible")
      .should("be.empty")
      .type(wrongEmail);

    if (correctEmail.match(el.emailField)) {
      cy.get(el.emailField).then(($input) => {
        expect($input[0].validationMessage).to.contain(``);
      });
    } else {
      cy.get(el.emailField).then(($input) => {
        expect($input[0].validationMessage).to.contain(
          `Please include an '@' in the email address. '${wrongEmail}' is incomplete.`
        );
      });
    }

    cy.get(el.signupBtn)
      .eq(2)
      .should("be.visible")
      .and("have.text", "Sign up")
      .click();
  });
});

Cypress.Commands.add("PasswordCheckEmpty", () => {
  var wrongEmail = "wrong-email";
  var correctEmail = "meris@gmail.com";

  cy.fixture("./SignUpForm/sign_up_form").then((el) => {
    cy.get(el.emailField)
      .should("be.visible")
      .should("be.empty")
      .type(correctEmail);

    if (correctEmail.match(el.emailField)) {
      cy.get(el.emailField).then(($input) => {
        expect($input[0].validationMessage).to.contain(``);
      });
    } else {
      cy.get(el.emailField).then(($input) => {
        expect($input[0].validationMessage).to.contain(
          `Please include an '@' in the email address. '${wrongEmail}' is missing an '@'.`
        );
      });
    }

    cy.get(el.passowrdField)
      .should("be.visible")
      .should("be.empty")
      .then(($input) => {
        expect($input[0].validationMessage).to.equal(
          "Please fill out this field."
        );
      });

    cy.get(el.signupBtn)
      .eq(2)
      .should("be.visible")
      .and("have.text", "Sign up")
      .click();
  });
});

Cypress.Commands.add("PasswordCheckCharacters", () => {
  var wrongEmail = "wrong-email";
  var correctEmail = "meris@gmail.com";
  var username = "Wendigo";
  var password = "Test";

  cy.fixture("./SignUpForm/sign_up_form").then((el) => {
    cy.get(el.emailField)
      .should("be.visible")
      .should("be.empty")
      .type(correctEmail);

    if (correctEmail.match(el.emailField)) {
      cy.get(el.emailField).then(($input) => {
        expect($input[0].validationMessage).to.contain(``);
      });
    } else {
      cy.get(el.emailField).then(($input) => {
        expect($input[0].validationMessage).to.contain(
          `Please include an '@' in the email address. '${wrongEmail}' is missing an '@'.`
        );
      });
    }

    cy.fixture("./SignUpForm/sign_up_form").then((el) => {
      cy.get(el.passowrdField)
        .should("be.visible")
        .should("be.empty")
        .type(password);
    });

    cy.get(el.usernameField).eq(2).should("be.visible").type(username);

    cy.get(el.nameField).eq(3).should("be.visible").type(username);

    cy.get(el.signupBtn)
      .eq(2)
      .should("be.visible")
      .and("have.text", "Sign up")
      .click();

    cy.get(el.toastNotification_Password).should(
      "contain.text",
      `"password" must NOT have fewer than 8 characters`
    );
  });
});

Cypress.Commands.add("UserAlreadyExist_Email", () => {
  var correctEmail = "meris@gmail.com";
  var username = "Meris";
  var password = "Test1234";

  cy.fixture("./SignUpForm/sign_up_form").then((el) => {
    cy.get(el.emailField)
      .should("be.visible")
      .should("be.empty")
      .type(correctEmail);

    if (correctEmail.match(el.emailField)) {
      cy.get(el.emailField).then(($input) => {
        expect($input[0].validationMessage).to.contain(``);
      });
    } else {
      cy.get(el.emailField).then(($input) => {
        expect($input[0].validationMessage).to.contain(
          `Please include an '@' in the email address. '${wrongEmail}' is missing an '@'.`
        );
      });
    }

    cy.fixture("./SignUpForm/sign_up_form").then((el) => {
      cy.get(el.passowrdField)
        .should("be.visible")
        .should("be.empty")
        .type(password);
    });

    cy.get(el.usernameField).eq(2).should("be.visible").type(username);

    cy.get(el.nameField).eq(3).should("be.visible").type(username);

    cy.get(el.signupBtn)
      .eq(2)
      .should("be.visible")
      .and("have.text", "Sign up")
      .click();

    cy.get(el.toastNotification_Email).should(
      "contain.text",
      `The email has already been used.`
    );
  });
});

Cypress.Commands.add("UserAlreadyExist_Username", () => {
  var correctEmail = "meris1@gmail.com";
  var username = "Meris";
  var password = "Test1234";

  cy.fixture("./SignUpForm/sign_up_form").then((el) => {
    cy.get(el.emailField)
      .should("be.visible")
      .should("be.empty")
      .type(correctEmail);

    if (correctEmail.match(el.emailField)) {
      cy.get(el.emailField).then(($input) => {
        expect($input[0].validationMessage).to.contain(``);
      });
    } else {
      cy.get(el.emailField).then(($input) => {
        expect($input[0].validationMessage).to.contain(
          `Please include an '@' in the email address. '${wrongEmail}' is missing an '@'.`
        );
      });
    }

    cy.fixture("./SignUpForm/sign_up_form").then((el) => {
      cy.get(el.passowrdField)
        .should("be.visible")
        .should("be.empty")
        .type(password);
    });

    cy.get(el.usernameField).eq(2).should("be.visible").type(username);

    cy.get(el.nameField).eq(3).should("be.visible").type(username);

    cy.get(el.signupBtn)
      .eq(2)
      .should("be.visible")
      .and("have.text", "Sign up")
      .click();

    cy.get(el.toastNotification_Email).should(
      "contain.text",
      `The username has already been taken.`
    );
  });
});
