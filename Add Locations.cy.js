// const { beforeEach } = require("node:test")

describe('Add Location', () => {

  beforeEach(()=>{
      cy.visit('https://opensource-demo.orangehrmlive.com/')
      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
      cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
      cy.get('.oxd-button').click()

      //Click Admin - Organization - Location
      cy.get(':nth-child(1) > .oxd-main-menu-item').click()
      cy.get('.oxd-topbar-body-nav > ul > :nth-child(3)').click()
      cy.get('.oxd-dropdown-menu > :nth-child(2)').click()

      //Click Add (+)
      cy.get('.orangehrm-header-container > div > .oxd-button').click()

      // Handle any errors
      cy.on('uncaught:exception', (err, runnable) => {
          // Cypress will fail the test if an uncaught exception occurs, so return false to prevent that
          return false
      })
  })
  
  it('Success Add Locations',() => {
      cy.get(':nth-child(1) > .oxd-main-menu-item').click() // click menu Admin
      cy.get('.oxd-topbar-body-nav > ul > :nth-child(3)').click() // click menu Organization
      cy.get('.oxd-dropdown-menu > :nth-child(2)').click() // select sub-menu Locations
      cy.get('.orangehrm-header-container > div > .oxd-button').click() // click "+ Add" button
      // Type Name
      cy.get(':nth-child(1) > .oxd-grid-2 > .oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input').type('tes')
      // Type City
      cy.get(':nth-child(2) > .oxd-grid-2 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Jogja')
      // Type State/Province
      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Jogja')
      // Type Zip/Postal Code
      cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('12345')
      // Type Country
      cy.get('.oxd-select-text').click()
      cy.get('.oxd-select-dropdown > :nth-child(2) > span').contains('Afghanistan').click()
      // Type Phone
      cy.get(':nth-child(5) > .oxd-input-group > :nth-child(2) > .oxd-input').type('08123456789')
      // Type Fax
      cy.get(':nth-child(6) > .oxd-input-group > :nth-child(2) > .oxd-input').type('123')
      // Type Address
      cy.get(':nth-child(7) > .oxd-input-group > :nth-child(2) > .oxd-textarea').type('Jogja')
      // Type Notes
      cy.get(':nth-child(8) > .oxd-input-group > :nth-child(2) > .oxd-textarea').type('tes')
      cy.get('.oxd-button--secondary').click({force:true}) // click Save button
      // Validation : 
      cy.contains('Successfully Saved').should('be.visible')
      //cy.get('.oxd-text--toast-message').should('be.visible').contains('Successfully Saved')
      cy.get('.orangehrm-header-container > div > .oxd-button').should('be.visible')
  })
  

  
    it('Add Locations blank field',() => {
        cy.get(':nth-child(1) > .oxd-main-menu-item').click() // click menu Admin
        cy.get('.oxd-topbar-body-nav > ul > :nth-child(3)').click() // click menu Organization
        cy.get('.oxd-dropdown-menu > :nth-child(2)').click() // select sub-menu Locations
        cy.get('.orangehrm-header-container > div > .oxd-button').click({force:true}) // click "+ Add" button
        cy.get('.oxd-button--secondary').click({multiple:true}) // click Save button
        // Validation : 
        cy.get(':nth-child(1) > .oxd-grid-2 > .oxd-grid-item > .oxd-input-group > .oxd-text').should('be.visible').contains('Required')
    })

    it('Add Locations input string Fax',() => {
      cy.get(':nth-child(1) > .oxd-main-menu-item').click() // click menu Admin
      cy.get('.oxd-topbar-body-nav > ul > :nth-child(3)').click() // click menu Organization
      cy.get('.oxd-dropdown-menu > :nth-child(2)').click() // select sub-menu Locations
      cy.get('.orangehrm-header-container > div > .oxd-button').click({force:true}) // click "+ Add" button
      // Type Name
      cy.get(':nth-child(1) > .oxd-grid-2 > .oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin 3')
      // Type Country
      cy.get('.oxd-select-text').click()
      cy.get('.oxd-select-dropdown > :nth-child(2) > span').contains('Afghanistan').click()
      // Type Fax
      cy.get(':nth-child(6) > .oxd-input-group > :nth-child(2) > .oxd-input').type('aaa')
      cy.get('.oxd-button--secondary').click({multiple:true}) // click Save button
      // Validation : 
      cy.get('.oxd-input-group > .oxd-text').should('be.visible').contains('Allows numbers and only + - / ( )')
  })

  it('Add Location Failed - Name Required', () => {
              
      //Input Country
      cy.get('.oxd-select-text--after > .oxd-icon').click()
      cy.get("div[role='listbox']").contains('Argentina').click()

      cy.get('.oxd-button--secondary').click()

      //Assert that successfully directed to users page
      cy.url().should('include', '/admin/saveLocation')
      cy.get('.oxd-input-group > .oxd-text').should("be.visible")
  })

  it('Add Location Failed - Country Required', () => {        
      //Input Name
      cy.get(':nth-child(1) > .oxd-grid-2 > .oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input').type("Test Company")

      //Click Save
      cy.get('.oxd-button--secondary').click()

      //Assert that successfully directed to users page
      cy.url().should('include', '/admin/saveLocation')
      cy.get('.oxd-input-group > .oxd-text').should("be.visible")
  })

  it('Add Location Failed - Name and Country Required', () => {
      //Click Save
      cy.get('.oxd-button--secondary').click()

      //Assert that successfully directed to users page
      cy.url().should('include', '/admin/saveLocation')
      cy.get('.oxd-input-group > .oxd-text').should("be.visible")
  })


})