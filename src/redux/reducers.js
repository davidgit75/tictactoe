import { combineReducers } from 'redux'
import { SET_ACTIVE_PLAYER, ADD_CUADRANT_SELECTED, CLEAR_CUADRANTS } from './actions'

const playerActive = (state=null, action) => {
  const { type, player } = action
  switch(type) {
    case SET_ACTIVE_PLAYER:
      return player
    default:
      return state
  }
}

const cuadrantsSelected = (state=[], action) => {
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

export default combineReducers({
  playerActive,
  cuadrants: cuadrantsSelected
})
