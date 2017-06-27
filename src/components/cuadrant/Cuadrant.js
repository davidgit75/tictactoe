import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import './styles.css'

class Cuadrant extends Component {
  constructor(props) {
    super(props)
    this.canvasId = `canvas-${props.id}`
    this.containerCanvasId = `container-canvas-${props.id}`
  }

  getStyle() {
    const { left, top, right, bottom } = this.props
    let style = ''
    style += left ? ' leftBorder' : ' noLeftBorder'
    style += top ? ' topBorder' : ' noTopBorder'
    style += right ? ' rightBorder' : ' noRightBorder'
    style += bottom ? ' bottomBorder' : ' noBottomBorder'
    return style
  }

  getTypeFigure() {
    const { id } = this.props
    const canvas = document.getElementById(this.canvasId)
    const context = canvas.getContext('2d')
    const containerCanvas = document.querySelector(`.${this.containerCanvasId}`)
    const coordinates = {
      left: containerCanvas.offsetLeft,
      top: containerCanvas.offsetTop,
      width: containerCanvas.offsetWidth,
      height: containerCanvas.offsetHeight,
    }
    if (this.props.playerActive==='a') {
      context.beginPath()
      context.moveTo(10,10)
      context.lineTo(80-15, 84-15)
      context.moveTo(10,84-15)
      context.lineTo(84-15, 10)
      context.lineWidth=10
      context.strokeStyle = '#3F51B5'
      context.stroke()
    } else {
      context.beginPath()
      context.arc(coordinates.width/2,coordinates.height/2,coordinates.width/3,0,2*Math.PI)
      context.lineWidth=10
      context.strokeStyle = '#F44336'
      context.stroke()
    }
  }

  clearCanvas() {
    if (this.props.gameFinished) {
      setTimeout(() => {
        const canvas = document.getElementById(this.canvasId)
        const context = canvas.getContext('2d')
        const containerCanvas = document.querySelector(`.${this.containerCanvasId}`)
        context.clearRect(0, 0, canvas.width, canvas.height)
      },1500)
    }
  }

  render() {
    this.clearCanvas()
    return (
      <div
        className={['main-container-cuadrant', this.getStyle()]}
        onClick={() => {
          if (this.props.cuadrants.indexOf(parseInt(this.props.id)) < 0) {
            this.props.onClick();
            this.getTypeFigure(this.props.playerActive, this.canvasId, this.containerCanvasId)
          }
        }}
      >
        <div className={this.containerCanvasId}>
          <canvas id={this.canvasId} width='80' height='80'>{this.props.type}</canvas>
        </div>
      </div>
    );
  }
}

Cuadrant.propTypes = {
  left: PropTypes.bool.isRequired,
  top: PropTypes.bool.isRequired,
  right: PropTypes.bool.isRequired,
  bottom: PropTypes.bool.isRequired,
  type: PropTypes.string
}

const mapStateToProps = state => ({
  playerActive: state.playerActive,
  cuadrants: state.cuadrants,
  gameFinished: state.gameFinished
})

export default connect(mapStateToProps)(Cuadrant)
