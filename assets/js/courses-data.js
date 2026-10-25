/**
 * SVB Infotech - Course Database
 * Complete catalog matching official syllabus and screenshot catalog
 */
const COURSES_DATA = [
  {
    id: 'full-stack-web-development',
    title: 'Full Stack Web Development',
    category: 'full-stack',
    badgeText: 'FULL STACK',
    duration: '60-80 Hours',
    rating: '4.9',
    reviewsCount: '240+',
    image: 'assets/images/course_fullstack.jpg',
    description: 'Master Frontend UI, Backend RESTful APIs, database design, and end-to-end cloud deployment with MERN stack.',
    overview: 'This comprehensive Full Stack program prepares you to build scalable, high-performance web applications from scratch. You will master both client-side and server-side engineering with modern tools and real-world projects.',
    syllabus: [
      'Frontend Mastery: HTML5, Modern CSS3, Flexbox, Grid, ES6+ JavaScript',
      'React Ecosystem: Functional Components, Hooks, State Management (Redux Toolkit)',
      'Backend Engineering: Node.js, Express.js architecture, RESTful API design',
      'Database Architecture: MongoDB, Mongoose ODM, Relational PostgreSQL basics',
      'Authentication & Security: JWT, OAuth 2.0, bcrypt, role-based access control',
      'DevOps & Deployment: Git version control, Docker containerization, AWS EC2 / Vercel'
    ],
    careers: ['Full Stack Developer', 'MERN Stack Engineer', 'Frontend Specialist', 'Backend Engineer'],
    tools: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Node.js', 'Express', 'MongoDB', 'Git']
  },
  {
    id: 'python-programming-ai',
    title: 'Python Programming & AI',
    category: 'data-ai',
    badgeText: 'DATA SCIENCE',
    duration: '60-70 Hours',
    rating: '4.9',
    reviewsCount: '190+',
    image: 'assets/images/course_python.jpg',
    description: 'Learn modern Python programming, data manipulation, predictive ML models, and Generative AI applications.',
    overview: 'From fundamental syntax to advanced machine learning algorithms and LLM integrations, this course builds hands-on proficiency in artificial intelligence.',
    syllabus: [
      'Python Fundamentals: Data structures, OOP, functional paradigms, error handling',
      'Data Manipulation: NumPy arrays, Pandas DataFrames, data wrangling',
      'Data Visualization: Matplotlib, Seaborn, interactive dashboards',
      'Machine Learning: Supervised & unsupervised learning with Scikit-Learn',
      'Deep Learning Intro: Neural networks, TensorFlow/Keras basics',
      'Generative AI: Prompt engineering, LangChain, OpenAI & Claude API integration'
    ],
    careers: ['Python Developer', 'AI/ML Engineer', 'Data Analyst', 'Automation Specialist'],
    tools: ['Python', 'Pandas', 'NumPy', 'Scikit-Learn', 'TensorFlow', 'Jupyter', 'FastAPI']
  },
  {
    id: 'data-analytics-power-bi',
    title: 'Data Analytics & Power BI',
    category: 'data-ai',
    badgeText: 'ANALYTICS',
    duration: '45-60 Hours',
    rating: '4.8',
    reviewsCount: '175+',
    image: 'assets/images/course_analytics.jpg',
    description: 'Transform raw business data into interactive visual dashboards and execute predictive business intelligence.',
    overview: 'Learn to extract, clean, model, and visualize data to drive business decisions. Master Microsoft Power BI along with Advanced SQL and DAX formulas.',
    syllabus: [
      'Data Analytics Essentials: Business metrics, KPI definitions, ETL workflow',
      'Advanced SQL: Complex joins, subqueries, window functions, CTEs',
      'Power BI Desktop: Data modeling, relationship mapping, calculated columns',
      'DAX Formulas: Time intelligence functions, measure optimization',
      'Dashboard Design: UX best practices, drill-through, bookmarks, custom visuals',
      'Power BI Service: Cloud workspaces, scheduled refreshes, role-level security'
    ],
    careers: ['Power BI Developer', 'Business Intelligence Analyst', 'Data Analyst', 'Reporting Specialist'],
    tools: ['Power BI', 'SQL Server', 'DAX', 'Excel', 'Tableau Basics', 'Power Query']
  },
  {
    id: 'java-full-stack-technology',
    title: 'Java Full Stack Technology',
    category: 'full-stack',
    badgeText: 'JAVA TECH',
    duration: '60-80 Hours',
    rating: '5.0',
    reviewsCount: '310+',
    image: 'assets/images/course_java.jpg',
    description: 'Build enterprise-grade backend services, scalable microservices architectures, and modern web applications.',
    overview: 'Master enterprise software engineering with Core Java, Spring Boot, Hibernate ORM, and modern frontend integration. Designed for MNC recruitment drives.',
    syllabus: [
      'Core Java: OOP principles, multithreading, collections framework, Java 17 features',
      'Database & JDBC: MySQL, PostgreSQL, JDBC templates, transactions',
      'Spring Framework: Spring Core, Dependency Injection, Inversion of Control',
      'Spring Boot & Microservices: REST APIs, Eureka service registry, API Gateway',
      'Data Persistence: Hibernate ORM, Spring Data JPA, caching',
      'Full Stack Integration: Angular/React frontend integration, JWT auth'
    ],
    careers: ['Java Developer', 'Spring Boot Engineer', 'Backend Software Engineer', 'Enterprise Architect'],
    tools: ['Java 17', 'Spring Boot', 'Hibernate', 'MySQL', 'Postman', 'Maven', 'IntelliJ']
  },
  {
    id: 'ui-ux-design-prototyping',
    title: 'UI/UX Design & Prototyping',
    category: 'design',
    badgeText: 'UI/UX',
    duration: '40-55 Hours',
    rating: '4.9',
    reviewsCount: '150+',
    image: 'assets/images/course_uiux.jpg',
    description: 'Master user research design, interaction design, wireframes, design systems, and clickable Figma prototypes.',
    overview: 'Become a certified product designer. Learn user empathy, design thinking, information architecture, and create portfolio-ready mobile and web app designs.',
    syllabus: [
      'Design Thinking: User research, personas, empathy maps, journey mapping',
      'Information Architecture: Card sorting, site maps, user flows',
      'Figma Mastery: Auto-layout, components, variants, variables, interactive prototyping',
      'Design Systems: Color theory, typography scales, spacing tokens, micro-interactions',
      'Usability Testing: A/B testing, heuristic evaluation, design handoff to developers',
      'Portfolio Development: 2 complete end-to-end case studies for interview hiring'
    ],
    careers: ['UI/UX Designer', 'Product Designer', 'Interaction Designer', 'Figma Specialist'],
    tools: ['Figma', 'FigJam', 'Adobe XD', 'Miro', 'Zeplin', 'Design Systems']
  },
  {
    id: 'cloud-computing-devops',
    title: 'Cloud Computing & DevOps',
    category: 'cloud',
    badgeText: 'CLOUD',
    duration: '50-70 Hours',
    rating: '4.9',
    reviewsCount: '165+',
    image: 'assets/images/course_cloud.jpg',
    description: 'Architect resilient cloud infrastructure, containerize applications, and automate CI/CD release pipelines.',
    overview: 'Prepare for top cloud certifications with real-world infrastructure automation on Amazon Web Services (AWS) and modern DevOps toolchains.',
    syllabus: [
      'Cloud Fundamentals: AWS global infrastructure, IAM policies, VPC networking',
      'Compute & Storage: EC2 instances, auto-scaling, S3 buckets, EBS storage',
      'Linux Administration: Shell scripting, cron jobs, server management',
      'Containerization: Docker images, multi-stage builds, Docker Compose',
      'Container Orchestration: Kubernetes architecture, pods, deployments, services',
      'CI/CD Automation: GitHub Actions, Jenkins pipelines, Terraform Infrastructure as Code'
    ],
    careers: ['Cloud Engineer', 'DevOps Engineer', 'Site Reliability Engineer', 'AWS Solutions Architect'],
    tools: ['AWS', 'Linux', 'Docker', 'Kubernetes', 'Terraform', 'Jenkins', 'GitHub Actions']
  },
  {
    id: 'c-cpp-programming',
    title: 'C & C++ Programming',
    category: 'programming',
    badgeText: 'CODING',
    duration: '40-50 Hours',
    rating: '4.8',
    reviewsCount: '130+',
    image: 'assets/images/course_cpp.jpg',
    description: 'Strengthen computing foundation, algorithmic problem solving, pointers, and memory management architecture.',
    overview: 'The golden bedrock of computer science. Build unparalleled algorithmic reasoning, low-level memory insight, and object-oriented mastery.',
    syllabus: [
      'C Essentials: Variables, operators, control flow, functions, modular code',
      'Memory Management: Pointers, arrays, string manipulations, dynamic memory (malloc/free)',
      'Structures & Unions: Data packing, file I/O operations, linked list basics',
      'C++ OOP: Classes, objects, constructors, destructors, operator overloading',
      'Inheritance & Polymorphism: Virtual functions, abstract classes, runtime dispatch',
      'Standard Template Library (STL): Vectors, maps, sets, queues, sorting algorithms'
    ],
    careers: ['Systems Programmer', 'Embedded Software Engineer', 'Game Developer', 'Core Software Engineer'],
    tools: ['C', 'C++', 'GCC', 'GDB Debugger', 'VS Code', 'STL']
  },
  {
    id: 'web-design-frontend-development',
    title: 'Web Design & Frontend Development',
    category: 'full-stack',
    badgeText: 'FRONTEND',
    duration: '45-60 Hours',
    rating: '4.8',
    reviewsCount: '145+',
    image: 'assets/images/course_frontend.jpg',
    description: 'Design responsive, accessible, mobile-first web interfaces with modern CSS, Tailwind, and JavaScript animation.',
    overview: 'Learn to transform creative design mockups into blazing-fast, responsive web interfaces with semantic markup, CSS animations, and DOM manipulation.',
    syllabus: [
      'HTML5 Semantic Markup: Modern SEO layout tags, web accessibility (WCAG)',
      'Modern CSS: Flexbox layout, CSS Grid, media queries, CSS variables',
      'Tailwind CSS: Utility-first styling, component abstraction, dark mode setup',
      'JavaScript Essentials: DOM manipulation, events, asynchronous fetch API',
      'Web Animations: CSS keyframes, transitions, smooth scroll interactions',
      'Project Deployment: Git version control, Netlify & Vercel deployment'
    ],
    careers: ['Frontend Developer', 'UI Developer', 'Web Designer', 'HTML/CSS Specialist'],
    tools: ['HTML5', 'CSS3', 'Tailwind CSS', 'JavaScript', 'Bootstrap', 'Git']
  },
  {
    id: 'computer-fundamentals-ms-office',
    title: 'Computer Fundamentals & MS Office',
    category: 'basics',
    badgeText: 'BASICS',
    duration: '30-40 Hours',
    rating: '4.8',
    reviewsCount: '110+',
    image: 'assets/images/course_computer_basics.jpg',
    description: 'Essential digital skills, covering operating system workflows, professional documentation, and spreadsheets.',
    overview: 'Perfect for students, job aspirants, and working professionals looking to attain complete mastery of corporate office software and computer productivity.',
    syllabus: [
      'Computer Architecture & OS: Windows 11 navigation, file management, security settings',
      'Microsoft Word: Professional formatting, mail merge, templates, table of contents',
      'Microsoft PowerPoint: Slide deck design, animations, transitions, executive decks',
      'Microsoft Excel Basics: Data entry, arithmetic formulas, conditional formatting, basic charts',
      'Internet & Email Etiquette: Outlook management, cloud storage (OneDrive/Google Drive)',
      'Productivity Tools: PDF editing, typing speed enhancement, basic troubleshooting'
    ],
    careers: ['Office Administrator', 'Data Entry Executive', 'Customer Support Associate', 'Executive Assistant'],
    tools: ['MS Word', 'MS Excel', 'MS PowerPoint', 'Outlook', 'Windows 11']
  },
  {
    id: 'advanced-excel-financial-modeling',
    title: 'Advanced Excel & Financial Modeling',
    category: 'data-ai',
    badgeText: 'EXCEL PRO',
    duration: '35-45 Hours',
    rating: '4.9',
    reviewsCount: '200+',
    image: 'assets/images/course_excel.jpg',
    description: 'Automate spreadsheets, design interactive executive KPI dashboards, and master advanced financial formulas.',
    overview: 'Master formulas, nested lookups, financial valuation models, dynamic pivot tables, and automated VBA macros for finance and analytics roles.',
    syllabus: [
      'Advanced Formulas: XLOOKUP, INDEX-MATCH, SUMIFS, dynamic array functions',
      'Pivot Tables & Slicers: Data summarization, calculated fields, dashboard design',
      'Financial Modeling: Discounted Cash Flow (DCF), EMI schedules, loan amortization',
      'Data Cleansing: Power Query, text-to-columns, data validation rules',
      'What-If Analysis: Goal Seek, Data Tables, Scenario Manager',
      'Intro to Automation: Excel Macros, recording workflows, basic VBA scripts'
    ],
    careers: ['Financial Analyst', 'MIS Executive', 'Business Operations Analyst', 'Auditor'],
    tools: ['Advanced Excel', 'Power Query', 'VBA Macros', 'Pivot Tables', 'Financial Models']
  },
  {
    id: 'cyber-security-network-defense',
    title: 'Cyber Security & Network Defense',
    category: 'cloud',
    badgeText: 'SECURITY',
    duration: '55-70 Hours',
    rating: '4.8',
    reviewsCount: '140+',
    image: 'assets/images/course_cybersecurity.jpg',
    description: 'Defend and cipher security principles, vulnerability scanning, network defense, ethical hacking, and threat mitigation.',
    overview: 'Learn modern defense mechanisms, secure networking architectures, penetration testing methodologies, and how to safeguard enterprise systems.',
    syllabus: [
      'Networking Foundations: TCP/IP, OSI model, DNS, subnets, firewall rules',
      'Linux for Security: Kali Linux configuration, bash terminal scripting',
      'Ethical Hacking: Reconnaissance, Nmap port scanning, Wireshark packet capture',
      'Web Application Security: OWASP Top 10 vulnerabilities (SQLi, XSS, CSRF)',
      'Cryptography: Symmetric/asymmetric encryption, SSL/TLS, digital signatures',
      'SOC & Incident Response: SIEM fundamentals, threat logs analysis, defense hardening'
    ],
    careers: ['Cyber Security Analyst', 'SOC Analyst (L1)', 'Network Security Engineer', 'Ethical Hacker'],
    tools: ['Kali Linux', 'Wireshark', 'Nmap', 'Burp Suite', 'Metasploit', 'Snort']
  },
  {
    id: 'react-js-web-development',
    title: 'React.js Web Development',
    category: 'full-stack',
    badgeText: 'REACT.JS',
    duration: '40-50 Hours',
    rating: '4.9',
    reviewsCount: '280+',
    image: 'assets/images/course_react.jpg',
    description: 'Build high-performance single-page applications with reusable components, hooks, routing, and Next.js.',
    overview: 'Industry-favorite library for frontend engineering. Master React 18+, component lifecycle, complex state with Redux Toolkit, and SSR with Next.js.',
    syllabus: [
      'Modern JavaScript for React: ES6 imports, destructuring, spread, arrow functions, promises',
      'React Core: JSX, Components, Props, State, Conditional Rendering, Lists & Keys',
      'React Hooks: useState, useEffect, useRef, useMemo, useCallback, custom hooks',
      'Routing & State: React Router v6, Context API, Redux Toolkit state slices',
      'API Integration: Axios, React Query (TanStack Query), error boundaries',
      'Next.js Intro: Server components, SSR, static generation, SEO optimization'
    ],
    careers: ['React.js Developer', 'Frontend Engineer', 'Web Application Specialist', 'UI Developer'],
    tools: ['React 18', 'Redux Toolkit', 'Next.js', 'React Router', 'Tailwind CSS', 'Vite']
  }
];

