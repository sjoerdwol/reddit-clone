// selectors
const welcome_title = '[data-testid=welcome_title]';
const nav_icon = '[data-testid=navbar_title_icon]';
const nav_text = '[data-testid=navbar_title_text]';
const nav_item = '[data-testid=navbar_navigation_item]';
const subreddit_title = '[data-testid=subreddit_title]';
const result_card = '[data-testid=result_card]';
const search_input = '[data-testid=search_input]';
const search_icon = '[data-testid=search_icon]';

// tests
describe('Search Function Tests', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('User can search for a term by pressing enter', () => {
    cy.get(welcome_title).should('be.visible');

    cy.get(search_input).type('test search');
    cy.get(search_input).type('{enter}');

    cy.get(result_card).should('be.visible');
  });

  it('User can search for a term by clicking the search icon', () => {
    cy.get(welcome_title).should('be.visible');

    cy.get(search_input).type('test search');
    cy.get(search_icon).click();

    cy.get(result_card).should('be.visible');
  });

  it('User can reset search by clicking on the navbar icon', () => {
    cy.get(welcome_title).should('be.visible');

    cy.get(search_input).type('test search');
    cy.get(search_icon).click();

    cy.get(result_card).should('be.visible');

    cy.get(nav_icon).click();

    cy.get(welcome_title).should('be.visible');
  });

  it('User can reset search by clicking on the navbar title', () => {
    cy.get(welcome_title).should('be.visible');

    cy.get(search_input).type('test search');
    cy.get(search_icon).click();

    cy.get(result_card).should('be.visible');

    cy.get(nav_text).click();

    cy.get(welcome_title).should('be.visible');
  });

  it('User can search for a different term while currently watching search results', () => {
    cy.get(welcome_title).should('be.visible');

    cy.get(search_input).type('test search');
    cy.get(search_icon).click();

    cy.get(result_card).should('be.visible');

    cy.get(search_input).type('different search');
    cy.get(search_icon).click();

    cy.get(result_card).should('be.visible');
  });

  it('User can enter a searchterm while being in a subreddit and see the results', () => {
    cy.get(welcome_title).should('be.visible');
    cy.get(nav_item).eq(1).click();

    cy.get(subreddit_title).should('be.visible');
    cy.get(result_card).should('be.visible');

    cy.get(search_input).type('test search');
    cy.get(search_icon).click();

    cy.get(subreddit_title).should('not.be.visible');
  });
})