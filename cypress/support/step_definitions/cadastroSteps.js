import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";


Given("que estou na página inicial", () => {
  cy.visit("https://paciente-staging.lacreisaude.com.br/");
});

When("eu preencho os campos obrigatórios e clico em cadastrar", () => {
  cy.get('#criar-conta').click()
  cy.get("#first_name").type("Dora");
  cy.get('#last_name').type("Testa");
  cy.get("#email").type("testa.doraqa@gmail.com");
  cy.get('#email2').type("testa.doraqa@gmail.com");
  cy.get('#password1').type("Teste@123");
  cy.get('#password2').type("Teste@123");
  cy.get(':nth-child(1) > label > .check-container > span').click()
  cy.get(':nth-child(2) > label > .check-container > span').click()
  cy.get('.cEjzSb > .sc-12af5372-1').click();
});

Then("devo ver uma mensagem de sucesso", () => {
  // cy.contains("Cadastro realizado com sucesso!").should("be.visible");
});

When("eu não preencho o campo obrigatório sobrenome e clico em cadastrar", () => {
  cy.get('#criar-conta').click()
  cy.get("#first_name").type("Dora");
  // cy.get('#last_name').type("Testa");
  cy.get("#email").type("testa.doraqa@gmail.com");
  cy.get('#email2').type("testa.doraqa@gmail.com");
  cy.get('#password1').type("Teste@123");
  cy.get('#password2').type("Teste@122");
  cy.get(':nth-child(1) > label > .check-container > span').click()
  cy.get(':nth-child(2) > label > .check-container > span').click()
  cy.get('.cEjzSb > .sc-12af5372-1').click();
});

Then("deve aparecer uma mensagem de campo obrigatorio no sobrenome", () => {
  cy.get(':nth-child(2) > .sc-52a67a2e-0 > .sc-52a67a2e-3 > .sc-c74531e-0').should("be.visible");
});