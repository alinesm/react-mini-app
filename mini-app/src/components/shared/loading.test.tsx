import { render, screen } from '@testing-library/react'
import { Loading } from './loading'
import { describe, it, expect } from 'vitest'

describe('Loading', () => {
  it('renders loading message', () => {
    render(<Loading />)
    expect(screen.getByText('Loading project details...')).toBeDefined()
  })
})

