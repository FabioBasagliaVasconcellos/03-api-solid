import request from 'supertest'
import { app } from '@/app'
import { afterAll, beforeAll, describe, expect, it } from 'vitest'
import { createAndAuthenticateUser } from '@/utils/test/create-and-authenticate-user'

describe('Create Gym (e2e)', () => {
    beforeAll(async () => {
        await app.ready()
    })
    afterAll(async () => {
        await app.close()
    })

    it('should be able to get create a gym', async () => {
         const { token } = await createAndAuthenticateUser(app, true)

         const response = await request(app.server)
         .post('/gyms')
         .set('Authorization', `Bearer ${token}`)
         .send({
            title: 'JavaScript Gym',
            description: 'Some description.',
            phone: '11999999999',
            latitude: -41.5629312,
            longitude: -8.394697,
         })

         expect(response.statusCode).toEqual(201)
    })
})