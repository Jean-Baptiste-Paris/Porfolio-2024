import Hero from '../../assets/components/Hero'

function Home() {
  const heroMainMessage = (
    <div className="text-8xl">Super message d'accroche hyper chiadé</div>
  )
  const heroSubMessage =
    'Sous-titre sympa, pas trop long ni trop court. Juste comme il faut !'
  return <Hero mainMessage={heroMainMessage} subMessage={heroSubMessage} />
}

export default Home
