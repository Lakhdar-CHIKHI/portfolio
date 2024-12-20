import { Link } from '@chakra-ui/react'

export type Company = 'DataMasterDZ' | 'lemsa Innovation' | 'SehlaTech' | 'EmploiPartner' | 'Ghazaouet Port Authority' 

export type CompanyDetail = {
  name: string
  longName: string
  subDetail?: string
  url: string
  position: string
  duration: string
  logo: {
    light: string
    dark?: string
  }
  roles?: JSX.Element[]
}

export const Experiences: {
  [key in Company]: CompanyDetail
} = {
  DataMasterDZ: {
    name: 'DataMasterDZ',
    longName: 'DataMasterDZ',
    subDetail: 'IT Services and IT Consulting',
    url: 'https://www.linkedin.com/company/datamasterdz/',
    position: 'Product Owner & Full-stack Developer',
    duration: 'Jun 2023 - Present',
    logo: {
      light: '/worked_at_logos/data-master/data_master.png',
      dark: '/worked_at_logos/data-master/data_master.png',
    },
    roles: [
      <>
       Managed the entire project lifecycle as a Product Owner and Full-Stack Developer, from initial conceptualization to final delivery.
      </>,
      <>
        Curated and prioritized the product backlog to align with business goals and user requirements.
      </>,
      <>
        Led sprint planning sessions and ensured seamless adherence to Agile methodologies throughout the development process.
      </>,
      <>
        Actively participated in development tasks, leveraging both front-end and back-end technologies to deliver high-quality solutions.
      </>,
      <>
        Balanced strategic oversight and hands-on development to drive project success and deliver impactful results.
      </>,
    ],
  },
  "lemsa Innovation": {
    name: 'Lemsa Innovation',
    longName: 'Lemsa Innovation',
    subDetail: 'IT Services and IT Consulting',
    url: 'https://www.lemsainnov.com/',
    position: 'Manager & Full-stack Developer',
    duration: 'Jun 2022 - May 2023',
    logo: {
      light: '/worked_at_logos/lemsainnov/lemsa.png',
      dark: '/worked_at_logos/lemsainnov/lemsa.png',
    },
    roles: [
      <>
        Clarified that Lemsa Innovation and Sehlatech operate as a single company during my tenure.
      </>,
      <>
        Worked simultaneously as a Product Owner and Fullstack Developer, contributing to key projects such as
        {' '}
        <Link
          variant="primaryLink"
          href="https://play.google.com/store/apps/details?id=com.lemsainnov.coordate"
          target="_blank"
          rel="noreferrer"
        >
        Coordate Web
        </Link>
        ,{' '}
        <Link
          variant="primaryLink"
          href="https://play.google.com/store/apps/details?id=com.lemsainnov.coordate"
          target="_blank"
          rel="noreferrer"
        >
          Coordate Mobile App
        </Link>,{' '}
        <Link
          variant="primaryLink"
          href="https://www.westfield.com.au/"
          target="_blank"
          rel="noreferrer"
        >
          And-Arise
        </Link>,{' '}
        <Link
          variant="primaryLink"
          href="https://primrecrut.com/candidat"
          target="_blank"
          rel="noreferrer"
        >
          Primrecrut
        </Link>,{' '} and{' '}
        <Link
          variant="primaryLink"
          href="https://paymeforms.com/"
          target="_blank"
          rel="noreferrer"
        >
          Paymeforms
        </Link>{' '}.
      </>,
      <>
        As a Product Owner, collaborated with clients to refine their ideas, define project requirements, and prioritize features to align with business goals and user needs.
      </>,
      <>
        As a Fullstack Developer, utilized front-end and back-end technologies to design, implement, and maintain robust, efficient, and user-friendly web applications.
      </>,
      <>
      Bridged the gap between stakeholders and the development team, ensuring smooth communication and translating client needs into actionable tasks and deliverables.
      </>,
      <>
      Ensured high-quality outcomes by focusing on system performance, usability, and meeting client and end-user expectations.
      </>,
    ],
  },
  SehlaTech: {
    name: 'SehlaTech',
    longName: 'SehlaTech',
    subDetail: 'IT Services and IT Consulting.',
    url: 'https://lemsainnov.com/',
    position: 'Product Owner & Full-stack Developer',
    duration: 'May 2021 - Jul 2022',
    logo: {
      light: '/worked_at_logos/sehlatech/sehlatech.png',
      dark: '/worked_at_logos/sehlatech/sehlatech.png',
    },
    roles: [
      <>
        Oversaw cross-functional teams to develop and deliver various projects, including the
        {' '} 
        <Link
          href='https://www.emploipartner.com/'
          aria-label="scentregroup"
          rel="noreferrer"
          target="_blank"
          fontWeight="bold"
        >
        OPU
        </Link>
        {' '}(Office des Publications Universitaires) platform, 
        ensuring alignment with business goals and successful project completion.
      </>,
      <>
        Collaborated closely with stakeholders, developers, and designers to define and prioritize project requirements, resulting in the delivery of high-quality products.
      </>,
      <>
        Defined and refined project scope by gathering stakeholder feedback and aligning with business needs.
      </>,
      <>
        Partnered with designers and developers to create user stories, wireframes, and prototypes, ensuring a user-centric approach.
      </>,
      <>
        Regularly communicated project progress and updates to stakeholders, including senior leadership, to maintain transparency and alignment.
      </>,
      <>
        Ensured projects were delivered on time, within budget, and to high-quality standards, meeting both business and user expectations.
      </>,
    ],
  },
  EmploiPartner: {
    name: 'EmploiPartner',
    longName: 'EmploiPartner',
    subDetail: 'Staffing and Recruiting.',
    url: 'https://www.emploipartner.com/',
    position: 'Full-stack Developer',
    duration: 'Feb 2021 - May 2021',
    logo: {
      light: '/worked_at_logos/emploiPartner/emploipartner.png',
      dark: '/worked_at_logos/emploiPartner/emploipartner.png',
    },
    roles: [
      <>
        Collaborated with a team of developers and product owners to develop and maintain the company's website, 
        {' '}
        <Link
          href='https://www.emploipartner.com/'
          aria-label="scentregroup"
          rel="noreferrer"
          target="_blank"
          fontWeight="bold"
        >
          #Emploipartner
        </Link> contributing extensively to the Symfony backend (including API Platform) and the React frontend.
      </>,
      <>
        Utilized React Native to design, develop, and maintain the company's mobile application,
        ensuring seamless functionality and user experience.
      </>,
    ],
  },
  "Ghazaouet Port Authority": {
    name: 'Ghazaouet Port Authority',
    longName: 'Ghazaouet Port Authority',
    subDetail: 'Comprehensive Port Operations and Management Services.',
    url: 'https://www.portdeghazaouet.com/',
    position: 'Programmer and Analyzer',
    duration: 'Jul 2018 - Nov 2018',
    logo: {
      light: '/worked_at_logos/port-ghazaouet/port-ghazaouete.png',
      dark: '/worked_at_logos/port-ghazaouet/port-ghazaouete.png',
    },
    roles: [
      <>
        I was responsible for developing a custom website for the Port of Ghazaouet, 
        using Laravel and MySQL as the primary technologies.
      </>,
      <>
        I collaborated with the port's management team to identify their requirements and devised and implemented a tailored solution
        that addressed their specific business needs.
      </>,
      <>
        As part of the website development process, I employed various search engine optimization (SEO) techniques to enhance the website's online
        visibility and improve its ranking on search engine results pages
      </>,
    ],
  },
}

export const ExperiencesList = [
  Experiences.DataMasterDZ,
  Experiences['lemsa Innovation'],
  Experiences.SehlaTech,
  Experiences.EmploiPartner,
  Experiences['Ghazaouet Port Authority'],
]
