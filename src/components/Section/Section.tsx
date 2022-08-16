import styles from './Section.module.css'
import { useInView } from 'react-intersection-observer'
import SectionTitle from '@components/SectionTitle'

type SectionProps = {
  id: string
  title: string
  description: string
  icon: React.ComponentType
  children: React.ReactNode
}

const Section: React.FC<SectionProps> = ({ description, icon, id, title, children }) => {
  const { inView, ref } = useInView({ threshold: 0 })

  return (
    <section id={id} className={styles.session}>
      <div ref={ref}>
        {inView && (
          <SectionTitle
            title={title}
            description={description}
            icon={icon}
          />
        )}
      </div>
      {children}
    </section>
  )
}

export default Section
