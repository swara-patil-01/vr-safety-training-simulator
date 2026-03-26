'use client'

import { Navbar } from '@/components/navbar'
import { useEffect, useState } from 'react'
import { getLeaderboard } from '@/lib/api'

interface LeaderboardEntry {
  rank: number
  username: string
  score: number
  completedModules: number
  badge: string
}

export default function LeaderboardPage() {
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState<'all' | 'top10' | 'friends'>('all')

  useEffect(() => {
    const loadLeaderboard = async () => {
      const data = await getLeaderboard()
      setLeaderboard(data)
      setLoading(false)
    }
    loadLeaderboard()
  }, [])

  const filteredLeaderboard = 
    filter === 'top10' ? leaderboard.slice(0, 10) :
    filter === 'friends' ? leaderboard.slice(0, 5) :
    leaderboard

  const getRankColor = (rank: number) => {
    if (rank === 1) return 'text-yellow-400 font-bold text-xl'
    if (rank === 2) return 'text-gray-300 font-bold text-lg'
    if (rank === 3) return 'text-orange-400 font-bold text-lg'
    return 'text-muted-foreground'
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Header */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 border-b border-border bg-card">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-2">Global Leaderboard</h1>
          <p className="text-lg text-muted-foreground">
            Compete with professionals worldwide and climb the rankings
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Filter Buttons */}
          <div className="flex gap-3 mb-8">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-lg border transition-all ${
                filter === 'all'
                  ? 'border-accent bg-accent/20 text-accent'
                  : 'border-border bg-card text-muted-foreground hover:border-accent'
              }`}
            >
              All Rankings
            </button>
            <button
              onClick={() => setFilter('top10')}
              className={`px-4 py-2 rounded-lg border transition-all ${
                filter === 'top10'
                  ? 'border-accent bg-accent/20 text-accent'
                  : 'border-border bg-card text-muted-foreground hover:border-accent'
              }`}
            >
              Top 10
            </button>
            <button
              onClick={() => setFilter('friends')}
              className={`px-4 py-2 rounded-lg border transition-all ${
                filter === 'friends'
                  ? 'border-accent bg-accent/20 text-accent'
                  : 'border-border bg-card text-muted-foreground hover:border-accent'
              }`}
            >
              Friends
            </button>
          </div>

          {/* Loading State */}
          {loading && (
            <div className="text-center py-12">
              <div className="inline-flex items-center gap-2">
                <div className="w-2 h-2 bg-accent rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-accent rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-2 h-2 bg-accent rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              </div>
            </div>
          )}

          {/* Leaderboard Table */}
          {!loading && (
            <div className="space-y-3">
              {filteredLeaderboard.map((entry, idx) => (
                <div
                  key={entry.rank}
                  className={`flex items-center justify-between p-6 rounded-lg border transition-all hover:border-accent ${
                    entry.rank <= 3
                      ? 'bg-card border-accent/30 shadow-lg shadow-accent/10'
                      : 'bg-card border-border hover:bg-secondary'
                  }`}
                >
                  {/* Rank */}
                  <div className="flex items-center gap-4 min-w-[120px]">
                    <span className={`font-bold text-2xl w-12 text-center ${getRankColor(entry.rank)}`}>
                      {entry.rank}
                    </span>
                    {entry.badge && <span className="text-2xl">{entry.badge}</span>}
                  </div>

                  {/* User Info */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-accent/20 border border-accent flex items-center justify-center">
                        <span className="text-sm font-bold text-accent">
                          {entry.username.charAt(0).toUpperCase()}
                        </span>
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">{entry.username}</p>
                        <p className="text-sm text-muted-foreground">
                          {entry.completedModules} modules completed
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Score */}
                  <div className="text-right">
                    <p className="text-2xl font-bold text-accent">{entry.score.toLocaleString()}</p>
                    <p className="text-xs text-muted-foreground">points</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Current User Position */}
          <div className="mt-12 p-8 rounded-lg border border-accent bg-accent/5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground uppercase mb-1">Your Position</p>
                <p className="text-3xl font-bold text-accent">#42</p>
                <p className="text-sm text-muted-foreground mt-1">7,850 points</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-muted-foreground uppercase mb-1">To #1</p>
                <p className="text-2xl font-bold text-accent">2,000 pts</p>
                <p className="text-xs text-muted-foreground mt-1">Keep training!</p>
              </div>
            </div>
          </div>

          {/* Tips Section */}
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-lg border border-border bg-card">
              <p className="text-3xl mb-3">🎯</p>
              <h3 className="font-semibold text-foreground mb-2">Complete Modules</h3>
              <p className="text-sm text-muted-foreground">
                Each completed module awards points based on your score and completion speed.
              </p>
            </div>

            <div className="p-6 rounded-lg border border-border bg-card">
              <p className="text-3xl mb-3">⚡</p>
              <h3 className="font-semibold text-foreground mb-2">Achieve Excellence</h3>
              <p className="text-sm text-muted-foreground">
                Perfect scores (900+) earn bonus multipliers that boost your ranking faster.
              </p>
            </div>

            <div className="p-6 rounded-lg border border-border bg-card">
              <p className="text-3xl mb-3">🏆</p>
              <h3 className="font-semibold text-foreground mb-2">Consistency Matters</h3>
              <p className="text-sm text-muted-foreground">
                Regular training and maintaining high scores keeps you climbing the leaderboard.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
