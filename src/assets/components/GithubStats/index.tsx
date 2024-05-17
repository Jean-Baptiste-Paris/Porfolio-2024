import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import axios from 'axios'

interface EventData {
  type: string
  payload: {
    size: number
  }
  created_at: string
}

const GitHubStats = () => {
  const { t } = useTranslation('home')

  const [stats, setStats] = useState({
    repos: 0,
    commits: 0,
    recentCommits: 0,
    signUpDate: '',
  })
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const username = 'Jean-Baptiste-Paris'
        const token = import.meta.env.VITE_GITHUB_TOKEN
        console.log(token)
        const [userData, eventsData] = await Promise.all([
          axios.get(`https://api.github.com/users/${username}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }),
          axios.get(`https://api.github.com/users/${username}/events`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }),
        ])

        const signUpDate = new Date(userData.data.created_at)
        const formattedSignUpDate = formatDate(signUpDate)

        const sixtyDaysAgo = new Date()
        sixtyDaysAgo.setDate(sixtyDaysAgo.getDate() - 60)

        const commits = eventsData.data
          .filter((event: EventData) => event.type === 'PushEvent')
          .reduce(
            (acc: number, event: EventData) => acc + event.payload.size,
            0
          )

        const recentCommits = eventsData.data
          .filter(
            (event: EventData) =>
              event.type === 'PushEvent' &&
              new Date(event.created_at) >= sixtyDaysAgo
          )
          .reduce(
            (acc: number, event: EventData) => acc + event.payload.size,
            0
          )

        setStats({
          repos: userData.data.public_repos,
          commits: commits,
          recentCommits: recentCommits,
          signUpDate: formattedSignUpDate,
        })
        setLoading(false)
      } catch (error) {
        console.error('Error fetching GitHub stats:', error)
        setError('Unable to fetch Github stats. Please try again later.')
        setLoading(false)
      }
    }

    fetchStats()
  }, [])

  const formatDate = (date: Date): string => {
    return date.toLocaleDateString(undefined, {
      month: 'long',
      year: 'numeric',
    })
  }

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error : {error}</div>
  }

  return (
    <div>
      <h3 className="pb-3 italic">{t('stats.title')}</h3>
      <div className="flex justify-between">
        <div className="text-left flex-1 border-l border-slate-700 pl-3">
          <p className="text-5xl font-bold">{stats.repos}</p>
          <p className="text-lg font-light">{t('stats.repos')}</p>
        </div>
        <div className="text-left flex-1 border-l border-slate-700 pl-3">
          <p className="text-5xl font-bold">{stats.commits}</p>
          <p className="text-lg font-light">{t('stats.commits')}</p>
        </div>
        <div className="text-left flex-1 border-l border-slate-700 pl-3">
          <p className="text-5xl font-bold">{stats.recentCommits}</p>
          <p className="text-lg font-light">
            {t('stats.commitsLastSixtyDays')}
          </p>
        </div>
        <div className="text-left flex-1 border-l border-slate-700 pl-3">
          <p className="text-lg font-light">{t('stats.signedUp')}</p>
          <p className="text-5xl font-bold">{stats.signUpDate}</p>
        </div>
      </div>
    </div>
  )
}

export default GitHubStats
