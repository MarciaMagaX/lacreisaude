Feature: Recuperação de Senha
  # Como um usuário
  # Quero recuperar minha senha
  # Para acessar minha conta quando necessário

  Scenario: Solicitar recuperação de senha
    Given que estou na página inicial
    When clico em Esqueci minha senha
    And informo o email "usuario@teste.com"
    And clico no botão de enviar
    Then vejo a mensagem de recuperação "Um email foi enviado para redefinir sua senha"
