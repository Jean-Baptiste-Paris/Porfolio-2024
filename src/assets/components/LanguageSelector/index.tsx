import { useTranslation } from 'react-i18next'

function LanguageSelector({
  className,
  optionClasses,
}: {
  className: string
  optionClasses: string
}) {
  const { i18n } = useTranslation()

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng)
  }

  const handleLanguageChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedLanguage = event.target.value
    changeLanguage(selectedLanguage)
  }

  return (
    <select
      className={className + 'cursor-pointer'}
      onChange={handleLanguageChange}
      defaultValue={i18n.language}
    >
      <option className={optionClasses} value="en">
        🇬🇧&emsp;EN
      </option>
      <option className={optionClasses} value="fr">
        🇫🇷&emsp;FR
      </option>
    </select>
  )
}

export default LanguageSelector
