Feature: Login no sistema

  Scenario: Usuário faz login com sucesso
    Given que estou na página inicial
    When eu preencho os campos obrigatórios e clico em cadastrar
    Then devo ver uma mensagem de sucesso
