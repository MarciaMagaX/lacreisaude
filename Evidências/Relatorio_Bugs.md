# Relatório de Bugs - Aplicação Lacrei Saúde

## 📌 Visão Geral

Foram encontrados dois bugs relacionados à usabilidade e experiência do usuário no processo de cadastro e recuperação de senha. Ambos impactam negativamente a clareza da comunicação com o usuário final, especialmente no momento crítico de entrada na plataforma.

---

## 🐞 Bug 1: Cadastro de Usuário

- **Ambiente:** Android 12, Mozilla 137.0  
- **Dispositivo:** Moto G22  

### ➕ Passos para reproduzir:
1. Acessar: [https://paciente-staging.lacreisaude.com.br/](https://paciente-staging.lacreisaude.com.br/)
2. Clicar em "Criar conta"
3. Preencher todos os campos obrigatórios corretamente
4. Marcar as caixas de aceite
5. Clicar em "Cadastrar"

### ✅ Resultado esperado:
Mensagem de confirmação de e-mail aparece de forma clara e permanece na tela até a ação do usuário.

### ❌ Resultado obtido:
Mensagem aparece rapidamente e some, redirecionando automaticamente para a tela de login.

### 🧪 Severidade:
**Média**

### 🎯 Justificativa:
- **Impacto no usuário:** Moderado. O usuário pode se confundir e tentar criar a conta novamente ou achar que houve um erro.
- **Bloqueio:** Não bloqueia o uso do sistema, mas prejudica a experiência e a clareza do processo de cadastro.
- **Frequência:** 100% dos casos que envolvem novo cadastro.

---

## 🐞 Bug 2: Recuperação de Senha

- **Ambiente:** Android 12, Mozilla 137.0  
- **Dispositivo:** Moto G22  

### ➕ Passos para reproduzir:
1. Acessar: [https://paciente-staging.lacreisaude.com.br/](https://paciente-staging.lacreisaude.com.br/)
2. Clicar em "Esqueci minha senha"
3. Digitar um e-mail válido
4. Clicar em "Enviar link"

### ✅ Resultado esperado:
Mensagem indicando o envio do link de redefinição de senha permanece visível para o usuário.

### ❌ Resultado obtido:
Mensagem desaparece rapidamente e o usuário é redirecionado para a tela de login sem confirmação clara.

### 🧪 Severidade:
**Alta**

### 🎯 Justificativa:
- **Impacto no usuário:** Alto. Pode gerar frustração e impedir que o usuário consiga acessar a conta se não perceber que o e-mail foi enviado.
- **Bloqueio:** Pode causar retrabalho ou abandono do processo.
- **Frequência:** 100% dos casos de redefinição de senha.

---

## ✅ Recomendação geral

- Garantir que mensagens de feedback fiquem visíveis até que o usuário interaja (ex: clique em "OK" ou “Entendi”).
- Avaliar o uso de **componentes de notificação persistente** ou **modal de confirmação** antes do redirecionamento.
- Verificar acessibilidade e tempo de leitura razoável para diferentes perfis de usuário.

---

_Análise realizada com base em testes manuais na versão staging da plataforma._

