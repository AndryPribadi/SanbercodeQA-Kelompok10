describe("Admin Organization Edit Locations Functionalty", () => {
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
    cy.get(
      ":nth-child(1) > .oxd-table-row > :nth-child(7) > .oxd-table-cell-actions > :nth-child(2)"
    ).click();
    cy.get(
      ":nth-child(1) > .oxd-grid-2 > .oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).type("Sanbers");
    cy.get(
      ":nth-child(2) > .oxd-grid-2 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).type("Denpasar");
    cy.get(
      ":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).type("80119");
    cy.get(
      ":nth-child(5) > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).type("08559966412");
    cy.get(
      ":nth-child(7) > .oxd-input-group > :nth-child(2) > .oxd-textarea"
    ).type("jl mahendradata");
    cy.get(
      ":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).type("Bali");
    cy.get(".oxd-select-text--after > .oxd-icon").click();
    cy.get(".oxd-select-option").eq(2).click();
    cy.get(
      ":nth-child(6) > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).type("3514474825");
    cy.get(
      ":nth-child(8) > .oxd-input-group > :nth-child(2) > .oxd-textarea"
    ).type("coba");
    cy.get(".oxd-button--secondary").click();
  });
  it("Verify Edit admin Organization Fail name Blank", () => {
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
    cy.get(
      ":nth-child(1) > .oxd-table-row > :nth-child(7) > .oxd-table-cell-actions > :nth-child(2)"
    ).click();
    cy.get(
      ":nth-child(1) > .oxd-grid-2 > .oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).type("");
    cy.get(
      ":nth-child(2) > .oxd-grid-2 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).type("Denpasar");
    cy.get(
      ":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).type("80119");
    cy.get(
      ":nth-child(5) > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).type("08559966412");
    cy.get(
      ":nth-child(7) > .oxd-input-group > :nth-child(2) > .oxd-textarea"
    ).type("jl mahendradata");
    cy.get(
      ":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).type("Bali");
    cy.get(".oxd-select-text--after > .oxd-icon").click();
    cy.get(".oxd-select-option").eq(2).click();
    cy.get(
      ":nth-child(6) > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).type("3514474825");
    cy.get(
      ":nth-child(8) > .oxd-input-group > :nth-child(2) > .oxd-textarea"
    ).type("coba");
    cy.get(".oxd-button--secondary").click();
  });
  it("Verify Edit admin Organization Fail country Blank", () => {
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
    cy.get(
      ":nth-child(1) > .oxd-table-row > :nth-child(7) > .oxd-table-cell-actions > :nth-child(2)"
    ).click();
    cy.get(
      ":nth-child(1) > .oxd-grid-2 > .oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).type("");
    cy.get(
      ":nth-child(2) > .oxd-grid-2 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).type("Denpasar");
    cy.get(
      ":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).type("80119");
    cy.get(
      ":nth-child(5) > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).type("08559966412");
    cy.get(
      ":nth-child(7) > .oxd-input-group > :nth-child(2) > .oxd-textarea"
    ).type("jl mahendradata");
    cy.get(
      ":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).type("Bali");
    cy.get(
      ":nth-child(6) > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).type("3514474825");
    cy.get(
      ":nth-child(8) > .oxd-input-group > :nth-child(2) > .oxd-textarea"
    ).type("coba");
    cy.get(".oxd-button--secondary").click();
  });
  it("Verify Edit admin Organization Fail all Blank", () => {
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
    cy.get(
      ":nth-child(1) > .oxd-table-row > :nth-child(7) > .oxd-table-cell-actions > :nth-child(2)"
    ).click();
    cy.get(
      ":nth-child(1) > .oxd-grid-2 > .oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).type("");
    cy.get(
      ":nth-child(2) > .oxd-grid-2 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).type("Denpasar");
    cy.get(
      ":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).type("80119");
    cy.get(
      ":nth-child(5) > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).type("08559966412");
    cy.get(
      ":nth-child(7) > .oxd-input-group > :nth-child(2) > .oxd-textarea"
    ).type("jl mahendradata");
    cy.get(
      ":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).type("Bali");
    cy.get(".oxd-select-text--after > .oxd-icon").click();
    cy.get(".oxd-select-option").eq(2).click();
    cy.get(
      ":nth-child(6) > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).type("3514474825");
    cy.get(
      ":nth-child(8) > .oxd-input-group > :nth-child(2) > .oxd-textarea"
    ).type("coba");
    cy.get(".oxd-button--secondary").click();
  });
});
