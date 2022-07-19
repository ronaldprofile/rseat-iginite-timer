import styled from 'styled-components'

export const HomeContainer = styled.main`
  display: flex;
  flex: 1;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.5rem;
  }
`
export const CountdownButtonBase = styled.button`
  width: 100%;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 0.5rem;
  font-weight: bold;
  color: ${(props) => props.theme['gray-100']};

  border: 0;
  border-radius: 8px;
  transition: filter 0.1s;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.7;
  }
`
export const StartCountdownButton = styled(CountdownButtonBase)`
  background-color: ${(props) => props.theme['green-500']};

  &:not(:disabled):hover {
    background-color: ${(props) => props.theme['green-700']};
  }
`

export const StopCountdownButton = styled(CountdownButtonBase)`
  background-color: ${(props) => props.theme['red-500']};

  &:not(:disabled):hover {
    background-color: ${(props) => props.theme['red-700']};
  }
`
