///<reference types="Cypress"/>

import signupPage from "../../pages/signupPage";

describe("POM Implementation - Signup", () => {
  beforeEach(() => {
    signupPage.navigate();
  });

  it("First test", () => {
    signupPage.emptySignupForm();
  });
});
