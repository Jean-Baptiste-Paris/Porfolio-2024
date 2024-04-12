import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'

function Footer() {
  return (
    <footer className="w-full p-4 flex flex-col items-center bg-neutral-800 text-white">
      <div className="space-x-2">
        <FontAwesomeIcon
          icon={faLinkedinIn}
          className="border-2 rounded-full p-2"
        />
        <FontAwesomeIcon
          icon={faGithub}
          className="border-2 rounded-full p-2"
        />
      </div>
      <p className="font-thin">
        Réalisé par <span className="font-semibold">Jean-Baptiste Paris</span> |{' '}
        <a
          href=""
          className="underline underline-offset-4 decoration-purple-400"
        >
          code source du projet disponible sur Github
        </a>
      </p>
    </footer>
  )
}

export default Footer
