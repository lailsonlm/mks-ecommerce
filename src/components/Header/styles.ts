import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 6.3125rem;
  background-color:  ${({ theme }) => theme['blue-500']};

  > picture img {
    margin-left: 4.0625rem;

    @media(max-width: 960px) {
      margin-left: 1.25rem;
    }
    
    @media(max-width: 576px) {
      width: 9.875rem;
    }
  }

  @media(max-width: 576px) {
    height: 3rem;
  }
`

export const ButtonCart = styled.button`
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;

  width: 5.625rem;
  height: 2.8125rem;
  margin-right: 5.5rem;

  border-radius: 0.5rem;
  border: 0;

  background-color: ${({ theme }) => theme.white};
  color: ${({ theme }) => theme.black};

  cursor: pointer;

  @media(max-width: 960px) {
    margin-right: 1.4375rem;
  }

  @media(max-width: 576px) {
      gap: 0.625rem;
      width: 3.25rem;
      height: 1.625rem;
    }

  img {
    margin: 0;

    @media(max-width: 576px) {
      width: 0.6868rem;
    }
  }

  span {
    font-size: 1.125rem;
    font-weight: 700;

    @media(max-width: 576px) {
      font-size: 0.75rem;
    }
  }

`