describe("Login Functionalty", () => {
  it("Verify Login Successfully", () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/ ");
    cy.get(
      ":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).type("Admin");
    cy.get(
      ":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).type("admin123");
    cy.get(".oxd-button").click();
    cy.get(".oxd-topbar-header-breadcrumb > .oxd-text").should("be.visible");
  });

  it("Verify Login Failed Blank Username & Password", () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/ ");
    cy.get(
      ":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).type("kosong");
    cy.get(
      ":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).type("admin123");
    cy.get(".oxd-button").click();
    cy.get(".oxd-alert-content > .oxd-text").should("be.visible");
  });

  it("Verify Login Failed Invalid Username", () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/ ");
    cy.get(
      ":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).type("Admin");
    cy.get(
      ":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).type("kosong");
    cy.get(".oxd-button").click();
    cy.get(".oxd-alert-content > .oxd-text").should("be.visible");
  });

  it("Verify Login Failed Invalid Password", () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/ ");
    cy.get(
      ":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).type("kosong");
    cy.get(
      ":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).type("kosong");
    cy.get(".oxd-button").click();
    cy.get(".oxd-alert-content > .oxd-text").should("be.visible");
  });

  it("Logout Successfully", () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/ ");
    cy.get(
      ":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).type("Admin");
    cy.get(
      ":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).type("admin123");
    cy.get(".oxd-button").click();
    cy.get(".oxd-userdropdown-tab > .oxd-icon").click();
    cy.get(":nth-child(4) > .oxd-userdropdown-link").click();
    cy.get(".oxd-text--h5").should("be.visible");
  });
});
