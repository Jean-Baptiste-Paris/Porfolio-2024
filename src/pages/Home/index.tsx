import Hero from '../../assets/components/Hero'
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
          <Hero mainMessage={heroMainMessage} subMessage={heroSubMessage}>
            <div className="flex w-100 space-x-4">
              <p className="border-2 border-purple-400 p-2">BOUTON 1</p>
              <p className="border-2 border-black p-2">BOUTON 2</p>
            </div>
          </Hero>
          <img src={heroImage}></img>
        </div>
      </Section>
      <Section className="space-y-4">
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
    </div>
  )
}

export default Home
