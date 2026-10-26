/**
 * SVB Infotech - Course Database
 * Complete catalog matching official syllabus and screenshot catalog
 */
const COURSES_DATA = [
  // --- 1. Web Development ---
  {
    id: 'full-stack-web-development',
    title: 'Full Stack Web Development',
    category: 'full-stack',
    badgeText: 'FULL STACK',
    duration: '75-90 Hours',
    rating: '5.0',
    reviewsCount: '340+',
    image: 'assets/images/course_fullstack.jpg',
    description: 'Complete end-to-end web engineering: Frontend (HTML, CSS, JS, React), Backend (Python / Node.js / PHP), Databases (MySQL, MongoDB), and Git & GitHub.',
    overview: 'Our premier flagship program covering the complete software engineering stack. Master frontend engineering with HTML, CSS, JavaScript, and React.js; server logic with Python, Node.js, and PHP; relational and document databases (MySQL, MongoDB); and team collaboration with Git & GitHub.',
    syllabus: [
      'Frontend Tier: HTML5 semantic markup, modern CSS3, responsive layouts, ES6+ JavaScript, React.js dynamic SPAs',
      'Backend Tier: Server architecture with Node.js & Express, Python API backends, and PHP server scripting',
      'Database Architecture: Relational database design with MySQL and NoSQL document storage with MongoDB',
      'RESTful APIs: API architecture, endpoint design, JSON handling, JWT authorization, CORS & secure headers',
      'Version Control: Git branching strategies, GitHub repository collaboration, pull requests, code reviews',
      'End-to-End Capstone: Full stack web application deployment with cloud database hosting and CI/CD pipelines'
    ],
    careers: ['Full Stack Developer', 'MERN Stack Engineer', 'Software Engineer', 'Web Application Architect'],
    tools: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Python', 'Node.js', 'PHP', 'MySQL', 'MongoDB', 'Git & GitHub']
  },
  {
    id: 'frontend-web-development',
    title: 'Frontend Web Development (2 Months)',
    category: 'full-stack',
    badgeText: 'FRONTEND',
    duration: '2 Months (60 Hours)',
    rating: '4.9',
    reviewsCount: '195+',
    image: 'assets/images/course_frontend.jpg',
    description: 'Comprehensive 2-month frontend program covering HTML & CSS, modern JavaScript, Bootstrap, Responsive Web Design, and React.js.',
    overview: 'Become a job-ready frontend engineer in 2 months. Master the core building blocks of the modern web: semantic HTML5, CSS layout models, mobile-first Responsive Web Design, Bootstrap 5 UI framework, modern JavaScript (ES6+), and single-page applications with React.js.',
    syllabus: [
      'HTML & CSS: Semantic HTML5, CSS layout models, Box model, Flexbox, CSS Grid, media queries',
      'Responsive Web Design: Mobile-first responsive layouts, cross-browser compatibility, fluid typography',
      'Bootstrap: Bootstrap 5 responsive grid system, UI components, modals, carousels, utility classes',
      'JavaScript Core: Variables, data types, functions, DOM manipulation, event listeners, asynchronous fetch API',
      'React.js: JSX syntax, component hierarchy, props, state management, hooks (useState, useEffect), routing',
      'Capstone Projects: Building and deploying fully responsive, interactive web applications on GitHub & Vercel'
    ],
    careers: ['Frontend Developer', 'UI Developer', 'Web Designer', 'React Developer', 'Responsive Web Specialist'],
    tools: ['HTML & CSS', 'JavaScript', 'Bootstrap', 'React.js', 'Responsive Web', 'Git', 'VS Code']
  },
  {
    id: 'backend-web-development',
    title: 'Backend Web Development',
    category: 'full-stack',
    badgeText: 'BACKEND',
    duration: '50-65 Hours',
    rating: '4.9',
    reviewsCount: '180+',
    image: 'assets/images/course_backend.jpg',
    description: 'Master server-side architectures with Node.js, Python, PHP, relational MySQL databases, and secure REST APIs.',
    overview: 'Build secure, scalable backend architectures that power enterprise web applications. Learn server-side programming in Node.js, Python, and PHP, alongside relational database modeling with MySQL, authentication, and RESTful API engineering.',
    syllabus: [
      'Backend Architecture: Client-server communication, HTTP/HTTPS lifecycle, MVC design pattern',
      'Node.js & Express: Asynchronous event loop, Express server routing, custom middleware architecture',
      'Python Backend: Server development with Python (FastAPI / Flask), request validation, backend logic',
      'PHP Server Scripting: Server-side scripting, sessions, form processing, object-oriented PHP architecture',
      'MySQL Database: Relational database design, normalization, complex joins, indexing, transactions',
      'REST APIs: RESTful principles, endpoint creation, CRUD operations, Postman testing, JWT authentication'
    ],
    careers: ['Backend Developer', 'Node.js Engineer', 'Python Backend Developer', 'API Developer', 'PHP Programmer'],
    tools: ['PHP', 'Python', 'Node.js', 'MySQL', 'REST APIs', 'Express.js', 'Postman', 'Git']
  },

  // --- 2. Software Testing ---
  {
    id: 'software-testing',
    title: 'Software Testing (Manual & Automation)',
    category: 'software-testing',
    badgeText: 'QA TESTING',
    duration: '50-65 Hours',
    rating: '4.9',
    reviewsCount: '190+',
    image: 'assets/images/course_software_testing.jpg',
    description: 'Master Manual Testing, Automation Testing with Selenium, API Testing with Postman, and Software Testing Life Cycle (STLC).',
    overview: 'Launch a rewarding career in Quality Assurance. Master foundational Manual Testing principles, Test Case creation, defect lifecycle, Automation Testing with Selenium WebDriver, API Testing with Postman, and the complete Software Testing Life Cycle (STLC) with real enterprise QA projects.',
    syllabus: [
      'Manual Testing: Testing principles, black-box vs white-box, test scenario design, test case creation, defect reporting',
      'Software Testing Life Cycle (STLC): Requirement analysis, test planning, test design, environment setup, execution, closure',
      'Automation Testing: Automation fundamentals, test automation strategy, framework design principles',
      'Selenium Suite: Selenium WebDriver, locators (XPath, CSS), Page Object Model (POM), TestNG annotations & assertions',
      'API Testing: RESTful API verification, HTTP methods (GET, POST, PUT, DELETE), status codes, Postman & Newman',
      'QA Tools & Bug Tracking: JIRA for agile issue tracking, Bugzilla, Git version control, CI/CD Jenkins test triggers'
    ],
    careers: ['QA Automation Engineer', 'Software Tester', 'Manual Test Engineer', 'API Test Analyst', 'Quality Assurance Lead'],
    tools: ['Manual Testing', 'Automation Testing', 'Selenium', 'API Testing', 'STLC', 'Postman', 'TestNG', 'JIRA', 'Git']
  },

  // --- 3. Graphics Design ---
  {
    id: 'graphics-design',
    title: 'Graphics Design & Creative Media',
    category: 'design',
    badgeText: 'GRAPHICS',
    duration: '45-55 Hours',
    rating: '4.9',
    reviewsCount: '165+',
    image: 'assets/images/course_graphics_design.jpg',
    description: 'Master creative digital art and branding using Adobe Photoshop, Adobe Illustrator, CorelDraw, Figma, and Canva.',
    overview: 'Transform your creative talent into a professional design career. Learn industry-standard design tools: Adobe Photoshop for photo editing and digital banners, Adobe Illustrator for vector branding and logos, CorelDraw for print layout, Figma for graphics assets, and Canva for fast marketing media.',
    syllabus: [
      'Adobe Photoshop: Image editing, digital photo manipulation, layer masks, retouching, poster & banner creation',
      'Adobe Illustrator: Vector graphics, corporate logo design, brand identity kits, custom iconography, typography',
      'CorelDraw: Vector artwork, print publication layouts, brochure design, business stationery, packaging design',
      'Figma for Graphics: Vector illustrations, social media asset creation, responsive graphics, collaborative design',
      'Canva Pro: Rapid social media templates, YouTube thumbnails, brand kits, presentations, marketing collateral',
      'Creative Portfolio: Real-world branding project, print-ready files (CMYK vs RGB), digital asset export formats'
    ],
    careers: ['Graphic Designer', 'Visual Designer', 'Brand Identity Designer', 'Creative Media Artist', 'Digital Illustrator'],
    tools: ['Adobe Photoshop', 'Adobe Illustrator', 'CorelDraw', 'Figma', 'Canva', 'Typography', 'Color Theory']
  },

  // --- 4. Office & Business Productivity ---
  {
    id: 'office-business-productivity',
    title: 'Office & Business Productivity',
    category: 'productivity',
    badgeText: 'BUSINESS',
    duration: '40-50 Hours',
    rating: '4.8',
    reviewsCount: '185+',
    image: 'assets/images/course_productivity.jpg',
    description: 'Master corporate workflow tools: MS Office suite, Advanced Excel analytics, Tally Prime accounting, and Power BI dashboards.',
    overview: 'Gain high-demand workplace productivity skills for corporate operations, finance, and administration. Master MS Office (Word, Excel, PowerPoint), corporate Advanced Excel modeling, computerized accounting with Tally Prime (GST & taxation), and dynamic business intelligence dashboards with Power BI.',
    syllabus: [
      'MS Office Suite: Professional Word documentation, executive PowerPoint decks, Outlook email management & etiquette',
      'Advanced Excel: VLOOKUP, XLOOKUP, INDEX-MATCH, Pivot Tables & Slicers, nested formulas, conditional logic, macros',
      'Tally Prime: Company configuration, accounting vouchers, ledger management, GST calculation, e-invoicing, inventory',
      'Power BI: Connecting Excel & Tally data, data transformation, KPI scorecards, interactive business dashboards',
      'Business Financials: Balance sheet preparation, profit & loss analysis, bank reconciliation statements',
      'Corporate Productivity: Document automation, spreadsheet auditing, executive presentations, reporting workflows'
    ],
    careers: ['Business Operations Executive', 'MIS Executive', 'Accountant', 'Office Administrator', 'Financial Analyst Assistant'],
    tools: ['MS Office', 'Advanced Excel', 'Tally Prime', 'Power BI', 'MS Word', 'MS PowerPoint', 'Outlook']
  },

  // --- 5. UI/UX & Product Design ---
  {
    id: 'ui-ux-design-prototyping',
    title: 'UI/UX & Product Design',
    category: 'design',
    badgeText: 'UI/UX',
    duration: '50-65 Hours',
    rating: '4.9',
    reviewsCount: '220+',
    image: 'assets/images/course_uiux.jpg',
    description: 'Master UI/UX Design, Figma, Wireframing & Prototyping, Design Systems, Mobile App Interface Design, Adobe XD, and Sketch.',
    overview: 'Comprehensive product design program covering empathy research, wireframing, high-fidelity UI design, design systems, micro-interactions, mobile app interface design, and tool proficiency in Figma, Photoshop, Adobe XD, Sketch, and Canva.',
    syllabus: [
      'UI/UX Design Foundations: User empathy research, user personas, customer journey maps, information architecture',
      'Wireframing & Prototyping: Low-fidelity sketching, clickable wireframes, interactive high-fidelity prototyping in Figma',
      'Design Systems: Atomic design principles, typography scales, spacing tokens, auto-layout, component variants',
      'Mobile App Interface Design: iOS Human Interface Guidelines, Android Material Design 3, responsive mobile UI layouts',
      'Industry Design Tools: Figma mastery, Adobe XD, Sketch workflows, Adobe Photoshop for UI assets, Canva quick mockups',
      'Usability Testing & Developer Handoff: Heuristic evaluation, A/B testing, design specs export, token handoff'
    ],
    careers: ['UI/UX Designer', 'Product Designer', 'Mobile App UI Designer', 'Interaction Designer', 'Design System Architect'],
    tools: ['UI/UX Design', 'Figma', 'Wireframing & Prototyping', 'Design Systems', 'Mobile App Interface Design', 'Adobe XD', 'Sketch', 'Photoshop', 'Canva']
  },

  // --- 6. Cyber Security ---
  {
    id: 'cyber-security-network-defense',
    title: 'Cyber Security & Ethical Hacking',
    category: 'security',
    badgeText: 'CYBER SECURITY',
    duration: '55-70 Hours',
    rating: '4.9',
    reviewsCount: '185+',
    image: 'assets/images/course_cybersecurity.jpg',
    description: 'Master Cybersecurity Fundamentals, Ethical Hacking & Network Security, Vulnerability Assessment, and Penetration Testing.',
    overview: 'Protect enterprise networks and digital assets against modern cyber threats. Learn cybersecurity fundamentals, defense protocols, ethical hacking methodologies, network security architecture, vulnerability assessment (VA), and penetration testing (PT).',
    syllabus: [
      'Cybersecurity Fundamentals: Information security principles (CIA triad), defense-in-depth, security governance',
      'Ethical Hacking & Network Security: Footprinting, network scanning (TCP/IP, OSI), firewall rules, IDS/IPS, Wireshark packet analysis',
      'Vulnerability Assessment: Vulnerability scanning (Nessus, OpenVAS), threat modeling, CVSS scoring, remediation plans',
      'Penetration Testing Fundamentals: Exploitation techniques, web app security (OWASP Top 10), Metasploit framework, Kali Linux',
      'Cryptography & Secure Protocols: Symmetric & asymmetric encryption, SSL/TLS certificates, digital signatures, hashing',
      'SOC & Incident Response: Security operations center fundamentals, SIEM log analysis, malware detection, incident mitigation'
    ],
    careers: ['Cyber Security Analyst', 'Ethical Hacker', 'Penetration Tester', 'Vulnerability Assessor', 'Network Security Engineer'],
    tools: ['Cybersecurity Fundamentals', 'Ethical Hacking', 'Network Security', 'Vulnerability Assessment', 'Penetration Testing', 'Kali Linux', 'Wireshark', 'Nmap', 'Metasploit', 'Burp Suite']
  },

  // --- 7. Cloud Computing & DevOps ---
  {
    id: 'cloud-computing-devops',
    title: 'Cloud Computing & DevOps',
    category: 'cloud',
    badgeText: 'CLOUD & DEVOPS',
    duration: '55-70 Hours',
    rating: '4.9',
    reviewsCount: '210+',
    image: 'assets/images/course_cloud.jpg',
    description: 'Master AWS Fundamentals, Microsoft Azure Fundamentals, Linux Fundamentals, Docker & Kubernetes, and CI/CD release pipelines.',
    overview: 'Master enterprise cloud computing and automated DevOps workflows across Amazon Web Services (AWS) and Microsoft Azure. Learn Linux system administration, Docker containerization, Kubernetes container orchestration, and automated CI/CD pipelines.',
    syllabus: [
      'AWS Fundamentals: EC2 compute, S3 storage, VPC networking, IAM security policies, RDS databases, CloudWatch',
      'Microsoft Azure Fundamentals: Azure Virtual Machines, Blob Storage, Virtual Networks, Azure Active Directory, Resource Groups',
      'Linux Fundamentals: Bash shell scripting, Linux commands, permissions, SSH setup, package managers, cron automation',
      'Docker & Kubernetes: Dockerfiles, container optimization, Docker Compose, Kubernetes architecture, pods, deployments, services',
      'CI/CD and DevOps Fundamentals: Jenkins automation, GitHub Actions, automated test/build/deploy pipelines, Git workflows',
      'Infrastructure as Code: Terraform configuration basics, cloud monitoring, disaster recovery, DevOps best practices'
    ],
    careers: ['Cloud Engineer', 'DevOps Engineer', 'AWS/Azure Administrator', 'Site Reliability Engineer', 'Cloud Infrastructure Architect'],
    tools: ['AWS Fundamentals', 'Microsoft Azure Fundamentals', 'Linux Fundamentals', 'Docker & Kubernetes', 'CI/CD and DevOps Fundamentals', 'Jenkins', 'Terraform', 'GitHub Actions']
  },

  // --- 8. Mobile App Development ---
  {
    id: 'mobile-app-development',
    title: 'Mobile App Development (Flutter, React Native, Android)',
    category: 'mobile-app',
    badgeText: 'MOBILE APP',
    duration: '55-70 Hours',
    rating: '4.9',
    reviewsCount: '170+',
    image: 'assets/images/course_mobile_dev.jpg',
    description: 'Build cross-platform and native mobile apps with Android Development, Flutter (Dart), React Native, and Mobile App UI Development.',
    overview: 'Build high-performance mobile apps for iOS and Android. Master native Android development with Kotlin/Java, cross-platform app engineering with Flutter and Dart, React Native with Expo, and engaging mobile app user interface design.',
    syllabus: [
      'Mobile App UI Development: Responsive mobile layouts, Material Design 3, iOS Cupertino styles, navigation patterns, UX flow',
      'Android Development: Android Studio, Kotlin/Java essentials, Activities, Fragments, Intent, Android SDK, Gradle build system',
      'Flutter Development: Dart programming language, widgets tree, stateful vs stateless, layout widgets, state management',
      'React Native: React Native CLI, Expo workflow, mobile components, flexbox styling, custom hooks, smooth animations',
      'Backend Integration & Offline Storage: RESTful API consumption, SQLite, Firebase Authentication & Firestore real-time DB',
      'App Store & Play Store Deployment: App packaging, APK/AAB generation, App Store submission guidelines, performance profiling'
    ],
    careers: ['Mobile App Developer', 'Flutter Developer', 'React Native Developer', 'Android Developer', 'Cross-Platform Engineer'],
    tools: ['Android Development', 'Flutter', 'React Native', 'Mobile App UI Development', 'Dart', 'Kotlin', 'Firebase', 'Android Studio']
  },

  // --- 9. Data Engineering ---
  {
    id: 'data-engineering',
    title: 'Data Engineering',
    category: 'data-ai',
    badgeText: 'DATA ENG',
    duration: '50-65 Hours',
    rating: '4.9',
    reviewsCount: '160+',
    image: 'assets/images/course_data_engineering.jpg',
    description: 'Master SQL & Database Management, ETL Pipelines, Data Warehousing Fundamentals, and Cloud Data architectures.',
    overview: 'Build robust, scalable data backends for modern analytics and AI systems. Master relational SQL & Database Management, automated ETL (Extract, Transform, Load) pipelines, modern Data Warehousing methodologies, and Cloud Data fundamentals.',
    syllabus: [
      'SQL & Database Management: Advanced querying, indexing, query optimization, joins, stored procedures, PostgreSQL & MySQL',
      'ETL Pipelines: Data extraction, automated transformation, loading workflows with Python scripts, Apache Airflow basics',
      'Data Warehousing Fundamentals: Star and Snowflake schemas, dimensional modeling, OLAP vs OLTP, data mart architectures',
      'Cloud Data Fundamentals: Cloud storage data lakes (AWS S3), Amazon Redshift, Google BigQuery, distributed architectures',
      'Big Data Processing: Apache Spark fundamentals, PySpark dataframes, processing large structured and unstructured datasets',
      'Data Pipeline Orchestration: Pipeline monitoring, data quality checks, schema evolution, automated error alert systems'
    ],
    careers: ['Data Engineer', 'ETL Developer', 'Database Administrator', 'Big Data Engineer', 'Data Warehouse Architect'],
    tools: ['SQL & Database Management', 'ETL Pipelines', 'Data Warehousing Fundamentals', 'Cloud Data Fundamentals', 'Python', 'PostgreSQL', 'Apache Airflow', 'PySpark']
  },

  // --- 10. AI & Emerging Technologies ---
  {
    id: 'ai-emerging-technologies',
    title: 'AI & Emerging Technologies',
    category: 'data-ai',
    badgeText: 'AI & ML',
    duration: '55-70 Hours',
    rating: '5.0',
    reviewsCount: '230+',
    image: 'assets/images/course_ai_tech.jpg',
    description: 'Master Artificial Intelligence & Machine Learning, AI Prompt Engineering, Generative AI Tools, and Data Science Fundamentals.',
    overview: 'Step to the forefront of technology innovation. Master foundational Data Science, Machine Learning algorithms, practical AI Prompt Engineering techniques, and real-world implementation of Generative AI tools and LLMs for enterprise automation.',
    syllabus: [
      'Data Science Fundamentals: Python for data analysis, Pandas, NumPy, descriptive & inferential statistics, data preprocessing',
      'Artificial Intelligence & Machine Learning: Supervised & unsupervised learning, regression, classification, Scikit-Learn models',
      'AI Prompt Engineering: Prompt structure, zero-shot/few-shot prompting, chain-of-thought, system prompts, prompt optimization',
      'Generative AI Tools: OpenAI ChatGPT, Claude, Midjourney, Cursor, Hugging Face models, embeddings, vector databases',
      'Building AI Applications: LangChain fundamentals, Retrieval-Augmented Generation (RAG) pipelines, building AI agent workflows',
      'Real-World Capstone: End-to-end deployed AI assistant powered by custom knowledge bases and LLMs'
    ],
    careers: ['AI Engineer', 'Prompt Engineer', 'Machine Learning Specialist', 'Data Scientist', 'Generative AI Developer'],
    tools: ['Artificial Intelligence & Machine Learning', 'AI Prompt Engineering', 'Generative AI Tools', 'Data Science Fundamentals', 'Python', 'OpenAI', 'LangChain', 'Scikit-Learn']
  },

  // --- Additional Specialized & Core Tracks ---
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
    id: 'advanced-excel-financial-modeling',
    title: 'Advanced Excel & Financial Modeling',
    category: 'productivity',
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
    id: 'computer-fundamentals-ms-office',
    title: 'Computer Fundamentals & MS Office',
    category: 'productivity',
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
