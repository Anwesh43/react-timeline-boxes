import {useAnimatedScale, useDimension} from './hooks'
import TimeLineBoxComponent from './TimelineBoxComponent'
import React, {useEffect} from 'react'
import {StartingBox} from './Box'

const TimeLineBoxes = ({w, hSize, h, scale, j, texts}) => {
    const timeLineBoxes = []
    for (var i = 0; i < texts.length; i++) {
        const sc = j == i ? scale : (i < j) ? 1 : 0
        timeLineBoxes.push(<TimeLineBoxComponent i = {i} text = {texts[i]} hSize = {hSize} w = {w} h = {h} scale = {sc}/>)
    }
    return <React.Fragment>{timeLineBoxes}</React.Fragment>
}

const TimelineContainer = ({texts}) => {
    const n = texts.length
    const {w, h, enableResize, disableResize} = useDimension()
    const {start, scale, i} = useAnimatedScale(0.02, 30, n)
    const hSize = h / (n * 2 + 1)
    useEffect(() => {
        enableResize()
        return disableResize
    })
    return (<div>
            <StartingBox w = {w} hSize = {hSize} onClick = {start}/>
            <TimeLineBoxes texts = {texts} w = {w} h = {h} hSize = {hSize} scale = {scale} j = {i}/>
        </div>)
}

export default TimelineContainer
