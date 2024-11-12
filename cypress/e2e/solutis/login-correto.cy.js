describe('Pagina de login', () => {
    beforeEach(() => {
        cy.visit('https://github.com/login');
    })

    it("Deve preencher os campos do login corretamente para logar um novo usuário", () => {
        cy.login('guiguisport58@hotmail.com', '@Solutis123');
        cy.url().should('include', '');
        cy.get('.AppHeader-context-full > nav > .list-style-none').should('be.visible');
    })
})
