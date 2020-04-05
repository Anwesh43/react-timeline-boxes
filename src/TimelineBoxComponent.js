import React from 'react'
import Line from './Line'
import {TimeLineBox} from './Box'
import {divideScale} from './utils'

const TimeLineBoxComponent = ({w, h, scale, hSize, i}) => {
    const scBox = divideScale(scale, 0, 2)
    const scLine = divideScale(scale, 1, 2)
    return <div>
              <TimeLineBox i = {i} w = {w} hSize = {hSize} scale = {scBox}/>
              <Line w = {w} h = {h} scale = {scale} hSize = {hSize}/>
          </div>
}

export default TimeLineBoxComponent
