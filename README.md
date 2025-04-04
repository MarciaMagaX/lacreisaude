# lacreisaude

# 🧪 Projeto de QA - Lacrei Saúde

Este repositório contém as atividades de QA desenvolvidas para o ambiente de testes da [Lacrei Saúde - Paciente Staging](https://paciente-staging.lacreisaude.com.br/). O projeto inclui testes manuais, automatizados, de performance, acessibilidade e responsividade, além do registro de bugs e sugestões de melhorias.

---

## 🎯 Objetivo

Avaliar minha capacidade de:

- Escrita técnica e documentação clara  
- Pensamento crítico e analítico  
- Organização e autonomia  
- Aplicação de práticas de QA  
- Criatividade na resolução de problemas  

---

## 🛠️ Ferramentas Utilizadas

| Ferramenta       | Finalidade                             |
|------------------|----------------------------------------|
| Cypress          | Testes automatizados E2E               |
| Cucumber         | Escrita de testes em Gherkin           |
| K6               | Testes de desempenho                   |
| Lighthouse       | Testes de acessibilidade               |
| GitHub           | Versionamento e documentação           |
| PowerShell / CLI | Execução de scripts e comandos         |

---

## ⚙️ Como configurar o ambiente

1. Clone o repositório:
   ```bash
   git clone https://github.com/MarciaMagaX/lacreisaude.git
   cd lacreisaude
Instale as dependências:

npm install
Execute os testes com Cypress:

npx cypress open
Execute os testes de performance com K6:

cd k6
k6 run performance_test.js
🗂️ Estrutura do Projeto

lacreisaude/
│

├── cypress/                  # Testes automatizados

│   ├── e2e/

│   ├── support/

│   └── fixtures/

│

├── k6/                       # Scripts de performance

│   ├── performance_test.js

│   └── resultados.txt
│

├── melhorias/               # Relatórios de bugs e melhorias

│   └── relatorio_k6.md

│   └── relatorio_bugs.md

│
├── Evidencias/              # Prints e gravações

│
├── README.md

├── package.json

└── cypress.config.js

✅ Casos de Teste Automatizados
Testes escritos em Gherkin com Cypress + Cucumber para os seguintes fluxos:

Cadastro de usuário

Edição de perfil

Busca e contato de profissional

Recuperação de senha

Scripts organizados e reutilizáveis com steps genéricos.

📈 Testes de Desempenho (K6)
Script localizado em k6/performance_test.js

Simulação de 50 usuários simultâneos

Mais de 2.200 requisições com tempo médio de resposta de ~175ms

Sem falhas detectadas

📄 Relatório disponível em: melhorias/relatorio_k6.md

♿ Testes de Acessibilidade (Lighthouse)
Validação com base nas diretrizes WCAG 2.1:

Contraste de cores e legibilidade

Navegação por teclado

Leitura de elementos por leitores de tela

📄 Resultados e sugestões incluídas no relatório final.

📱 Testes de Responsividade
Testado nos seguintes ambientes:

📱 Mobile: Moto G22 (Android 12)

💻 Desktop: Full HD

Verificada a adaptação do layout e funcionalidade nos dois contextos.

🐞 Registro de Bugs
Todos os bugs encontrados foram registrados com:

Descrição clara

Passos para reprodução

Dispositivo e navegador

Nível de severidade

📄 Veja os detalhes em: melhorias/relatorio_bugs.md

💡 Melhorias Propostas
Tornar mensagens importantes (como “verifique seu e-mail”) persistentes na tela

Adicionar alertas visuais mais claros (ex: modal com botão “OK”)

Aprimorar validações de formulário com feedback em tempo real

🤖 Scripts Extras
Script para repetir steps no Gherkin com Cypress

Relatório automatizado dos testes com K6

Organização em pastas para facilitar a manutenção

🔀 Branches
main: versão final e estável

develop: desenvolvimento e testes em andamento

📝 Considerações Finais

Este desafio foi uma excelente oportunidade para aplicar na prática os conhecimentos em QA e DevTools. Explorei testes funcionais, automatizados, exploratórios, de performance, acessibilidade e usabilidade — tudo isso com foco em entregar um produto de qualidade e bem documentado.

Obrigada pela oportunidade! 💜
