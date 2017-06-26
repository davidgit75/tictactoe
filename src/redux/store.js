import { createStore } from 'redux'
import reducer from './reducers'

const initStates = {
  playerActive: 'a',
  cuadrants: []
}

export default createStore(reducer, initStates)
