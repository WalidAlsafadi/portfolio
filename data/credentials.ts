export type Credential = {
  name: string;
  provider: string;
  completed: string;
  duration?: string;
  certificateUrl: string;
};

export const credentials: Credential[] = [
  {
    name: 'Data Science and Machine Learning Bootcamp',
    provider: 'AXSOS Academy',
    completed: 'Aug 2026',
    duration: '660 hours',
    certificateUrl: 'https://learn.axsos.academy/certificates/0ufukw7ogh',
  },
  {
    name: 'Deep Dive LLM Bootcamp',
    provider: 'zakey.tech',
    completed: 'Feb 2026',
    duration: '4 months',
    certificateUrl: 'https://verified.sertifier.com/en/verify/21028668377400/',
  },
  {
    name: 'Machine Learning Specialization',
    provider: 'DeepLearning.AI',
    completed: 'Nov 2024',
    duration: 'Approximately 95 hours',
    certificateUrl: 'https://coursera.org/verify/specialization/9HFC164M2NWT',
  },
  {
    name: 'Machine Learning A-Z',
    provider: 'Udemy',
    completed: 'Aug 2025',
    duration: '50 hours',
    certificateUrl: 'https://ude.my/UC-c5e12fef-cbcf-484d-9f28-8485ca02a4ed',
  },
  {
    name: 'Advanced Python',
    provider: 'Gaza Sky Geeks',
    completed: 'Jun 2023',
    duration: '30 hours',
    certificateUrl: 'https://drive.google.com/file/d/1kPkpdcIBkuoRo8bw8UF7BRApJ6XtKZdA/view?usp=sharing',
  },
];
