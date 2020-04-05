import React from 'react'
import Line from './Line'
import {TimeLineBox} from './Box'
import {divideScale} from './utils'
import TextNode from './TextNode'

const TimeLineBoxComponent = ({w, h, scale, hSize, i, text}) => {
    const scBox = divideScale(scale, 1, 3)
    const scLine = divideScale(scale, 0, 3)
    const scText = divideScale(scale, 2, 3)
    return <div>
              <TimeLineBox i = {i} w = {w} hSize = {hSize} scale = {scBox}/>
              <Line i = {i} w = {w} h = {h} scale = {scLine} hSize = {hSize}/>
              <TextNode text = {text} w = {w} hSize = {hSize} h = {h} i = {i} scale = {scText}/>
          </div>
}

export default TimeLineBoxComponent
