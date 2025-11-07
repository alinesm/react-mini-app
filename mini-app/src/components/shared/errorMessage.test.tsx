import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import ErrorMessage from './errorMessage'
import { describe, it, expect } from 'vitest'

describe('ErrorMessage', () => {
  it('renders error message', () => {
    render(
      <BrowserRouter>
        <ErrorMessage message="Test error" />
      </BrowserRouter>
    )
    expect(screen.getByText('Test error')).toBeDefined()
  })

  it('renders back button', () => {
    render(
      <BrowserRouter>
        <ErrorMessage message="Test error" />
      </BrowserRouter>
    )
    expect(screen.getByRole('button', { name: /back to projects/i })).toBeDefined()
  })
})

