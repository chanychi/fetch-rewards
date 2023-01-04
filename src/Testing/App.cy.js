import React from 'react'
import App from '../components/App'

describe('Form input test', () => {
  beforeEach(() => {
    cy.viewport(1920, 1080)
  })

  it('Test form input', () => {
    cy.mount(<App />);
    cy.get('.modal-overlay').should('not.exist')
    cy.get('input[name="firstName"]').type('John');
    cy.get('input[name="lastName"]').type('Doe');
    cy.get('input[name="email"]').type('johndoe@example.com');
    cy.get('input[name="password"]').type('password');
    cy.get('select').eq(0).select('Water Softener');
    cy.get('select').eq(1).select('Illinois');
    cy.get('form').submit();
    cy.get('.modal-overlay').should('be.visible');
  })
})