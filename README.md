# AdoPet

AdoPet is a web application designed to facilitate the adoption of pets. Users can browse available pets, contact the responsible parties, and manage their accounts.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Running Tests](#running-tests)
- [Contributing](#contributing)
- [License](#license)

## Installation

To get started with the project, clone the repository and install the necessary dependencies:

```bash
git clone [https://github.com/your-username/adopet.git](https://github.com/guiguilins/curso_cypress.git)
cd adopet
npm install
```
## Example Cypress Test Files

### `cypress/e2e/solutis/login-correto.cy.js`

```javascript
describe('Pagina de login', () => {
    beforeEach(() => {
        cy.visit('https://github.com/login');
    })

    it("Deve preencher os campos do login corretamente para logar um novo usuário", () => {
        cy.loginGithub('guiguisport58@hotmail.com', '@Solutis123');
        cy.url().should('include', '');
        cy.get('.AppHeader-context-full > nav > .list-style-none').should('be.visible');
    })
}) ```
