import {
    SiTypescript,
    SiNextdotjs,
    SiChakraui,
    SiVercel,
    SiCsharp,
    SiDotnet,
    SiReact,
    SiJavascript,
    SiPython,
    SiJest,
    SiNodedotjs,
} from 'react-icons/si'

export interface TechIconProps {
    tech: string
    size: number
}

const TechStack: React.FC<TechIconProps> = ({ tech, size }) => {
    let color
    let label
    let Icon
    const IconToShow: React.FC<{ icon: React.ReactNode }> = ({ icon }) => <>{icon}</>
    switch (tech) {
        case 'typescript':
            color = '#0070f3'
            Icon = <SiTypescript color={color} fontSize={size} />
            label = 'TypeScript'
            break
        case 'javascript':
            color = '#ffd700'
            Icon = <SiJavascript color={color} fontSize={size} />
            label = 'JavaScript'
            break
        case 'react':
            color = '#61dafb'
            Icon = <SiReact color={color} fontSize={size} />
            label = 'React'
            break
        case 'nextjs':
            color = 'white'
            Icon = <SiNextdotjs color={color} fontSize={size} />
            label = 'Next.js'
            break
        case 'chakra':
            color = '#128596'
            Icon = <SiChakraui color={color} fontSize={size} />
            label = 'Chakra UI'
            break
        case 'vercel':
            color = '#f5f5f5'
            Icon = <SiVercel color={color} fontSize={size} />
            label = 'Vercel'
            break
        case 'csharp':
            color = '#0070f3'
            Icon = <SiCsharp color={color} fontSize={size} />
            label = 'C#'
            break
        case '.net':
            color = '#0070f3'
            Icon = <SiDotnet color={color} fontSize={size} />
            label = '.NET'
            break
        case 'python':
            color = '#ffd700'
            Icon = <SiPython color={color} fontSize={size} />
            label = 'Python'     
            break
        case 'jest':
            color = '#ff0000'
            Icon = <SiJest color={color} fontSize={size} />
            label = 'Jest'
            break
        case 'node':
            color = '#009900'
            Icon = <SiNodedotjs color={color} fontSize={size} />
            label = 'Node.js'
            break
        default:
            color = 'white'
    }

    return (
        <IconToShow icon={Icon} />
    )
   
}

export default TechStack