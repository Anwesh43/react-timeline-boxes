import React from 'react'

const textStyle = (scale, hSize, w, h, i) => {
    console.log("TextNode", hSize)
    const top = `${hSize * (i * 2 + 2)}px`
    const color = "#212121"
    const fontSize = `${Math.min(w, h) / 15}px`
    const left = `${w + (w / 2 + 2 * hSize - w) * scale}px`
    const position = 'absolute'
    const opacity = scale
    const overflow = 'visible'
    return {position, left, top, color, fontSize, opacity, overflow}
}

const TextNode = ({text, w, h, scale, i, hSize}) => {
    return <div style = {textStyle(scale, hSize, w, h, i)}>
            {text}
        </div>
}

export default TextNode
