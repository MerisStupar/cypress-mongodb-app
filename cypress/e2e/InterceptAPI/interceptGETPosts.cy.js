///<reference types="cypress"/>

describe("Mocking API feed", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/feed");
  });

  it("Mocking GET request- feed posts", () => {
    cy.intercept("GET", "http://localhost:3000/api/posts?limit=10", {
      fixture: "./InterceptAPI/feedPosts.json",
    });

    cy.get(".PostList_root__Cj_24")
      .find(".Post_root__6WEkA")
      .should("be.visible")
      .and("have.length", 2);
  });

  it("Mocking GET request - feed posts", () => {
    cy.intercept("GET", "http://localhost:3000/api/posts?limit=10", {
      fixture: "./InterceptAPI/feedPosts.json",
    });

    cy.get(".PostList_root__Cj_24")
      .find(".Post_root__6WEkA")
      .should("be.visible")
      .and("have.length", 2);
  });
});
