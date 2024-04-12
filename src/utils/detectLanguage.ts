import { supportedLanguages } from './config'

function detectLanguage() {
  const naviguatorLang = navigator.language
  return supportedLanguages.includes(naviguatorLang) ? naviguatorLang : 'en'
}

export default detectLanguage
