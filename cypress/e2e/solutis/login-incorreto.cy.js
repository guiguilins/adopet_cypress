describe('Pagina de login', () => {
    beforeEach(() => {
        cy.visit('https://github.com/login');
    })

    it("Deve preencher os campos do login incorretamente para logar um novo usuário", () => {
        cy.login('solutisErrado', '@Solutis123');
        cy.url().should('include', '');
        cy.contains('Incorrect username or password.').should('be.visible');
    })
})
