describe('template spec', () => {
  beforeEach(() => {
    cy.visit('https://eesti.ee')
  })
  
  
  // it('passes', () => {
  //   cy.visit('https://eesti.ee')
  // })

  // it('displays Welcome', () => {
  //   // Check main headings
  //   cy.get('lib-stateportal-landing-welcome h1').contains('Tere tulemast!')
  // })
  
  // it('search bar', () => {
  //   // is visible and functional
  //   cy.get('search-bar').click()
  //   cy.get('div.search-dropdown > search-dropdown-landing').contains('Retseptid')

  //   cy.get('search-bar').type('notar') 
  //   cy.get('div.search-dropdown > search-dropdown-results').contains('Minu notariaalsed dokumendid')

  //   cy.get('search-bar').type('txjux{enter}') 
  //   cy.contains('0 tulemust')
  // })

  // it('nav buttons', () => {
  //   // main menu items exist and work
  //   cy.get('div.body-right').contains('Otsi')
  //   cy.get('div.body-right').contains('Sisene')
  //   cy.get('div.body-right').contains('Menüü').click()
  //   cy.get('div.sidenav-small').contains('ISETEENINDUS')
  //   cy.get('div.sidenav-small').contains('Eesti Vabariik')
  // })

  it('Services page', () => { 
    // Testing the Services page
    cy.get('div.body-right').contains('Otsi')
    cy.get('div.body-right').contains('Sisene')
    cy.get('div.body-right').contains('Menüü').click()

    cy.get('div.sidenav-small').contains('ISETEENINDUS')
    cy.get('div.sidenav-small').contains('Tervis ja retseptid').click()
    cy.get('div.sidenav-small').contains('Tervishoid ja arstiabi').click()
    cy.get('div.sidenav-small').contains('Retseptid').click()

    cy.get('.article__author').contains('Viimati muudetud')

    // cy.get('.external').contains('terviseportaalis').parent()   // check if 'terviseportaalis' link on page
    //   .should('have.attr', 'target', '_blank')
    //   .should('have.attr', 'href', 'https://www.terviseportaal.ee/')
    
    cy.get('.external').contains('terviseportaalis').parent().invoke('removeAttr', 'target').click()
    cy.origin('https://www.terviseportaal.ee', () => {      // kinda changes the tab
      cy.url().should('include', 'terviseportaal.ee')
    })

  })

  // it('contact page control', () => {
  //   // xxx


  //   // cy.get('.rout-link').contains('Võtke meiega ühendust').click()    //.get('.rout-link') // accept cookies (ggl cypress accept cookies bydefault)
  //   // // center of el is hidden
  //   // // center of el is hidden
  //   // // center of el   is hidden

  //   cy.visit('https://eesti.ee/eraisik/et/vajad-abi')
  //   cy.url().should('include', 'eesti.ee/eraisik/et/vajad-abi')
  //   cy.get('input[name="ria-contact-form-name"]')
  //   cy.get('input[name="ria-contact-form-email"]')
  //   cy.get('input#fileInput')


  //   cy.get('input[name="ria-contact-form-name"]')
  //     .type('Sachin Joshi')
  //     .get('input[name="ria-contact-form-email"]')
  //     .type('defftruemail@tutu.ee')

  //     //for dropdown find 'ria-select-toggle ria-select-toggle--md'
  //     //then 
  //     // .get('select')
  //     // .eq(0)
  //     // .select('Fiat')
  //     // .should('have.value','fiat')
    


  //   // cy.get('form').submit() // Submit a form
  //   // after subm chk if data still here  .should('have.value', 'Sachin Joshi')
  //   //chk for errors 'validation-error'
  // })

})
