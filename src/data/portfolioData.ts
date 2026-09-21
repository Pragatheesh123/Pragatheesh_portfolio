export interface ProjectFinding {
  label: string;
  value: string;
  detail: string;
}

export interface ProjectPreviewImage {
  caption: string;
  url: string;
}

export interface Project {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  tools: string[];
  question: string;
  dataset: string;
  workflowSteps: string[];
  findings: ProjectFinding[];
  repoUrl: string;
  previewImages: ProjectPreviewImage[];
  sampleQuery?: string;
  transparencyNote?: string;
  featured?: boolean;
}

export interface ExperienceMetric {
  label: string;
  value: string;
  description: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
  isCurrent?: boolean;
  metrics: ExperienceMetric[];
  highlights: string[];
}

export interface PortfolioData {
  personal: {
    name: string;
    role: string;
    tagline: string;
    bio: string;
    aboutHeading: string;
    aboutSubtitle: string;
    aboutParagraphs: string[];
    heroOpening: string;
    heroTagline: string;
    institution: string;
    institutionShort: string;
    degree: string;
    specialization: string;
    graduationYear: string;
    location: string;
    email: string;
    phone: string;
    linkedin: string;
    github: string;
    cgpa: string;
    languages: string[];
    resumePdfUrl: string;
    profilePhoto: string;
    profilePhotoAlt: string;
  };
  signals: string[];
  ticker: string[];
  experiences: Experience[];
  experience: Experience;
  projects: Project[];
  skills: {
    analysis: string[];
    visualization: string[];
    analytics: string[];
  };
  achievement: {
    title: string;
    subtitle: string;
    prize: string;
    badge: string;
    description: string;
    highlights: string[];
  };
  education: {
    institution: string;
    degree: string;
    specialization: string;
    duration: string;
    cgpa: string;
    location: string;
  };
  beyond: Array<{
    id: string;
    title: string;
    tagline: string;
    description: string;
    category: string;
    icon: string;
  }>;
  currently: {
    learning: string;
    building: string;
    playing: string;
    thinking: string;
  };
}

const srmTechExperience: Experience = {
  role: "Data Analyst Intern",
  company: "SRM Technology",
  period: "Sep 2026 – Dec 2026",
  location: "Chennai / Hybrid",
  isCurrent: true,
  description: "Currently working as a Data Analyst Intern at SRM Technology, analyzing enterprise datasets, developing SQL data pipelines, and building business intelligence dashboards.",
  metrics: [
    {
      label: "Role Focus",
      value: "Analytics",
      description: "Business intelligence, metric modeling, and operational KPI analysis"
    },
    {
      label: "Core Stack",
      value: "SQL & BI",
      description: "PostgreSQL, Microsoft Excel, Power BI, and data pipelines"
    },
    {
      label: "Status",
      value: "Active",
      description: "Current Data Analyst Internship engagement"
    }
  ],
  highlights: [
    "Extracting, cleaning, and transforming operational data using structured PostgreSQL queries and relational joins.",
    "Developing interactive Power BI & Excel dashboards to track organizational performance indicators and trend distributions.",
    "Collaborating with technical teams to audit data accuracy, optimize query performance, and present executive summaries."
  ]
};

const codebindExperience: Experience = {
  role: "AI Intern",
  company: "CodeBind Technologies",
  period: "Dec 2025 – Jan 2026",
  location: "Madurai / Hybrid",
  isCurrent: false,
  description: "Developed and evaluated an AI-powered conversational chatbot using Python and Generative AI concepts, focusing on intent handling, text preprocessing, and prompt optimization across user interactions.",
  metrics: [
    {
      label: "Response Accuracy",
      value: "90%+",
      description: "Reported accuracy rate across predefined domain test scenarios"
    },
    {
      label: "Text Preprocessing",
      value: "500+",
      description: "Records cleaned and optimized for prompt stability and response relevance"
    },
    {
      label: "User Interactions",
      value: "100+",
      description: "Sample conversations evaluated during test phase workflows"
    }
  ],
  highlights: [
    "Developed and tested an AI-powered chatbot using Python and Generative AI concepts, handling over 100 sample user interactions.",
    "Performed data preprocessing and prompt optimization on 500+ text records, improving chatbot response consistency and relevance.",
    "Collaborated with a team to design, test, and refine chatbot workflows, achieving 90%+ successful response accuracy across predefined test scenarios.",
    "Documented project workflows and presented chatbot functionality, contributing to the successful completion of the internship project."
  ]
};

