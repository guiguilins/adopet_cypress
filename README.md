

![Screenshot_175](https://github.com/user-attachments/assets/ae5cbfc9-6a23-487d-9dc1-a1748bee0a9f)

# Projeto de Testes Automatizados com Cypress

Este repositório contém uma suíte de testes automatizados utilizando Cypress, desenvolvida para garantir a qualidade e funcionamento das funcionalidades principais do sistema. Abaixo, você encontrará a estrutura do projeto, instruções de instalação e execução, além de descrições dos testes presentes.

# AdoPet

AdoPet é uma aplicação web projetada para facilitar a adoção de animais de estimação. Os usuários podem navegar pelos pets disponíveis, entrar em contato com os responsáveis e gerenciar suas contas.

## Pré-requisitos

- **Node.js**: Certifique-se de ter o Node.js instalado em sua máquina.
- **Cypress**: O Cypress deve estar instalado como dependência do projeto.
- **Mochawesome**: Deve estar instalado para gerar relatórios de testes.
## Instalação

Cada arquivo de teste cobre uma funcionalidade específica do sistema, garantindo que os componentes críticos funcionem conforme o esperado.

## Configuração de ambiente

Siga os passos abaixo para configurar o ambiente de testes:

   ```bash
   git clone https://github.com/guiguilins/curso_cypress.git
```

### Instale as dependências do projeto:

```
npm install cypress
```

### Executando os Testes
Para executar os testes, você tem duas opções:

Modo Interativo: Abra a interface do Cypress para executar os testes manualmente.

```
npx cypress open
```
Modo Headless: Execute todos os testes no modo headless (sem interface), ideal para integração contínua.
```
npx cypress run
```
### Instalar o Mochawesome
Execute o comando abaixo para instalar o Mochawesome e as dependências necessárias:


```
npm install mochawesome mochawesome-merge mochawesome-report-generator --save-dev
```
**mochawesome**: Gera relatórios em HTML e JSON.
**mochawesome-merge**: Mescla vários arquivos JSON em um único arquivo.
**mochawesome-report-generator**: Gera o relatório HTML a partir dos arquivos JSON.


### Configurar o Mochawesome no Cypress
Configurar o Cypress para usar o Mochawesome
Abra o arquivo cypress.config.js e adicione as seguintes configurações para gerar os relatórios no formato Mochawesome:
```
{
  "reporter": "mochawesome",
  "reporterOptions": {
    "reportDir": "cypress/results",
    "overwrite": false,
    "html": true,
    "json": true
  }
}
```
**reportDir**: Diretório onde os arquivos de relatório JSON serão salvos.
**overwrite**: Define se os relatórios existentes serão sobrescritos. Defina como false para não sobrescrever os relatórios anteriores.
**html**: Gera o relatório em formato HTML.
**json**: Gera o relatório em formato JSON (necessário para mesclar relatórios).

## Estrutura do Projeto

A estrutura do projeto está organizada da seguinte forma:
![Screenshot_162](https://github.com/user-attachments/assets/574896b9-4f67-4864-9f17-e4d8d5b8c792)

## Documentação dos Testes
Você pode encontrar a documentação dos testes no arquivo ```combined-report.html``` localizado em:
```cypress/results/combined-report.html```

### Para execução dos testes via linha de comando
```npm run test-and-report```
