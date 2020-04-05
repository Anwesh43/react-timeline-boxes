import {useAnimatedScale, useDimension} from './hooks'
import TimeLineBoxComponent from './TimelineBoxComponent'
import React from 'react'
import {StartingBox} from './Box'

const TimeLineBoxes = ({w, hSize, h, scale, j, n}) => {
    const timeLineBoxes = []
    for (var i = 0; i < n; i++) {
        const sc = j == i ? scale : (i < j) ? 1 : 0
        timeLineBoxes.push(<TimeLineBoxComponent i = {i} hSize = {hSize} w = {w} h = {h} scale = {sc}/>)
    }
    return <React.Fragment>{timeLineBoxes}</React.Fragment>
}

const TimelineContainer = ({n}) => {
    const {w, h, enableResize, disableResize} = useDimension()
    const {start, scale, i} = useAnimatedScale(0.02, 30, n)
    const hSize = h / (n * 2 + 1)
    return (<div>
            <StartingBox w = {w} hSize = {hSize}/>
            <TimeLineBoxes w = {w} h = {h} hSize = {hSize} scale = {scale} j = {i} n = {n}/>
        </div>)
}

export default TimelineContainer
