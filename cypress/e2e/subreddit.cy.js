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
describe('Subreddit Tests', () => {
  beforeEach(() => {
    cy.visit('/');
  })

  it('User can display a subreddit', () => {
    cy.get(welcome_title).should('be.visible');
    cy.get(nav_item).first().click();

    cy.get(subreddit_title).should('be.visible');
    cy.get(result_card).should('be.visible');
  });

  it('User can reset subreddit by clicking on the navbar icon', () => {
    cy.get(welcome_title).should('be.visible');
    cy.get(nav_item).eq(3).click();

    cy.get(subreddit_title).should('be.visible');
    cy.get(result_card).should('be.visible');

    cy.get(nav_icon).click();

    cy.get(welcome_title).should('be.visible');
  });

  it('User can reset subreddit by clicking on the navbar title', () => {
    cy.get(welcome_title).should('be.visible');
    cy.get(nav_item).eq(4).click();

    cy.get(subreddit_title).should('be.visible');
    cy.get(result_card).should('be.visible');

    cy.get(nav_text).click();

    cy.get(welcome_title).should('be.visible');
  });

  it('User can switch from one subreddit to another', () => {
    cy.get(welcome_title).should('be.visible');
    cy.get(nav_item).eq(1).click();

    cy.get(subreddit_title).should('be.visible');
    cy.get(subreddit_title).contains('Gaming');

    cy.get(nav_item).eq(2).click();

    cy.get(subreddit_title).should('be.visible');
    cy.get(subreddit_title).contains('Sports');
  });

  it('User switch to a subreddit after entering a search term', () => {
    cy.get(welcome_title).should('be.visible');

    cy.get(search_input).type('test search');
    cy.get(search_icon).click();

    cy.get(result_card).should('be.visible');

    cy.get(nav_item).eq(1).click();

    cy.get(subreddit_title).should('be.visible');
    cy.get(result_card).should('be.visible');
  });
})