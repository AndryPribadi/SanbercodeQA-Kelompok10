describe("PIM Employee List Functionalty", () => {
  it("Verify Employee search by Name Success", () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/ ");
    cy.get(
      ":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).type("Admin");
    cy.get(
      ":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).type("admin123");
    cy.get(".oxd-button").click();
    cy.get(":nth-child(2) > .oxd-main-menu-item").click();
    cy.get(".--visited").click();
    cy.get(
      ":nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-autocomplete-wrapper > .oxd-autocomplete-text-input > input"
    ).type("Alice");
    cy.get(".oxd-form-actions > .oxd-button--secondary").click();
  });
  it("Verify Employee search by Employye id Success", () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/ ");
    cy.get(
      ":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).type("Admin");
    cy.get(
      ":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).type("admin123");
    cy.get(".oxd-button").click();
    cy.get(":nth-child(2) > .oxd-main-menu-item").click();
    cy.get(".--visited").click();
    cy.get(":nth-child(2) > .oxd-input").type("0221");
    cy.get(".oxd-form-actions > .oxd-button--secondary").click();
  });
  it("Verify Employee search by Employment Status Success", () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/ ");
    cy.get(
      ":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).type("Admin");
    cy.get(
      ":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).type("admin123");
    cy.get(".oxd-button").click();
    cy.get(":nth-child(2) > .oxd-main-menu-item").click();
    cy.get(".--visited").click();
    cy.get("oxd-select-dropdown --positon-bottom").click();
    cy.contains("Admin").click();
    cy.get(".oxd-form-actions > .oxd-button--secondary").click();
  });
  it("Verify Employee search invalid name list ", () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/ ");
    cy.get(
      ":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).type("Admin");
    cy.get(
      ":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).type("admin123");
    cy.get(".oxd-button").click();
    cy.get(":nth-child(2) > .oxd-main-menu-item").click();
    cy.get(".--visited").click();
    cy.get(
      ":nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-autocomplete-wrapper > .oxd-autocomplete-text-input > input"
    ).type("Alice");
    cy.get(".oxd-form-actions > .oxd-button--secondary").click();
  });
  it("Verify Employee search by Employment Status Success", () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/ ");
    cy.get(
      ":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).type("Admin");
    cy.get(
      ":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).type("admin123");
    cy.get(".oxd-button").click();
    cy.get(":nth-child(2) > .oxd-main-menu-item").click();
    cy.get(".--visited").click();
    cy.get("oxd-select-dropdown --positon-bottom").click();
    cy.contains("Admin").click();
    cy.get(".oxd-form-actions > .oxd-button--secondary").click();
  });
  it("Verify Employee search invalid name list ", () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/ ");
    cy.get(
      ":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).type("Admin");
    cy.get(
      ":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).type("admin123");
    cy.get(".oxd-button").click();
    cy.get(":nth-child(2) > .oxd-main-menu-item").click();
    cy.get(".--visited").click();
    cy.get(
      ":nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-autocomplete-wrapper > .oxd-autocomplete-text-input > input"
    ).type("Tejo");
    cy.get(".oxd-form-actions > .oxd-button--secondary").click();
  });
  it("Verify Employee search invalid id employee list ", () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/ ");
    cy.get(
      ":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).type("Admin");
    cy.get(
      ":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).type("admin123");
    cy.get(".oxd-button").click();
    cy.get(":nth-child(2) > .oxd-main-menu-item").click();
    cy.get(".--visited").click();
    cy.get(":nth-child(2) > .oxd-input").type("666");
    cy.get(".oxd-form-actions > .oxd-button--secondary").click();
  });
});
