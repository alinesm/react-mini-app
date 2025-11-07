import { describe, it, expect } from 'vitest'
import { getProjectsFromAPI, getProjectByIdFromAPI } from '@/services/projects.api'

describe('projects.api', () => {
  describe('getProjectsFromAPI', () => {
    it('returns list of projects', async () => {
      const result = await getProjectsFromAPI()
      
      expect(result).toBeDefined()
      expect(Array.isArray(result)).toBe(true)
      expect(result.length).toBeGreaterThan(0)
      expect(result[0]).toHaveProperty('id')
      expect(result[0]).toHaveProperty('name')
      expect(result[0]).toHaveProperty('owner')
    })
  })

  describe('getProjectByIdFromAPI', () => {
    it('returns project when id exists', async () => {
      const result = await getProjectByIdFromAPI('p1')
      
      expect(result).toBeDefined()
      expect(result).toHaveProperty('id', 'p1')
      expect(result).toHaveProperty('name')
      expect(result).toHaveProperty('owner')
    })

    it('returns null for non-existent project', async () => {
      const result = await getProjectByIdFromAPI('non-existent-id')
      
      expect(result).toBeNull()
    })
  })
})

