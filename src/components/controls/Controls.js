import React from 'react'
import PropTypes from 'prop-types'

import './styles.css'

const Controls = (props) => {
  const { playerActive, makeAIMove, makeRandomMove } = props
  return (
    <div className='controls--container'>
      <p className='data-player'>Player: <span className={`data-player-${playerActive}`}>{playerActive}</span></p><br/>
      <button onClick={makeRandomMove}>Random Move for {playerActive}</button>
      <button onClick={makeAIMove}>AI Move for {playerActive}</button>
    </div>
  )
}

Controls.propTypes = {
  playerActive: PropTypes.string.isRequired,
  makeAIMove: PropTypes.func,
  makeRandomMove: PropTypes.func,
}

export default Controls
