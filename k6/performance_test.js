import http from 'k6/http';
import { sleep, check } from 'k6';

export let options = {
    stages: [
        { duration: '30s', target: 10 }, // 10 usuários simultâneos
        { duration: '1m', target: 50 },  // Aumenta para 50 usuários
        { duration: '30s', target: 0 },  // Finaliza
    ],
};

export default function () {
    let res = http.get('https://paciente-staging.lacreisaude.com.br/');
    check(res, { 'status is 200': (r) => r.status === 200 });
    sleep(1);
}
