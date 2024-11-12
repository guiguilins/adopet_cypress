describe('Pagina de login', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
        cy.get('[data-test="login-button"]').click();
    })

    it("Deve preencher os campos do login corretamente para logar um novo usuário", () => {
        cy.loginAdopet("gui@hotmail.com", "@Gui123");

    })
})