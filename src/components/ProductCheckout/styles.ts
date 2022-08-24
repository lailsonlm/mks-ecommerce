import styled from 'styled-components'

export const ProductCheckoutContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  
  width: 23.6875rem;
  height: 5.9375rem;

  background-color: ${({ theme }) => theme.white};
  border-radius: 0.5rem;
  box-shadow: -2px 2px 10px rgba(0, 0, 0, 0.05);

  @media(max-width: 576px) {
    width: 15.625rem;
    height: 100%;
    max-height: 13.4769rem;
    flex-direction: column;
    padding: 1.375rem 0;
  }

  img {
    width: 3.125rem;
    margin-right: 1.1875rem;

    @media(max-width: 576px) {
      width: 5rem;
      height: 100%;
      margin-right: 0rem;
    }
  }

  > p {
    width: 7.0625rem;
    font-size: 0.8125rem;
    font-weight: 400;
    margin-right: 0.5625rem;
    color:  ${({ theme }) => theme['gray-700']};

    @media(max-width: 576px) {
      font-size: 1rem;
      width: 13.1875rem;
      margin-right: 0rem;
      margin: 0.875rem 0 0.6875rem;
    }
  }

  > div {
    display: flex;
    align-items: center;

    > div {
      display: flex;
      flex-direction: column;
      margin-right: 2.5rem;
      gap: 0.25rem;

      p {
        font-size: 0.3125rem;
        font-weight: 400;
        color:  ${({ theme }) => theme.black};

        @media(max-width: 576px) {
          display: none;
        }
      }

      > div {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        width: 100%;
        min-width: 3.125rem;
        height: 1.1875rem;
        border-radius: 0.25rem;
        border: 0.3px solid ${({ theme }) => theme['gray-400']};
        color:  ${({ theme }) => theme.black};

        @media(max-width: 576px) {
          width: 100%;
          min-width: 6.125rem;
          height: 2.1562rem;
        }

        > button {
          background-color: transparent;
          border: 0;
          font-size: 0.75rem;
          font-weight: 400;
          cursor: pointer;

          @media(max-width: 576px) {
            font-size: 1.5rem;
          }
        }

        > span {
          font-size: 0.5rem;
          font-weight: 400;

          @media(max-width: 576px) {
            font-size: 1.25rem;
          }

          &::before {
            content: '';
            margin-right: 0.25rem;
            border: 0.2px solid ${({ theme }) => theme['gray-400']};

            @media(max-width: 576px) {
              margin-right: 0.5rem;
            }
          }

          &::after {
            content: '';
            margin-left: 0.25rem;
            border: 0.2px solid ${({ theme }) => theme['gray-400']};

            @media(max-width: 576px) {
              margin-left: 0.5rem;
            }
          }
        }
      }
    }
  }


  strong {
    font-size: 0.875rem;
    font-weight: 700;
    color:  ${({ theme }) => theme.black};

    @media(max-width: 576px) {
      display: flex;
      align-items: center;
      font-size: 0.9375rem;
      font-weight: 700;
      height: 2.1562rem;
  
      background-color: ${({ theme }) => theme['gray-600']};
      color: ${({ theme }) => theme.white};
      border-radius: 0.3125rem;
      padding: 0.25rem 0.375rem;
    }
  }

  > button {
    display: flex;
    align-items: center;
    justify-content: center;
    
    width: 1.125rem;
    height: 1.125rem;
    
    position: absolute;
    top: -0.375rem;
    right: -0.375rem;

    font-size: 0.875rem;
    border-radius: 9999px;
    border: 0;
    /* padding: 0.3125rem; */

    background-color: ${({ theme }) => theme.black};
    color:  ${({ theme }) => theme.white};
    cursor: pointer;

    @media(max-width: 576px) {
      display: flex;
      align-items: center;
      font-size: 2.625rem;
      font-weight: 400;

      top: 0.625rem;
      right: 0.875rem;
  
      background-color: transparent;
      color: ${({ theme }) => theme.black};
      border-radius: 0rem;
      padding: 0rem;
    }
  }

`