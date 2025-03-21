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

  it('xxx', () => {
    // xxx
    cy.get('xx')
  })

})
