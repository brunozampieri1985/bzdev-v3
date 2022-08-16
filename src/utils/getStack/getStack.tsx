import {
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiJest,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiTypescript,
  SiVercel,
} from 'react-icons/si'

export const getStack = (skill: string, theme: string, size: number) => {
  let color, Icon
  switch (skill.toLocaleLowerCase()) {
    case 'html':
      color = 'orange'
      Icon = <SiHtml5 color={color} size={size} />
      break
    case 'css':
      color = '#0070f3'
      Icon = <SiCss3 color={color} size={size} />
      break
    case 'typescript':
      color = '#0070f3'
      Icon = <SiTypescript color={color} fontSize={size} />
      break
    case 'javascript':
      color = theme === 'dark' ? '#ffd700' : '#9B870C'
      Icon = <SiJavascript color={color} fontSize={size} />
      break
    case 'react.js':
      color = theme === 'dark' ? '#61dafb' : '#0070f3'
      Icon = <SiReact color={color} fontSize={size} />
      break
    case 'redux':
      color = '#990099'
      break
    case 'next.js':
      color = theme === 'dark' ? 'white' : 'black'
      Icon = <SiNextdotjs color={color} fontSize={size} />
      break
    case 'vercel':    
      color = theme === 'dark' ? 'white' : 'black'
      Icon = <SiVercel color={color} fontSize={size} />
      break
    case 'unit test - jest':
      color = '#ff0000'
      Icon = <SiJest color={color} fontSize={size} />
      break
    case 'node.js':
      color = theme === 'dark' ? 'limegreen' : '#009900'
      Icon = <SiNodedotjs color={color} fontSize={size} />
      break
    case 'rest api':
      color = theme === 'dark' ? 'white' : 'black'
      break
    default:
      color = 'white'
      break
  }
  return { color, Icon }
}
