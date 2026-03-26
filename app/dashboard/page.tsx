'use client'

import { Navbar } from '@/components/navbar'
import { useEffect, useState } from 'react'
import { getUserStats, getRecentActivity } from '@/lib/api'

interface UserStats {
  userId: string
  username: string
  totalScore: number
  rank: number
  completedModules: number
  totalModules: number
  averageScore: number
  recentActivity: Array<{
    moduleId: string
    moduleName: string
    score: number
    date: string
  }>
}

export default function DashboardPage() {
  const [stats, setStats] = useState<UserStats | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadStats = async () => {
      const data = await getUserStats()
      setStats(data)
      setLoading(false)
    }
    loadStats()
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="flex items-center justify-center min-h-[calc(100vh-64px)]">
          <div className="inline-flex items-center gap-2">
            <div className="w-2 h-2 bg-accent rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-accent rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-2 h-2 bg-accent rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          </div>
        </div>
      </div>
    )
  }

  if (!stats) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="flex items-center justify-center min-h-[calc(100vh-64px)]">
          <p className="text-muted-foreground">No stats available</p>
        </div>
      </div>
    )
  }

  const progressPercentage = (stats.completedModules / stats.totalModules) * 100

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Header */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 border-b border-border bg-card">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-2">Your Dashboard</h1>
          <p className="text-lg text-muted-foreground">
            Track your progress and performance across all modules
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-8">
          {/* Top Stats Grid */}
          <div className="grid md:grid-cols-4 gap-6">
            {/* Score Card */}
            <div className="p-6 rounded-lg border border-border bg-card">
              <p className="text-sm text-muted-foreground uppercase mb-2">Total Score</p>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold text-accent">{stats.totalScore.toLocaleString()}</span>
                <span className="text-sm text-muted-foreground">points</span>
              </div>
            </div>

            {/* Rank Card */}
            <div className="p-6 rounded-lg border border-border bg-card">
              <p className="text-sm text-muted-foreground uppercase mb-2">Current Rank</p>
              <div className="flex items-center gap-3">
                <span className="text-4xl font-bold text-accent">#{stats.rank}</span>
                <span className="text-2xl">🏆</span>
              </div>
            </div>

            {/* Completion Card */}
            <div className="p-6 rounded-lg border border-border bg-card">
              <p className="text-sm text-muted-foreground uppercase mb-2">Modules Completed</p>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold text-accent">{stats.completedModules}</span>
                <span className="text-sm text-muted-foreground">/ {stats.totalModules}</span>
              </div>
            </div>

            {/* Average Score Card */}
            <div className="p-6 rounded-lg border border-border bg-card">
              <p className="text-sm text-muted-foreground uppercase mb-2">Average Score</p>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold text-accent">{stats.averageScore}</span>
                <span className="text-sm text-muted-foreground">/ 1000</span>
              </div>
            </div>
          </div>

          {/* Progress Section */}
          <div className="p-8 rounded-lg border border-border bg-card">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-foreground mb-2">Training Progress</h2>
              <p className="text-muted-foreground">
                {stats.completedModules} of {stats.totalModules} modules completed
              </p>
            </div>

            {/* Progress Bar */}
            <div className="space-y-4">
              <div className="w-full bg-secondary rounded-full h-3 overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-accent to-accent/50 transition-all duration-500"
                  style={{ width: `${progressPercentage}%` }}
                ></div>
              </div>
              <p className="text-sm text-accent font-semibold">{Math.round(progressPercentage)}% Complete</p>
            </div>

            {/* Milestone Badges */}
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className={`p-4 rounded-lg text-center ${stats.completedModules >= 1 ? 'bg-accent/10 border border-accent' : 'bg-secondary border border-border'}`}>
                <p className="text-2xl mb-1">🎯</p>
                <p className="text-xs font-semibold text-foreground">First Module</p>
                <p className={stats.completedModules >= 1 ? 'text-xs text-accent' : 'text-xs text-muted-foreground'}>
                  {stats.completedModules >= 1 ? 'Unlocked' : 'Locked'}
                </p>
              </div>
              
              <div className={`p-4 rounded-lg text-center ${stats.completedModules >= 5 ? 'bg-accent/10 border border-accent' : 'bg-secondary border border-border'}`}>
                <p className="text-2xl mb-1">⭐</p>
                <p className="text-xs font-semibold text-foreground">5 Modules</p>
                <p className={stats.completedModules >= 5 ? 'text-xs text-accent' : 'text-xs text-muted-foreground'}>
                  {stats.completedModules >= 5 ? 'Unlocked' : 'Locked'}
                </p>
              </div>

              <div className={`p-4 rounded-lg text-center ${stats.completedModules >= 10 ? 'bg-accent/10 border border-accent' : 'bg-secondary border border-border'}`}>
                <p className="text-2xl mb-1">🏆</p>
                <p className="text-xs font-semibold text-foreground">10 Modules</p>
                <p className={stats.completedModules >= 10 ? 'text-xs text-accent' : 'text-xs text-muted-foreground'}>
                  {stats.completedModules >= 10 ? 'Unlocked' : 'Locked'}
                </p>
              </div>

              <div className={`p-4 rounded-lg text-center ${stats.totalScore >= 10000 ? 'bg-accent/10 border border-accent' : 'bg-secondary border border-border'}`}>
                <p className="text-2xl mb-1">💎</p>
                <p className="text-xs font-semibold text-foreground">10K Points</p>
                <p className={stats.totalScore >= 10000 ? 'text-xs text-accent' : 'text-xs text-muted-foreground'}>
                  {stats.totalScore >= 10000 ? 'Unlocked' : 'Locked'}
                </p>
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="p-8 rounded-lg border border-border bg-card">
            <h2 className="text-2xl font-bold text-foreground mb-6">Recent Activity</h2>
            
            <div className="space-y-4">
              {stats.recentActivity.map((activity, idx) => (
                <div key={idx} className="flex items-center justify-between p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors">
                  <div>
                    <p className="font-semibold text-foreground">{activity.moduleName}</p>
                    <p className="text-sm text-muted-foreground">{activity.date}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-accent">{activity.score}</p>
                    <p className="text-xs text-muted-foreground">/ 1000</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Insights */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-8 rounded-lg border border-border bg-card">
              <h3 className="text-xl font-bold text-foreground mb-4">Performance Insights</h3>
              <div className="space-y-4 text-muted-foreground text-sm">
                <p className="flex items-start gap-3">
                  <span className="text-accent text-lg">📈</span>
                  <span>Your average score of {stats.averageScore} is trending upward compared to last month</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-accent text-lg">⚡</span>
                  <span>You&apos;ve completed {Math.round((stats.completedModules / stats.totalModules) * 100)}% of available modules</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-accent text-lg">🎯</span>
                  <span>Keep practicing to reach the top 10 leaderboard positions</span>
                </p>
              </div>
            </div>

            <div className="p-8 rounded-lg border border-border bg-card">
              <h3 className="text-xl font-bold text-foreground mb-4">Next Steps</h3>
              <div className="space-y-3">
                <a href="/modules" className="block p-3 rounded-lg bg-accent/10 border border-accent text-accent hover:bg-accent/20 transition-colors font-semibold text-center">
                  Continue Training →
                </a>
                <a href="/leaderboard" className="block p-3 rounded-lg bg-secondary/50 border border-border text-foreground hover:border-accent hover:bg-secondary transition-colors font-semibold text-center">
                  View Leaderboard
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
