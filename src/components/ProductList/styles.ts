import styled from 'styled-components'

export const ProductListContainer = styled.main`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.9375rem 1.375rem;
  width: 100%;
  max-width: 58.625rem;

  margin: 7.25rem auto 1rem;

  @media(max-width: 960px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 1.125rem;
    padding: 0 1.125rem;

    margin: 5rem auto 1rem;
  }

  @media(max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.125rem;
    padding: 0 1.125rem;

    margin: 5rem auto 1rem;
  }

  @media(max-width: 576px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 1.125rem;

    margin: 2rem auto 1rem;
  }
`