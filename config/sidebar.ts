import { IconType } from 'react-icons'
import {
  FaInstagram,
  FaLinkedin,
  FaStackOverflow,
  FaTwitter,
  FaYoutube,
  FaGithub,
  FaDev,
  FaFacebook,
  FaBehance,
} from 'react-icons/fa'

type SocialMedia = {
  label: string
  href: string
  icon: IconType
}

export const SocialMedias: SocialMedia[] = [
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/lakhdar-chikhi',
    icon: FaLinkedin,
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/lakhdar_chikhi/',
    icon: FaInstagram,
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/lakhdar.chikhi.96',
    icon: FaFacebook,
  },
  {
    label: 'Behance',
    href: 'https://www.behance.net/lakhdarchikhi1',
    icon: FaBehance,
  },
  {
    label: 'Github',
    href: 'https://github.com/Lakhdar-CHIKHI',
    icon: FaGithub,
  }
]
