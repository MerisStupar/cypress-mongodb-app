///<reference types="Cypress"/>

describe("API Testing", () => {
  beforeEach(() => {
    cy.request("GET", "http://localhost:3000/api/posts?limit=10").as("posts");
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

  const apiItems = [
    {
      _id: "63ac4b9b26a2f1351aaeb7ed",
      content: "Test 2",
      creatorId: "63a219e455a7e3536097e9e2",
      createdAt: "2022-12-28T13:58:51.297Z",
      creator: {
        _id: "63a219e455a7e3536097e9e2",
        profilePicture: null,
        name: "Stupar",
        username: "meris",
        bio: "",
      },
    },
    {
      _id: "63ac4b3e26a2f1351aaeb7ec",
      content: "Test 1",
      creatorId: "63a219e455a7e3536097e9e2",
      createdAt: "2022-12-28T13:57:18.985Z",
      creator: {
        _id: "63a219e455a7e3536097e9e2",
        profilePicture: null,
        name: "Stupar",
        username: "meris",
        bio: "",
      },
    },
  ];

  it("Initial posts from END Point- Test", () => {
    cy.request("GET", "http://localhost:3000/api/posts?limit=10")
      .its("body.posts")
      .should("deep.equal", apiItems);
  });

  it("Using Alias Request", () => {
    cy.get("@posts").should((response) => {
      expect(response.body.posts).to.have.length(2);
      expect(response).to.have.property("headers");
    });
  });
});
