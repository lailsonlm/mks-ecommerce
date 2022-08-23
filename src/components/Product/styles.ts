import styled from 'styled-components'

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  flex: 1;
  border-radius: 0.5rem;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
  background-color: ${({ theme }) => theme.white};

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1.125rem 0.875rem 0;
    height: 100%;
    width: 100%;

    @media(max-width: 576px) {
      padding: 1rem 1rem 0;
    }
    
    img {
      width: 6.9375rem;
      /* height: 8.625rem; */
    }

    div {
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      justify-content: space-between;
      gap: 0.25rem;
      width: 100%;
      margin-top: 0.875rem;
      padding: 0;
  
      h2 {
        font-size: 1rem;
        font-weight: 400;
        color: ${({ theme }) => theme['gray-700']};

        @media(max-width: 576px) {
          width: 8.9231rem;
        }
      }
  
      span {
        font-size: 0.9375rem;
        font-weight: 700;
  
        background-color: ${({ theme }) => theme['gray-600']};
        color: ${({ theme }) => theme.white};
        border-radius: 0.3125rem;
        padding: 0.25rem 0.375rem;
      }

    }

    p {
      font-size: 0.625rem;
      font-weight: 300;
      margin-top: 0.5rem;
    }
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 0.75rem;
    border-radius: 0 0 0.5rem 0.5rem;

    width: 100%;
    height: 1.9943rem;
    border: 0;
    gap: 0.875rem;

    background-color: ${({ theme }) => theme['blue-500']};
    cursor: pointer;

    img {
      width: 0.75rem;
      height: 0.8437rem;
    }

    span {
      font-size: 0.875rem;
      font-weight: 600;
      color: ${({ theme }) => theme.white};
      line-height: 1.125rem;
    }
  }

  @media(max-width: 576px) {
    width: 15.6562rem;
  }
`