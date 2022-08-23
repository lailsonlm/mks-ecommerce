import styled from 'styled-components'

export const FooterContainer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 2.125rem;
  background-color:  ${({ theme }) => theme['gray-300']};
  
  /* position: absolute;
  bottom: 0; */

  p {
    font-size: 0.75rem;
    font-weight: 400;
    color: ${({ theme }) => theme.black};
  }
`