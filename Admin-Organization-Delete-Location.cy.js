describe("Admin Organization Delete Locations Functionalty", () => {
  it("Verify Edit admin Organization Success", () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/ ");
    cy.get(
      ":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).type("Admin");
    cy.get(
      ":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).type("admin123");
    cy.get(".oxd-button").click();
    cy.get(":nth-child(1) > .oxd-main-menu-item").click();
    cy.get(":nth-child(3) > .oxd-topbar-body-nav-tab-item > .oxd-icon").click();
    cy.get(".oxd-dropdown-menu > :nth-child(2)").click();
    cy.get(
      ":nth-child(1) > .oxd-table-row > :nth-child(1) > .oxd-table-card-cell-checkbox > .oxd-checkbox-wrapper > label > .oxd-checkbox-input > .oxd-icon"
    ).click();
    cy.get(".oxd-table-cell-actions > :nth-child(1)").click();
    cy.get(".orangehrm-modal-footer > .oxd-button--label-danger").click();
  });
});
