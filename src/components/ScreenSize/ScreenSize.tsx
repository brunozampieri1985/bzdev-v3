import useScreenSize from 'src/hooks/useScreenSize'

const ScreenSize: React.FC = () => {
  const { width, height } = useScreenSize()

  if (process.env.NODE_ENV !== 'development') return null

  return (
    <div
      style={{
        backgroundColor: '#222',
        color: '#fff',
        display: 'flex',
        padding: '4px',
        width: 'fit-content',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 999,

      }}>
      {`${width}px x ${height}px`}
    </div>
  )
}

export default ScreenSize
