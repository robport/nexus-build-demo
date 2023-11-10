describe('Employees', () => {
  it('create employee', () => {
    // cy.request({
    //   method: 'POST',
    //   url: 'http://localhost:3000/api/test/reset',
    //   body: {
    //     numberOfEmployees: 3
    //   }
    // });

    cy.intercept('GET', '/api/employee').as('get-employees');
    cy.visit('/');
    cy.wait('@get-employees');
    cy.get('[data-e2e="open-create-employee-dialog"]').click();
    cy.get('[data-e2e="create-employee-name"]').should('be.visible');
    cy.get('[data-e2e="create-employee-name"]').type('Rob');
    cy.get('[data-e2e="save-employee-button"]').click();
    cy.get('table').find('tr').contains('Rob').should('be.visible');
    cy.get('table').find('tr').should('have.length', 5);
  });
});
