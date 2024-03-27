import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className="w-100 p-8 flex justify-between border rounded">
      <Link to="/">
        <div className="">Logo</div>
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
