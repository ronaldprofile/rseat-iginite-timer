import { useFormContext } from 'react-hook-form'
import { useCycles } from '../../../../context/Cycles/useCycles'

import {
  FormContainer,
  InputGroup,
  MinutesAmountInput,
  TaskInput,
} from './styles'

export function NewCycleForm() {
  const { activeCycle } = useCycles()
  const { register } = useFormContext()

  return (
    <FormContainer>
      <InputGroup>
        <label htmlFor="task">Vou trabalhar em</label>
        <TaskInput
          type="text"
          id="task"
          list="tasks-worked"
          placeholder="nome para o seu projeto"
          {...register('task')}
          disabled={!!activeCycle}
        />

        <datalist id="tasks-worked">
          <option value="Calmap" />
        </datalist>
      </InputGroup>

      <InputGroup>
        <label htmlFor="minutesAmount">durante</label>
        <MinutesAmountInput
          type="number"
          id="minutesAmount"
          placeholder="00"
          step={5}
          min={5}
          max={60}
          {...register('minutesAmount', { valueAsNumber: true })}
          disabled={!!activeCycle}
        />
      </InputGroup>
      <span>minutos.</span>
    </FormContainer>
  )
}
