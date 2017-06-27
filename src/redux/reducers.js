import { combineReducers } from 'redux'
import { SET_ACTIVE_PLAYER, ADD_CUADRANT_SELECTED, CLEAR_CUADRANTS, SET_RESULTS, SET_GAME_FINISHED } from './actions'
import {makeAIMove, makeRandomMove} from './ai'


const otherPlayer = (player) => player === 'a' ? 'b' : 'a'


const results = (state={}, action) => {
  const { type, results } = action
  switch(type) {
    case SET_RESULTS:
      return results

    case 'MAKE_PLAYER_MOVE':
      const new_results = [...state.results]
      new_results[action.row][action.col] = action.player
      return {...state, results: new_results, playerActive: otherPlayer(action.player)}

    case 'MAKE_RANDOM_MOVE':
      return {...state, results: makeRandomMove(state.results, action.player), playerActive: otherPlayer(action.player)}

    case 'MAKE_AI_MOVE':
      return {...state, results: makeAIMove(state.results, action.player), playerActive: otherPlayer(action.player)}

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
  results,
  gameFinished
})
