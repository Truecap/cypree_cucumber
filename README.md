# Cypress Project with Cucumber

Here is my Cypress homework. I tested the [Telnyx](https://telnyx.com/) website, wrote and automated 15 test cases.

## Technology

- [Java Script](https://learn.javascript.ru/)
- [Cypress](https://www.cypress.io/)
- [Visual Studio Code](https://code.visualstudio.com/)
- [Cucumber](https://cucumber.io/)

## Node.js

If you're using npm to install Cypress, we support:

Node.js 12 or 14 and above

## Usage

- Installing Cypress:
  npm install cypress --save-dev

- Install Cypress xpath plugin:
  npm install -D cypress-xpath
  And add /cypress/suppotr/e2e.js require('cypress-xpath')

- Install Cypress cypress-real-events plugin:
  npm install cypress-real-events
  Register new commands by adding this to your cypress/support/index.{js,ts} file.
  import "cypress-real-events/support";

- Install Cucumber:
  npm install --save-dev @cucumber/cucumber

## Run test

- npx cypress open
- npm run test:smoke
- npm run test
