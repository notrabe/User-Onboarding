describe('user-onboarding', () => {
    it('can navigate to the page', () => {
        cy.visit('http://localhost:3002')
        cy.url().should('include', 'localhost')
    })

    it('can type in the name input', () => {
        cy.get('input[name="name"]')
          .type('evan')
          .should('have.value', 'evan')
    })
})