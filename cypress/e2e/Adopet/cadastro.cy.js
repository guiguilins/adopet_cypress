import { usuarios } from '../../fixtures/usuarios';

describe('Pagina de cadastro ', () => {
  beforeEach(() => {
    cy.visit('https://adopet-frontend-cypress.vercel.app');
    cy.contains('a', 'Cadastrar').click();
    cy.intercept('POST', 'https://adopet-api-i8qu.onrender.com/adotante/cadastro', {
      statusCode:400, }).as('stubPost')
  })

  context('Pagina de cadastro com sucesso', () => {
  it('Deve preencher os campos do formulário corretamente para cadastrar um novo usuário', () => {
    cy.cadastrarAdopet('Dudu Lins', 'dudu@hotmail.com', '@Dudu12342');
  })
})

context('Pagina de cadastro incorreto', () => {
  beforeEach(() => {
    cy.visit('https://adopet-frontend-cypress.vercel.app');
    cy.get('[data-test="register-button"]').click();
  })

  it('Deve preencher os campos do formulário incorretamente para cadastrar um novo usuário', () => {
    cy.get('[data-test="submit-button"]').click();
    cy.contains('É necessário informar um endereço de email').should('be.visible');
    cy.contains('Crie uma senha').should('be.visible');
    cy.contains('Repita a senha criada acima').should('be.visible');
  })
})

context('Pagina de cadastro com cadastros de usuarios em massa', () => {
  usuarios.forEach(usuarios => {
    it('Deve preencher os campos do formulário corretamente para cadastrar um novo usuário', () => {
      cy.cadastrarAdopet(usuarios.name, usuarios.email, usuarios.password);
      })
    })
  })
})