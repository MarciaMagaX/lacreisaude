import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";


Given("que estou na página inicial", () => {
  cy.visit("https://paciente-staging.lacreisaude.com.br/");
});

When("eu preencho os campos obrigatórios e clico em cadastrar", () => {
  cy.get('#criar-conta').click()
  cy.get("#nome").type("Dora Testa");
  cy.get("#email").type("teste@email.com");
  cy.get("#senha").type("Senha123!");
  cy.get("#botao-cadastrar").click();
});

Then("devo ver uma mensagem de sucesso", () => {
  cy.contains("Cadastro realizado com sucesso!").should("be.visible");
});
