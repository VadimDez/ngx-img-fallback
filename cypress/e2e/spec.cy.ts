describe('workspace-project App', () => {
  beforeEach(() => {
    cy.visit('/')
  });

  it('should display welcome message', () => {
    cy.get('app-root h2').should('contain', 'Angular2+ Image Fallback');
  });
});
