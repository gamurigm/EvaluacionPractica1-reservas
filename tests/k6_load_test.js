
import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
    stages: [
        { duration: '30s', target: 20 }, // Ramp up to 20 users
        { duration: '1m', target: 20 },  // Stay at 20 users
        { duration: '30s', target: 0 },  // Ramp down
    ],
    thresholds: {
        http_req_duration: ['p(95)<500'], // 95% of requests should be below 500ms
    },
};

// Replace with your Windows IP found via ipconfig (e.g., Wireless LAN adapter Wi-Fi)
// host.docker.internal sometimes fails in pure WSL without Docker Desktop mappings.
// Determinar el HOST:
// 1. Si se pasa K6_HOST por comando: usa ese.
// 2. Si estás en WSL2, '127.0.0.1' NO funcionará para conectar a Windows.
//    Usa la IP de tu Windows (ipconfig) o la de la puerta de enlace de WSL.
const HOST_IP = __ENV.K6_HOST || '127.0.0.1';
const BASE_URL = `http://${HOST_IP}:3000`;

// Tip para el usuario: 
// Si ves 'connection refused' y usas WSL2, prueba:
// k6 run -e K6_HOST=$(grep nameserver /etc/resolv.conf | awk '{print $2}') tests/k6_load_test.js



export default function () {
    // We'll test the public login endpoint to avoid token complexity in simple load test
    // Or assuming we have a valid token if we want to test protected routes.
    // For simplicity, let's load test the login with invalid creds (CPU work verify password)

    const payload = JSON.stringify({
        email: 'test@example.com',
        password: 'password123',
    });

    const params = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    const res = http.post(`${BASE_URL}/api/auth/login`, payload, params);

    check(res, {
        'status is 200 or 400': (r) => r.status === 200 || r.status === 400,
    });

    sleep(1);
}
