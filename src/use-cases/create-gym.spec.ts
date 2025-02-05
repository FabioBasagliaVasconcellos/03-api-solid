import { InMemoryGymsRepository } from '@/repositories/in-memory/in-memory-gyms-repository'
import { expect, describe, it, beforeEach } from 'vitest'
import { CreateGymUseCase } from './create-gym'

let gymsRepository: InMemoryGymsRepository
let sut: CreateGymUseCase 

describe('Create Gym Use Case',() => {
   beforeEach(() => {
     gymsRepository = new InMemoryGymsRepository()
     sut = new CreateGymUseCase(gymsRepository)
   })

    it('should be able to create gym', async () => {
        const { gym } = await sut.execute({
          title: 'JavaScript Gym',
          description: null,
          phone: null,
          latitude: -41.5629312,
          longitude: -8.394697,
        })
  
        expect(gym.id).toEqual(expect.any(String))
      })

})
