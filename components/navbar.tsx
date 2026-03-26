'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function Navbar() {
  const pathname = usePathname()

  const isActive = (path: string) => pathname === path

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
              <span className="text-accent-foreground font-bold text-lg">SF</span>
            </div>
            <span className="font-bold text-lg text-foreground hidden sm:inline">SafetyFirst</span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className={`transition-colors ${
                isActive('/') ? 'text-accent font-semibold' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Home
            </Link>
            <Link
              href="/modules"
              className={`transition-colors ${
                isActive('/modules') ? 'text-accent font-semibold' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Modules
            </Link>
            <Link
              href="/courses"
              className={`transition-colors ${
                isActive('/courses') ? 'text-accent font-semibold' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Learning Paths
            </Link>
            <Link
              href="/dashboard"
              className={`transition-colors ${
                isActive('/dashboard') ? 'text-accent font-semibold' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Profile
            </Link>
            <Link
              href="/leaderboard"
              className={`transition-colors ${
                isActive('/leaderboard') ? 'text-accent font-semibold' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Achievements
            </Link>
          </div>

          {/* User Profile Placeholder */}
          <div className="flex items-center gap-4">
            <button className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-accent-foreground font-semibold">
              U
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
