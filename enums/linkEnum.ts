export enum LinkType {
  inner = 'inner',
  outer = 'outer',
}
export enum SocialEnum {
  github = 'github',
  twitter = 'twitter',
  discord = 'discord',
  // telegram = 'telegram',
  // instagram = 'instagram',
  medium = 'medium',
}
export const SocialEnumMap: { [key: string | number]: any } = {
  // github: 'Github',
  twitter: 'Twitter',
  discord: 'Discord',
  // telegram: 'Telegram',
  // instagram: 'Instagram',
  medium: 'Medium',
}

// https://icones.js.org/collection/
const SocialEnumIconMap: { [key: string | number]: any } = {
  twitter: 'ant-design:twitter-outlined',
  discord: 'ic:baseline-discord',
  medium: 'bi:medium',
}
