import { createStore } from 'redux'
import reducer from './reducers'

const initStates = {
  playerActive: 'a',
  cuadrants: [],
  results: [[null, null, null], [null, null, null], [null, null, null]],
  gameFinished: false
}

export default createStore(reducer, initStates)
