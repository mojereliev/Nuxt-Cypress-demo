/* eslint-disable */

describe('Sample tests', () => {
  it('Go to Create page as authenticated - success', () => {
    cy.login()
      .then((resp) => {
        return resp.body;
      })
      .then((body) => {
        const {access_token, expires_in, id_token} = body;
        const auth0State = {
          nonce: '',
          state: 'some-random-state'
        };
        const callbackUrl = `/#access_token=${access_token}&scope=openid&id_token=${id_token}&expires_in=${expires_in}&token_type=Bearer&state=${auth0State.state}`;

        cy.visit(callbackUrl);

        cy.visit('/event/create');
        cy.url().should('include', '/event/create')
      })
  });

  it('Visits index page as anonymous - success', () => {
    cy.visit('/');
    cy.contains('a', 'Real World Events');
    cy.get('[data-test=event-card]').should('be.visible').its('length').should('equal', 3);
  });

  it('Go to Create page as anonymous - login prompt', () => {
    cy.visit('/event/create');
    cy.url().should('include', 'login')
  });
});
