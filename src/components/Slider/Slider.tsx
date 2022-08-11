import { useTheme } from '@contexts/ThemeProvider'
import useScreenSize from '@hooks/useScreenSize'
import React, { useEffect, useState } from 'react'
import styles from './Slider.module.css'

const Slider: React.FC = () => {
  const [sliderIndex, setSliderIndex] = useState(0)
  const [slidesPerScreen, setSlidesPerScreen] = useState(1)
  const { width: deviceWidth } = useScreenSize()
  const { theme, thm } = useTheme()

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
    if (sliderIndex < 8 / slidesPerScreen - 1) {
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
      <button
        className={`${styles.handle} ${styles.leftHandle}`}
        style={handlesStyles as React.CSSProperties}
        onClick={() => handleLeftClick()}>
        <div className={styles.handleText}>&#8249;</div>
      </button>
      <div
        className={styles.slider}
        style={
          {
            '--slider-index': sliderIndex,
            '--items-per-screen': slidesPerScreen,
          } as React.CSSProperties
        }>
        <div className={styles.sliderImg}>1</div>
        <div className={styles.sliderImg}>2</div>
        <div className={styles.sliderImg}>3</div>
        <div className={styles.sliderImg}>4</div>
        <div className={styles.sliderImg}>5</div>
        <div className={styles.sliderImg}>6</div>
        <div className={styles.sliderImg}>7</div>
        <div className={styles.sliderImg}>8</div>
      </div>
      <button
        className={`${styles.handle} ${styles.rightHandle}`}
        style={handlesStyles as React.CSSProperties}
        onClick={() => handleRightClick()}>
        <div className={styles.handleText}>&#8250;</div>
      </button>
    </div>
  )
}

export default Slider
