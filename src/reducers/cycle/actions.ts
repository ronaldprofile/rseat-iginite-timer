import { Cycle } from '../../@types'

export enum ActionsType {
  ADD_NEW_CYCLE = 'ADD_NEW_CYCLE',
  INTERRUPT_CURRENT_CYCLE = 'INTERRUPT_CURRENT_CYCLE',
  MARK_CURRENT_CYCLE_AS_FINISHED = 'MARK_CURRENT_CYCLE_AS_FINISHED',
}

export function addNewCycleAction(newCycle: Cycle) {
  return {
    type: ActionsType.ADD_NEW_CYCLE,
    payload: {
      newCycle,
    },
  }
}

export function interruptCycleAction() {
  return {
    type: ActionsType.INTERRUPT_CURRENT_CYCLE,
  }
}

export function markCycleAsFinishedAction() {
  return {
    type: ActionsType.MARK_CURRENT_CYCLE_AS_FINISHED,
  }
}
