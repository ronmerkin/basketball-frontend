/// <reference types="cypress" />
describe('NBA lineup', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('Displays header and selects', () => {
    cy.contains('Welcome to My NBA Team Lineup').should('exist')
    cy.get('.teams-select-team-container-1').should('exist')
    cy.get('.teams-select-team-container-2').should('exist')
  })
  it('Should select teams', () => {
    cy.get('.teams-select-team-container-1 input').type('Celtics{enter}')
    cy.get('.teams-select-team-container-2 input').type('Lakers{enter}')
    cy.get('.celtics-roster li').should('have.length', 5)
    cy.get('.lakers-roster li').should('have.length', 5)
  })
})
