import { ResetDto } from '@open-api';

declare global {
  namespace Cypress {
    interface Chainable {
      resetDb: typeof resetDb;
    }
  }
}

export const resetDb = (
  resetParams: ResetDto
) => {
  cy.request({
    method: 'POST',
    url: '/api/test/reset',
    body: resetParams
  });
};
