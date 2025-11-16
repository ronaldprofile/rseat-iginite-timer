import styled from 'styled-components'

export const CountdownContainer = styled.div`
  font-family: 'Roboto Mono', monospace;
  font-size: 10rem;
  color: ${props => props.theme['gray-100']};
  line-height: 8rem;

  display: flex;
  gap: 1rem;

  span {
    padding: 2rem 1rem;
    background-color: ${props => props.theme['gray-700']};
    border-radius: 8px;
  }

  @media (max-width: 780px) {
    & {
      font-size: 5rem;
    }

    & span {
      padding: 1rem;
    }
  }

  @media (max-width: 426px) {
    & {
      font-size: 2.5rem;
    }

    & span {
      padding: 1rem;
    }
  }
`

export const Separator = styled.div`
  padding: 2rem 0;
  color: ${props => props.theme['green-500']};
  width: 4rem;
  overflow: hidden;
  display: flex;
  justify-content: center;

  @media (max-width: 780px) {
    & {
      width: 2rem;

      padding: 1rem;
    }
  }

  @media (max-width: 426px) {
    & {
      width: 1rem;

      padding: 1rem;
    }
  }
`
