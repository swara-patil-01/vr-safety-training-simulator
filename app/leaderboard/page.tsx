'use client'

import { Navbar } from '@/components/navbar'
import { useState } from 'react'
import { leaderboard } from '@/lib/mock-data'
import { Medal, Award, Trophy } from 'lucide-react'

export default function LeaderboardPage() {
  const [filter, setFilter] = useState<'all' | 'top10'>('all')

  const filteredLeaderboard = filter === 'top10' ? leaderboard.slice(0, 10) : leaderboard

  const getRankIcon = (rank: number) => {
    if (rank === 1) return <Trophy className="w-6 h-6 text-yellow-400" />
    if (rank === 2) return <Medal className="w-6 h-6 text-gray-300" />
    if (rank === 3) return <Award className="w-6 h-6 text-orange-400" />
    return null
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Header */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 border-b border-border bg-card">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-2">Professional Achievements</h1>
          <p className="text-lg text-muted-foreground">
            Top certified safety professionals across the construction industry
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
              All Professionals
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
          </div>

          {/* Leaderboard Table */}
          <div className="space-y-3">
            {filteredLeaderboard.map((entry) => (
              <div
                key={entry.rank}
                className={`flex items-center justify-between p-6 rounded-lg border transition-all hover:border-accent ${
                  entry.rank <= 3
                    ? 'bg-card border-accent/30 shadow-lg shadow-accent/10'
                    : 'bg-card border-border hover:bg-secondary'
                }`}
              >
                {/* Rank */}
                <div className="flex items-center gap-4 min-w-[100px]">
                  <div className="flex items-center justify-center w-12">
                    {getRankIcon(entry.rank) ? (
                      getRankIcon(entry.rank)
                    ) : (
                      <span className="font-bold text-xl text-muted-foreground">#{entry.rank}</span>
                    )}
                  </div>
                </div>

                  {/* User Info */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-accent/20 border border-accent flex items-center justify-center flex-shrink-0">
                        <span className="text-sm font-bold text-accent">
                          {entry.name.charAt(0).toUpperCase()}
                        </span>
                      </div>
                    <div>
                      <p className="font-semibold text-foreground">{entry.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {entry.proficiencyLevel}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Stats */}
                <div className="text-right space-y-1">
                  <div>
                    <p className="text-sm text-muted-foreground">Certifications</p>
                    <p className="text-lg font-bold text-accent">{entry.certifications}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Your Position */}
          <div className="mt-12 p-8 rounded-lg border border-accent bg-accent/5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground uppercase mb-1">Your Current Position</p>
                <p className="text-3xl font-bold text-accent">3 Certifications</p>
                <p className="text-sm text-muted-foreground mt-1">Intermediate Level</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-muted-foreground uppercase mb-1">Next Achievement</p>
                <p className="text-2xl font-bold text-accent">Advanced Status</p>
                <p className="text-xs text-muted-foreground mt-1">2 more modules to unlock</p>
              </div>
            </div>
          </div>

          {/* How to Advance Section */}
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-lg border border-border bg-card">
              <p className="text-3xl mb-3">✓</p>
              <h3 className="font-semibold text-foreground mb-2">Complete Certifications</h3>
              <p className="text-sm text-muted-foreground">
                Earn certifications by completing modules with passing scores and demonstrating proficiency.
              </p>
            </div>

            <div className="p-6 rounded-lg border border-border bg-card">
              <p className="text-3xl mb-3">📈</p>
              <h3 className="font-semibold text-foreground mb-2">Progress Through Levels</h3>
              <p className="text-sm text-muted-foreground">
                Advance from Intermediate to Advanced level by completing role-specific training paths.
              </p>
            </div>

            <div className="p-6 rounded-lg border border-border bg-card">
              <p className="text-3xl mb-3">🎖️</p>
              <h3 className="font-semibold text-foreground mb-2">Maintain Your Status</h3>
              <p className="text-sm text-muted-foreground">
                Renew certifications before expiration to maintain active professional standing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
