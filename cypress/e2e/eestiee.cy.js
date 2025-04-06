describe('template spec', () => {
  beforeEach(() => {
    cy.visit('https://eesti.ee')
  })
  
  it('passes', () => {
    cy.visit('https://eesti.ee')
  })


  it('displays Welcome', () => {
    // Check main headings
    cy.get('lib-stateportal-landing-welcome h1').contains('Tere tulemast!')
  })

  
  it('search bar', () => {
    // is visible and functional
    cy.get('search-bar').click()
    cy.get('div.search-dropdown > search-dropdown-landing').contains('Retseptid')

    cy.get('search-bar').type('notar') 
    cy.get('div.search-dropdown > search-dropdown-results').contains('Minu notariaalsed dokumendid')

    cy.get('search-bar').type('txjux{enter}') 
    cy.contains('0 tulemust')
  })


  it('nav buttons', () => {
    // main menu items exist and work
    cy.get('div.body-right').contains('Otsi')
    cy.get('div.body-right').contains('Sisene')
    cy.get('div.body-right').contains('Menüü').click()
    cy.get('div.sidenav-small').contains('ISETEENINDUS')
    cy.get('div.sidenav-small').contains('Eesti Vabariik')
  })


  it('Services page', () => { 
    // Testing the Services pages
    cy.get('div.body-right').contains('Otsi')
    cy.get('div.body-right').contains('Sisene')
    cy.get('div.body-right').contains('Menüü').click()

    cy.get('div.sidenav-small').contains('ISETEENINDUS')
    cy.get('div.sidenav-small').contains('Tervis ja retseptid').click()
    cy.get('div.sidenav-small').contains('Tervishoid ja arstiabi').click()
    cy.get('div.sidenav-small').contains('Retseptid').click()

    cy.get('.article__author').contains('Viimati muudetud')
    cy.get('.external').contains('terviseportaalis').parent().invoke('removeAttr', 'target').click()

    cy.origin('https://www.terviseportaal.ee', () => {      // kinda changes the tab
      cy.url().should('include', 'terviseportaal.ee')
    })

  })
  

  it('contact page form fill', () => {
    // link & fill the form. check error messages
    cy.get('.cookie-notice .ria-btn ').contains('Nõustun').click()
    cy.get('.rout-link').contains('Võtke meiega ühendust').click()

    cy.url().should('include', 'eesti.ee/eraisik/et/vajad-abi')
    //  //  by task4. found inputs ->     // cy.get('input[name="ria-contact-form-name"]')    // cy.get('input[name="ria-contact-form-email"]')    // cy.get('input#fileInput')


    cy.get('input[name="ria-contact-form-name"]').type('Sachin Joshi')

    // commented for task
    // cy.get('input[name="ria-contact-form-email"]').type('defftruemail@tutu.ee')

    cy.get('[controlname="serviceCitizen"] .dropdown').click()
    cy.get('[controlname="serviceCitizen"] .ria-select-dropdown-item').first().click()

    cy.get('[controlname="serviceError"] .dropdown').click()
    cy.get('[controlname="serviceError"] .ria-select-dropdown-item').first().click()

    cy.get('textarea.form-control').type('false_msg pls_ignore')


    // cy.get('form').submit()  // just doesn't Submit. (#｀-_ゝ-)
    cy.get('button').contains('Saada kiri').click()

    // check error messages
    cy.get('.validation-error').contains('Peab olema täidetud.')
    cy.get('input[name="ria-contact-form-name"]').should('have.value', 'Sachin Joshi')  // after subm chk if data still here
  })

})
