import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className="w-100 p-8 flex justify-between items-center">
      <Link to="/">
        <h1 className="text-2xl source-sans-bold">
          Jean-Baptiste Paris
          <span className="ml-2 pl-2 text-xl source-sans-extralight border-l border-neutral-500">
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
