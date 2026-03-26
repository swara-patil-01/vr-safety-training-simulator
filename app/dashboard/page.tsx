'use client'

import { Navbar } from '@/components/navbar'
import { userStats } from '@/lib/mock-data'
import { CheckCircle2, AlertCircle, Award, Clock, TrendingUp } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function DashboardPage() {

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Header */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 border-b border-border bg-card">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-2">Your Safety Profile</h1>
          <p className="text-lg text-muted-foreground">
            View your certifications, proficiency level, and training status
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-8">
          {/* Top Stats Grid */}
          <div className="grid md:grid-cols-4 gap-6">
            {/* Certifications Card */}
            <div className="p-6 rounded-lg border border-border bg-card hover:border-accent transition-colors">
              <p className="text-sm text-muted-foreground uppercase mb-2">Active Certifications</p>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold text-accent">{userStats.activeCertifications}</span>
                <span className="text-sm text-muted-foreground">valid</span>
              </div>
            </div>

            {/* Modules Card */}
            <div className="p-6 rounded-lg border border-border bg-card hover:border-accent transition-colors">
              <p className="text-sm text-muted-foreground uppercase mb-2">Modules Completed</p>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold text-accent">{userStats.completedModules}</span>
                <span className="text-sm text-muted-foreground">courses</span>
              </div>
            </div>

            {/* Proficiency Card */}
            <div className="p-6 rounded-lg border border-border bg-card hover:border-accent transition-colors">
              <p className="text-sm text-muted-foreground uppercase mb-2">Proficiency Level</p>
              <p className="text-xl font-bold text-accent">{userStats.proficiencyLevel}</p>
            </div>

            {/* Expiring Soon Card */}
            <div className="p-6 rounded-lg border border-yellow-500/30 bg-yellow-500/5">
              <p className="text-sm text-muted-foreground uppercase mb-2">Renewals Due</p>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold text-yellow-400">{userStats.upcomingExpirations.length}</span>
                <span className="text-sm text-muted-foreground">within 1yr</span>
              </div>
            </div>
          </div>

          {/* Certifications Section */}
          <div className="p-8 rounded-lg border border-border bg-card">
            <h2 className="text-2xl font-bold text-foreground mb-6">Active Certifications</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {userStats.certifications.length > 0 ? (
                userStats.certifications.map(cert => (
                  <div key={cert.id} className="p-6 rounded-lg border border-green-500/30 bg-green-500/5 space-y-4">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground">Module {cert.moduleId}</h3>
                        <p className="text-sm text-muted-foreground mt-1">Completed {new Date(cert.completionDate).toLocaleDateString()}</p>
                      </div>
                      <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0" />
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Performance</span>
                        <span className="font-semibold text-accent">{cert.score}%</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Expires</span>
                        <span className="font-semibold text-foreground">{new Date(cert.expirationDate).toLocaleDateString()}</span>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-border/50">
                      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">Qualifies For</p>
                      <div className="flex flex-wrap gap-2">
                        {cert.rolesQualified.map(role => (
                          <span key={role} className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded">
                            {role}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-muted-foreground col-span-2">No active certifications yet. Complete modules to earn certifications.</p>
              )}
            </div>
          </div>

          {/* Renewal Reminders */}
          <div className="p-8 rounded-lg border border-border bg-card">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-foreground">Certification Renewals</h2>
              {userStats.upcomingExpirations.length > 0 && (
                <AlertCircle className="w-6 h-6 text-yellow-400" />
              )}
            </div>
            
            {userStats.upcomingExpirations.length > 0 ? (
              <div className="space-y-3">
                {userStats.upcomingExpirations.map((renewal, idx) => (
                  <div key={idx} className="flex items-center justify-between p-4 rounded-lg bg-yellow-500/10 border border-yellow-500/30 hover:bg-yellow-500/15 transition-colors">
                    <div className="flex items-center gap-3 flex-1">
                      <Clock className="w-5 h-5 text-yellow-400" />
                      <div>
                        <p className="font-semibold text-foreground">{renewal.module}</p>
                        <p className="text-sm text-muted-foreground">Expires {new Date(renewal.expirationDate).toLocaleDateString()}</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="border-yellow-500/50">
                      Schedule Renewal
                    </Button>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-muted-foreground">All your certifications are current. Great job!</p>
            )}
          </div>

          {/* Compliance & Next Steps */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-8 rounded-lg border border-border bg-card">
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp className="w-6 h-6 text-accent" />
                <h3 className="text-xl font-bold text-foreground">Your Progress</h3>
              </div>
              <div className="space-y-4 text-muted-foreground text-sm">
                <p className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>You have {userStats.activeCertifications} active certifications qualifying you for multiple roles</span>
                </p>
                <p className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>Your {userStats.proficiencyLevel} level indicates readiness for your current role</span>
                </p>
                <p className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>Schedule renewal trainings before certifications expire</span>
                </p>
              </div>
            </div>

            <div className="p-8 rounded-lg border border-border bg-card">
              <div className="flex items-center gap-2 mb-4">
                <Award className="w-6 h-6 text-accent" />
                <h3 className="text-xl font-bold text-foreground">Recommended Next Steps</h3>
              </div>
              <div className="space-y-3">
                <Link href="/modules" className="block">
                  <Button className="w-full bg-accent hover:bg-orange-600 text-accent-foreground">
                    Continue Advanced Training
                  </Button>
                </Link>
                <Link href="/courses" className="block">
                  <Button variant="outline" className="w-full">
                    View Learning Paths
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
