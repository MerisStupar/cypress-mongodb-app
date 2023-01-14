///<reference types="cypress"/>

describe("Mocking API feed", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/login");
  });

  it("Mocking POST request - Posting post", () => {
    cy.LoginUser();
    cy.intercept("POST", "http://localhost:3000/api/posts", {
      body: { content: "MOCKING Test - POST REQUEST" },
    });

    cy.get(".Input_input__fo8G3")
      .type("MOCKING Test - POST REQUEST")
      .then(() => {
        cy.get("form").submit();
      });
    cy.get("[class=go2072408551]")
      .should("be.visible")
      .and("contain.text", "You have posted successfully");
  });
});
