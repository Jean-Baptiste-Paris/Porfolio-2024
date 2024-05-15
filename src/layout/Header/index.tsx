import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import LanguageSelector from '../../assets/components/LanguageSelector'

function Header() {
  const { t } = useTranslation('common')
  return (
    <header className="w-full p-4 flex justify-center sticky top-0 backdrop-blur-xl">
      <div className="w-full max-w-screen-xl px-8 flex items-center justify-between">
        <Link to="/">
          <h1 className="text-2xl font-bold">
            Jean-Baptiste Paris
            <span className="ml-2 pl-2 text-xl font-thin border-l border-neutral-500">
              {t('header.portfolio')}
            </span>
          </h1>
        </Link>
        <nav className="flex space-x-4">
          <a href="/#skills">{t('header.skills')}</a>
          <a href="/#work">{t('header.works')}</a>
          <a href="/#contact">{t('header.contact')}</a>
          <LanguageSelector
            optionClasses=""
            className="rounded pl-1 drop-shadow-lg"
          ></LanguageSelector>
        </nav>
      </div>
    </header>
  )
}

export default Header
