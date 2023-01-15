const nav_item = '[data-testid=navbar_navigation_item]';

describe('Viewport Tests', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('On screens narrower than 768px, only 3 categories should be displayed in the nav', () => {
    cy.viewport(760, 660);
    cy.get(nav_item).eq(3).should('not.be.visible');
    cy.get(nav_item).eq(4).should('not.be.visible');
  });

  it('On screens wider than 767px, all categories should be displayed in the nav', () => {
    cy.viewport(1000, 660);
    cy.get(nav_item).eq(3).should('be.visible');
    cy.get(nav_item).eq(4).should('be.visible');
  });
})