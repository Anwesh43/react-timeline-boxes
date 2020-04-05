import {useState} from 'react'

export const useAnimatedScale = (scGap, delay, n) => {
    const [scale, setScale] = useState(scale, 0)
    const [animated, setAnimated] = useState(false)
    const [i, setI] = useState(0)
    const [dir, setDir] = useState(1)

    return {
        scale,
        start() {
            if (!animated) {
                let currScale = 0
                setAnimated(true)
                const interval = setInterval(() => {
                    currScale += scGap * dir
                    setScale(currScale)
                    if (Math.abs(currScale - scale) > 1) {
                        setScale(scale + dir)
                        if (i + dir == n || i + dir == 0) {
                            setDir(-dir)
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
