const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../src/app');
const User = require('../src/models/User');
const Reserva = require('../src/models/Reserva');

// Increase timeout for db connection if needed
jest.setTimeout(30000);

let token;

beforeAll(async () => {
    // Ensure we are connected (app.js connects automatically, but we might want to wait)
    // For now, we assume app.js connection is sufficient or we can reuse it.
    // In a real env, we might want a separate test db. 
    // WARNING: This uses the Main DB from .env as configured in app.js
});

afterAll(async () => {
    await mongoose.connection.close();
});

describe('Functional Tests - API Reservas', () => {

    // Cleanup before starting
    beforeAll(async () => {
        await User.deleteMany({ email: 'test@example.com' });
        await Reserva.deleteMany({ nombreCliente: 'Test Client' });
    });

    describe('Authentication', () => {
        it('should register a new user', async () => {
            const res = await request(app)
                .post('/api/auth/register')
                .send({
                    username: 'testuser',
                    email: 'test@example.com',
                    password: 'password123'
                });
            expect(res.statusCode).toEqual(201);
            // expect(res.body).toHaveProperty('_id'); // Original expectation was wrong
            expect(res.body).toHaveProperty('msg');
        });

        it('should login with valid credentials', async () => {
            const res = await request(app)
                .post('/api/auth/login')
                .send({
                    email: 'test@example.com',
                    password: 'password123'
                });
            expect(res.statusCode).toEqual(200);
            expect(res.body).toHaveProperty('token');
            token = res.body.token;
        });

        it('should not login with invalid password', async () => {
            const res = await request(app)
                .post('/api/auth/login')
                .send({
                    email: 'test@example.com',
                    password: 'wrongpassword'
                });
            expect(res.statusCode).toEqual(400);
        });
    });

    describe('Reservations', () => {
        it('should not create reservation without token', async () => {
            const res = await request(app)
                .post('/api/reservas')
                .send({
                    fecha: '2025-12-01',
                    hora: '10:00',
                    nombreCliente: 'Test Client'
                });
            expect(res.statusCode).toEqual(401);
        });

        it('should create reservation with valid token', async () => {
            const res = await request(app)
                .post('/api/reservas')
                .set('Authorization', `Bearer ${token}`) // Fixed header
                .send({
                    fecha: '2025-12-01',
                    hora: '10:00',
                    nombreCliente: 'Test Client'
                });

            // Note: Middlewares often expect 'x-auth-token' or 'Authorization: Bearer'
            // We will verify middleware if this fails.
            if (res.statusCode !== 201) console.log(res.body);
            expect(res.statusCode).toEqual(201);
            expect(res.body).toHaveProperty('msg', 'Reserva creada');
        });
    });
});
