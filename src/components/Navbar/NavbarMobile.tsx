import styles from './NavbarMobile.module.css'
import Logo from '@components/Logo'
import { useTheme } from '@contexts/ThemeProvider'
import data from './Navbar.data'
import React, { createElement, useState } from 'react'
import { useLanguage } from '@contexts/LanguageProvider'
import { IoMdSettings } from 'react-icons/io'
import Languages from '@components/Languages'
import ThemeSelect from '@components/ThemeSelect'
import DarkModeSelect from '@components/DarkModeSelect'

const NavbarMobile: React.FC = () => {
  const { thm } = useTheme()
  const { language } = useLanguage()
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const [settingsIsOpen, setSettingsIsOpen] = useState(false)

  const handleToggleMenu = () => {
    if (settingsIsOpen) setSettingsIsOpen(false)
    setMenuIsOpen(!menuIsOpen)
  }

  const handleToggleSettings = () => {
    if (menuIsOpen) setMenuIsOpen(false)
    setSettingsIsOpen(!settingsIsOpen)
  }

  return (
    <div className={styles.container}>
      <div
        className={styles.icons}
        style={
          {
            '--bg': thm.background,
          } as React.CSSProperties
        }>
        <Logo size={24} />
        <div
          className={`${styles.settingsIcon} ${
            settingsIsOpen ? styles.activeSettingsIcon : ''
          }`}
          style={
            {
              '--hover': thm.primary,
            } as React.CSSProperties
          }
          onClick={handleToggleSettings}>
          <IoMdSettings />
        </div>
        <div
          className={`${styles.menuIcon} ${menuIsOpen ? styles.active : ''}`}
          onClick={handleToggleMenu}>
          <span
            className={styles.firstSpan}
            style={
              {
                '--clr': `${thm.text}`,
                '--bg': `${thm.primary}`,
              } as React.CSSProperties
            }></span>
          <span
            className={styles.secondSpan}
            style={
              {
                '--clr': `${thm.text}`,
                '--bg': `${thm.primary}`,
              } as React.CSSProperties
            }></span>
          <span
            className={styles.thirdSpan}
            style={
              {
                '--clr': `${thm.text}`,
                '--bg': `${thm.primary}`,
              } as React.CSSProperties
            }></span>
        </div>
      </div>
      <div
        className={`${styles.settings} ${
          settingsIsOpen ? styles.activeSettings : ''
        }`}
        style={
          {
            '--bg': thm.background,
          } as React.CSSProperties
        }>
        <h2 className={styles.settingsHeader}>
          {language === 'en' ? 'Settings' : 'Configurações'}
        </h2>
        <p>
          {language === 'en' ? 'Choose your language' : 'Escolha seu idioma'}
        </p>
        <Languages />
        <br />
        <p>
          {language === 'en'
            ? 'Choose a color scheme'
            : 'Escolha um esquema de cores'}
        </p>
        <ThemeSelect />
        <br />
        <DarkModeSelect />
      </div>
      <ul
        className={`${styles.menu} ${menuIsOpen ? styles.active : ''}`}
        style={
          {
            '--bg': thm.background,
          } as React.CSSProperties
        }>
        {data.map((link, index) => {
          let Icon = createElement(link.icon, { color: thm.primary })
          return (
            <li
              className={styles.menuItem}
              style={{ '--clr': `${thm.primary}` } as React.CSSProperties}
              key={index}>
              <a href={link.to}>
                {Icon}&nbsp;{link.name[language]}
              </a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default NavbarMobile
