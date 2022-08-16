import styles from './Hero.module.css'
import Image from 'next/image'
import data from './Hero.data'
import { useTheme } from '@contexts/ThemeProvider'
import { useLanguage } from '@contexts/LanguageProvider'
import useScreenSize from '@hooks/useScreenSize'
import Socials from '@components/Socials'

const Hero: React.FC = () => {
  const { thm } = useTheme()
  const { language } = useLanguage()
  const screenSize = useScreenSize()

  const imgSize =  screenSize.width > 768 ? 250 : 175

  
  return (
    <section id='Home' className={styles.container}>
      <div className={styles.blob}>
        <svg
          viewBox="0 0 800 500"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width="100%"
          id="blobSvg">
          <g transform="translate(152.45067596435547, 17.348480224609375)">
            <path fill={thm.primary}>
              <animate
                attributeName="d"
                dur="10s"
                repeatCount="indefinite"
                values="M447,309Q454,368,396.5,386Q339,404,294.5,424Q250,444,199.5,434Q149,424,102.5,393Q56,362,49,306Q42,250,64.5,203Q87,156,108,98.5Q129,41,189.5,31Q250,21,302.5,44Q355,67,392.5,106.5Q430,146,435,198Q440,250,447,309Z;
                M443,297.5Q415,345,380.5,381Q346,417,298,430Q250,443,196,440Q142,437,98,400Q54,363,36.5,306.5Q19,250,30,190Q41,130,98.5,108.5Q156,87,203,52Q250,17,297.5,51Q345,85,405.5,105Q466,125,468.5,187.5Q471,250,443,297.5Z;
                M451.5,295.5Q408,341,384,391Q360,441,305,445Q250,449,203.5,430Q157,411,95.5,393Q34,375,39,312.5Q44,250,68,204.5Q92,159,109,97Q126,35,188,28Q250,21,295.5,56.5Q341,92,399.5,111Q458,130,476.5,190Q495,250,451.5,295.5Z;
                M435,302.5Q432,355,402,408.5Q372,462,311,457.5Q250,453,188.5,458Q127,463,106.5,403.5Q86,344,68.5,297Q51,250,59,197Q67,144,99,94Q131,44,190.5,36.5Q250,29,295.5,60.5Q341,92,399,111Q457,130,447.5,190Q438,250,435,302.5Z;
                M420.5,297Q413,344,390.5,399Q368,454,309,454Q250,454,203.5,432.5Q157,411,123,377Q89,343,46.5,296.5Q4,250,50.5,205.5Q97,161,124.5,120.5Q152,80,201,48.5Q250,17,311.5,26.5Q373,36,393,96Q413,156,420.5,203Q428,250,420.5,297Z;
                M447,309Q454,368,396.5,386Q339,404,294.5,424Q250,444,199.5,434Q149,424,102.5,393Q56,362,49,306Q42,250,64.5,203Q87,156,108,98.5Q129,41,189.5,31Q250,21,302.5,44Q355,67,392.5,106.5Q430,146,435,198Q440,250,447,309Z
                "></animate>
            </path>
          </g>
        </svg>
      </div>
      <div className={styles.blob}>
        <svg
          viewBox="0 0 800 500"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width="100%"
          id="blobSvg">
          <g transform="translate(152.45067596435547, 17.348480224609375)">
            <path fill={thm.primary}>
              <animate
                attributeName="d"
                dur="10s"
                repeatCount="indefinite"
                values="M447,309Q454,368,396.5,386Q339,404,294.5,424Q250,444,199.5,434Q149,424,102.5,393Q56,362,49,306Q42,250,64.5,203Q87,156,108,98.5Q129,41,189.5,31Q250,21,302.5,44Q355,67,392.5,106.5Q430,146,435,198Q440,250,447,309Z;
                M443,297.5Q415,345,380.5,381Q346,417,298,430Q250,443,196,440Q142,437,98,400Q54,363,36.5,306.5Q19,250,30,190Q41,130,98.5,108.5Q156,87,203,52Q250,17,297.5,51Q345,85,405.5,105Q466,125,468.5,187.5Q471,250,443,297.5Z;
                M451.5,295.5Q408,341,384,391Q360,441,305,445Q250,449,203.5,430Q157,411,95.5,393Q34,375,39,312.5Q44,250,68,204.5Q92,159,109,97Q126,35,188,28Q250,21,295.5,56.5Q341,92,399.5,111Q458,130,476.5,190Q495,250,451.5,295.5Z;
                M435,302.5Q432,355,402,408.5Q372,462,311,457.5Q250,453,188.5,458Q127,463,106.5,403.5Q86,344,68.5,297Q51,250,59,197Q67,144,99,94Q131,44,190.5,36.5Q250,29,295.5,60.5Q341,92,399,111Q457,130,447.5,190Q438,250,435,302.5Z;
                M420.5,297Q413,344,390.5,399Q368,454,309,454Q250,454,203.5,432.5Q157,411,123,377Q89,343,46.5,296.5Q4,250,50.5,205.5Q97,161,124.5,120.5Q152,80,201,48.5Q250,17,311.5,26.5Q373,36,393,96Q413,156,420.5,203Q428,250,420.5,297Z;
                M447,309Q454,368,396.5,386Q339,404,294.5,424Q250,444,199.5,434Q149,424,102.5,393Q56,362,49,306Q42,250,64.5,203Q87,156,108,98.5Q129,41,189.5,31Q250,21,302.5,44Q355,67,392.5,106.5Q430,146,435,198Q440,250,447,309Z
                "></animate>
            </path>
          </g>
        </svg>
      </div>
      <div className={styles.imgWrapper}>
        <div className={styles.img}>
          <Image src="/profile-nobg.png" alt="profile" width={imgSize} height={imgSize} />
        </div>
      </div>
      <div className={styles.content} style={{
        '--bg': thm.primary, 
      } as React.CSSProperties}>        
        <h2 className={styles.greetings} style={{
        color: thm.primary, 
      } as React.CSSProperties}>{data.greetings[language]}</h2>
        <p className={styles.description}>{data.description[language]}</p>
        <Socials size={24}/>
      </div>
   
    </section>
  )
}

export default Hero
