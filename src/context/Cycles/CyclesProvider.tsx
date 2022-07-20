import { ReactNode, useEffect, useReducer, useState } from 'react'
import { CyclesContext } from './CyclesContext'
import { cyclesReducer } from '../../reducers/cycle/reducer'
import { differenceInSeconds } from 'date-fns'

import {
  addNewCycleAction,
  interruptCycleAction,
  markCycleAsFinishedAction,
} from '../../reducers/cycle/actions'
import { Cycle } from '../../@types'

import audioNotification from '../../assets/notification.mp3'

interface CreateCycleData {
  task: string
  minutesAmount: number
}

export function CyclesProvider({ children }: { children: ReactNode }) {
  const [cyclesState, dispatch] = useReducer(
    cyclesReducer,
    {
      cycles: [],
      activeCycleId: null,
    },
    () => {
      const storedStateAsJSON = localStorage.getItem(
        '@ignite-timer:cycles-state-1.0.0',
      )

      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON)
      }

      return {
        cycles: [],
        activeCycleId: null,
      }
    },
  )

  const { cycles, activeCycleId } = cyclesState
  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)

  const [amountSecondsPassed, setAmountSecondsPassed] = useState(() => {
    if (activeCycle) {
      return differenceInSeconds(new Date(), new Date(activeCycle.startDate))
    }

    return 0
  })

  useEffect(() => {
    localStorage.setItem(
      '@ignite-timer:cycles-state-1.0.0',
      JSON.stringify(cyclesState),
    )
  }, [cyclesState])

  useEffect(() => {
    Notification.requestPermission()
  }, [])

  function createNewCycle(data: CreateCycleData) {
    const id = String(new Date().getTime())

    const newCycle: Cycle = {
      id,
      task: data.task,
      minutesAmount: data.minutesAmount,
      startDate: new Date(),
    }

    dispatch(addNewCycleAction(newCycle))

    setSecondsPassed(0)
  }

  function markCurrentCycleAsFinished() {
    dispatch(markCycleAsFinishedAction())

    new Audio(audioNotification).play()

    if (Notification.permission === 'granted') {
      new Notification('ignite timer', {
        body: `O ciclo para a tarefa ${activeCycle?.task} acabou`,
        icon: '🔔',
      })
    }
  }

  function interruptCurrentCycle() {
    dispatch(interruptCycleAction())
  }

  function setSecondsPassed(seconds: number) {
    setAmountSecondsPassed(seconds)
  }

  return (
    <CyclesContext.Provider
      value={{
        cycles,
        activeCycle,
        activeCycleId,
        amountSecondsPassed,
        markCurrentCycleAsFinished,
        interruptCurrentCycle,
        createNewCycle,
        setSecondsPassed,
      }}
    >
      {children}
    </CyclesContext.Provider>
  )
}
