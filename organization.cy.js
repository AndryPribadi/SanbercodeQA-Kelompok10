describe('View Organization Page', () => {
  it('View General Information Page', () => {
      // Handle any errors
      cy.on('uncaught:exception', (err, runnable) => {
      // Cypress will fail the test if an uncaught exception occurs, so return false to prevent that
      return false
      })

      //Login
      cy.visit('https://opensource-demo.orangehrmlive.com/')
      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
      cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
      cy.get('.oxd-button').click()

      //Click Admin
      cy.get(':nth-child(1) > .oxd-main-menu-item').click()
      cy.get('.oxd-topbar-body-nav > ul > :nth-child(3)').click()
      cy.get('.oxd-dropdown-menu > :nth-child(1)').click()

      //Assert that successfully directed to users page
      cy.url().should('include', '/admin/viewOrganizationGeneralInformation')
      cy.get('.oxd-topbar-header-title').should('contain.text', 'Organization')
      cy.get('.orangehrm-header-container > .oxd-text').should('contain.text', 'General Information')
  })

  it('View Location Page', () => {
      // Handle any errors
      cy.on('uncaught:exception', (err, runnable) => {
      // Cypress will fail the test if an uncaught exception occurs, so return false to prevent that
      return false
      })

      //Login
      cy.visit('https://opensource-demo.orangehrmlive.com/')
      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
      cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
      cy.get('.oxd-button').click()

      //Click Admin
      cy.get(':nth-child(1) > .oxd-main-menu-item').click()
      cy.get('.oxd-topbar-body-nav > ul > :nth-child(3)').click()
      cy.get('.oxd-dropdown-menu > :nth-child(2)').click()

      //Assert that successfully directed to users page
      cy.url().should('include', '/admin/viewLocations')
      cy.get('.oxd-table-filter-header').should('contain.text', 'Locations')
  })

  it('View Structure Page', () => {
      // Handle any errors
      cy.on('uncaught:exception', (err, runnable) => {
      // Cypress will fail the test if an uncaught exception occurs, so return false to prevent that
      return false
      })

      //Login
      cy.visit('https://opensource-demo.orangehrmlive.com/')
      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
      cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
      cy.get('.oxd-button').click()

      //Click Admin
      cy.get(':nth-child(1) > .oxd-main-menu-item').click()
      cy.get('.oxd-topbar-body-nav > ul > :nth-child(3)').click()
      cy.get('.oxd-dropdown-menu > :nth-child(3)').click()

      //Assert that successfully directed to users page
      cy.url().should('include', '/admin/viewCompanyStructure')
      cy.get('.orangehrm-header-container > .oxd-text').should('contain.text', 'Organization Structure')
  })

  describe('Verify Edit Button', () => {
    beforeEach(() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
        cy.get('.oxd-button').click()
        // Validation : Masuk Ke Dasboard Admin
        cy.url().should('include', '/web/index.php/dashboard/index')
        cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('be.visible')
    })

    it('Success on-off edit button',() => {
        cy.get(':nth-child(1) > .oxd-main-menu-item').click() // click menu Admin
        cy.get('.oxd-topbar-body-nav > ul > :nth-child(3)').click() // click menu Organization
        cy.get('.oxd-dropdown-menu > :nth-child(1)').click() // select sub-menu General Information
        cy.get('.oxd-switch-input').click({force:true})
        // Validation : 
        cy.get('.oxd-button').should('be.visible') // button save enabled
    }) 
})

 

describe('Success Edit General Information', () => {
  beforeEach(() => {
      cy.visit('https://opensource-demo.orangehrmlive.com/')
      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
      cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
      cy.get('.oxd-button').click()
      // Validation : Masuk Ke Dasboard Admin
      cy.url().should('include', '/web/index.php/dashboard/index')
      cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('be.visible')
  })

  it('Success edit General Information',() => {
      cy.get(':nth-child(1) > .oxd-main-menu-item').click() // click menu Admin
      cy.get('.oxd-topbar-body-nav > ul > :nth-child(3)').click() // click menu Organization
      cy.get('.oxd-dropdown-menu > :nth-child(1)').click() // select sub-menu General Information
      cy.get('.oxd-switch-input').click({force:true}) // clik on Edit button
      // Type Organization Name
      cy.get('.organization-name-container > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('tes')
      // Type Registration Number
      cy.get(':nth-child(2) > .oxd-grid-3 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('123')
      // Type Tax ID
      cy.get(':nth-child(2) > .oxd-grid-3 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('123')
      // Type Phone
      cy.get(':nth-child(4) > .oxd-grid-3 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('08123456789')
      // Type Fax
      cy.get(':nth-child(4) > .oxd-grid-3 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('123')
      // Type Email
      cy.get(':nth-child(4) > .oxd-grid-3 > :nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('tes@gmail.com')
      // Type Address Street 1
      cy.get(':nth-child(6) > .oxd-grid-3 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('Jogja')
      // Type Address Street 2
      cy.get(':nth-child(6) > .oxd-grid-3 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('Jogja')
      // Type City
      cy.get(':nth-child(6) > .oxd-grid-3 > :nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('Jogja')
      // Type State/Province
      cy.get(':nth-child(7) > .oxd-grid-3 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('Jogja')
      // Type Zip/Postal Code
      cy.get(':nth-child(7) > .oxd-grid-3 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('12345')
      // select dropdown Country
      cy.get('.oxd-select-text').click()
      cy.get('.oxd-select-dropdown > :nth-child(2) > span').contains('Afghanistan').click()
      // cy.get('.oxd-select-text').click()
      // cy.get('.oxd-select-dropdown.--positon-bottom').click()
      // cy.get('.oxd-select-option').contains('Afghanistan').click()
      // Type Notes
      cy.get('.oxd-textarea').type('tes')
      // Click button Save
      cy.get('.oxd-button').click()
      // Validasi :
      cy.get('.oxd-text--toast-message').should('be.visible').contains('Successfully Updated')
  }) 
})

describe('Failed Edit General Information', () => {
  beforeEach(() => {
      cy.visit('https://opensource-demo.orangehrmlive.com/')
      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
      cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
      cy.get('.oxd-button').click()
      // Validation : Masuk Ke Dasboard Admin
      cy.url().should('include', '/web/index.php/dashboard/index')
      cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('be.visible')
  })

  it('Edit General Information input string Fax',() => {
    cy.get(':nth-child(1) > .oxd-main-menu-item').click() // click menu Admin
    cy.get('.oxd-topbar-body-nav > ul > :nth-child(3)').click() // click menu Organization
    cy.get('.oxd-dropdown-menu > :nth-child(1)').click() // select sub-menu General Information
    cy.get('.oxd-switch-input').click({force:true}) // clik on Edit button
    // Type Organization Name
    cy.get('.organization-name-container > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('Admin')
    // Type Fax
    cy.get(':nth-child(4) > .oxd-grid-3 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('aaa')
    // Click button Save
    cy.get('.oxd-button').click()
    // Validasi :
    cy.get('.oxd-input-group > .oxd-text').should('be.visible').contains('Allows numbers and only + - / ( )')
})


  it('Edit General Information input invalid Email',() => {
    cy.get(':nth-child(1) > .oxd-main-menu-item').click() // click menu Admin
    cy.get('.oxd-topbar-body-nav > ul > :nth-child(3)').click() // click menu Organization
    cy.get('.oxd-dropdown-menu > :nth-child(1)').click() // select sub-menu General Information
    cy.get('.oxd-switch-input').click({force:true}) // clik on Edit button
    // Type Organization Name
    cy.get('.organization-name-container > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('Admin')
    // Type Email
    cy.get(':nth-child(4) > .oxd-grid-3 > :nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('admin@gmail.')
    // Click button Save
    cy.get('.oxd-button').click()
    // Validasi :
    cy.get('.oxd-input-group > .oxd-text').should('be.visible').contains('Expected format: admin@example.com')
})
})
})