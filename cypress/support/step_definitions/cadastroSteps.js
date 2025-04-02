import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";


Given("que estou na página inicial", () => {
  cy.visit("https://paciente-staging.lacreisaude.com.br/");
});

When("eu preencho os campos obrigatórios e clico em cadastrar", () => {
  cy.get('#criar-conta').click()
  cy.get("#first_name").type("Dora Testa");
  cy.get("#email").type("testa.doraqa@gmail.com");
  cy.get("#senha").type("Teste@123");
  cy.get("#botao-cadastrar").click();
});

Then("devo ver uma mensagem de sucesso", () => {
  cy.contains("Cadastro realizado com sucesso!").should("be.visible");
});
