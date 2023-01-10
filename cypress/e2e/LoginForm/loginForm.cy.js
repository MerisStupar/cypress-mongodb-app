///<reference types="Cypress"/>

describe("Login form E2E tests", () => {
  beforeEach(() => {
    cy.visit("/login");
  });

  it("Login form - Visibility check test", () => {
    cy.LoginFieldsVisibility();
  });

  it("Login form - Empty 2 field form test", () => {
    cy.EmptyForm();
  });

  it("Login form - Empty password field form test", () => {
    cy.EmptyForm_Password();
  });

  it("Login form - Empty email field form test", () => {
    cy.EmptyForm_Email();
  });
});

describe("Login form E2E test - Login User", () => {
  beforeEach(() => {
    cy.visit("/login");
  });

  it("Login user - Login to the feed ", () => {
    cy.LoginUser();
  });

  it.only("Logout user - Logout user to the Login page ", () => {
    cy.LoginUser();
    cy.LogoutUser();
  });
});
