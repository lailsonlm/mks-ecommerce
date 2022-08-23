import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${({ theme }) => theme['blue-500']};
  }

  body {
    background: ${({ theme }) => theme['gray-100']};
    color: ${({ theme }) => theme['gray-700']};
    -webkit-font-smoothing: antialiased;
  }
  
  body, input, textarea, button {
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }
`
