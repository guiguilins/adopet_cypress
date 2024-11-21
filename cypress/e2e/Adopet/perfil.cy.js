describe('Pagina de perfil', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
        cy.get('[data-test="login-button"]').click();
        cy.loginAdopet("gui@hotmail.com", "@Gui123");
        cy.get('.header__user').click();
        cy.get('.button').click();
    })

    context('Preencher perfil corretamente', () => {
        it("Deve preencher os campos de mensagem corretamente", () => {
            cy.get('#telefone').type('81999999999');
            cy.get('#cidade').type('Recife');
            cy.get('#sobre').type('Sou um Guilherme e tenho 22 anos');
            cy.get('[data-test="submit-button"]').eq(0).click(); // Seleciona o primeiro botão


        })
    })

    context('Preencher perfil incorretamente', () => {
        it("Deve deixar os campos em branco", () => {
            cy.get('[data-test="submit-button"]').eq(1).click();

            cy.contains('Informe um número de telefone').should('be.visible')
            cy.contains('Informe algo sobre você').should('be.visible')
        })

        it("Deve preencher o numero incorretamente", () => {
            cy.get('#telefone').type('819999');
            cy.get('#cidade').type('Recife');
            cy.get('#sobre').type('Sou um Guilherme e tenho 22 anos');
            cy.get('[data-test="submit-button"]').click();
            cy.contains('Por favor, verifique o número digitado').should('be.visible')
        })
    })
})