import { useContext } from 'react'
import { CyclesContext } from './CyclesContext'

export const useCycles = () => {
  const context = useContext(CyclesContext)

  if (!context) throw new Error('useCycle must be use within CyclesContext')
  return context
}
