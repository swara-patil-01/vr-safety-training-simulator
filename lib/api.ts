import { modules, leaderboard, userStats } from './mock-data'

// Simulated API delays
const delay = () => new Promise(resolve => setTimeout(resolve, 500))

export async function getModules() {
  await delay()
  return modules
}

export async function getModuleById(id: string) {
  await delay()
  return modules.find(m => m.id === id)
}

export async function submitScore(moduleId: string, score: number) {
  await delay()
  return {
    success: true,
    message: 'Score submitted successfully',
    data: {
      moduleId,
      score,
      timestamp: new Date().toISOString(),
    },
  }
}

export async function getLeaderboard() {
  await delay()
  return leaderboard
}

export async function getUserStats() {
  await delay()
  return userStats
}

export async function getLeaderboardRank(userId: string) {
  await delay()
  return leaderboard.find(entry => entry.rank === 42) || leaderboard[0]
}

export async function getRecentActivity() {
  await delay()
  return userStats.recentActivity
}
