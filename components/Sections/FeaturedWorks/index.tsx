import { memo } from 'react'
import {
  Heading,
  Text,
  Stack,
  Grid,
  GridItem,
  useBreakpointValue,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import FeaturedCard from './FeaturedCard'
import { fadeInUpSlower, galleryStagger } from 'config/animations'
import { mobileBreakpointsMap } from 'config/theme'
const MotionGrid = motion(Grid)
const MotionGridItem = motion(GridItem)

const FeaturedWorksSection = () => {
  const isMobile = useBreakpointValue(mobileBreakpointsMap)
  return (
    <Stack
      width={{ base: '99%', lg: '60%', xl: '75%' }}
      height="100%"
      spacing={{ base: 6, xl: 8 }}
    >
      <Heading
        size="2xl"
        style={{
          fontVariantCaps: 'small-caps',
        }}
      >
        Some of my works.
      </Heading>
      <Text variant="description">
        Check out some of the works I made at freelancing, company projects and
        even case studies.
      </Text>

      <MotionGrid
        templateRows="repeat(1, 1fr)"
        templateColumns="repeat(6, 1fr)"
        gap={{ base: 5, md: 6 }}
        variants={galleryStagger}
      >
        <MotionGridItem colSpan={6} variants={fadeInUpSlower}>
          <FeaturedCard
            idx={1}
            title="NECP"
            src="/works/enpc.png"
            description="The website for the National School of Algeria Civil Protection offers elite training programs,
            recruitment opportunities, and international collaborations. With multilingual support and
            seamless navigation, it keeps you connected to the school’s latest updates."
            height={{ base: '130px', md: '225px', '2xl': '300px' }}
            ctaUrl="https://algerian-civil-protection-school.vercel.app/"
            objectPosition="right 20%"
            isMobile={isMobile}
          />
        </MotionGridItem>

        <MotionGridItem colSpan={6} variants={fadeInUpSlower}>
          <FeaturedCard
            idx={1}
            title="Iqraa OPU"
            src="/works/iqraa_2.jpg"
            description="Iqraa is a platform designed for university students, 
            offering access to thousands of books across various academic disciplines."
            height={{ base: '130px', md: '225px', '2xl': '300px' }}
            ctaUrl="https://st.iqraa.opu.dz/"
            objectPosition="right 20%"
            isMobile={isMobile}
          />
        </MotionGridItem>


        <MotionGridItem colSpan={6} variants={fadeInUpSlower}>
          <FeaturedCard
            idx={3}
            title="Jasmin-Tech"
            description="The website of Jasmin Tech showcases the company’s expertise in IT consulting and custom software development.
            It highlights innovative solutions tailored to client needs, 
            driving business transformation and success."
            src="/works/jasmin-tech.png"
            height={{ base: '130px', md: '225px', '2xl': '300px' }}
            ctaUrl="https://jasmin-tech.com"
            objectPosition="right 20%"
            isMobile={isMobile}
          />
        </MotionGridItem>

        <MotionGridItem colSpan={6} variants={fadeInUpSlower}>
          <FeaturedCard
            idx={4}
            title="El Hakim"
            description="The El Hakim platform website focuses on boosting clinical efficiency, optimizing financial performance, 
            and enhancing patient experiences. It integrates revenue cycle management and patient engagement features,
            combining advanced technology with expert healthcare services."
            src="/works/elhakim.png"
            height={{ base: '130px', md: '225px', '2xl': '300px' }}
            ctaUrl="https://elhakim.jasmin-tech.com/"
            isMobile={isMobile}
          />
        </MotionGridItem>

        <MotionGridItem colSpan={6} variants={fadeInUpSlower}>
          <FeaturedCard
            idx={4}
            title="Primrecrut"
            description="The Primrecrut platform website simplifies the recruitment process by connecting employers with top talent. 
            It offers a seamless, efficient hiring experience through advanced tools and a user-friendly interface, 
            streamlining job postings and candidate searches."
            src="/works/primrecrut.png"
            height={{ base: '130px', md: '225px', '2xl': '300px' }}
            ctaUrl="https://primrecrut.com/candidat"
            isMobile={isMobile}
          />
        </MotionGridItem>
        
        <MotionGridItem colSpan={6} variants={fadeInUpSlower}>
          <FeaturedCard
            idx={2}
            title="Paymeforms"
            description="PayMe simplifies creating payment forms with Stripe, enabling quick setup of payment, order, and subscription forms.
            It's the fastest way to accept one-time or recurring online payments without plugins or extra fees.
            Start receiving payments seamlessly, anytime, anywhere."
            src="/works/paymeforms.png"
            height={{ base: '130px', md: '225px', '2xl': '300px' }}
            ctaUrl="https://paymeforms.com/"
            isMobile={isMobile}
          />
        </MotionGridItem>
      </MotionGrid>
    </Stack>
  )
}

export default memo(FeaturedWorksSection)
