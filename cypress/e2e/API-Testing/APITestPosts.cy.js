///<reference types="Cypress"/>

describe("API Testing", () => {
  beforeEach(() => {
    cy.request("http://localhost:3000/api/posts?limit=10");
  });

  it("Body Length - Posts Test", () => {
    cy.request("GET", "http://localhost:3000/api/posts?limit=10")
      .its("body.posts")
      .should("have.length", 2);
  });

  it("Request Status - Status 200 Test", () => {
    cy.request("GET", "http://localhost:3000/api/posts?limit=10")
      .its("status")
      .should("eq", 200);
  });

  it("Header/Content Tpye - Test", () => {
    cy.request("GET", "http://localhost:3000/api/posts?limit=10")
      .its("headers.content-type")
      .should("include", "application/json")
      .and("include", "charset=utf-8");
  });
});
