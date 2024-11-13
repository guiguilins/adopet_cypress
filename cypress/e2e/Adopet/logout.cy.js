describe('Pagina de mensagem', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
        cy.get('[data-test="login-button"]').click();
        cy.loginAdopet("gui@hotmail.com", "@Gui123");
        cy.get('.header__message').click();
        cy.get(':nth-child(1) > .card__contact').click();
    })

    it("Deve fazer logout de acordo com o usuario logado", () => {
        cy.get('.header__user').click();
        cy.get('#headlessui-menu-items-\:r3\: > [data-test="submit-button"]').click();
    })
})