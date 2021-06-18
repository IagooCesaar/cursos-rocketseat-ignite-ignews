import { render, screen } from '@testing-library/react'
import { Async } from '.';

describe('Exemplo para componentes com comportamentos assincronos', () => {
  it('it render correctly', () => {
    render(<Async />)
    expect(screen.getByText('Hello World')).toBeInTheDocument();
  })
})