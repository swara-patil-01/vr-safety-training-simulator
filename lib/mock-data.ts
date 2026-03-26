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
  videoUrl: string;
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
    description: 'आवश्यक PPE अनुपालन, चयन और निर्माण स्थलों पर सही उपयोग पर प्रशिक्षण - Essential training on PPE compliance, selection, and proper usage on Indian construction sites',
    level: 'Beginner',
    jobRoles: ['General Worker', 'Site Supervisor', 'Equipment Operator'],
    duration: 25,
    safetyTopics: ['PPE Compliance', 'Hazard Recognition', 'Equipment Selection'],
    certificationValue: 'IOSH WorkSafe Module',
    prerequisites: [],
    passingScore: 70,
    videoUrl: '/videos/fire-safety.mp4'
  },
  {
    id: '2',
    title: 'Construction Hazard Recognition',
    description: 'निर्माण स्थल के सामान्य जोखिमों की पहचान के लिए व्यापक प्रशिक्षण - Comprehensive hazard identification training for common construction site risks',
    level: 'Beginner',
    jobRoles: ['General Worker', 'Site Supervisor'],
    duration: 30,
    safetyTopics: ['Hazard Recognition', 'Risk Assessment', 'Incident Prevention'],
    certificationValue: 'IOSH WorkSafe Module',
    prerequisites: [],
    passingScore: 70,
    videoUrl: '/videos/fire-safety.mp4'
  },
  {
    id: '3',
    title: 'Fall Prevention and Protection',
    description: 'ऊंचाई पर काम करने के लिए आवश्यक गिरावट सुरक्षा प्रोटोकॉल - Essential fall safety protocols and protection systems for elevated work',
    level: 'Beginner',
    jobRoles: ['General Worker', 'Site Supervisor', 'Equipment Operator'],
    duration: 28,
    safetyTopics: ['Fall Prevention', 'Harness Systems', 'Scaffolding Safety'],
    certificationValue: 'IOSH WorkSafe Module',
    prerequisites: [],
    passingScore: 70,
    videoUrl: '/videos/fire-safety.mp4'
  },
  {
    id: '4',
    title: 'Working at Heights - Advanced Protocols',
    description: 'ऊंचाई पर सुरक्षित काम के लिए उन्नत प्रशिक्षण - Advanced training for safe work at elevations with emphasis on rescue procedures',
    level: 'Intermediate',
    jobRoles: ['Site Supervisor', 'Equipment Operator'],
    duration: 40,
    safetyTopics: ['Working at Heights', 'Rescue Procedures', 'Equipment Inspection'],
    certificationValue: 'IOSH WorkSafe + Specialized Certification',
    prerequisites: ['3'],
    passingScore: 75,
    videoUrl: '/videos/fire-safety.mp4'
  },
  {
    id: '5',
    title: 'Electrical Safety and Hazard Recognition',
    description: 'विद्युत जोखिम पहचान और विद्युत स्रोतों के आसपास सुरक्षित कार्य प्रथाएं - Critical electrical hazard identification and safe work practices around power sources',
    level: 'Intermediate',
    jobRoles: ['Site Supervisor', 'Equipment Operator'],
    duration: 35,
    safetyTopics: ['Electrical Safety', 'Power Source Management', 'Equipment Grounding'],
    certificationValue: 'IOSH WorkSafe + Specialized Certification',
    prerequisites: ['2'],
    passingScore: 75,
    videoUrl: '/videos/fire-safety.mp4'
  },
  {
    id: '6',
    title: 'Crane and Rigging Operations',
    description: 'क्रेन सुरक्षा, भार गणना और रिगिंग प्रक्रियाओं पर व्यापक प्रशिक्षण - Comprehensive crane safety, load calculations, and rigging procedures',
    level: 'Intermediate',
    jobRoles: ['Equipment Operator', 'Site Supervisor'],
    duration: 45,
    safetyTopics: ['Crane Operations', 'Load Management', 'Communication Protocols'],
    certificationValue: 'IOSH WorkSafe + Crane Certification',
    prerequisites: ['1'],
    passingScore: 75,
    videoUrl: 'videos/FallingBlock.mov'
  },
  {
    id: '7',
    title: 'Heavy Machinery Operation and Safety',
    description: 'भारी निर्माण उपकरण के सुरक्षित संचालन पर प्रशिक्षण - Safe operation of heavy construction equipment with emphasis on hazard avoidance',
    level: 'Advanced',
    jobRoles: ['Equipment Operator'],
    duration: 50,
    safetyTopics: ['Equipment Operation', 'Maintenance Procedures', 'Emergency Response'],
    certificationValue: 'Equipment Operator Certification',
    prerequisites: ['4', '6'],
    passingScore: 80,
    videoUrl: '/videos/fire-safety.mp4'
  },
  {
    id: '8',
    title: 'Advanced Hazard Assessment and Control',
    description: 'व्यावसायिक स्तर के जोखिम मूल्यांकन और नियंत्रण उपायों पर प्रशिक्षण - Professional-level hazard assessment, control measures, and incident investigation',
    level: 'Advanced',
    jobRoles: ['Site Supervisor'],
    duration: 48,
    safetyTopics: ['Hazard Assessment', 'Control Measures', 'Incident Investigation'],
    certificationValue: 'Site Supervisor Certification',
    prerequisites: ['4', '5'],
    passingScore: 80,
    videoUrl: '/videos/fire-safety.mp4'
  },
  {
    id: '9',
    title: 'Emergency Response and Incident Management',
    description: 'घटना प्रतिक्रिया प्रक्रियाओं और संचार प्रोटोकॉल पर महत्वपूर्ण प्रशिक्षण - Critical incident response procedures, first aid integration, and communication protocols',
    level: 'Advanced',
    jobRoles: ['Site Supervisor'],
    duration: 42,
    safetyTopics: ['Emergency Response', 'Incident Management', 'Communication'],
    certificationValue: 'Emergency Response Certification',
    prerequisites: ['2', '8'],
    passingScore: 80,
    videoUrl: '/videos/fire-safety.mp4'
  },
];

