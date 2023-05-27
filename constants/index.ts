export interface ILocales {
  [key: string]: {
    name: string
    iso: string
    flag: string
    file: string
    code: string
  }
}

export const availableLocales: ILocales = {
  en: {
    name: 'EN',
    iso: 'en',
    flag: '🇺🇸',
    file: 'en.json',
    code: 'en',
  },
  zh: {
    name: '中文',
    iso: 'zh',
    flag: '🇨🇳',
    file: 'zh.json',
    code: 'zh',
  },
}
