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

export const FormContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: ${(props) => props.theme['gray-100']};
  font-size: 1.125rem;
  font-weight: bold;
  flex-wrap: wrap;
`

export const InputGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

const BaseInput = styled.input`
  background: transparent;
  height: 2.5rem;
  border: 0;
  border-bottom: 2px solid ${(props) => props.theme['gray-500']};
  font-weight: bold;
  font-size: 1.125rem;
  padding: 0 0.5rem;
  color: ${(props) => props.theme['gray-100']};
  transition: 0.1s;

  &:focus {
    box-shadow: none;
    border-color: ${(props) => props.theme['green-500']};
  }

  &::placeholder {
    color: ${(props) => props.theme['gray-500']};
  }
`

export const TaskInput = styled(BaseInput)`
  flex: 1;

  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }
`
export const MinutesAmountInput = styled(BaseInput)`
  width: 4rem;
`

export const CountdownContainer = styled.div`
  font-family: 'Roboto Mono', monospace;
  font-size: 10rem;
  color: ${(props) => props.theme['gray-100']};
  line-height: 8rem;

  display: flex;
  gap: 1rem;

  span {
    padding: 2rem 1rem;
    background-color: ${(props) => props.theme['gray-700']};
    border-radius: 8px;
  }
`

export const Separator = styled.div`
  padding: 2rem 0;
  color: ${(props) => props.theme['green-500']};
  width: 4rem;
  overflow: hidden;
  display: flex;
  justify-content: center;
`

export const StartCountdownButton = styled.button`
  width: 100%;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 0.5rem;
  font-weight: bold;
  background-color: ${(props) => props.theme['green-500']};
  color: ${(props) => props.theme['gray-100']};
  border: 0;
  border-radius: 8px;
  transition: filter 0.1s;

  &:not(:disabled):hover {
    background-color: ${(props) => props.theme['green-700']};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.7;
  }
`
