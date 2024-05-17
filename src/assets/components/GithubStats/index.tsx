import { useState, useEffect } from 'react'
import axios from 'axios'

interface UserStats {
  login: string
  public_repos: number
  followers: number
}

function GithubStats() {
  const token = import.meta.env.VITE_GITHUB_TOKEN

  const [stats, setStats] = useState<UserStats | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await axios.get<UserStats>(
          'https://api.github.com/user',
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        setStats(response.data)
        setLoading(false)
      } catch (error) {
        console.error('Error fetching GitHub stats:', error)
      }
    }

    fetchStats()
  }, [token])

  if (loading) {
    return <div>Loading...</div>
  }

  if (!stats) {
    return <div>Error fetching GitHub stats</div> //TODO
  }

  return (
    <div>
      <h2>Github Stats</h2>
      <ul>
        <li>Login: {stats.login}</li>
        <li>Public repos: {stats.public_repos}</li>
        <li>Followers: {stats.followers}</li>
      </ul>
    </div>
  )
}

export default GithubStats
