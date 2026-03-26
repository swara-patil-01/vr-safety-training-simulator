'use client'

import { Navbar } from '@/components/navbar'
import { useEffect, useState } from 'react'
import { getModuleById, submitScore } from '@/lib/api'
import { Button } from '@/components/ui/button'
import { useParams } from 'next/navigation'

interface Module {
  id: string
  title: string
  description: string
  category: string
  difficulty: string
  duration: number
  image: string
  participants: number
}

interface SimulatorState {
  isActive: boolean
  isCompleted: boolean
  score: number | null
  timeElapsed: number
}

export default function SimulatorPage() {
  const params = useParams()
  const moduleId = params.id as string
  const [module, setModule] = useState<Module | null>(null)
  const [loading, setLoading] = useState(true)
  const [simulator, setSimulator] = useState<SimulatorState>({
    isActive: false,
    isCompleted: false,
    score: null,
    timeElapsed: 0,
  })

  useEffect(() => {
    const loadModule = async () => {
      const data = await getModuleById(moduleId)
      setModule(data || null)
      setLoading(false)
    }
    loadModule()
  }, [moduleId])

  const startSimulator = () => {
    setSimulator({
      isActive: true,
      isCompleted: false,
      score: null,
      timeElapsed: 0,
    })
  }

  const completeSimulator = async () => {
    const score = Math.floor(Math.random() * 100) + 850
    setSimulator({
      isActive: false,
      isCompleted: true,
      score,
      timeElapsed: Math.floor(Math.random() * 10) + 5,
    })
    
    if (module) {
      await submitScore(module.id, score)
    }
  }

  const resetSimulator = () => {
    setSimulator({
      isActive: false,
      isCompleted: false,
      score: null,
      timeElapsed: 0,
    })
  }

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

  if (!module) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="flex items-center justify-center min-h-[calc(100vh-64px)]">
          <p className="text-muted-foreground">Module not found</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Main Content */}
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Module Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-4">{module.title}</h1>
            <p className="text-lg text-muted-foreground mb-6">{module.description}</p>
            
            <div className="grid grid-cols-4 gap-4 text-sm">
              <div className="p-4 rounded-lg bg-card border border-border">
                <p className="text-muted-foreground text-xs uppercase mb-1">Category</p>
                <p className="text-foreground font-semibold">{module.category}</p>
              </div>
              <div className="p-4 rounded-lg bg-card border border-border">
                <p className="text-muted-foreground text-xs uppercase mb-1">Difficulty</p>
                <p className="text-accent font-semibold">{module.difficulty}</p>
              </div>
              <div className="p-4 rounded-lg bg-card border border-border">
                <p className="text-muted-foreground text-xs uppercase mb-1">Duration</p>
                <p className="text-foreground font-semibold">{module.duration} minutes</p>
              </div>
              <div className="p-4 rounded-lg bg-card border border-border">
                <p className="text-muted-foreground text-xs uppercase mb-1">Participants</p>
                <p className="text-foreground font-semibold">{module.participants.toLocaleString()}</p>
              </div>
            </div>
          </div>

          {/* Simulator Container */}
          <div className="rounded-xl border border-border bg-card overflow-hidden">
            {/* VR Simulator Area */}
            <div className="relative min-h-[500px] bg-gradient-to-br from-secondary to-background flex flex-col items-center justify-center gap-6">
              {!simulator.isActive && !simulator.isCompleted && (
                <div className="text-center space-y-6">
                  <div className="text-8xl">🥽</div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">Ready for immersive training?</h3>
                    <p className="text-muted-foreground">
                      Click below to enter the virtual simulator. This is a demonstration environment.
                    </p>
                  </div>
                  <Button 
                    onClick={startSimulator}
                    size="lg"
                    className="bg-accent hover:bg-accent/90 text-accent-foreground"
                  >
                    Launch VR Simulator
                  </Button>
                </div>
              )}

              {simulator.isActive && (
                <div className="text-center space-y-8 w-full h-full flex flex-col items-center justify-center">
                  <div className="text-6xl animate-pulse">🎮</div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-accent">Simulator Running</h3>
                    <p className="text-muted-foreground text-lg">Time Elapsed: {simulator.timeElapsed} minutes</p>
                  </div>
                  <div className="space-y-3">
                    <p className="text-muted-foreground">Follow the on-screen instructions to complete the training</p>
                    <Button 
                      onClick={completeSimulator}
                      size="lg"
                      className="bg-green-600 hover:bg-green-700 text-white"
                    >
                      Complete Training
                    </Button>
                  </div>
                </div>
              )}

              {simulator.isCompleted && (
                <div className="text-center space-y-8">
                  <div className="text-7xl">🎉</div>
                  <div className="space-y-4">
                    <h3 className="text-3xl font-bold text-foreground">Training Complete!</h3>
                    <div className="bg-accent/20 border border-accent rounded-lg p-8 inline-block">
                      <p className="text-sm text-muted-foreground mb-2">Your Score</p>
                      <p className="text-5xl font-bold text-accent">{simulator.score}</p>
                      <p className="text-sm text-muted-foreground mt-2">/ 1000</p>
                    </div>
                    <p className="text-muted-foreground">
                      Time Completed: {simulator.timeElapsed} minutes
                    </p>
                  </div>
                  <div className="flex gap-4 justify-center pt-4">
                    <Button 
                      onClick={resetSimulator}
                      size="lg"
                      variant="outline"
                      className="border-border hover:border-accent"
                    >
                      Retake Training
                    </Button>
                    <Button 
                      href="/dashboard"
                      size="lg"
                      className="bg-accent hover:bg-accent/90 text-accent-foreground"
                    >
                      View Dashboard
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Module Info */}
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-lg border border-border bg-card">
              <h3 className="text-lg font-semibold text-foreground mb-4">Learning Objectives</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex gap-2">
                  <span className="text-accent">✓</span>
                  <span>Master core competencies in a safe VR environment</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent">✓</span>
                  <span>Develop practical skills through repetitive practice</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent">✓</span>
                  <span>Receive instant feedback and performance metrics</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent">✓</span>
                  <span>Earn certification upon successful completion</span>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-lg border border-border bg-card">
              <h3 className="text-lg font-semibold text-foreground mb-4">Requirements</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex gap-2">
                  <span className="text-accent">◆</span>
                  <span>VR Headset compatible with WebXR</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent">◆</span>
                  <span>Minimum stable internet connection</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent">◆</span>
                  <span>Active user account and enrollment</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent">◆</span>
                  <span>Sufficient physical space for movement</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
