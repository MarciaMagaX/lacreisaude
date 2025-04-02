import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";



When("acesso a página de edição de perfil", () => {
  // cy.contains("Meu Perfil").click();
  // cy.contains("Editar Perfil").click();
});

When("altero o nome para {string}", (novoNome) => {
  // cy.get("#nome").clear().type(novoNome);
});

When("clico em salvar", () => {
  // cy.contains("Salvar").click();
});

Then("vejo a mensagem de sucesso {string}", (mensagem) => {
  // cy.contains(mensagem).should("be.visible");
});

