describe('user-onboarding', () => {
    it('can navigate to the page', () => {
        cy.visit('http://localhost:3000')
        cy.url().should('include', 'localhost')
    })

    it('can type in the name input', () => {
        cy.get('input[name="name"]')
          .type('evan')
          .should('have.value', 'evan')
    })
    it('can type in the email input', () => {
        cy.get('input[name="email"]')
        .type('evan@evan.com')
        .should('have.value', 'evan@evan.com')
    })
    it('can type in the password input', () => {
        cy.get('input[name="password"]')
        .type('evanevan')
        .should('have.value', 'evanevan')
    })
    it('can check the TOS box', () => {
        cy.get('input[name="tos"]')
        .check()
    })
    it('can submit form data', () => {
        cy.get('form')
        .submit()

    })
    it('can validate the form', () => {
        cy.get('input[name="name"]')
        .type('x')
        cy.get('input[name="email"]')
        .type('x.com')
    })
})