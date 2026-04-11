export const portfolioData = {
  hero: {
    name: "Ankit Raj",
    title: "Aspiring SDE | C++ & Python Developer",
    tagline: "Building Scalable Solutions",
    description: "Third-year IT undergrad at MAHE Bangalore, passionate about AI/ML and Data Structures. Building data-driven projects and seeking SDE Intern opportunities.",
  },

  about: {
    intro: "I'm a third-year Information Technology student at Manipal Academy of Higher Education with a strong foundation in C++ and Python. I enjoy building practical, data-driven solutions — from ML models to low-level systems like custom in-memory caches.",
    journey: "My tech journey started with problem-solving and grew into hands-on projects in AI/ML and systems programming. Whether it's implementing an LRU Cache with O(1) complexity or predicting IPL match outcomes with Random Forest, I focus on clean, efficient code.",
    interests: ["AI/ML", "Data Structures & Algorithms", "System Design", "Python", "C++"],
    experience: "3rd Year",
    location: "Bangalore, Karnataka",
  },

  technologies: [
    // Programming Languages
    { name: "C++", category: "language", icon: "Terminal" },
    { name: "Python", category: "language", icon: "Code" },
    { name: "SQL", category: "language", icon: "Database" },

    // Tools
    { name: "Git", category: "framework", icon: "GitBranch" },
    { name: "GitHub", category: "framework", icon: "GitBranch" },
    { name: "Jupyter Notebook", category: "framework", icon: "FileCode" },

    // AI/ML
    { name: "NumPy", category: "ai", icon: "Brain" },
    { name: "Pandas", category: "ai", icon: "Brain" },
    { name: "Scikit-learn", category: "ai", icon: "Brain" },

    // Database
    { name: "MySQL", category: "database", icon: "Database" },

    // Core CS
    { name: "Data Structures", category: "testing", icon: "Zap" },
    { name: "OOPs", category: "testing", icon: "CheckSquare" },
    { name: "OS Basics", category: "testing", icon: "Gauge" },
  ],

  projects: [
    {
      id: 1,
      title: "IPL Match Win Prediction",
      category: "featured",
      description: "End-to-end ML project predicting IPL match outcomes using Random Forest classification. Includes full EDA, Label Encoding for categorical variables, and GridSearchCV for hyperparameter tuning.",
      technologies: ["Python", "Scikit-learn", "Pandas", "NumPy", "Jupyter Notebook"],
      features: [
        "Random Forest classifier for match outcome prediction",
        "Exploratory Data Analysis (EDA) on IPL dataset",
        "Label Encoding for categorical features",
        "GridSearchCV hyperparameter tuning for best accuracy"
      ],
      metrics: {
        users: "Academic",
        performance: 88,
        stars: 0
      },
      links: {
        demo: "#",
        github: "https://github.com/ar6488962"
      },
      image: "project1"
    },
    {
      id: 2,
      title: "Custom In-Memory LRU Cache",
      category: "featured",
      description: "High-performance LRU Cache built from scratch using Hash Map and Doubly Linked List in C++ and Python, achieving O(1) time complexity for both get and put operations. Simulates real-world backend caching.",
      technologies: ["C++", "Python"],
      features: [
        "O(1) get and put operations",
        "HashMap + Doubly Linked List design",
        "Simulates real-world backend caching mechanisms",
        "Clean, modular and well-documented code"
      ],
      metrics: {
        users: "Personal",
        performance: 95,
        stars: 0
      },
      links: {
        demo: "#",
        github: "https://github.com/ar6488962"
      },
      image: "project2"
    },
    {
      id: 3,
      title: "Student Loan Eligibility & Risk Analysis",
      category: "featured",
      description: "ML model using Logistic Regression to predict student loan eligibility and risk level. Applied data preprocessing, feature selection with Pandas and NumPy, and cross-validation to reduce overfitting.",
      technologies: ["Python", "Pandas", "Scikit-learn", "NumPy", "Jupyter Notebook"],
      features: [
        "Logistic Regression for loan eligibility prediction",
        "Data preprocessing and feature selection",
        "Cross-validation for improved model reliability",
        "End-to-end ML pipeline from raw data to predictions"
      ],
      metrics: {
        users: "Academic",
        performance: 90,
        stars: 0
      },
      links: {
        demo: "#",
        github: "https://github.com/ar6488962"
      },
      image: "project3"
    },
  ],

  achievements: {
    codeforces: {
      rating: 0,
      maxRating: 0,
      rank: "Beginner",
      problemsSolved: 0,
      contests: 0,
      profileUrl: "https://codeforces.com/profile/Ankitraj111"
    },
    codechef: {
      rating: "—",
      stars: 0,
      problemsSolved: 0,
      contests: 0,
      profileUrl: "https://www.codechef.com/users/adapt_owls_58"
    },
    leetcode: {
      badge: "—",
      problemsSolved: 101,
      easy: 46,
      medium: 35,
      hard: 20,
      profileUrl: "https://leetcode.com/u/Ankit1RAJ/"
    }
  },

  certifications: [
    {
      name: "Operating Systems Basics",
      issuer: "Cisco Networking Academy",
      date: "2025-04",
      category: "Systems"
    },
    {
      name: "Cyber Security Fundamentals",
      issuer: "Coursera – University of London",
      date: "2025-06",
      category: "Security"
    },
    {
      name: "Introduction to Networking",
      issuer: "NVIDIA (Coursera)",
      date: "2024-03",
      category: "Networking"
    },
  ],

  profileLinks: [
    {
      platform: "GitHub",
      url: "https://github.com/ar6488962",
      icon: "Github",
      color: "text-foreground",
      stats: { label: "Repositories", value: "5+" }
    },
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/aankitr123/",
      icon: "Linkedin",
      color: "text-secondary",
      stats: { label: "Connections", value: "100+" }
    },
    {
      platform: "Email",
      url: "mailto:ar6488962@gmail.com",
      icon: "Mail",
      color: "text-primary",
      stats: { label: "Response", value: "< 24hrs" }
    },
  ],

  contact: {
    email: "ar6488962@gmail.com",
    phone: "9148908097",
    availability: "Open to SDE Internship Opportunities",
    subjects: [
      "General Inquiry",
      "Internship Opportunity",
      "Project Collaboration",
      "Freelance Work",
      "Other"
    ]
  }
};