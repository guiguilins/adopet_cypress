import { usuarios } from '../../fixtures/usuarios';

describe('Pagina de cadastro', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
        cy.get('[data-test="register-button"]').click();
    })
    usuarios.forEach(usuarios => {
        it('Deve preencher os campos do formulário corretamente para cadastrar um novo usuário', () => {
            cy.cadastrar(usuarios.name, usuarios.email, usuarios.password);
        })
    })
})