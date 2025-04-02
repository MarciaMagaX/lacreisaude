Feature: Cadastro de Usuário
  # Como um novo usuário
  # Quero me cadastrar na plataforma
  # Para acessar os serviços disponíveis

  Scenario: Cadastro de novo usuário com dados válidos
    Given que estou na página inicial
    When eu preencho os campos obrigatórios e clico em cadastrar
    Then devo ver uma mensagem de sucesso

  Scenario: Cadastro de novo usuário sem sobrenome
    Given que estou na página inicial
    When eu não preencho o campo obrigatório sobrenome e clico em cadastrar
    Then deve aparecer uma mensagem de campo obrigatorio no sobrenome

