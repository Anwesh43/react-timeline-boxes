import React from 'react'
import {boxWidthFactor, staticColor, dynamicColor} from './constants'

const boxWidthFactor = 8
const staticColor = '#9E9E9E'
const dynamicColor = '#3F51B5'

const boxStyle = (i, hSize, w, scale, background) => {
    const wSize = w / boxWidthFactor
    const width = `${wSize}px`
    const height = `${hSize * scale}px`
    const top = `${hSize * i}px`
    const left = `${w / 2 - wSize / 2}px`
    const position = 'absolute'
    const color = 'white'
    const textAlign = 'center'
    return {width, height, position, left, top, background, color, textAlign}
}


export const Box = ({i, scale, hSize, w, color, children}) => {
    return (<div style = {boxStyle(i, hSize, w, scale, color)}>
              {children}
          </div>)
}

export const TimeLineBox =  (props) => {
    return <React.Fragment>

            <Box key = {`static_${i}`} {...props} color = {staticColor} scale = {1} i = {props.i + 2}/>
            <Box key = {`dynamic_${i}`} {...props} color = {dynamicColor} i = {props.i + 2}/>
        </React.Fragment>
}

export const StartingBox = ({w, hSize}) => {
    return <Box i = {0} scale = {1} color = {dynamicColor}>
          Next
      </Box>
}
