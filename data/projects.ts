import type { Project } from './types';

export const projects: Project[] = [
  {
    slug: 'mace', index: '01', title: 'MACE', subtitle: 'Multi-Agent Course Evaluator',
    summary: 'An evidence-based decision-support system for evaluating university courses from structured educational evidence, using responsibility-focused multi-agent modules, deterministic scoring, optional LLM-assisted analysis, and human evaluator review.',
    archiveSummary: 'An evidence-based decision-support system for university course evaluation using structured evidence, multi-agent modules, deterministic scoring, and human evaluator review.',
    description: 'MACE supports course evaluation through structured evidence, responsibility-focused multi-agent modules, deterministic scoring, optional LLM-assisted analysis, and human evaluator review.',
    tags: ['Multi-Agent Systems', 'AI Evaluation', 'LLMs', 'Decision Support'],
    stack: ['Multi-agent orchestration', 'Deterministic scoring', 'Optional LLM-assisted analysis', 'Structured evidence review'],
    featured: true, caseStudy: true,
    sections: [
      { title: 'Problem', paragraphs: ['Course evaluation draws on varied evidence, including learning materials, activities, assessment design, and educational criteria. Reviewing that evidence consistently takes time, while a final score alone cannot explain how a conclusion was reached.'] },
      { title: 'Decision-support approach', paragraphs: ['MACE separates evaluation into responsibility-focused modules. The system structures course evidence, applies deterministic scoring, and can use LLM-assisted analysis where appropriate, while keeping human evaluator review central to the workflow.'], items: ['Evidence-based course analysis', 'Responsibility-focused multi-agent modules', 'Deterministic scoring', 'Optional LLM-assisted analysis', 'Human evaluator review'] },
      { title: 'Evaluation priorities', paragraphs: ['The project prioritizes grounded outputs, transparent evidence use, and reviewable conclusions. It is designed to support academic judgment, not make autonomous academic decisions.'] },
      { title: 'Status and limitations', paragraphs: ['MACE is an active engineering and research project. Public quantitative results are not reported because no verified metrics are currently approved for publication.'] },
    ],
    links: [], relatedResearch: ['Multi-Agent Systems', 'AI Evaluation', 'Decision Support'], lastModified: '2026-09-07',
  },
  {
    slug: 'haqiqa', index: '02', title: 'Haqiqa', subtitle: 'Agentic Arabic News Verification',
    summary: 'An Arabic news verification platform combining a LangGraph-based multi-stage verification workflow with web search, evidence ranking, semantic analysis, and evaluated machine-learning models.',
    archiveSummary: 'An Arabic news verification platform combining a multi-stage agentic workflow with web search, evidence ranking, semantic analysis, and evaluated machine-learning models.',
    description: 'Haqiqa extracts claims, searches for supporting evidence, ranks sources, evaluates evidence, and produces reasoned verification results with citations. It combines an agentic verification workflow with evaluated Arabic news classification models.',
    tags: ['Arabic NLP', 'Agentic AI', 'Machine Learning', 'Evidence Retrieval'],
    stack: ['Next.js', 'TypeScript', 'FastAPI', 'LangGraph', 'PostgreSQL', 'Telegram Bot'],
    featured: true, caseStudy: true,
    sections: [
      { title: 'Problem', paragraphs: ['Arabic news verification requires more than classifying text in isolation. Useful results need evidence, source comparison, reasoning, and citations that a reader can inspect.'] },
      { title: 'Agentic workflow', paragraphs: ['The system uses a LangGraph-based five-stage verification workflow. Each stage transforms or evaluates evidence before returning a final decision.'], items: ['Claim extraction', 'Web search', 'Evidence ranking', 'Evidence verification', 'Final decision with reasoning and citations'] },
      { title: 'Evaluated machine-learning models', paragraphs: ['Earlier model development used a dataset of 13,750 Arabic news articles. AraBERT reached 96.22% F1, 96.22% accuracy, and 99.57% AUC. XGBoost reached 94.50% F1, 94.51% accuracy, and 98.94% AUC.'] },
      { title: 'Architecture', paragraphs: ['The web application connects a Next.js interface to a FastAPI backend and LangGraph workflow. It includes web search, semantic evidence retrieval, authentication, persistence, and a Telegram interface.'] },
    ],
    links: [{ label: 'Telegram', href: 'https://t.me/HaqiqaBot' }],
    relatedResearch: ['Arabic NLP', 'AI Evaluation', 'Intelligent Systems'], lastModified: '2026-09-07',
  },
  {
    slug: 'skillmap-ai', index: '03', title: 'SkillMap AI', subtitle: 'Student Support Prediction & Learning Analytics',
    summary: 'A machine learning pipeline and dashboard built on ASSISTments interaction data to identify students and skills that may need targeted support, using leakage-safe historical features, LightGBM, threshold tuning, and teacher-facing recommendations.',
    archiveSummary: 'A learning analytics pipeline and dashboard using ASSISTments data, leakage-safe historical features, LightGBM, and threshold tuning to identify targeted support needs.',
    description: 'SkillMap AI turns large-scale student interaction data into support predictions and teacher-facing recommendations through leakage-safe historical features, LightGBM modeling, and threshold tuning.',
    tags: ['Machine Learning', 'Learning Analytics', 'LightGBM', 'Data Science'],
    stack: ['ASSISTments data', 'Leakage-safe feature engineering', 'LightGBM', 'Threshold tuning', 'Learning analytics dashboard'],
    featured: true, caseStudy: true,
    sections: [
      { title: 'Problem', paragraphs: ['Large educational interaction datasets can reveal where students and skills may need support, but useful predictions require careful feature design, evaluation, and an interface that makes results actionable for educators.'] },
      { title: 'Methodology', paragraphs: ['The pipeline uses historical features designed to avoid target leakage, trains a LightGBM model, and tunes the classification threshold to improve identification of support-needed cases.'], items: ['Approximately 525,000 raw interaction records', 'Leakage-safe historical features', 'LightGBM classification', 'Threshold tuning', 'Teacher-facing recommendations'] },
      { title: 'Evaluation', paragraphs: ['The model reached 87.34% ROC-AUC. At the tuned threshold, support-needed recall reached 88.40% and support-needed F1 reached 78.63%.'] },
      { title: 'Decision support', paragraphs: ['The dashboard is designed to help educators identify students and skills that may benefit from targeted support. Its outputs are recommendations for human review, not automated educational decisions.'] },
    ],
    links: [], relatedResearch: ['Machine Learning', 'Learning Analytics', 'AI Evaluation'], lastModified: '2026-09-07',
  },
  {
    slug: 'insightlens', index: '04', title: 'InsightLens', subtitle: 'Multimodal RAG for Document Exploration',
    summary: 'A multimodal retrieval-augmented generation system for exploring document content through semantic retrieval.',
    archiveSummary: 'A multimodal retrieval-augmented generation system for exploring document content through focused multimodal analysis, semantic retrieval, and an interactive exploration workflow.',
    description: 'A compact archive entry for multimodal document exploration with retrieval-augmented generation.',
    tags: ['Multimodal AI', 'RAG', 'Semantic Retrieval'], stack: [], featured: false, caseStudy: false, sections: [], links: [], relatedResearch: ['Multimodal AI', 'Retrieval-Augmented Generation'], lastModified: '2026-09-07',
  },
  {
    slug: 'dialysis-unit-records', index: '05', title: 'Dialysis Unit Records', subtitle: 'Clinical Information System',
    summary: 'A clinical information system for organizing and working with dialysis unit records.',
    archiveSummary: 'A clinical information system for organizing and working with dialysis unit records through a focused FastAPI, React, and data systems application.',
    description: 'A compact archive entry for a clinical information system focused on dialysis unit records.',
    tags: ['FastAPI', 'React', 'Data Systems'], stack: [], featured: false, caseStudy: false, sections: [], links: [], relatedResearch: ['Data Systems'], lastModified: '2026-09-07',
  },
];

export const caseStudyProjects = projects.filter((project) => project.caseStudy);
export const getProject = (slug: string) => caseStudyProjects.find((project) => project.slug === slug);
