import styled from 'styled-components'

export const CheckoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 30.375rem;
  height: 100vh;

  background-color:  ${({ theme }) => theme['blue-500']};
  color: ${({ theme }) => theme.white};

  position: fixed;
  right: 0;
  z-index: 100;

  @media(max-width: 576px) {
    width: 20.265rem;
  }

  > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 2.375rem 3.375rem 0 2.9375rem;
    height: 100%;
    width: 100%;
    overflow-x: auto;

    @media(max-width: 576px) {
      padding: 1.562rem 2.875rem 0 2rem;
    }
    
    > h2 {
      width: 11.25rem;
      font-size: 1.6875rem;
      font-weight: 700;
    }

    h2 + div {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      height: 100%;

      gap: 1.75rem;
      padding: 4rem 0 0;

      @media(max-width: 576px) {
        padding: 2rem 0 0;
        gap: 1rem;
        width: 100%;
        margin-bottom: 3rem;
      }
    }

    > div {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 1.75rem;
      font-weight: 700;
      margin: 2.625rem 0;

      @media(max-width: 576px) {
        margin: 2rem 0;
      }
    }

    > button {
      display: flex;
      align-items: center;
      justify-content: center;
      
      width: 2.375rem;
      height: 2.375rem;
      
      position: absolute;
      top: 2.4375rem;
      right: 1.375rem;

      font-size: 1.75rem;
      border-radius: 9999px;
      border: 0;

      background-color: ${({ theme }) => theme.black};
      color:  ${({ theme }) => theme.white};
      cursor: pointer;

      @media(max-width: 576px) {
        top: 1.625rem;
        right: 1rem;
      }
    }
  }

  > button {
    width: 100%;
    height: 6.0625rem;
    background-color:  ${({ theme }) => theme.black};
    color: ${({ theme }) => theme.white};
    border: 0;

    font-size: 1.75rem;
    font-weight: 700;

    cursor: pointer;

    @media(max-width: 576px) {
      height: 4.11625rem;
      font-size: 1.25rem;
    }
  }
`