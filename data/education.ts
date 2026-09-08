import { organizations } from './organizations';

export type Education = {
  degree: string;
  institution: string;
  location: string;
  period: string;
  detail?: string;
  logo?: string;
  logoAlt?: string;
  showOnHomepage: boolean;
};

export const education: Education[] = [
  {
    degree: 'Master of Science in Computer Engineering',
    institution: 'Islamic University of Gaza',
    location: 'Gaza, Palestine',
    period: 'Sep 2026 - Present',
    logo: organizations.iug.logo,
    logoAlt: organizations.iug.logoAlt,
    showOnHomepage: true,
  },
  {
    degree: 'Bachelor of Science in Data Science and Artificial Intelligence',
    institution: 'University College of Applied Sciences',
    location: 'Gaza, Palestine',
    period: 'Sep 2022 - Sep 2026',
    detail: 'Grade: 91.00%',
    logo: organizations.ucas.logo,
    logoAlt: organizations.ucas.logoAlt,
    showOnHomepage: true,
  },
  {
    degree: 'Bachelor of Science in Artificial Intelligence, previous study',
    institution: 'American University of Ras Al Khaimah',
    location: 'Ras Al Khaimah, United Arab Emirates',
    period: 'Aug 2021 - Jun 2022',
    detail: 'Completed two semesters before transferring, GPA 3.47 / 4.00',
    showOnHomepage: false,
  },
  {
    degree: 'High School Diploma, Advanced Stream',
    institution: 'Al-Jawdah Boys’ School For Secondary Education',
    location: 'Gaza, Palestine',
    period: 'Sep 2018 - Jun 2021',
    detail: 'Grade: 91.67%',
    logo: organizations.uaeMinistryOfEducation.logo,
    logoAlt: organizations.uaeMinistryOfEducation.logoAlt,
    showOnHomepage: true,
  },
];
