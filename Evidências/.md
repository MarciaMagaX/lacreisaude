# Relatório de Bugs

## Bug 1: Cadastro de usuário

- **Ambiente:** Android 12, Mozilla 137.0  
- **Device:** Moto G22  

### Passos para reproduzir:
1. Acessar o site na página a seguir: [https://paciente-staging.lacreisaude.com.br/]  
2. Clicar em "Criar conta"  
3. Preencher os seguintes dados:  
   - Nome civil ou social  
   - Sobrenome  
   - E-mail  
   - Confirme seu e-mail  
   - Senha (mínimo de 8 caracteres, incluindo letra maiúscula, letra minúscula, número e caractere especial)  
   - Confirme sua senha  
4. Marcar as caixas "Li e concordo com os termos" e "Tenho mais de 18 anos"  
5. Clicar em "Cadastrar"  

### Resultado esperado:
Uma mensagem deve informar que o e-mail precisa ser confirmado, e a tela deve permanecer nessa página até que o usuário acesse seu e-mail.

### Resultado obtido:
A mensagem informando que o e-mail deve ser confirmado aparece por um tempo insuficiente para leitura e, em seguida, a tela retorna para o login.

---

## Bug 2: Esquecer senha e resetar

- **Ambiente:** Android 12, Mozilla 137.0  
- **Device:** Moto G22  

### Passos para reproduzir:
1. Acessar o site na página a seguir: [https://paciente-staging.lacreisaude.com.br/]  
2. Clicar em "Esqueci minha senha"  
3. Na caixa de e-mail, digitar o e-mail cadastrado  
4. Clicar em "Enviar link"  

### Resultado esperado:
Uma mensagem deve informar que um e-mail com um link para redefinir a senha foi enviado ao usuário. A mensagem deve permanecer na tela até que o usuário a leia e decida o que fazer.

### Resultado obtido:
A mensagem informando que o e-mail deve ser confirmado aparece por um tempo insuficiente para leitura e, em seguida, a tela retorna para o login.
