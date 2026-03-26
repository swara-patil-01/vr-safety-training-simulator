'use client'

import { Navbar } from '@/components/navbar'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { getModules } from '@/lib/api'
import Image from 'next/image'

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

export default function ModulesPage() {
  const [modules, setModules] = useState<Module[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedCategory, setSelectedCategory] = useState('All')

  useEffect(() => {
    const loadModules = async () => {
      const data = await getModules()
      setModules(data)
      setLoading(false)
    }
    loadModules()
  }, [])

  const categories = ['All', 'Safety', 'Medical', 'Industrial', 'Business', 'Technical']
  const filteredModules = selectedCategory === 'All' 
    ? modules 
    : modules.filter(m => m.category === selectedCategory)

  const getDifficultyColor = (difficulty: string) => {
    switch(difficulty) {
      case 'Beginner': return 'text-green-400'
      case 'Intermediate': return 'text-yellow-400'
      case 'Advanced': return 'text-red-400'
      default: return 'text-gray-400'
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Header */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 border-b border-border bg-card">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-2">Training Modules</h1>
          <p className="text-lg text-muted-foreground">
            Choose from our comprehensive library of VR training experiences
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Category Filter */}
          <div className="mb-12 flex flex-wrap gap-3">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg border transition-all ${
                  selectedCategory === category
                    ? 'border-accent bg-accent/20 text-accent'
                    : 'border-border bg-card text-muted-foreground hover:border-accent'
                }`}
              >
                {category}
              </button>
            ))}
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

          {/* Modules Grid */}
          {!loading && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredModules.map(module => (
                <Link href={`/modules/${module.id}`} key={module.id}>
                  <div className="group h-full rounded-xl border border-border bg-card hover:border-accent overflow-hidden transition-all hover:shadow-lg hover:shadow-accent/20 cursor-pointer">
                    {/* Image */}
                    <div className="relative h-48 bg-secondary overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent"></div>
                      <div className="absolute inset-0 flex items-center justify-center text-6xl group-hover:scale-110 transition-transform">
                        📚
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 space-y-4">
                      <div>
                        <h3 className="text-xl font-semibold text-foreground group-hover:text-accent transition-colors">
                          {module.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
                          {module.description}
                        </p>
                      </div>

                      {/* Metadata */}
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className={`font-semibold ${getDifficultyColor(module.difficulty)}`}>
                            {module.difficulty}
                          </span>
                          <span className="text-muted-foreground">{module.duration} min</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-muted-foreground bg-secondary px-3 py-1 rounded-full">
                            {module.category}
                          </span>
                          <span className="text-xs text-muted-foreground">
                            {module.participants.toLocaleString()} participants
                          </span>
                        </div>
                      </div>

                      {/* CTA */}
                      <button className="w-full py-2 px-4 rounded-lg bg-accent/10 text-accent hover:bg-accent/20 transition-colors font-medium text-sm mt-4">
                        Start Training →
                      </button>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {!loading && filteredModules.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">No modules found in this category</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
