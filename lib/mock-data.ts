export interface Module {
  id: string;
  title: string;
  description: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  jobRoles: string[];
  duration: number;
  safetyTopics: string[];
  certificationValue: string;
  prerequisites: string[];
  passingScore: number;
}

export interface Certification {
  id: string;
  moduleId: string;
  userId: string;
  userName: string;
  completionDate: string;
  expirationDate: string;
  score: number;
  passingStatus: 'Pass' | 'Fail';
  competenciesAchieved: string[];
  rolesQualified: string[];
}

export interface LeaderboardEntry {
  rank: number;
  name: string;
  certifications: number;
  completedModules: number;
  proficiencyLevel: string;
  latestCertification: string;
}

export interface UserStats {
  activeCertifications: number;
  completedModules: number;
  proficiencyLevel: string;
  certifications: Certification[];
  upcomingExpirations: {
    module: string;
    expirationDate: string;
  }[];
}

export const modules: Module[] = [
  {
    id: '1',
    title: 'Personal Protective Equipment Fundamentals',
    description: 'Essential training on PPE compliance, selection, and proper usage on construction sites',
    level: 'Beginner',
    jobRoles: ['General Worker', 'Site Supervisor', 'Equipment Operator'],
    duration: 25,
    safetyTopics: ['PPE Compliance', 'Hazard Recognition', 'Equipment Selection'],
    certificationValue: 'OSHA 30-Hour Module',
    prerequisites: [],
    passingScore: 70,
  },
  {
    id: '2',
    title: 'Construction Hazard Recognition',
    description: 'Comprehensive hazard identification training for common construction site risks',
    level: 'Beginner',
    jobRoles: ['General Worker', 'Site Supervisor'],
    duration: 30,
    safetyTopics: ['Hazard Recognition', 'Risk Assessment', 'Incident Prevention'],
    certificationValue: 'OSHA 30-Hour Module',
    prerequisites: [],
    passingScore: 70,
  },
  {
    id: '3',
    title: 'Fall Prevention and Protection',
    description: 'Essential fall safety protocols and protection systems for elevated work',
    level: 'Beginner',
    jobRoles: ['General Worker', 'Site Supervisor', 'Equipment Operator'],
    duration: 28,
    safetyTopics: ['Fall Prevention', 'Harness Systems', 'Scaffolding Safety'],
    certificationValue: 'OSHA 30-Hour Module',
    prerequisites: [],
    passingScore: 70,
  },
  {
    id: '4',
    title: 'Working at Heights - Advanced Protocols',
    description: 'Advanced training for safe work at elevations with emphasis on rescue procedures',
    level: 'Intermediate',
    jobRoles: ['Site Supervisor', 'Equipment Operator'],
    duration: 40,
    safetyTopics: ['Working at Heights', 'Rescue Procedures', 'Equipment Inspection'],
    certificationValue: 'OSHA 30-Hour + Specialized Certification',
    prerequisites: ['3'],
    passingScore: 75,
  },
  {
    id: '5',
    title: 'Electrical Safety and Hazard Recognition',
    description: 'Critical electrical hazard identification and safe work practices around power sources',
    level: 'Intermediate',
    jobRoles: ['Site Supervisor', 'Equipment Operator'],
    duration: 35,
    safetyTopics: ['Electrical Safety', 'Power Source Management', 'Equipment Grounding'],
    certificationValue: 'OSHA 30-Hour + Specialized Certification',
    prerequisites: ['2'],
    passingScore: 75,
  },
  {
    id: '6',
    title: 'Crane and Rigging Operations',
    description: 'Comprehensive crane safety, load calculations, and rigging procedures',
    level: 'Intermediate',
    jobRoles: ['Equipment Operator', 'Site Supervisor'],
    duration: 45,
    safetyTopics: ['Crane Operations', 'Load Management', 'Communication Protocols'],
    certificationValue: 'OSHA 30-Hour + NCCCO Preparation',
    prerequisites: ['1'],
    passingScore: 75,
  },
  {
    id: '7',
    title: 'Heavy Machinery Operation and Safety',
    description: 'Safe operation of heavy construction equipment with emphasis on hazard avoidance',
    level: 'Advanced',
    jobRoles: ['Equipment Operator'],
    duration: 50,
    safetyTopics: ['Equipment Operation', 'Maintenance Procedures', 'Emergency Response'],
    certificationValue: 'Equipment Operator Certification',
    prerequisites: ['4', '6'],
    passingScore: 80,
  },
  {
    id: '8',
    title: 'Advanced Hazard Assessment and Control',
    description: 'Professional-level hazard assessment, control measures, and incident investigation',
    level: 'Advanced',
    jobRoles: ['Site Supervisor'],
    duration: 48,
    safetyTopics: ['Hazard Assessment', 'Control Measures', 'Incident Investigation'],
    certificationValue: 'Site Supervisor Certification',
    prerequisites: ['4', '5'],
    passingScore: 80,
  },
  {
    id: '9',
    title: 'Emergency Response and Incident Management',
    description: 'Critical incident response procedures, first aid integration, and communication protocols',
    level: 'Advanced',
    jobRoles: ['Site Supervisor'],
    duration: 42,
    safetyTopics: ['Emergency Response', 'Incident Management', 'Communication'],
    certificationValue: 'Emergency Response Certification',
    prerequisites: ['2', '8'],
    passingScore: 80,
  },
];

