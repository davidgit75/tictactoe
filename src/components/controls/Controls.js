import React from 'react'
import PropTypes from 'prop-types'

import './styles.css'

const Controls = (props) => {
  const { playerActive } = props
  return (
    <div className='controls--container'>
      <p className='data-player'>Player: <span className={`data-player-${playerActive}`}>{playerActive}</span></p>
    </div>
  )
}

Controls.propTypes = {
  playerActive: PropTypes.string.isRequired
}

export default Controls
