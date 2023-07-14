describe("My First Test", () => {
  it("Test input content", () => {
    cy.visit("https://localhost:3000");
    cy.contains("Welcome to CopyMe");
    cy.get(".searchText #input-0").type("fakeText");
    cy.get(".searchText #input-0").should("have.value", "fakeText");
  });
});
