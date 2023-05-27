import { useI18n } from 'vue-i18n'
import { StateKeys } from '~/enums/stateEnum'
import { availableLocales } from '~/constants/index'

export function LanguageManager() {
  const { locale } = useI18n()
  const localeUserSetting = useCookie('locale')

  const getSystemLocale = (): string => {
    try {
      // Find the browser's default language
      const foundLang = window
        ? window.navigator.language.substring(0, 2)
        : 'en'

      return availableLocales[foundLang] ? foundLang : 'en'
    } catch (error) {
      return 'en'
    }
  }
  const getUserLocale = (): string => localeUserSetting.value || 'en' // Default lang en

  const localeSetting = useState<string>(StateKeys.locale, () =>
    getUserLocale()
  )

  watch(localeSetting, (localeSetting) => {
    localeUserSetting.value = localeSetting
    locale.value = localeSetting
  })

  const init = () => {
    localeSetting.value = getUserLocale()
  }
  locale.value = localeSetting.value

  onBeforeMount(() => init())

  return {
    localeSetting,
    init,
  }
}
