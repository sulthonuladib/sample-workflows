const request = require('supertest');
const app = require('../src/app');

describe('Test for hello routes', () => {
    test("It should response GET request", async() => {
        const response = await request(app).get('/hello');
        expect(response.statusCode).toBe(200);
    });
})