export const leaderboard: LeaderboardEntry[] = [
  {
    rank: 1,
    name: 'Rajesh Kumar',
    certifications: 9,
    completedModules: 9,
    proficiencyLevel: 'Master - Site Supervisor',
    latestCertification: 'Emergency Response',
  },
  {
    rank: 2,
    name: 'Priya Sharma',
    certifications: 8,
    completedModules: 8,
    proficiencyLevel: 'Expert - Equipment Operator',
    latestCertification: 'Crane Operations',
  },
  {
    rank: 3,
    name: 'Arjun Patel',
    certifications: 7,
    completedModules: 7,
    proficiencyLevel: 'Advanced - Site Supervisor',
    latestCertification: 'Hazard Assessment',
  },
  {
    rank: 4,
    name: 'Neha Singh',
    certifications: 6,
    completedModules: 6,
    proficiencyLevel: 'Advanced - Equipment Operator',
    latestCertification: 'Heavy Machinery',
  },
  {
    rank: 5,
    name: 'Vikram Desai',
    certifications: 5,
    completedModules: 5,
    proficiencyLevel: 'Intermediate',
    latestCertification: 'Working at Heights',
  },
  {
    rank: 6,
    name: 'Anjali Verma',
    certifications: 4,
    completedModules: 4,
    proficiencyLevel: 'Intermediate',
    latestCertification: 'Electrical Safety',
  },
  {
    rank: 7,
    name: 'Rohan Gupta',
    certifications: 3,
    completedModules: 3,
    proficiencyLevel: 'Intermediate',
    latestCertification: 'Fall Prevention',
  },
  {
    rank: 8,
    name: 'Divya Nair',
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
      userName: 'आप (You)',
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
      userName: 'आप (You)',
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
      userName: 'आप (You)',
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
