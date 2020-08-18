const request = require('supertest')
const setupDatabase = require('../fixtures/db')

beforeEach(setupDatabase)

test('Should send hello world message', async () => {
    const response = await request(app)
        .get('/')        
        .send()
        .expect(200)
    expect(response.body).toBe('Hello world.')
})