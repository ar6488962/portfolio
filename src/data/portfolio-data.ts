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
      title: "Loan Approval Prediction Model",
      category: "featured",
      description: "Built a machine learning model to predict whether a loan should be approved or not using details like income, credit history, and loan amount. Cleaned the dataset, handled missing values, and tried different models to see which one works best.",
      technologies: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib"],
      features: [
        "Used Logistic Regression to predict loan approval",
        "Cleaned the data and handled missing values",
        "Converted categorical data into numbers for the model",
        "Tested multiple models like Decision Tree, Random Forest, and XGBoost",
        "Got around 78% accuracy on test data",
        "Found that credit history plays the biggest role in approval"
      ],
      metrics: {
        users: "Academic Project",
        performance: "78% Accuracy",
        stars: 0
      },
      links: {
        demo: "https://loan-approval-prediction-ml-xbt6h27uywavurqn8tmsul.streamlit.app/",
        github: "https://github.com/ar6488962/loan-approval-prediction-ml"
      },
      image: "project1"
    },
    {
      id: 2,
      title: "QuizUltimate - Android Quiz App",
      category: "featured",
      description: "Built an Android quiz app where users can attempt quizzes from different categories and track their scores. Used SQLite to store quiz data and user scores locally. Focused on making the app simple, responsive, and easy to use.",
      technologies: ["Java", "Android Studio", "SQLite", "XML"],
      features: [
        "Created a quiz app with multiple categories",
        "Stored questions and scores using SQLite database",
        "Tracked user score after each quiz",
        "Designed a simple and responsive user interface",
        "Handled user navigation between screens using activities"
      ],
      metrics: {
        users: "Personal Project",
        performance: "Works smoothly on Android devices",
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
      title: "Personal Portfolio Website",
      category: "featured",
      description: "Built a personal portfolio website to showcase my projects, skills, and achievements. Included detailed projects on Machine Learning and Android development with clear descriptions. Designed with clean UI and organized sections for projects, skills, technologies, certifications, and contact information. Integrated GitHub links for easy access to project source code.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Vite", "JavaScript", "Git", "GitHub"],
      features: [
        "Responsive portfolio showcasing ML and Android projects",
        "Organized sections for projects, skills, and achievements",
        "Clean and modern UI design with Tailwind CSS",
        "Integrated GitHub profile links and project repositories",
        "Dynamic content management with structured data",
        "Smooth navigation and interactive components"
      ],
      metrics: {
        users: "Personal Project",
        performance: "Fully Responsive & Fast",
        stars: 0
      },
      links: {
        demo: "#",
        github: "https://github.com/ar6488962"
      },
      image: "project3"
    }
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