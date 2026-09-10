import { organizations } from './organizations';

export type Experience = {
  role: string;
  organization: string;
  period: string;
  location?: string;
  workMode?: 'On-site' | 'Remote';
  summary: string;
  detail: string;
  bullets: string[];
  logo: string;
  logoAlt: string;
  showOnHomepage: boolean;
};

export const experience: Experience[] = [
  {
    role: 'Teaching Assistant',
    organization: 'University College of Applied Sciences',
    period: 'May 2026 - Present',
    location: 'Gaza Strip, Palestine',
    workMode: 'On-site',
    summary: 'Teach and support Data Science Programming Languages labs for more than 150 students across three classes.',
    detail: 'The labs cover Python, NumPy, pandas, SQL, API data access, and practical data workflows. The role includes preparing materials, coding exercises, assignments, and practical activities, as well as supporting assessment, student questions, and course follow-up.',
    bullets: [
      'Teach and support Data Science Programming Languages labs for more than 150 students across three classes.',
      'Cover Python, NumPy, pandas, SQL, API data access, and practical data workflows.',
      'Prepare lab materials, coding exercises, assignments, and practical activities.',
      'Support assessment, student questions, and course follow-up.',
    ],
    logo: organizations.ucas.logo,
    logoAlt: organizations.ucas.logoAlt,
    showOnHomepage: true,
  },
  {
    role: 'Research Partnerships and Outreach Assistant',
    organization: 'Unit of International Academic Cooperation, University College of Applied Sciences',
    period: 'May 2026 - Present',
    location: 'Gaza Strip, Palestine',
    workMode: 'On-site',
    summary: 'Support international academic cooperation and research partnership activities.',
    detail: 'Work includes identifying relevant research calls and funding opportunities, mapping institutions and academic departments, and preparing structured outreach material for potential collaborations.',
    bullets: [
      'Identify relevant research calls and funding opportunities.',
      'Map institutions and academic departments for potential collaboration.',
      'Prepare structured outreach material for research partnerships.',
    ],
    logo: organizations.ucas.logo,
    logoAlt: organizations.ucas.logoAlt,
    showOnHomepage: true,
  },
  {
    role: 'Data Analyst and Research Intern',
    organization: 'Enbat',
    period: 'Nov 2025 - May 2026',
    location: 'West Bank, Palestine',
    workMode: 'Remote',
    summary: 'Developed reproducible workflows for Arabic qualitative research data and manuscript preparation.',
    detail: 'The work covered transcription processing, quote extraction, meaning-unit segmentation, Arabic-English alignment, dataset preparation, and codebook-based thematic analysis support. A structured dataset of 319 meaning units was built using AI-assisted processing within an existing human-defined analytical framework.',
    bullets: [
      'Developed reproducible workflows for Arabic qualitative research data.',
      'Processed transcription, quote extraction, meaning-unit segmentation, and Arabic-English alignment.',
      'Built a structured research dataset of 319 meaning units.',
      'Supported thematic analysis, research methodology documentation, and manuscript preparation.',
      'Used AI-assisted processing within a human-defined analytical framework.',
    ],
    logo: organizations.enbat.logo,
    logoAlt: organizations.enbat.logoAlt,
    showOnHomepage: true,
  },
  {
    role: 'Head of Public Relations',
    organization: 'UCAS Engineering Club',
    period: 'Dec 2025 - May 2026',
    location: 'Gaza Strip, Palestine',
    workMode: 'On-site',
    summary: 'Led public relations and communications for the UCAS Engineering Club, supporting outreach, activity promotion, and engagement.',
    detail: 'Led public relations and communications for the UCAS Engineering Club, coordinating outreach and promotional messaging for club activities while supporting engagement with students and relevant external audiences.',
    bullets: [
      'Led public relations and communications for the UCAS Engineering Club.',
      'Coordinated outreach and promotional messaging for club activities and events.',
      'Supported student engagement and communication with relevant external audiences.',
    ],
    logo: organizations.ucas.logo,
    logoAlt: organizations.ucas.logoAlt,
    showOnHomepage: false,
  },
];
