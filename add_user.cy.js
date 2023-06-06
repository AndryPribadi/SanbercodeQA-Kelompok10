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
      cy.get('.orangehrm-header-container > .oxd-button').click()
      cy.get('.oxd-main-menu-search > .oxd-icon-button').click()
      cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').type("Admin")
      cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-dropdown').click()
      cy.get('.oxd-autocomplete-text-input > input').type("4 YOUR")
      cy.contains('4 YOUR WO WEDDING ORGANIZER').click()
      cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').type("Enabled")
      cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-dropdown').click()
      cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input').type("azman")
      cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input').type("123admindong")
      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("123admindong")
      cy.get('.oxd-button--secondary').click()

    });
  });
  
