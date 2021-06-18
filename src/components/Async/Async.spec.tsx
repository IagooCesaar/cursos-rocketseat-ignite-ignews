import { render, screen } from '@testing-library/react'
import { Async } from '.';

describe('Exemplo para componentes com comportamentos assíncronos', () => {
  it('it render correctly', async () => {
    render(<Async />)
    expect(screen.getByText('Hello World')).toBeInTheDocument();

    //Ajuste para esperar algo acontecer em tela
    expect(await screen.findByText('Botão')).toBeInTheDocument();
  })
})