///<reference types="Cypress"/>

describe("E2E tests for Sign-up form", () => {
  beforeEach(() => {
    cy.visit("/sign-up");
  });

  it("Testing fields in sign up form - visibility", () => {
    cy.LoginFormFields();
  });

  it("Testing empty fields in sign up form - required fileds ", () => {
    cy.Emptyform();
  });

  it("Testing  wrong email address - missing '@' and ''gmail", () => {
    cy.WrongEmail();
  });

  it("Testing  wrong email address - incomplete email", () => {
    cy.WrongEmailIncomplete();
  });

  it("Testing password field - empty field", () => {
    cy.PasswordCheckEmpty();
  });

  afterEach(() => {
    cy.log("Test successfully passed!");
  });
});

describe("E2E test for Sign-up form - Toast notification", () => {
  beforeEach(() => {
    cy.visit("/sign-up");
  });
  it("Testing password 8 characters minimum - must have 8 characters", () => {
    cy.PasswordCheckCharacters();
  });

  it("Testing user already exist - email has been used", () => {
    cy.UserAlreadyExist_Email();
  });

  it("Testing user already exist - username has been used", () => {
    cy.UserAlreadyExist_Username();
  });

  afterEach(() => {
    cy.log("Test successfully passed!");
  });
});
