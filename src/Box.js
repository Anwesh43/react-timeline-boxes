import React from 'react'
import {boxWidthFactor, staticColor, dynamicColor} from './constants'


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


export const Box = ({i, scale, hSize, w, color, children, onClick}) => {
  console.log(i, scale, hSize, w, color)
    return (<div onClick = {onClick} style = {boxStyle(i, hSize, w, scale, color)}>
              {children}
          </div>)
}

export const TimeLineBox =  (props) => {
    return <React.Fragment>

            <Box key = {`static_${props.i}`} {...props} color = {staticColor} scale = {1} i = {2 * props.i + 2}/>
            <Box key = {`dynamic_${props.i}`} {...props} color = {dynamicColor} i = {2 * props.i + 2}/>
        </React.Fragment>
}

export const StartingBox = ({w, hSize, onClick}) => {
    return <Box i = {0} scale = {1} onClick = {onClick} color = {dynamicColor} w = {w} hSize = {hSize}>
          Next
      </Box>
}
