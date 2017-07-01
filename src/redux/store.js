import { createStore } from 'redux'
import reducer from './reducers'

const initStates = {
  results: {playerActive: 'a', results: [[null, null, null], [null, null, null], [null, null, null]]},
  gameFinished: false
}

const store = createStore(reducer, initStates)
window.store = store

export default store
