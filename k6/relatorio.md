# 🧪 Relatório de Teste de Performance - K6

**Data do teste:** 04/04/2025  
**Ferramenta utilizada:** [K6 (Grafana Labs)](https://k6.io)  
**Script de teste:** `k6/performance_test.js`  
**Endpoint testado:** https://paciente-staging.lacreisaude.com.br/

---

## ⚙️ Configuração do teste

```js
export let options = {
  stages: [
    { duration: '30s', target: 10 }, // Ramp-up para 10 usuários
    { duration: '1m', target: 50 },  // Carga de pico com 50 usuários
    { duration: '30s', target: 0 },  // Ramp-down
  ],
};
