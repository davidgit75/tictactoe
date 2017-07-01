import React, { Component } from 'react'
import { connect } from 'react-redux'

import {
  activePlayer as setPlayerActiveAction,
  clearCuadrants as clearCuadrantsAction,
  addCuadrant as addCuadrantAction,
  setResults as setResultsAction,
  setGameFinished as setGameFinishedAction
} from '../../redux/actionCreators'
import './styles.css'
import Cuadrant from '../cuadrant'
import Controls from '../Controls'
import { equalRowsData, equalColumnsData, equalDiagonalsData } from '../../utils/results'

class App extends Component {
  constructor() {
    super()
    this.canvasToMatrix = {
      0: [0, 0],
      1: [0, 1],
      2: [0, 2],
      3: [1, 0],
      4: [1, 1],
      5: [1, 2],
      6: [2, 0],
      7: [2, 1],
      8: [2, 2],
    }
  }

  gameFinished(newResults) {
    const equalRows = equalRowsData(newResults)
    const equalColumns = equalColumnsData(newResults)
    const equalDiagonals = equalDiagonalsData(newResults)
    const isFinished = equalRows.length || equalColumns.length || equalDiagonals.length
    this.props.setGameFinished(isFinished)
    return isFinished
  }

  addCuadrant(c) {
    if(this.props.cuadrants.indexOf(c) < 0) {
      const newPlayer = this.props.playerActive==='a' ? 'b' : 'a'
      const newResults = [...this.props.results]
      const positions = this.canvasToMatrix[c]
      newResults[positions[0]][positions[1]] = this.props.playerActive
      if(!this.gameFinished(newResults)) {
        this.props.setPlayerActive(newPlayer)
        this.props.addCuadrant(c)
        this.props.setResults(newResults)
      } else {
        setTimeout(() => {
          this.props.clearCuadrants()
          this.props.setGameFinished(false)
          this.props.setPlayerActive('a')
          this.props.setResults([[null, null, null], [null, null, null], [null, null, null]])
        }, 1500)
      }
    }
  }



  render() {
    // console.log('props app', this.props)
    const {results} = this.props
    return (
      <div>
        <Cuadrant row={0} col={0}/>|<Cuadrant row={0} col={1}/>|<Cuadrant row={0} col={2}/><br/><br/>
        <Cuadrant row={1} col={0}/>|<Cuadrant row={1} col={1}/>|<Cuadrant row={1} col={2}/><br/><br/>
        <Cuadrant row={2} col={0}/>|<Cuadrant row={2} col={1}/>|<Cuadrant row={2} col={2}/><br/>



        <div className='controls'>
          {
            !this.props.gameFinished ?
              <Controls playerActive={this.props.playerActive} makeAIMove={() => this.props.makeAIMove(this.props.playerActive)} makeRandomMove={() => this.props.makeRandomMove(this.props.playerActive)}/>
            : <p className='message-winner'>{`Player ${this.props.playerActive} is the winner`}</p>
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  playerActive: state.results.playerActive,
  cuadrants: state.cuadrants,
  results: state.results.results,
  gameFinished: state.gameFinished
})

const mapDispatchToProps = dispatch => ({
  addCuadrant(cuadrant) {
    return dispatch(addCuadrantAction(cuadrant))
  },
  clearCuadrants(){
    return dispatch(clearCuadrantsAction())
  },
  setPlayerActive(player){
    return dispatch(setPlayerActiveAction(player))
  },
  setResults(results) {
    return dispatch(setResultsAction(results))
  },
  setGameFinished(finish) {
    return dispatch(setGameFinishedAction(finish))
  },
  makeAIMove(player) {
    return dispatch({type: 'MAKE_AI_MOVE', player})
  },
  makeRandomMove(player) {
    return dispatch({type: 'MAKE_RANDOM_MOVE', player})
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
