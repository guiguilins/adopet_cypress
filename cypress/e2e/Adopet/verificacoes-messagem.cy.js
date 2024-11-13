describe('AdoPet fazendo verificacoes do Adopet', () => {

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
    it("Verifica se o botão de login está visível na página inicial", () => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
        cy.get('[data-test="login-button"]').should('be.visible');
    })
});