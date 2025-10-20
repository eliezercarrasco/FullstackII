import { render, screen } from '@testing-library/react'
import App from '../App'

describe('App component', () => {
  it('muestra el título de la aplicación', () => {
    render(<App />)
    const elementos = screen.getAllByText(/pastelería/i)
    expect(elementos.length).toBeGreaterThan(0)
  })
})