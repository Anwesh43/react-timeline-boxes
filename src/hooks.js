import {useState} from 'react'

export const useAnimatedScale = (scGap, delay, n) => {
    const [scale, setScale] = useState(0)
    const [animated, setAnimated] = useState(false)
    const [i, setI] = useState(0)
    const [dir, setDir] = useState(1)

    return {
        scale,
        i,
        start() {
            if (!animated) {
                let currScale = scale
                setAnimated(true)
                const interval = setInterval(() => {
                    currScale += scGap * dir
                    setScale(currScale)
                    if (Math.abs(currScale - scale) > 1) {
                        setScale(currScale - dir)
                        if (i + dir == n || i + dir == -1) {
                            setDir(-dir)
                            setScale(scale + dir)
                        } else {
                            setI(i + dir)
                        }
                        setAnimated(false)
                        clearInterval(interval)
                    }
                }, delay)
            }
        }
    }
}

export const useDimension = () => {
    const [w, setW] = useState(window.innerWidth)
    const [h, setH] = useState(window.innerHeight)
    return {
        w,
        h,

        enableResize() {
            window.onresize = () => {
                setW(window.innerWidth)
                setH(window.innerHeight)
            }

        },

        disableResize() {

        }
    }
}
