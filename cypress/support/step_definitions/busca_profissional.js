import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("que estou na página inicial", () => {
  cy.visit("https://paciente.lacreisaude.com.br/");
});

When("eu clico na opção de busca de profissional", () => {
  cy.contains("Buscar Profissional").click();
});

When("eu informo a especialidade {string}", (especialidade) => {
  cy.get("#campo-especialidade").type(especialidade);
});

When("clico no botão de buscar", () => {
  cy.contains("Buscar").click();
});

Then("vejo a lista de profissionais disponíveis", () => {
  cy.get(".lista-profissionais").should("be.visible");
});

