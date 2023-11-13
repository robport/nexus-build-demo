describe('Employees', () => {
  it('create employee', () => {
    cy.resetDb({
      numberOfEmployees: 3
    })
    cy.intercept('GET', '/api/employee').as('get-employees');
    cy.visit('/');
    cy.wait('@get-employees');
    cy.get('table').find('tr').should('have.length', 4);
    cy.get('[data-e2e="open-create-employee-dialog"]').click();
    cy.get('[data-e2e="create-employee-name"]').should('be.visible');
    cy.get('[data-e2e="create-employee-name"]').type('Rob');
    cy.get('[data-e2e="save-employee-button"]').click();
    cy.get('table').find('tr').contains('Rob').should('be.visible');
    cy.get('table').find('tr').should('have.length', 5);
  });
});
