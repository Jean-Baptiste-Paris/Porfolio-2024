import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className="w-full p-4 flex justify-between items-center sticky top-0 backdrop-blur-xl">
      <Link to="/">
        <h1 className="text-2xl font-bold">
          Jean-Baptiste Paris
          <span className="ml-2 pl-2 text-xl font-thin border-l border-neutral-500">
            Portfolio
          </span>
        </h1>
      </Link>
      <nav className="flex space-x-4">
        <a href="/#skills">Compétences</a>
        <a href="/#work">Travaux</a>
        <a href="/#contact">Contact</a>
      </nav>
    </header>
  )
}

export default Header
