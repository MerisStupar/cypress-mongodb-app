///<reference types="Cypress"/>

const endPoint = 'http://localhost:3000/api/posts';
const auth0EndPoint = 'http://localhost:3000/api/auth';

const authUser = {
  "email" : "meris@1secmail.com",
  "password": "Test1234",
}

const testData = {
   "content": "Test 1",
};

const autorizacija = authUser =>{
  cy.request('POST', auth0EndPoint, authUser);
}


const addPost = testData => {
 cy.request('POST', endPoint, testData); 

};

describe("API - POST", () => {
  it("Add a post", () => {

    autorizacija(authUser);
    addPost(testData);

    cy.request('GET', `${endPoint}`)
    .its("status")
    .should("eq", 200);
   /*  .should('deep.eq', testData) */
    });
});
