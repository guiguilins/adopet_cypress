describe('AdoPet Frontend Tests', () => {

    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app');
    });

    it('Verifique se o título da página contém "AdoPet"', () => {
        cy.title().should('eq', 'AdoPet');
    });

    it('Verifique se o texto "Quem ama adota!" está presente no HTML da página principal', () => {
        cy.contains('Quem ama adota!').should('be.visible');
    });

    it('Verifique se o texto "Adotar pode mudar uma vida. Que tal buscar seu novo melhor amigo hoje? Vem com a gente!" está presente no HTML', () => {
        cy.contains('Adotar pode mudar uma vida. Que tal buscar seu novo melhor amigo hoje? Vem com a gente!').should('be.visible');
    });

    it(' Teste o login clicando no ícone de mensagem e inserindo nome e senha válidos', () => {

        cy.get('.header__message').click();
        cy.get('[data-test="input-loginEmail"]').type('gui@hotmail.com');
        cy.get('input[name="password"]').type('@Gui123');
        cy.get('[data-test="submit-button"]').click();
    });
});