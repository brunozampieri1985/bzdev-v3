import { useEffect, useState } from 'react'

type ScreenSize = {
  width: number
  height: number
}

const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState<ScreenSize>({
    width: 0,
    height: 0,
  })

  useEffect(() => {
    const getScreenSize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    getScreenSize()
    window.addEventListener('resize', getScreenSize)

    return () => {
      window.removeEventListener('resize', getScreenSize)
    }
  }, [])

  return screenSize
}


export default useScreenSize