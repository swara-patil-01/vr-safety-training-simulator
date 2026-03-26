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
                  Master Construction <span className="text-accent">Site Safety</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-xl leading-relaxed">
                  Professional immersive training designed to prevent incidents, protect lives, and develop critical safety competencies through realistic construction scenarios.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/modules">
                  <Button size="lg" className="bg-accent hover:bg-orange-600 text-accent-foreground w-full sm:w-auto">
                    Start Safety Training
                  </Button>
                </Link>
                <Link href="/courses">
                  <Button variant="outline" size="lg" className="border-accent text-accent hover:bg-accent/10 w-full sm:w-auto">
                    View Learning Paths
                  </Button>
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-8 border-t border-border">
                <div>
                  <div className="text-3xl font-bold text-accent">9</div>
                  <p className="text-sm text-muted-foreground">Safety Courses</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent">5K+</div>
                  <p className="text-sm text-muted-foreground">Professionals Trained</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent">850+</div>
                  <p className="text-sm text-muted-foreground">Incidents Prevented</p>
                </div>
              </div>
            </div>

            {/* Right Visual */}
            <div className="relative h-96 md:h-full bg-gradient-to-br from-accent/20 to-accent/5 rounded-2xl border border-border overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="mb-4 text-6xl">🏗️</div>
                  <p className="text-foreground font-semibold">Construction Site Safety</p>
                  <p className="text-sm text-muted-foreground">Professional VR Training</p>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute top-10 right-10 w-32 h-32 bg-accent/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-10 left-10 w-40 h-40 bg-accent/5 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Job Roles Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Training Paths by Role</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Structured learning programs designed for your position and experience level on the construction site
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Role 1 */}
            <div className="p-8 rounded-xl border border-border bg-card hover:border-accent transition-colors">
              <div className="text-4xl mb-4">👷</div>
              <h3 className="text-xl font-semibold text-foreground mb-2">General Worker</h3>
              <p className="text-sm text-accent font-semibold mb-3">Beginner Level</p>
              <p className="text-muted-foreground mb-4">
                Essential safety fundamentals including PPE compliance, hazard recognition, and fall prevention.
              </p>
              <p className="text-sm text-muted-foreground">3 foundational modules</p>
            </div>

            {/* Role 2 */}
            <div className="p-8 rounded-xl border border-border bg-card hover:border-accent transition-colors">
              <div className="text-4xl mb-4">🏗️</div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Equipment Operator</h3>
              <p className="text-sm text-accent font-semibold mb-3">Intermediate to Advanced</p>
              <p className="text-muted-foreground mb-4">
                Advanced training in crane operations, heavy machinery safety, and hazard management.
              </p>
              <p className="text-sm text-muted-foreground">4 specialized modules</p>
            </div>

            {/* Role 3 */}
            <div className="p-8 rounded-xl border border-border bg-card hover:border-accent transition-colors">
              <div className="text-4xl mb-4">📋</div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Site Supervisor</h3>
              <p className="text-sm text-accent font-semibold mb-3">Advanced Level</p>
              <p className="text-muted-foreground mb-4">
                Comprehensive safety management including assessment, incident response, and team leadership.
              </p>
              <p className="text-sm text-muted-foreground">6 advanced modules</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Why SafetyFirst VR Training?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Professional standards with measurable safety outcomes
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Benefit 1 */}
            <div className="p-8 rounded-xl border border-border bg-card hover:border-accent transition-colors">
              <div className="text-4xl mb-4">✓</div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Realistic Scenarios</h3>
              <p className="text-muted-foreground">
                Practice hazard recognition and safety procedures in immersive, industry-realistic construction environments.
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="p-8 rounded-xl border border-border bg-card hover:border-accent transition-colors">
              <div className="text-4xl mb-4">📜</div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Professional Certification</h3>
              <p className="text-muted-foreground">
                Earn formal certifications recognized by industry standards and aligned with OSHA requirements.
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="p-8 rounded-xl border border-border bg-card hover:border-accent transition-colors">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-semibold text-foreground mb-3">AI-Powered Support</h3>
              <p className="text-muted-foreground">
                Get real-time guidance from our safety assistant chatbot during training and learning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card border-t border-border">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">Prevent Incidents. Protect Lives.</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of construction professionals who have earned safety certifications and prevented workplace incidents through structured VR training.
          </p>
          <Link href="/modules">
            <Button size="lg" className="bg-accent hover:bg-orange-600 text-accent-foreground">
              Begin Training Today
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
