import { useEffect, useState } from 'react'
import axios from 'axios'

const GitHubStats = ({ statsToDisplay }: { statsToDisplay: string[] }) => {
  interface RepoData {
    stargazers_count: number
    forks_count: number
    language: string | null
  }

  interface EventData {
    type: string
    payload: {
      size: number
    }
  }

  const [stats, setStats] = useState({
    repos: 0,
    stars: 0,
    followers: 0,
    commits: 0,
    forks: 0,
    languages: {},
  })

  useEffect(() => {
    const fetchData = async () => {
      try {
        const username = 'votre-nom-utilisateur-github'
        const [userData, reposData, eventsData] = await Promise.all([
          axios.get(`https://api.github.com/users/${username}`),
          axios.get(`https://api.github.com/users/${username}/repos`),
          axios.get(`https://api.github.com/users/${username}/events`),
        ])

        const stars = reposData.data.reduce(
          (acc: number, repo: RepoData) => acc + repo.stargazers_count,
          0
        )
        const forks = reposData.data.reduce(
          (acc: number, repo: RepoData) => acc + repo.forks_count,
          0
        )

        const languages = reposData.data.reduce(
          (acc: { [key: string]: number }, repo: RepoData) => {
            if (repo.language) {
              acc[repo.language] = (acc[repo.language] || 0) + 1
            }
            return acc
          },
          {}
        )

        const commits = eventsData.data
          .filter((event: EventData) => event.type === 'PushEvent')
          .reduce(
            (acc: number, event: EventData) => acc + event.payload.size,
            0
          )

        setStats({
          repos: userData.data.public_repos,
          stars: stars,
          followers: userData.data.followers,
          commits: commits,
          forks: forks,
          languages: languages,
        })
      } catch (error) {
        console.error('Error fetching GitHub data', error)
      }
    }

    fetchData()
  }, [])

  const renderStat = (stat: string) => {
    switch (stat) {
      case 'repos':
        return (
          <div key={stat} className="text-center">
            <p className="text-3xl font-bold">{stats.repos}</p>
            <p className="text-sm">Dépôts</p>
          </div>
        )
      case 'commits':
        return (
          <div key={stat} className="text-center">
            <p className="text-3xl font-bold">{stats.commits}</p>
            <p className="text-sm">Commits</p>
          </div>
        )
      case 'stars':
        return (
          <div key={stat} className="text-center">
            <p className="text-3xl font-bold">{stats.stars}</p>
            <p className="text-sm">Étoiles</p>
          </div>
        )
      case 'followers':
        return (
          <div key={stat} className="text-center">
            <p className="text-3xl font-bold">{stats.followers}</p>
            <p className="text-sm">Followers</p>
          </div>
        )
      case 'forks':
        return (
          <div key={stat} className="text-center">
            <p className="text-3xl font-bold">{stats.forks}</p>
            <p className="text-sm">Forks</p>
          </div>
        )
      case 'languages':
        return (
          <div key={stat} className="mt-8 text-center">
            <h3 className="text-2xl font-bold">Langages Utilisés</h3>
            <ul className="list-none">
              {Object.entries(stats.languages).map(([language, count]) => {
                if (typeof count === 'number') {
                  return (
                    <li key={language} className="text-sm">
                      {language}: {count}
                    </li>
                  )
                }
                return null
              })}
            </ul>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <section className="py-8">
      <h2 className="text-4xl font-bold text-center">Chiffres Clés</h2>
      <div className="flex justify-around mt-8">
        {statsToDisplay.map((stat) => renderStat(stat))}
      </div>
    </section>
  )
}

export default GitHubStats
