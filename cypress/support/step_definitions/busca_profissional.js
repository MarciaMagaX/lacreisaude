import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";


When("eu clico na opção de busca de profissional", () => {
  cy.get("#email").type('riyica7103@deenur.com');
  cy.get("#password").type('Test@123');
  cy.get("#entrar").click();
  cy.url().should("eq", "https://paciente-staging.lacreisaude.com.br/buscar-profissional/");  
});

When("eu informo a especialidade {string}", (especialidade) => {
  cy.get('#search').type(especialidade);
});

When("clico no botão de buscar", () => {
  cy.get('#pesquisar').click();
});

Then("vejo a lista de profissionais disponíveis", () => {
  cy.get('#main-section-div').should("be.visible");
});

