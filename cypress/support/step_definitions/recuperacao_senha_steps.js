import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";


When("clico em Esqueci minha senha", () => {
  cy.contains("Esqueci minha senha").click();
});

When("informo o email {string}", (email) => {
  cy.get("#email").type(email);
});

When("clico no botão de enviar", () => {
  cy.contains("Enviar").click();
});

Then("vejo a mensagem de recuperação {string}", (mensagem) => {
  cy.contains(mensagem).should("be.visible");
});