export const leaderboard: LeaderboardEntry[] = [
  {
    rank: 1,
    name: 'Sarah Mitchell',
    certifications: 9,
    completedModules: 9,
    proficiencyLevel: 'Master - Site Supervisor',
    latestCertification: 'Emergency Response',
  },
  {
    rank: 2,
    name: 'James Rodriguez',
    certifications: 8,
    completedModules: 8,
    proficiencyLevel: 'Expert - Equipment Operator',
    latestCertification: 'Crane Operations',
  },
  {
    rank: 3,
    name: 'Emily Johnson',
    certifications: 7,
    completedModules: 7,
    proficiencyLevel: 'Advanced - Site Supervisor',
    latestCertification: 'Hazard Assessment',
  },
  {
    rank: 4,
    name: 'Michael Chen',
    certifications: 6,
    completedModules: 6,
    proficiencyLevel: 'Advanced - Equipment Operator',
    latestCertification: 'Heavy Machinery',
  },
  {
    rank: 5,
    name: 'David Williams',
    certifications: 5,
    completedModules: 5,
    proficiencyLevel: 'Intermediate',
    latestCertification: 'Working at Heights',
  },
  {
    rank: 6,
    name: 'Rachel Green',
    certifications: 4,
    completedModules: 4,
    proficiencyLevel: 'Intermediate',
    latestCertification: 'Electrical Safety',
  },
  {
    rank: 7,
    name: 'Alex Turner',
    certifications: 3,
    completedModules: 3,
    proficiencyLevel: 'Intermediate',
    latestCertification: 'Fall Prevention',
  },
  {
    rank: 8,
    name: 'Jessica Lee',
    certifications: 2,
    completedModules: 2,
    proficiencyLevel: 'Beginner',
    latestCertification: 'PPE Fundamentals',
  },
];

export const userStats: UserStats = {
  activeCertifications: 3,
  completedModules: 3,
  proficiencyLevel: 'Intermediate',
  certifications: [
    {
      id: 'cert-1',
      moduleId: '1',
      userId: 'user-1',
      userName: 'You',
      completionDate: '2024-03-20',
      expirationDate: '2026-03-20',
      score: 92,
      passingStatus: 'Pass',
      competenciesAchieved: ['PPE Selection', 'Safety Compliance', 'Hazard Awareness'],
      rolesQualified: ['General Worker', 'Site Supervisor'],
    },
    {
      id: 'cert-2',
      moduleId: '2',
      userId: 'user-1',
      userName: 'You',
      completionDate: '2024-03-18',
      expirationDate: '2026-03-18',
      score: 87,
      passingStatus: 'Pass',
      competenciesAchieved: ['Hazard Recognition', 'Risk Assessment', 'Prevention Strategies'],
      rolesQualified: ['General Worker', 'Site Supervisor'],
    },
    {
      id: 'cert-3',
      moduleId: '3',
      userId: 'user-1',
      userName: 'You',
      completionDate: '2024-03-15',
      expirationDate: '2026-03-15',
      score: 89,
      passingStatus: 'Pass',
      competenciesAchieved: ['Fall Prevention', 'Harness Systems', 'Rescue Awareness'],
      rolesQualified: ['General Worker', 'Site Supervisor', 'Equipment Operator'],
    },
  ],
  upcomingExpirations: [
    {
      module: 'Advanced Hazard Assessment',
      expirationDate: '2025-06-15',
    },
    {
      module: 'Working at Heights',
      expirationDate: '2025-08-22',
    },
  ],
};
