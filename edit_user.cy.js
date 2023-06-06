describe("Assertion", () => {
    beforeEach(() => {
      cy.visit("https://opensource-demo.orangehrmlive.com/");
    })
  
    it('clicking "Login" navigates to a new url', () => {
  
      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Admin")
      cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type("admin123")
      cy.get('.oxd-button').click()
      cy.get(':nth-child(1) > .oxd-main-menu-item').click()
      cy.get('.--visited > .oxd-topbar-body-nav-tab-item').click()
      cy.get('.oxd-dropdown-menu > li').click()
      cy.get(':nth-child(2) > .oxd-table-row > :nth-child(6) > .oxd-table-cell-actions > :nth-child(2) > .oxd-icon').click()
      cy.get(':nth-child(2) > .oxd-input').type("testingku")
      cy.get('.oxd-button--secondary').click()
    });
  });
  
