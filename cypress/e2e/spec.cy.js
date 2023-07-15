describe("Test copy to clipboard and paste again to input field", () => {
  it("Copies text to clipboard", () => {
    cy.visit("https://localhost:3000");
    cy.contains("Welcome to CopyMe");
    cy.get(".searchText #input-0").type("fakeText");
    cy.get(".searchText #input-0").should("have.value", "fakeText");
    cy.get('[data-cy="copy"]').click();
    cy.window()
      .its("navigator.clipboard")
      .then((clip) => clip.readText())
      .should("equal", "fakeText")
      .then((text) => {
        cy.get(".searchText #input-0").clear().invoke("val", text);
      });
  });
});
