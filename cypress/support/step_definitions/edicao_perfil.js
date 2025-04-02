Given("que estou logado no sistema", () => {
  cy.visit("https://paciente.lacreisaude.com.br/login");
  cy.get("#email").type("usuario@teste.com");
  cy.get("#senha").type("Senha123");
  cy.contains("Entrar").click();
});

When("acesso a página de edição de perfil", () => {
  cy.contains("Meu Perfil").click();
  cy.contains("Editar Perfil").click();
});

When("altero o nome para {string}", (novoNome) => {
  cy.get("#nome").clear().type(novoNome);
});

When("clico em salvar", () => {
  cy.contains("Salvar").click();
});

Then("vejo a mensagem de sucesso {string}", (mensagem) => {
  cy.contains(mensagem).should("be.visible");
});

