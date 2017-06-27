import { combineReducers } from 'redux'
import { SET_ACTIVE_PLAYER, ADD_CUADRANT_SELECTED, CLEAR_CUADRANTS, SET_RESULTS, SET_GAME_FINISHED } from './actions'

const playerActive = (state=null, action) => {
  const { type, player } = action
  switch(type) {
    case SET_ACTIVE_PLAYER:
      return player
    default:
      return state
  }
}

const cuadrants = (state=[], action) => {
  const { type, cuadrant } = action
  switch(type) {
    case ADD_CUADRANT_SELECTED:
      if (state.indexOf(cuadrant) >= 0) return [...state]
      else return [...state, cuadrant]
    case CLEAR_CUADRANTS:
      return []
    default:
      return state
  }
}

const results = (state=[], action) => {
  const { type, results } = action
  switch(type) {
    case SET_RESULTS:
      return results
    default:
      return state
  }
}

const gameFinished = (state=[], action) => {
  const { type, finished } = action
  switch(type) {
    case SET_GAME_FINISHED:
      return finished
    default:
      return state
  }
}

export default combineReducers({
  playerActive,
  cuadrants,
  results,
  gameFinished
})
