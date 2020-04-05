import React from 'react'
import {dynamicColor, staticColor, lineWidthFactor} from 'react'

const lineStyle = (hSize, w, h, i, background, scale) => {
    const height = `${hSize * scale}px`
    const lineWidth = Math.min(w, h) / lineWidthFactor
    const position = 'absolute'
    const top = `${hSize * (2 * i + 1)}px`
    const left = `${w / 2 - lineWidth / 2}px`
    const width = `${lineWidth}px`
    return {position, top, left, width, height, background}
}

const LineDiv = ({hSize, w, h, i, background, scale}) =>{
    return <div style = {lineStyle(hSize, w, h, i, background, scale)}>
      </div>
}

const Line = (props) => {
    return <React.Fragment>
              <LineDiv {...props} scale = {1} i = {props.i * 2 + 2} background = {staticColor}/>
              <LineDiv {...props} i = {props.i * 2 + 2} background = {dynamicColor}/>
          </React.Fragment>
}

export default Line
