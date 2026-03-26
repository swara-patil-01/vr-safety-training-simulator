'use client'

import Link from 'next/link'
import { Navbar } from '@/components/navbar'
import { Button } from '@/components/ui/button'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl sm:text-6xl font-bold text-foreground text-balance">
                  Master Skills in <span className="text-accent">Virtual Reality</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-xl leading-relaxed">
                  Immersive training experiences that transform how professionals learn and develop critical competencies in a risk-free environment.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/modules">
                  <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground w-full sm:w-auto">
                    Explore Modules
                  </Button>
                </Link>
                <Button variant="outline" size="lg" className="border-accent text-accent hover:bg-accent/10 w-full sm:w-auto">
                  Watch Demo
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-8 border-t border-border">
                <div>
                  <div className="text-3xl font-bold text-accent">18</div>
                  <p className="text-sm text-muted-foreground">Training Modules</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent">12K+</div>
                  <p className="text-sm text-muted-foreground">Active Learners</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent">95%</div>
                  <p className="text-sm text-muted-foreground">Completion Rate</p>
                </div>
              </div>
            </div>

            {/* Right Visual */}
            <div className="relative h-96 md:h-full bg-gradient-to-br from-accent/20 to-accent/5 rounded-2xl border border-border overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="mb-4 text-6xl">🥽</div>
                  <p className="text-foreground font-semibold">VR Headset Ready</p>
                  <p className="text-sm text-muted-foreground">Next-gen immersive learning</p>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute top-10 right-10 w-32 h-32 bg-accent/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-10 left-10 w-40 h-40 bg-accent/5 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Why Choose VRTraining?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Advanced immersive technology that delivers measurable results
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="p-8 rounded-xl border border-border bg-card hover:border-accent transition-colors">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Precision Training</h3>
              <p className="text-muted-foreground">
                Practice critical procedures repeatedly until perfect without real-world consequences or material costs.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-8 rounded-xl border border-border bg-card hover:border-accent transition-colors">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Real-Time Analytics</h3>
              <p className="text-muted-foreground">
                Track progress with detailed performance metrics and identify areas for improvement instantly.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-8 rounded-xl border border-border bg-card hover:border-accent transition-colors">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Competitive Learning</h3>
              <p className="text-muted-foreground">
                Engage with global leaderboards and earn badges to motivate continuous improvement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card border-t border-border">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">Ready to Transform Your Training?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of professionals using VR to master essential skills and advance their careers.
          </p>
          <Link href="/modules">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              Start Training Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
