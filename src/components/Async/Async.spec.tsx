import { render, screen, waitFor } from '@testing-library/react'
import { Async } from '.';

describe('Exemplo para componentes com comportamentos assíncronos', () => {
  it('it render correctly', async () => {
    render(<Async />)
    expect(screen.getByText('Hello World')).toBeInTheDocument();

    //Ajuste para esperar algo acontecer em tela
    await waitFor(() => {
      return expect(screen.getByText('Botão 1')).toBeInTheDocument()
    }, { timeout: 3000 })

    await waitFor(() => {
      return expect(screen.getByText('Botão 2')).not.toBeInTheDocument()
    }, { timeout: 3000 })
  }, 10000)
})