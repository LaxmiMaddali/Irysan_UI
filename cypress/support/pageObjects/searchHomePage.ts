
class SearchHomePage {

    acceptAllCookies() {
        cy.get('#L2AGLb > .QS5gu').contains("Accept all").click();
    }

    enterTextInSearchBar(searchKeyword) {
        cy.get('input[name="q"]').type(`${searchKeyword}{enter}`)
    }

    validateSearchresult() {
        cy.get('#search a').first().should('be.visible').contains('Dog');
    }
}

export const searchHomePage = new SearchHomePage();