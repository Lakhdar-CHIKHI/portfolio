import { IconType } from 'react-icons'
import {
  SiDotNet,
  SiJavascript,
  SiTypescript,
  SiNodeDotJs,
  SiGraphql,
  SiApollographql,
  SiPhp,
  SiReact,
  SiNextDotJs,
  SiRedux,
  SiStyledComponents,
  SiGhost,
  SiVueDotJs,
  SiDocker,
  SiGooglecloud,
  SiCpanel,
  SiRancher,
  SiGitlab,
  SiPostgresql,
  SiMicrosoftsqlserver,
  SiMysql,
  SiMongodb,
  SiRedis,
  SiSocketDotIo,
  SiMaterialUi,
  SiFramer,
  SiGit,
  SiGnubash,
  SiVisualstudiocode,
  SiUnity,
  SiMicrosoft,
  SiElectron,
  SiLaravel,
  SiSpring,
  SiAngular,
  SiGithub,
  SiAmazonaws,
  SiDigitalocean,
  SiNginx,
  SiJenkins,
  SiTailwindcss,
  SiJava,
  SiCsharp,
} from 'react-icons/si'
import { BsQuestionSquare } from 'react-icons/bs'
import { AiOutlineAntDesign } from 'react-icons/ai'
import { FaSourcetree } from 'react-icons/fa'
import { IoLogoPwa } from 'react-icons/io5'

export type SkillCategory =
  | 'backend'
  | 'frontend'
  | 'cicd'
  | 'database'
  | 'ui frameworks'
  | 'productivity boost'
  | 'mobile'
  | 'desktop'
  | 'languages'

export type Skill = {
  name: string
  icon: IconType
}

export const Skills: {
  [key in SkillCategory]: Skill[]
} = {
  languages: [
    {
      name: 'Typescript',
      icon: SiTypescript,
    },{
      name: 'Javascript (ES6+)',
      icon: SiJavascript,
    },
    {
      name: 'PHP',
      icon: SiPhp,
    },
    {
      name: 'JAVA',
      icon: SiJava,
    },
    {
      name: 'C#',
      icon: SiCsharp,
    },
  ],backend: [
    {
      name: 'NestJS',
      icon: BsQuestionSquare,
    },{
      name: 'Laravel',
      icon: SiLaravel,
    },
    {
      name: 'Node',
      icon: SiNodeDotJs,
    },
    {
      name: 'SpringBoot',
      icon: SiSpring,
    },
    {
      name: 'Wordpress',
      icon: SiPhp,
    },
  ],
  frontend: [
    {
      name: 'React',
      icon: SiReact,
    },
    {
      name: 'NextJS',
      icon: SiNextDotJs,
    },
    {
      name: 'Redux',
      icon: SiRedux,
    },
    {
      name: 'VueJS',
      icon: SiVueDotJs,
    },
    {
      name: 'AngularJS',
      icon: SiAngular,
    },
  ],
  database: [
    {
      name: 'PostgreSQL',
      icon: SiPostgresql,
    },
    {
      name: 'MySQL',
      icon: SiMysql,
    },
    {
      name: 'MongoDb',
      icon: SiMongodb,
    },
    {
      name: 'Redis',
      icon: SiRedis,
    },
    {
      name: 'SQLite',
      icon: BsQuestionSquare,
    }
  ],
  cicd: [
    {
      name: 'Docker',
      icon: SiDocker,
    },
    {
      name: 'GCP',
      icon: SiGooglecloud,
    },
    {
      name: 'AWS',
      icon: SiAmazonaws,
    },
    {
      name: 'Digitalocean',
      icon: SiDigitalocean,
    },
    {
      name: 'Github CI/CD',
      icon: SiGithub,
    },
    {
      name: 'NGINX',
      icon: SiNginx,
    },
    {
      name: 'Jenkins',
      icon: SiJenkins,
    },
    {
      name: 'NX',
      icon: BsQuestionSquare,
    },
  ],
  'ui frameworks': [
    {
      name: 'ChakraUI',
      icon: BsQuestionSquare,
    },
    {
      name: 'Tailwindcss',
      icon: SiTailwindcss,
    },{
      name: 'AntDesign',
      icon: AiOutlineAntDesign,
    },
    {
      name: 'MaterialUI',
      icon: SiMaterialUi,
    },
    {
      name: 'Framer Motion',
      icon: SiFramer,
    },
    {
      name: 'Styled Components',
      icon: SiStyledComponents,
    },
  ],
  'productivity boost': [
    {
      name: 'VSCode',
      icon: SiVisualstudiocode,
    },
    {
      name: 'Git',
      icon: SiGit,
    },
    {
      name: 'Bash',
      icon: SiGnubash,
    }
  ],
  mobile: [
    {
      name: 'React Native',
      icon: SiReact,
    },
    {
      name: 'Web PWA',
      icon: IoLogoPwa,
    },
  ],
  desktop: [
    {
      name: 'Electron',
      icon: SiElectron,
    },
  ],
}

export const splitSkills = (srcArray: Skill[]) => {
  const arrLength = srcArray.length
  const isEvenChunk = arrLength % 2 === 0

  let chunk = 4
  if (isEvenChunk) {
    chunk = arrLength / 2
  } else if (arrLength <= 5 && arrLength > 2) {
    chunk = 3
  }

  let i = 0
  let j = 0
  const temporary = []
  for (i = 0, j = srcArray.length; i < j; i += chunk) {
    temporary.push(srcArray.slice(i, i + chunk))
  }
  return temporary
}
