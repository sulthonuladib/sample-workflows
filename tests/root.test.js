const request = require('supertest');
const app = require('../src/app');

describe('Test error for all routes', () => {
    test("It should not response GET request", async() => {
        const response = await request(app).get('/');
        expect(response.statusCode).toBe(404);
    });
})
