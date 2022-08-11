import NextLink from 'next/link'
import { GoLinkExternal } from 'react-icons/go'
import { useTheme } from '@contexts/ThemeProvider'

type LinkProps = {
  href: string
  children: React.ReactNode
  external?: boolean
}

const Link: React.FC<LinkProps> = ({ href, children, external }) => {
  const { thm } = useTheme()
  return (
    <NextLink href={href} passHref={true}>
      <a
        style={{
          textDecoration: 'none',
          color: thm.primary,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        target={external ? '_blank' : '_self'}>
        {children}
        {external && (
          <>
            &nbsp;
            <GoLinkExternal />
          </>
        )}
      </a>
    </NextLink>
  )
}

export default Link
