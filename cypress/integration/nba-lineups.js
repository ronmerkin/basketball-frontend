/// <reference types="cypress" />
describe('NBA lineup', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('Displays header and selects', () => {
    cy.contains('Welcome to My NBA Teams Lineup').should('exist')
    cy.get('.teams-select-team-container-1').should('exist')
    cy.get('.teams-select-team-container-2').should('exist')
  })
  it('Should select teams', () => {
    cy.get('.teams-select-team-container-1 input').type('Celtics{enter}')
    cy.get('.teams-select-team-container-2 input').type('Lakers{enter}')
    // cy.get('#react-select-3-input').first().type('Celtics{enter}')
    // cy.contains('Boston Celtics Roster').should('exist')
    // cy.get('.celtics-roster li').should('have.length', 5)
    // cy.get('#react-select-5-input').first().type('Lakers{enter}')
  })
})
