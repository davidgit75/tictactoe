import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import './styles.css'

const getStyle = (left, top, right, bottom) => {
  let style = ''
  style += left ? ' leftBorder' : ' noLeftBorder'
  style += top ? ' topBorder' : ' noTopBorder'
  style += right ? ' rightBorder' : ' noRightBorder'
  style += bottom ? ' bottomBorder' : ' noBottomBorder'
  return style
}

const getTypeFigure = (playerActive, canvasId, containerCanvasId) => {
  const canvas = document.getElementById(canvasId)
  const context = canvas.getContext('2d')
  const containerCanvas = document.querySelector(`.${containerCanvasId}`)
  const coordinates = {
    left: containerCanvas.offsetLeft,
    top: containerCanvas.offsetTop,
    width: containerCanvas.offsetWidth,
    height: containerCanvas.offsetHeight,
  }
  if (playerActive==='a') {
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

const Cuadrant = (props) => {
  const { left, top, right, bottom, type, id } = props
  const canvasId = `canvas-${id}`
  const containerCanvasId = `container-canvas-${id}`
  return (
    <div
      className={['main-container-cuadrant', getStyle(left, top, right, bottom)]}
      onClick={() => {
        if (props.cuadrants.indexOf(parseInt(id)) < 0) {
          props.onClick();
          getTypeFigure(props.playerActive, canvasId, containerCanvasId)
        }
      }}
    >
      <div className={containerCanvasId}>
        <canvas id={canvasId} width='80' height='80'>{type}</canvas>
      </div>
    </div>
  )
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
  cuadrants: state.cuadrants
})

export default connect(mapStateToProps)(Cuadrant)
