import { IconButton, IconButtonProps } from '@chakra-ui/react'
import { FaInstagram, FaDiscord, FaTwitter, FaGithub } from 'react-icons/fa'
import { IconType } from 'react-icons/lib'

const availableIcons: { [key: string]: IconType } = {
  instagram: FaInstagram,
  discord: FaDiscord,
  twitter: FaTwitter,
  github: FaGithub
}

export type SocialMediaLinkIconProps = {
  icon: 'instagram' | 'discord' | 'twitter' | 'github'
  href: string
  isExternal?: boolean
} & Omit<IconButtonProps, 'icon'>

const SocialMediaLinkIcon = ({
  icon,
  href,
  isExternal = true,
  ...props
}: SocialMediaLinkIconProps) => {
  const PickedIcon = availableIcons[icon]

  return (
    <IconButton
      as="a"
      variant="ghost"
      cursor="pointer"
      icon={<PickedIcon size="22" aria-hidden="false" />}
      _hover={{ color: 'primary.400', bg: 'transparent' }}
      color="gray.300"
      href={href}
      {...(isExternal && { target: '_blank', rel: 'noopener noreferrer' })}
      {...props}
    />
  )
}

export default SocialMediaLinkIcon
