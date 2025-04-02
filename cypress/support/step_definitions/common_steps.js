import { Given } from "@badeball/cypress-cucumber-preprocessor";

Given("que o usuário acessa o sistema", () => {
  cy.visit("https://paciente-staging.lacreisaude.com.br/");
});
