'use client'

import { Navbar } from '@/components/navbar'
import { useState } from 'react'
import { modules, Module } from '@/lib/mock-data'
import { Lock, ClipboardCheck } from 'lucide-react'

const jobRolesAvailable = ['General Worker', 'Equipment Operator', 'Site Supervisor']

export default function ModulesPage() {
  const [selectedLevel, setSelectedLevel] = useState<'Beginner' | 'Intermediate' | 'Advanced'>('Beginner')
  const [selectedRole, setSelectedRole] = useState<string>('General Worker')

  // Track which module video is currently active
  const [activeModule, setActiveModule] = useState<Module | null>(null)

  const filteredModules = modules.filter(m => {
    const levelMatch = m.level === selectedLevel
    const roleMatch = m.jobRoles.includes(selectedRole)
    return levelMatch && roleMatch
  })

  const getLevelBadgeColor = (level: string) => {
    switch (level) {
      case 'Beginner':
        return 'bg-green-500/20 text-green-400 border-green-500/30'
      case 'Intermediate':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'
      case 'Advanced':
        return 'bg-red-500/20 text-red-400 border-red-500/30'
      default:
        return 'bg-gray-500/20 text-gray-400'
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Header */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 border-b border-border bg-card">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-2">Safety Training Modules</h1>
          <p className="text-lg text-muted-foreground">
            Professional construction site safety certification courses
          </p>
        </div>
      </section>
      
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-8">

          {/* Filters */}
          <div className="space-y-6">
            {/* Level Filter */}
            <div>
              <h3 className="text-sm font-semibold text-foreground mb-3">Training Level</h3>
              <div className="flex flex-wrap gap-3">
                {(['Beginner', 'Intermediate', 'Advanced'] as const).map(level => (
                  <button
                    key={level}
                    onClick={() => setSelectedLevel(level)}
                    className={`px-4 py-2 rounded-lg border transition-all ${
                      selectedLevel === level
                        ? 'border-accent bg-accent/20 text-accent'
                        : 'border-border bg-card text-muted-foreground hover:border-accent'
                    }`}
                  >
                    {level}
                  </button>
                ))}
              </div>
            </div>

            {/* Role Filter */}
            <div>
              <h3 className="text-sm font-semibold text-foreground mb-3">Job Role</h3>
              <div className="flex flex-wrap gap-3">
                {jobRolesAvailable.map(role => (
                  <button
                    key={role}
                    onClick={() => setSelectedRole(role)}
                    className={`px-4 py-2 rounded-lg border transition-all ${
                      selectedRole === role
                        ? 'border-accent bg-accent/20 text-accent'
                        : 'border-border bg-card text-muted-foreground hover:border-accent'
                    }`}
                  >
                    {role}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Modules Grid or Video Player */}
          {activeModule ? (
            <div className="space-y-4">
              <button
                onClick={() => setActiveModule(null)}
                className="px-4 py-2 rounded-lg bg-secondary text-foreground hover:bg-secondary/80"
              >
                ← Back to Modules
              </button>

              <div className="w-full aspect-video rounded-lg overflow-hidden border border-border">
                <video
                  src={activeModule.videoUrl}
                  controls
                  autoPlay
                  className="w-full h-full"
                />
              </div>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredModules.map(module => {
                const hasPrerequisites = module.prerequisites.length > 0
                return (
                  <div
                    key={module.id}
                    className="group h-full rounded-xl border border-border bg-card hover:border-accent overflow-hidden transition-all hover:shadow-lg hover:shadow-accent/20 cursor-pointer"
                  >
                    {/* Header */}
                    <div className="p-6 border-b border-border bg-secondary/30 space-y-3">
                      <div className="flex items-start justify-between gap-3">
                        <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors flex-1">
                          {module.title}
                        </h3>
                        <span className={`px-2 py-1 rounded text-xs font-semibold border ${getLevelBadgeColor(module.level)}`}>
                          {module.level}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground line-clamp-2">{module.description}</p>
                    </div>

                    {/* Content */}
                    <div className="p-6 space-y-4">
                      {/* Safety Topics */}
                      <div>
                        <p className="text-xs font-semibold text-muted-foreground mb-2 uppercase tracking-wide">Safety Topics</p>
                        <div className="flex flex-wrap gap-2">
                          {module.safetyTopics.map(topic => (
                            <span key={topic} className="text-xs bg-accent/10 text-accent px-2 py-1 rounded">{topic}</span>
                          ))}
                        </div>
                      </div>

                      {/* Metadata */}
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center justify-between">
                          <span className="text-muted-foreground">Duration</span>
                          <span className="font-medium text-foreground">{module.duration} min</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-muted-foreground">Passing Score</span>
                          <span className="font-medium text-foreground">{module.passingScore}%</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-muted-foreground">Certification</span>
                          <span className="font-medium text-accent text-xs">{module.certificationValue}</span>
                        </div>
                      </div>

                      {/* Prerequisites */}
                      {hasPrerequisites && (
                        <div className="p-3 bg-yellow-500/10 border border-yellow-500/30 rounded text-sm">
                          <div className="flex items-center gap-2 text-yellow-400">
                            <Lock className="w-4 h-4" />
                            <span>Prerequisites required</span>
                          </div>
                        </div>
                      )}

                      {/* Begin Module Button */}
                      <button
                        onClick={() => setActiveModule(module)}
                        className="w-full py-2 px-4 rounded-lg bg-accent/10 text-accent hover:bg-accent/20 transition-colors font-medium text-sm"
                      >
                        <div className="flex items-center justify-center gap-2">
                          <ClipboardCheck className="w-4 h-4" />
                          <span>Begin Module</span>
                        </div>
                      </button>
                    </div>
                  </div>
                )
              })}
            </div>
          )}

          {filteredModules.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                No modules available for this level and role combination
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )}