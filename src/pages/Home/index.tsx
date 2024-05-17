import HeroMessage from '../../assets/components/HeroMessage'
import HighlightSpan from '../../assets/components/HiglightSpan'
import GitHubStats from '../../assets/components/GithubStats'
import Section from '../../layout/Section'
import { useTranslation } from 'react-i18next'

function Home() {
  const { t } = useTranslation('home')

  //Hero Section
  const heroMainMessage = (
    <HighlightSpan
      tagType="div"
      highlight={t('hero.highlight')}
      classes="text-5xl font-display font-medium uppercase"
      highlightClasses="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-fuchsia-500"
    >
      {t('hero.mainMessage')}
    </HighlightSpan>
  )
  const heroSubMessage = (
    <div className="text-base">
      {t('hero.welcome')}
      <br />
      {t('hero.subMessage')}
    </div>
  )
  const heroImage = '/pictures/mymind-tZCrFpSNiIQ-unsplash.jpg'

  //Stats Section

  return (
    <div>
      <Section>
        <div className="flex space-x-10">
          <HeroMessage
            mainMessage={heroMainMessage}
            subMessage={heroSubMessage}
          ></HeroMessage>
        </div>
        <div
          style={{ backgroundImage: `url(${heroImage})` }}
          className="z-auto w-full h-96 bg-cover bg-right-bottom rounded-lg bg-fixed drop-shadow-xl border border-gray-100 backdrop-blur-sm"
        ></div>
      </Section>
      <Section>
        <GitHubStats />
      </Section>
      <Section>
        <h2 className="text-4xl font-bold">🙋🏻 A propos de moi</h2>
        <p>
          Je suis Jean-Baptiste Paris, développeur web chez ACCK, l'agence web
          qui accompagne les associations et entrepreneur·ses engagé·es. Bientôt
          titulaire d'un diplôme de développeur intégrateur web de niveau Bac+2
          avec OpenClassrooms, je suis passionné par le développement front et
          back, allant du design UI aux problèmes algorithmiques.
        </p>
        <p>
          Ce portfolio est le reflet de mon savoir-faire, mettant en avant mes
          réalisations et mes compétences techniques. Son objectif principal est
          de vous démontrer mes compétences et ma curiosité pour le
          développement, dans le but, je l'espère, de recontrer de
          nouveautrouver une nouvelle opportunité professionnelle pour janvier
          2025.
        </p>
      </Section>
      <Section anchor="skills">
        <p className="italic font-bold text-center border-y-2 border-slate-700 py-8">
          Bandeau d'icône de compétences
        </p>
      </Section>
      <Section anchor="work">
        <h2 className="text-center text-4xl font-bold">
          Découvrez mes projets récents
        </h2>
        <h3 className="text-center">
          Explorez mes réaliations d'école et mon travail personnel
        </h3>
        {/* <Gallery>
          <Card />
          <Card />
        </Gallery> */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="h-80 border-2 border-slate-400">
            <div className="h-60 w-100 bg-slate-400"></div>
            <p className="p-4">Présentation projet</p>
          </div>
          <div className="h-80 border-2 border-slate-400">
            <div className="h-60 w-100 bg-slate-400"></div>
            <p className="p-4">Présentation projet</p>
          </div>
        </div>
        <div className="flex justify-center">
          <p className="border-purple-500 border-2 p-2">en voir plus (?)</p>
        </div>
      </Section>
      <Section anchor="contact">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold">Intéressé par mon profil ?</h2>
            <p>
              N'hésitez pas à me contacter pour échanger avec moi ou juste me
              passer le bonjour 👋
              <br />
              Je serai ravi d'échanger avec vous !
            </p>
            {/* <Réseaux /> */}
          </div>
          {/* <ContactForm/> */}
          <div className="h-80 border-2 border-slate-400">
            <div className="h-60 w-100 bg-slate-400"></div>
            <p className="p-4">CONTACT FORM</p>
          </div>
        </div>
      </Section>
    </div>
  )
}

export default Home