export const portfolioData: PortfolioData = {
  personal: {
    name: "Pragatheesh Senthil",
    role: "Data Analyst",
    tagline: "I turn messy data into useful decisions.",
    bio: "Final-year Computer Science student specializing in Big Data Analytics, building practical analytical solutions with SQL, Excel, Power BI and Python.",
    heroOpening: "Pragatheesh builds.",
    heroTagline: "Data is the profession. Curiosity is the personality.",
    aboutHeading: "Not just a résumé.",
    aboutSubtitle: "I'm interested in more than one kind of problem.",
    aboutParagraphs: [
      "I look at data the same way I look at a chessboard or a football pitch: understand the rules of the system, cut through the noise, and find the move that actually matters. Most data problems aren't about building a fancier dashboard—they're about asking what decision needs to be made before opening the software.",
      "By day, that means working with SQL, PostgreSQL, Excel, Power BI, and Python—cleaning up fragmented tables and turning them into clear, actionable answers. Outside the terminal, I'm just as obsessed with strategy and craft, whether that's coordinating clutch rounds on Valorant, analyzing match formations, or cooking a genuinely good white-sauce pasta."
    ],
    institution: "SRM Institute of Science and Technology (SRMIST)",
    institutionShort: "SRMIST",
    degree: "B.Tech in Computer Science Engineering",
    specialization: "Big Data Analytics",
    graduationYear: "2027",
    location: "Madurai, Tamil Nadu, India",
    email: "pragsen98@gmail.com",
    phone: "+91 9786672387",
    linkedin: "https://www.linkedin.com/in/pragatheesh-s-/",
    github: "https://github.com/Pragatheesh123",
    cgpa: "8.00 / 10.00",
    languages: ["English", "Tamil", "Hindi"],
    resumePdfUrl: "/resume.pdf",
    profilePhoto: "/images/photot.png",
    profilePhotoAlt: "/images/myself.jpg",
  },

  signals: [
    "Data Analyst Intern @ SRM Technology",
    "Based in Madurai",
    "Studying Big Data Analytics",
    "Builds with Data",
    "Plays Football",
    "Chess Player",
    "Valorant",
    "FC 26",
    "Cooks"
  ],

  ticker: [
    "SQL",
    "EXCEL",
    "POWER BI",
    "PYTHON",
    "FOOTBALL",
    "CHESS",
    "VALORANT",
    "FC 26",
    "COOKING"
  ],

  experiences: [srmTechExperience, codebindExperience],
  experience: srmTechExperience,

  projects: [
    {
      id: "sql-job-market",
      number: "01",
      title: "SQL Job Market Analysis",
      subtitle: "Uncovering salary drivers, high-demand skills, and optimal career pathways across 2023 Data Analyst job postings.",
      tools: ["PostgreSQL", "SQL", "Microsoft Excel", "VS Code", "GitHub"],
      question: "Which data analyst roles pay the highest salaries, which skills are required for top compensation, and which skills offer the optimal combination of high demand and competitive pay?",
      dataset: "Thousands of verified job listings covering roles, required skill tags, company metadata, locations, schedule types, and annual salaries.",
      workflowSteps: [
        "Structured and ingested relational schemas into PostgreSQL with custom indexes on roles and salary attributes.",
        "Engineered SQL queries incorporating JOINs, CTEs, Window Functions, and Aggregate Subqueries to filter high-earning distributions.",
        "Connected Microsoft Excel directly to PostgreSQL via ODBC to pull live query outputs into structured tables.",
        "Constructed interactive Pivot Tables, slicers, and chart sheets to communicate top skills and geographic salary premiums."
      ],
      findings: [
        {
          label: "Highest-Demand Skill",
          value: "SQL & Excel",
          detail: "Appeared in over 65% of all analyzed postings as mandatory baseline criteria."
        },
        {
          label: "Top Salary Combinations",
          value: "SQL + Cloud / Python",
          detail: "Roles requiring Python and cloud data warehouses demonstrated a 28% salary premium over spreadsheet-only roles."
        },
        {
          label: "Optimal Career Sweet-Spot",
          value: "High Volume + High Comp",
          detail: "Isolated technical tools that maintain both robust posting volume and upper-quartile remuneration."
        }
      ],
      repoUrl: "https://github.com/Pragatheesh123/Sql-job-data-analysis-",
      sampleQuery: `-- Query: Top Paying Data Analyst Jobs
SELECT
    job_id,
    job_title,
    job_location,
    job_schedule_type,
    salary_year_avg,
    job_posted_date,
    name AS company_name
FROM
    job_postings_fact
LEFT JOIN company_dim 
    ON job_postings_fact.company_id = company_dim.company_id
WHERE
    job_title_short = 'Data Analyst' AND
    job_location = 'Anywhere' AND
    salary_year_avg IS NOT NULL
ORDER BY
    salary_year_avg DESC
LIMIT 10;`,
      previewImages: [
        {
          caption: "Query Workflow & Schema Architecture",
          url: "https://raw.githubusercontent.com/Pragatheesh123/Sql-job-data-analysis-/main/README.md"
        }
      ],
      featured: true
    },
    {
      id: "salary-dashboard",
      number: "02",
      title: "Salary Dashboard Analysis",
      subtitle: "Interactive spreadsheet modeling analyzing 1,000+ salary records to evaluate compensation trends across experience tiers.",
      tools: ["Microsoft Excel", "Pivot Tables", "Advanced Formulas", "Slicers", "Data Modeling"],
      question: "How do salaries fluctuate across job titles, experience tiers, and job platforms, and how can manual reporting time be minimized through automation?",
      dataset: "Over 1,000 global salary and compensation records covering job titles, platforms, countries, schedule types, and annual remuneration.",
      workflowSteps: [
        "Audited raw spreadsheet for duplicates, null values, and inconsistent currency representations, improving data accuracy by ~20%.",
        "Formulated dynamic median salary indexes and helper columns using advanced nested Excel functions.",
        "Built multi-dimensional Pivot Tables to aggregate compensation across job schedule types and geographic regions.",
        "Designed an interactive executive dashboard with synchronized slicers, cutting manual query evaluation time by ~30%."
      ],
      findings: [
        {
          label: "Records Analyzed",
          value: "1,000+",
          detail: "Cleaned and standardized salary records across multiple technical job categories."
        },
        {
          label: "Accuracy Improvement",
          value: "~20%",
          detail: "Eliminated duplicate rows, malformed headers, and currency format discrepancies."
        },
        {
          label: "Analysis Efficiency",
          value: "~30%",
          detail: "Reduced manual reporting and filtering time through interactive Excel slicers and KPI cards."
        }
      ],
      repoUrl: "https://github.com/Pragatheesh123/excel-salary-dashboard",
      previewImages: [
        {
          caption: "Excel Salary Dashboard Overview",
          url: "https://github.com/user-attachments/assets/78382045-ff36-4b97-8563-9d446adfed63"
        }
      ],
      featured: false
    },
    {
      id: "tour-revenue-analysis",
      number: "03",
      title: "Tour Revenue Analysis",
      subtitle: "Evaluating gross revenue, show volume, and per-performance efficiency across top international music tours.",
      tools: ["Microsoft Excel", "Data Cleaning", "Pivot Tables", "Comparative Visualization"],
      question: "Which global artist tours generated the highest total revenue, and which acts achieved the highest operational efficiency per individual concert date?",
      dataset: "Tour performance records of top worldwide artists detailing total revenue, ticket sales, show counts, and tour legs.",
      workflowSteps: [
        "Cleaned and standardized inconsistent currency symbols, date ranges, and missing attendance figures, increasing accuracy by ~20%.",
        "Calculated revenue per show metrics to assess operational efficiency separate from total tour longevity.",
        "Engineered comparative Pivot Table reports that reduced manual calculation effort by ~25%.",
        "Generated trend charts contrasting total gross vs revenue-per-show performance."
      ],
      findings: [
        {
          label: "Efficiency Discrepancies",
          value: "Revenue / Show",
          detail: "Isolated distinct performance differences between high-volume arena runs and selective stadium tours."
        },
        {
          label: "Data Quality Gain",
          value: "~20%",
          detail: "Resolved corrupted currency representations and duplicate concert tour legs."
        },
        {
          label: "Effort Reduction",
          value: "~25%",
          detail: "Automated aggregation tables replaced manual row-by-row artist comparisons."
        }
      ],
      repoUrl: "https://github.com/Pragatheesh123",
      previewImages: [],
      featured: false
    },
    {
      id: "hospital-erp",
      number: "04",
      title: "Hospital Management ERP System",
      subtitle: "Comprehensive 55-feature healthcare system developed for SRM University Trichy with intelligent imaging analytics integration.",
      tools: ["Healthcare Data Cleaning", "ERP Workflows", "TypeScript", "Visualization", "Data Structuring"],
      question: "How can hospital operations — spanning patient records, clinical schedules, diagnostic image pipelines, and inventory — be unified into a reliable, structured data system?",
      dataset: "Relational healthcare records covering inpatient admissions, billing workflows, doctor schedules, diagnostic lab tags, and radiology metadata.",
      workflowSteps: [
        "Collaborated on designing and validating normalized database schemas for patient histories and diagnostic logs.",
        "Preprocessed healthcare data tables to maintain strict validation rules across departments.",
        "Created operational reporting dashboards to monitor room availability, patient wait times, and clinical throughput."
      ],
      findings: [
        {
          label: "System Features",
          value: "55+",
          detail: "Covered modular workflows across clinical records, pharmacy, radiology, and triage."
        },
        {
          label: "Data Integrity",
          value: "Unified Schema",
          detail: "Standardized clinical records to prevent double-entry and mismatched diagnostic orders."
        }
      ],
      repoUrl: "https://github.com/Pragatheesh123/Hospital-Management-System-with-55-features",
      previewImages: [],
      transparencyNote: "Collaborative academic project developed for SRM University Trichy; repository forked from team lead to contribute to data structuring, healthcare reporting, and visualization modules.",
      featured: false
    }
  ],

  skills: {
    analysis: ["SQL", "PostgreSQL", "Microsoft Excel", "Python"],
    visualization: ["Power BI", "Excel Dashboards", "Data Storytelling", "Executive Reporting"],
    analytics: ["Data Cleaning", "EDA", "Statistical Analysis", "Dashboard Design"]
  },

  achievement: {
    title: "WINNER — MEDIATHON",
    subtitle: "Intercollegiate Med-Tech Hackathon",
    prize: "₹30,000",
    badge: "First Place",
    description: "Won 1st prize at the Mediathon Intercollegiate Hackathon for architecting a modular Hospital Management ERP System covering healthcare data workflows and intelligent diagnostic support.",
    highlights: [
      "Awarded ₹30,000 cash prize among competing university engineering teams.",
      "Engineered structured data schemas and cleaned clinical test datasets.",
      "Designed operational dashboard interfaces for clinical and administrative decision-makers."
    ]
  },

  education: {
    institution: "SRM Institute of Science and Technology (SRMIST)",
    degree: "B.Tech in Computer Science Engineering",
    specialization: "Big Data Analytics",
    duration: "2023 — 2027",
    cgpa: "8.00 / 10.00",
    location: "Trichy, Tamil Nadu, India"
  },

  beyond: [
    {
      id: "football",
      title: "Football",
      category: "Outdoor / Team",
      tagline: "Competitive, physical and social.",
      description: "Fast-paced, high pressure, and zero room for hesitation. Playing football taught me spatial awareness, quick tactical adjustments under pressure, and how individual accountability powers collective victory.",
      icon: "trophy"
    },
    {
      id: "chess",
      title: "Chess",
      category: "Strategy / Patience",
      tagline: "Patterns, decision making, thinking ahead.",
      description: "Evaluating candidate moves, understanding pawn structures, and managing positional trades under time constraints. It is the purest exercise in disciplined tactical calculation without the luxury of chance.",
      icon: "target"
    },
    {
      id: "valorant",
      title: "Valorant",
      category: "Games / Team",
      tagline: "Team coordination, fast decisions, reaction.",
      description: "Economy management, site executes, utility synergy, and clutch composure. Tactical FPS demands precise communication, split-second decision-making, and high emotional resilience.",
      icon: "gamepad"
    },
    {
      id: "fc26",
      title: "FC 26",
      category: "Football / Gaming",
      tagline: "Tactical positioning & competitive football gaming.",
      description: "Reading passing lanes, adapting formations under momentum shifts, and executing team coordination in high-stakes matches.",
      icon: "gamepad"
    },
    {
      id: "cooking",
      title: "Cooking",
      category: "Kitchen / Experiment",
      tagline: "Current signature: white-sauce pasta.",
      description: "\"I make a genuinely good white-sauce pasta.\" Balancing flavors, adjusting heat levels, and learning what happens when you introduce unexpected variables. It is essentially an exploratory data pipeline for your tastebuds.",
      icon: "flame"
    }
  ],

  currently: {
    learning: "Advanced Power BI DAX & Python Machine Learning workflows",
    building: "High-impact SQL case studies & interactive business dashboards",
    playing: "Weekend football matchdays & competitive Valorant rounds",
    thinking: "Bridging the gap between messy real-world datasets and high-stakes executive decisions"
  }
};

export const PORTFOLIO_DATA = portfolioData;
