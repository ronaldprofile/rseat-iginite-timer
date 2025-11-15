import { useEffect } from 'react'
import { differenceInSeconds } from 'date-fns'
import { useCycles } from '../../../../context/Cycles/useCycles'
import { CountdownContainer, Separator } from './styles'

export function Countdown() {
  const {
    activeCycle,
    activeCycleId,
    markCurrentCycleAsFinished,
    amountSecondsPassed,
    setSecondsPassed
  } = useCycles()

  const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0

  const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0
  const minutesAmount = Math.floor(currentSeconds / 60)
  const secondsAmount = currentSeconds % 60

  const [minutesLeft, minutesRight] = String(minutesAmount).padStart(2, '0')
  const [secondsLeft, secondsRight] = String(secondsAmount).padStart(2, '0')

  useEffect(() => {
    let interval: NodeJS.Timeout

    if (activeCycle) {
      interval = setInterval(() => {
        const secondsDifference = differenceInSeconds(
          new Date(),
          new Date(activeCycle.startDate)
        )

        if (secondsDifference >= totalSeconds) {
          markCurrentCycleAsFinished()

          setSecondsPassed(0)
          clearInterval(interval)
        } else {
          setSecondsPassed(secondsDifference)
        }
      }, 1000)
    }

    return () => {
      clearInterval(interval)
    }
  }, [
    activeCycle,
    activeCycleId,
    markCurrentCycleAsFinished,
    setSecondsPassed,
    totalSeconds
  ])

  useEffect(() => {
    if (activeCycle) {
      document.title = `Timer ${minutesLeft}${minutesRight} :${secondsLeft}${secondsRight}`
    }
  }, [activeCycle, minutesLeft, minutesRight, secondsLeft, secondsRight])

  return (
    <CountdownContainer>
      <span>{minutesLeft}</span>
      <span>{minutesRight}</span>
      <Separator>:</Separator>
      <span>{secondsLeft}</span>
      <span>{secondsRight}</span>
    </CountdownContainer>
  )
}
