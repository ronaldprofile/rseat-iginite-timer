import styled from 'styled-components'

export const LayoutContainer = styled.div`
  max-width: 74rem;
  width: 90%;

  margin: 5rem auto;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;

  background-color: ${props => props.theme['gray-800']};

  border-radius: 8px;

  @media (max-width: 780px) {
    & {
      padding: 2rem;
    }
  }
`
