describe('Pagina de mensagem', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
        cy.get('[data-test="login-button"]').click();
        cy.loginAdopet("gui@hotmail.com", "@Gui123");
        cy.get('.header__message').click();
        cy.get(':nth-child(1) > .card__contact').click();
    })

    it("Deve preencher os campos de mensagem corretamente", () => {
        cy.get('#name').type('Dudu Lins');
        cy.get('#phone').type('81999999999');
        cy.get('#petName').type('Dunga');
        cy.get('#msg').type('Olá, gostaria de adotar o Dunga. Ele ainda está disponível?');
        cy.get('[data-test="submit-button"]').click();
    })
})


describe('Pagina de mensagem incorreta', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
        cy.get('[data-test="login-button"]').click();
        cy.loginAdopet("gui@hotmail.com", "@Gui123");
        cy.get('.header__message').click();
        cy.get(':nth-child(1) > .card__contact').click();
    })

    it("Deve deixar os campos em branco", () => {
        cy.get('[data-test="submit-button"]').click();
        cy.contains('É necessário informar seu nome').should('be.visible')
        cy.contains('Informe um número de telefone').should('be.visible')
        cy.contains('É necessário informar o nome do animal').should('be.visible')
        cy.contains('É necessário escrever uma mensagem').should('be.visible')
    })

    it("Deve preencher o numero incorretamente", () => {
        cy.get('#name').type('Dudu Lins');
        cy.get('#phone').type('819999');
        cy.get('#petName').type('Dunga');
        cy.get('#msg').type('Olá, gostaria de adotar o Dunga. Ele ainda está disponível?');
        cy.get('[data-test="submit-button"]').click();
        cy.contains('Por favor, verifique o número digitado').should('be.visible')
    })

})

