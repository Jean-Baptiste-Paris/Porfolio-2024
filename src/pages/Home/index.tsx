import HeroMessage from '../../assets/components/HeroMessage'
import Section from '../../layout/Section'

function Home() {
  const heroMainMessage = (
    <div className="text-6xl font-display font-bold ">
      Salut !<br />
      Je m'appelle Jean-Baptiste et je suis{' '}
      <span className="bg-gradient-to-r from-violet-500 to-pink-400 bg-clip-text text-transparent">
        développeur web
      </span>
    </div>
  )
  const heroSubMessage =
    "Bienvenue sur mon portfolio ! J'éspère que vous prendrez plaisir à découvrir mon travail."
  const heroImage = 'https://placehold.co/600x400'
  return (
    <div>
      <Section>
        <div className="flex space-x-10">
          <HeroMessage
            mainMessage={heroMainMessage}
            subMessage={heroSubMessage}
          >
            <div className="flex w-100 space-x-4">
              <p className="border-2 border-purple-400 p-2">BOUTON 1</p>
              <p className="border-2 border-black p-2">BOUTON 2</p>
            </div>
          </HeroMessage>
          <img src={heroImage}></img>
        </div>
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
