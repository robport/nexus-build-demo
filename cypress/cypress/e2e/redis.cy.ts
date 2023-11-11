describe('redis', () => {
  it('test redis', () => {
    cy.request('POST', 'http://localhost:3000/api/redis', {
      key: 'test',
      value: 'test value'
    });
    cy.request('GET', 'http://localhost:3000/api/redis/test').then((response) => {
      expect(response.body).to.equal('test value');
    });
  });
});
