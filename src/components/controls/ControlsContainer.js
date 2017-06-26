import React, { Component } from 'react'

import Controls from './Controls'

class ControlsContainer extends Component {
  render() {
    return (
      <div>
        <Controls
          playerActive={this.props.playerActive}
        />
      </div>
    )
  }
}

export default ControlsContainer
