/* eslint-disable */

describe('Sample tests', () => {
  it('Visits index page', () => {
    cy.visit('/');
    cy.contains('a', 'Real World Events');
    cy.get('[data-test=event-card]').should('be.visible').its('length').should('equal', 3);
  });

  it('Go to Create page', () => {
    cy.get('a').filter(':contains("Create")').click();
    cy.contains('h1', 'Create an Event');
  });

  it('Go to List page', () => {
    cy.server();
    cy.route('GET', 'https://my-json-server.typicode.com/Code-Pop/real-world-nuxt/events').as('getEventsList');
 
    cy.get('a').filter(':contains("List")').click();
    cy.wait('@getEventsList').its('status').should('equal', 200);
    cy.contains('a', 'Real World Events');
    cy.get('[data-test=event-card]').should('be.visible').its('length').should('equal', 3);
  });

  it('Go to Event page', () => {
    cy.server();
    cy.route('GET', 'https://my-json-server.typicode.com/Code-Pop/real-world-nuxt/events/5928101').as('getEvent');

    cy.get('[data-test=event-card]').first().click();
    cy.wait('@getEvent').its('status').should('equal', 200);
    cy.contains('h1', 'Cat Cabaret');
  });
});
