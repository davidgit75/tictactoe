import React, { Component } from 'react'
import { connect } from 'react-redux'

import { activePlayer as setPlayerActiveAction, clearCuadrants as clearCuadrantsAction, addCuadrant as addCuadrantAction } from '../../redux/actionCreators'
import './styles.css'
import Cuadrant from '../cuadrant'
import Controls from '../Controls'

class App extends Component {
  addCuadrant(c) {
    if(this.props.cuadrants.indexOf(c) < 0) {
      this.props.setPlayerActive(this.props.playerActive==='a' ? 'b' : 'a')
      this.props.addCuadrant(c)
    }
  }

  render() {
    console.log('props app', this.props)
    return (
      <div className='container'>
        <div className='content'>
          <div className='row'>
            <Cuadrant left={false} top={false} right bottom id='0' onClick={() => this.addCuadrant(0)} />
            <Cuadrant left={false} top={false} right bottom id='1' onClick={() => this.addCuadrant(1)} />
            <Cuadrant left={false} top={false} right={false} bottom id='2' onClick={() => this.addCuadrant(2)} />
          </div>

          <div className='row'>
            <Cuadrant left={false} top={false} right bottom id='3' onClick={() => this.addCuadrant(3)} />
            <Cuadrant left={false} top={false} right bottom id='4' onClick={() => this.addCuadrant(4)} />
            <Cuadrant left={false} top={false} right={false} bottom id='5' onClick={() => this.addCuadrant(5)} />
          </div>

          <div className='row'>
            <Cuadrant left={false} top={false} right bottom={false} id='6' onClick={() => this.addCuadrant(6)} />
            <Cuadrant left={false} top={false} right bottom={false} id='7' onClick={() => this.addCuadrant(7)} />
            <Cuadrant left={false} top={false} right={false} bottom={false} id='8' onClick={() => this.addCuadrant(8)} />
          </div>
        </div>

        <div className='controls'>
          <Controls playerActive={this.props.playerActive} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  playerActive: state.playerActive,
  cuadrants: state.cuadrants
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
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
