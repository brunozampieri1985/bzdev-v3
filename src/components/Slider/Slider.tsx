import { useTheme } from '@contexts/ThemeProvider'
import useScreenSize from '@hooks/useScreenSize'
import React, { createElement, useEffect, useState } from 'react'
import styles from './Slider.module.css'

type SliderProps = {
  element: React.ElementType
  data: any[]
}

const Slider: React.FC<SliderProps> = ({ element, data }) => {
  const [sliderIndex, setSliderIndex] = useState(0)
  const [slidesPerScreen, setSlidesPerScreen] = useState(1)
  const { width: deviceWidth } = useScreenSize()
  const { theme, thm } = useTheme()

  console.log(data)

  useEffect(() => {
    const handleSlidesPerScreen = () => {
      if (deviceWidth > 500) setSlidesPerScreen(2)
      if (deviceWidth > 800) setSlidesPerScreen(3)
      if (deviceWidth > 1100) setSlidesPerScreen(4)
      if (deviceWidth < 500) setSlidesPerScreen(1)
    }
    handleSlidesPerScreen()
  }, [deviceWidth])

  const handleLeftClick = () => {
    if (sliderIndex > 0) {
      setSliderIndex(sliderIndex - 1)
    }
  }

  const handleRightClick = () => {
    if (sliderIndex < data.length / slidesPerScreen - 1) {
      setSliderIndex(sliderIndex + 1)
    }
  }

  const handlesStyles = {
    backgroundColor:
      theme.mode === 'dark' ? 'rgba(0,0,0,0.5)' : 'rgba(0,0,0,0.05)',
    color: thm.primary,
  }

  return (
    <div className={styles.sliderContainer}>
      {data.length > slidesPerScreen && (
        <button
          className={`${styles.handle} ${styles.leftHandle}`}
          style={handlesStyles as React.CSSProperties}
          onClick={() => handleLeftClick()}>
          &#8249;
        </button>
      )}
      <div
        className={styles.slider}
        style={
          {
            '--slider-index': sliderIndex,
            '--items-per-screen': slidesPerScreen,
          } as React.CSSProperties
        }>
        {data.map((item, index) => (
          <div key={index}>{createElement(element, { ...item })}</div>
        ))}
      </div>
      {data.length > slidesPerScreen && (
        <button
          className={`${styles.handle} ${styles.rightHandle}`}
          style={handlesStyles as React.CSSProperties}
          onClick={() => handleRightClick()}>
          &#8250;
        </button>
      )}
    </div>
  )
}

export default Slider