// Verified Placement Stories Database
const PLACEMENT_STORIES = [
  {
    id: 'karthik-r',
    name: 'Karthik R.',
    statusBadge: 'Placed & Verified',
    education: 'Fresher - 2025 Passout',
    avatar: 'assets/images/student_karthik.jpg',
    company: 'Cognizant',
    role: 'Programmer Analyst',
    package: '₹ 5.2 LPA',
    batch: 'Batch 2025-06',
    offerStatus: 'Offer Letter Issued'
  },
  {
    id: 'deepika-v',
    name: 'Deepika V.',
    statusBadge: 'Placed & Verified',
    education: 'B.Tech IT',
    avatar: 'assets/images/student_deepika.jpg',
    company: 'Infosys',
    role: 'Systems Engineer',
    package: '₹ 6.0 LPA',
    batch: 'Batch 2025-06',
    offerStatus: 'Offer Letter Issued'
  },
  {
    id: 'vignesh-w',
    name: 'Vignesh W.',
    statusBadge: 'Placed & Verified',
    education: 'Job Seeker / Switcher',
    avatar: 'assets/images/student_vignesh.jpg',
    company: 'HCLTech',
    role: 'Software Developer',
    package: '₹ 5.8 LPA',
    batch: 'Batch 2025-06',
    offerStatus: 'Offer Letter Issued'
  },
  {
    id: 'sneha-m',
    name: 'Sneha M.',
    statusBadge: 'Placed & Verified',
    education: 'B.E CSE - 2025',
    avatar: 'assets/images/student_sneha.jpg',
    company: 'TCS',
    role: 'Software Engineer',
    package: '₹ 6.5 LPA',
    batch: 'Batch 2025-07',
    offerStatus: 'Offer Letter Issued'
  },
  {
    id: 'praveen-k',
    name: 'Praveen Kumar',
    statusBadge: 'Placed & Verified',
    education: 'BCA Graduate',
    avatar: 'assets/images/student_praveen.jpg',
    company: 'Accenture',
    role: 'Associate Software Engineer',
    package: '₹ 5.5 LPA',
    batch: 'Batch 2025-05',
    offerStatus: 'Offer Letter Issued'
  }
];
