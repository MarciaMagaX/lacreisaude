Feature: Edição de Perfil
  # Como um usuário logado
  # Quero editar meu perfil
  # Para manter minhas informações atualizadas

  Scenario: Alterar nome no perfil
    Given que estou na página inicial
    When acesso a página de edição de perfil
    And altero o nome para "Novo Nome"
    And clico em salvar
    Then vejo a mensagem de sucesso "Perfil atualizado com sucesso"
