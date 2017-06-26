import { SET_ACTIVE_PLAYER, ADD_CUADRANT_SELECTED, CLEAR_CUADRANTS } from './actions'

export const activePlayer = player => ({
  type: SET_ACTIVE_PLAYER,
  player
})

export const addCuadrant = cuadrant => ({
  type: ADD_CUADRANT_SELECTED,
  cuadrant
})

export const clearCuadrants = () => ({
  type: CLEAR_CUADRANTS
})
