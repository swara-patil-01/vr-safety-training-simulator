'use client';

import { Navbar } from '@/components/navbar';
import Link from 'next/link';
import { modules } from '@/lib/mock-data';
import { CheckCircle2, Lock, Clock, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface CoursePath {
  title: string;
  description: string;
  jobRole: string;
  level: string;
  color: string;
  modules: typeof modules;
}

export default function CoursesPage() {
  // Define learning paths organized by job role and level progression
  const coursePaths: CoursePath[] = [
    {
      title: 'General Worker Safety Essentials',
      description: 'Foundation level safety training for all construction site personnel',
      jobRole: 'General Worker',
      level: 'Beginner',
      color: 'from-green-500 to-emerald-600',
      modules: modules.filter(m => m.level === 'Beginner' && m.jobRoles.includes('General Worker')),
    },
    {
      title: 'Equipment Operator Certification',
      description: 'Intermediate and advanced training for equipment operators and technicians',
      jobRole: 'Equipment Operator',
      level: 'Intermediate → Advanced',
      color: 'from-blue-500 to-cyan-600',
      modules: modules.filter(m => (m.level === 'Intermediate' || m.level === 'Advanced') && m.jobRoles.includes('Equipment Operator')),
    },
    {
      title: 'Site Supervisor Mastery',
      description: 'Advanced professional training for site supervisors and safety managers',
      jobRole: 'Site Supervisor',
      level: 'Intermediate → Advanced',
      color: 'from-purple-500 to-violet-600',
      modules: modules.filter(m => (m.level === 'Intermediate' || m.level === 'Advanced') && m.jobRoles.includes('Site Supervisor')),
    },
  ];

  const getLevelBadgeColor = (level: string) => {
    if (level.includes('Beginner')) return 'bg-green-500/20 text-green-400 border-green-500/30';
    if (level.includes('Intermediate')) return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
    return 'bg-red-500/20 text-red-400 border-red-500/30';
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Header */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 border-b border-border bg-card">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-2">Learning Paths</h1>
          <p className="text-lg text-muted-foreground">
            Structured certification courses designed for your role and experience level
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-8">
          {/* Course Cards */}
          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-6">
            {coursePaths.map((path, idx) => (
              <div key={idx} className="rounded-xl border border-border bg-card overflow-hidden hover:border-accent transition-colors">
                {/* Header */}
                <div className={`bg-gradient-to-r ${path.color} p-6 text-white`}>
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div>
                      <h3 className="text-xl font-bold">{path.title}</h3>
                      <p className="text-sm opacity-90 mt-1">{path.jobRole}</p>
                    </div>
                    <Award className="w-6 h-6 flex-shrink-0" />
                  </div>
                  <p className="text-sm opacity-95">{path.description}</p>
                </div>

                {/* Content */}
                <div className="p-6 space-y-6">
                  {/* Level Badge */}
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-muted-foreground">Training Level</span>
                    <span className={`px-3 py-1 rounded text-sm font-semibold border ${getLevelBadgeColor(path.level)}`}>
                      {path.level}
                    </span>
                  </div>

                  {/* Modules */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <h4 className="font-semibold text-foreground">Modules ({path.modules.length})</h4>
                      <span className="text-sm text-muted-foreground">{path.modules.length} courses</span>
                    </div>
                    <div className="space-y-2 max-h-64 overflow-y-auto">
                      {path.modules.map((module) => (
                        <div key={module.id} className="flex items-start gap-3 p-3 bg-secondary/30 rounded-lg border border-border/50">
                          <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-foreground truncate">{module.title}</p>
                            <div className="flex items-center gap-2 mt-1">
                              <Clock className="w-3 h-3 text-muted-foreground" />
                              <span className="text-xs text-muted-foreground">{module.duration} min</span>
                              {module.prerequisites.length > 0 && (
                                <>
                                  <span className="text-xs text-muted-foreground">•</span>
                                  <Lock className="w-3 h-3 text-yellow-500" />
                                </>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Certification Info */}
                  <div className="p-3 bg-accent/10 border border-accent/30 rounded-lg">
                    <p className="text-xs font-semibold text-accent uppercase tracking-wide mb-2">Upon Completion</p>
                    <p className="text-sm text-foreground">
                      Professional certification indicating competency in construction site safety and readiness for {path.jobRole} roles
                    </p>
                  </div>

                  {/* CTA */}
                  <Link href="/modules" className="block">
                    <Button className="w-full bg-accent hover:bg-orange-600 text-accent-foreground">
                      Start Learning Path
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Progression Info */}
          <section className="mt-16 p-8 border border-border bg-card rounded-xl">
            <h2 className="text-2xl font-bold text-foreground mb-6">Course Progression Guide</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="space-y-3">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center font-bold text-sm">1</div>
                  <h3 className="font-semibold text-foreground">Beginner Level</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Start with foundational safety knowledge. Modules cover PPE, hazard recognition, and basic safety protocols.
                </p>
                <p className="text-xs text-accent font-semibold">Estimated time: 2-3 hours</p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-yellow-500/20 text-yellow-400 flex items-center justify-center font-bold text-sm">2</div>
                  <h3 className="font-semibold text-foreground">Intermediate Level</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Build on foundational knowledge. Advanced scenarios including working at heights, electrical safety, and equipment operations.
                </p>
                <p className="text-xs text-accent font-semibold">Estimated time: 4-5 hours</p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center font-bold text-sm">3</div>
                  <h3 className="font-semibold text-foreground">Advanced Level</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Specialized training for supervisors and operators. Covers hazard assessment, incident management, and leadership.
                </p>
                <p className="text-xs text-accent font-semibold">Estimated time: 4-5 hours</p>
              </div>
            </div>
          </section>

          {/* Requirements Info */}
          <section className="p-8 border border-border bg-secondary/30 rounded-xl">
            <h2 className="text-2xl font-bold text-foreground mb-4">Prerequisites & Requirements</h2>
            <ul className="space-y-3 text-foreground">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span>Intermediate modules require completion of prerequisite Beginner modules</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span>Advanced modules require successful completion of related Intermediate modules</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span>Minimum passing score varies by level (70-80%)</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span>Certifications expire after 2 years; renewal training required</span>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
