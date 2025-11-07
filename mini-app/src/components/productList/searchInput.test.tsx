import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import SearchInput from './searchInput'
import { describe, it, expect, vi } from 'vitest'

describe('SearchInput', () => {
  it('renders search input', () => {
    const mockHandleChange = vi.fn()
    render(<SearchInput handleSearchChange={mockHandleChange} search="" />)
    
    expect(screen.getByPlaceholderText('Search for projects')).toBeDefined()
  })

  it('displays search value', () => {
    const mockHandleChange = vi.fn()
    render(<SearchInput handleSearchChange={mockHandleChange} search="test query" />)
    
    const input = screen.getByPlaceholderText('Search for projects') as HTMLInputElement
    expect(input.value).toBe('test query')
  })

  it('calls handleSearchChange when typing', async () => {
    const user = userEvent.setup()
    const mockHandleChange = vi.fn()
    render(<SearchInput handleSearchChange={mockHandleChange} search="" />)
    
    const input = screen.getByPlaceholderText('Search for projects')
    await user.type(input, 'test')
    
    expect(mockHandleChange).toHaveBeenCalled()
  })
})

