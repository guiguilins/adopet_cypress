describe('Pagina de perfil', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
        cy.get('[data-test="login-button"]').click();
        cy.loginAdopet("gui@hotmail.com", "@Gui123");
        cy.get('.header__user').click();
        cy.get('.button').click();
    })

    it("Deve preencher os campos de mensagem corretamente", () => {
        cy.get('#telefone').type('81999999999');
        cy.get('#cidade').type('Recife');
        cy.get('#sobre').type('Sou um Guilherme e tenho 22 anos');
        cy.get('[data-test="submit-button"]').click();
    })
})