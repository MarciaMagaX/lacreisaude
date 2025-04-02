Feature: Busca de Profissional
  Como um usuário
  Quero buscar um profissional
  Para agendar uma consulta

  Scenario: Buscar profissional por especialidade
    Given que estou na página inicial
    When eu clico na opção de busca de profissional
    And eu informo a especialidade "Ginecologista"
    And clico no botão de buscar
    Then vejo a lista de profissionais disponíveis

