import styles from './NavbarDesktop.module.css'
import Logo from '@components/Logo'
import { useTheme } from '@contexts/ThemeProvider'
import data from './Navbar.data'
import React, { createElement, useState } from 'react'
import { useLanguage } from '@contexts/LanguageProvider'
import { IoMdSettings } from 'react-icons/io'
import Languages from '@components/Languages'
import ThemeSelect from '@components/ThemeSelect'
import DarkModeSelect from '@components/DarkModeSelect'

const NavbarDesktop: React.FC = () => {
  const { thm } = useTheme()
  const { language } = useLanguage()
  const [settingsIsOpen, setSettingsIsOpen] = useState(false)

  const handleToggleSettings = () => {
    setSettingsIsOpen(!settingsIsOpen)
  }

  return (
    <>
      <div
        className={styles.container}
        style={{
          backgroundColor: thm.background,
        }}>
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
        <ul
          className={styles.menu}
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
      <div
        className={`${styles.settings} ${
          settingsIsOpen ? styles.activeSettings : ''
        }`}
        style={
          {
            '--shadow': thm.shadow,
            '--bg': thm.background,
          } as React.CSSProperties
        }>
        <div style={{
          display: 'flex',
          width: '100%',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
          <h2 className={styles.settingsHeader}>
            {language === 'en' ? 'Settings' : 'Configurações'}
          </h2>
          <span onClick={handleToggleSettings} style={{
            color: thm.primary,
            fontSize: '1.5rem',
            cursor: 'pointer',
          }}>&#xfbe;</span>
        </div>
        <p>
          {language === 'en' ? 'Choose your language' : 'Escolha seu idioma'}
        </p>
        <Languages />
        <br />
        <p>
          {language === 'en'
            ? 'Choose a color scheme'
            : 'Escolha seu tema'}
        </p>
        <ThemeSelect />
        <br />
        <DarkModeSelect />
      </div>
    </>
  )
}

export default NavbarDesktop
