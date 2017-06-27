import { SET_ACTIVE_PLAYER, ADD_CUADRANT_SELECTED, CLEAR_CUADRANTS, SET_RESULTS, SET_GAME_FINISHED } from './actions'

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

export const setResults = (results) => ({
  type: SET_RESULTS,
  results
})

export const setGameFinished = (finished) => ({
  type: SET_GAME_FINISHED,
  finished
})
