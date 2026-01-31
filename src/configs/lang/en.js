// src/configs/lang/en.js
export default {
  site: {
    name: "Alex Morgan",
    title: "Full-Stack Developer | React & Node.js Specialist",
    description: "Developer with experience in modern web applications, RESTful APIs, and scalable architectures.",
    heroPhrases: [
      "Building apps with React since 2018",
      "Clean code enthusiast",
      "TDD Practitioner",
      "Open Source Contributor"
    ]
  },
  nav: {
   
    about: "Über mich",
    nachweise: "Nachweise",
    skills: "Fähigkeiten",
    projects: "Projekte",
    experience: "Erfahrung",
    education: "Ausbildung",
    contact: "Kontakt"
  },
  
  sections: {
    about: "About me",
    skills: "Technical Skills",
    // projects: "Projects",
    experience: "Experience",
    education: "Education",
    contact: "Contact"
  },
  about: {
    title: "Über mich",
    bio: [
      "Engagierte Pflegefachkraft mit fundierter Ausbildung und großer Leidenschaft für die ganzheitliche Patientenversorgung.",
      "Mein Ziel ist es, meine fachlichen Kompetenzen und meine interkulturelle Erfahrung in das deutsche Gesundheitssystem, idealerweise in Bayern, einzubringen.",
      "Ich verfüge über das TELC B2 Sprachzertifikat und befinde mich aktuell im Anerkennungsverfahren für meine beruflichen Qualifikationen."
    ],
    videoTitle: "Persönliche Vorstellung",
    videoSubtitle: "Hören Sie mich Deutsch sprechen & erfahren Sie mehr über meine Motivation."
  },
  experience: {
    roles: {
      "senior-dev": "Senior Full-Stack Developer",
      "dev-lead": "Technical Lead",
      "frontend-dev": "Frontend Developer",
      "backend-dev": "Backend Developer"
    },
    descriptions: {
      "senior-dev": "Design and implement full-stack solutions with React, Node.js, and modern databases. Focus on performance, accessibility, and best practices.",
      "dev-lead": "Lead agile teams, define technical architecture, and mentor developers in best practices and testing.",
      "frontend-dev": "Build modern UIs with React, TypeScript, and Tailwind CSS. Prioritize UX, accessibility, and performance.",
      "backend-dev": "Create RESTful APIs and backend services with Node.js, Express, and SQL/NoSQL databases. Use automated testing throughout the pipeline."
    }
  },
  education: {
    degrees: {
      "computer-science": "Computer Science Engineering",
      "web-dev-bootcamp": "Web Development Bootcamp",
      "tdd-course": "Test-Driven Development Course"
    },
    descriptions: {
      "computer-science": "Solid foundation in algorithms, data structures, networking, and software development.",
      "web-dev-bootcamp": "Intensive training in modern technologies: React, Node.js, MongoDB, Docker.",
      "tdd-course": "Advanced focus on automated testing, code quality, and agile development cycles."
    }
  },
  projects: {
    txtResults: "Results",
    buttons: {
      viewResults: "View Results",
      hideResults: "Hide Results",
      viewOnGithub: "View on GitHub",
    },
    titles: {
      "e-commerce-platform": "E-commerce Platform",
      "task-manager-app": "Task Manager App",
      "weather-dashboard": "Real-Time Weather Dashboard",
      "blog-engine": "Blog Engine with CMS",
    },
    descriptions: {
      "e-commerce-platform": "Full platform with cart, Stripe payment gateway, and admin panel. Built with React, Node.js, and MongoDB.",
      "task-manager-app": "Task management app with auth, drag & drop, and real-time sync. Used React, Firebase, and Framer Motion.",
      "weather-dashboard": "Interactive dashboard showing current weather and forecast using OpenWeather API. Responsive design with smooth animations.",
      "blog-engine": "Blog engine with WYSIWYG editor, comments, and advanced SEO. Backend in Node.js with Express and PostgreSQL."
    },
    results: {
      "e-commerce-platform": [
        "+10,000 monthly visits",
        "Successful Stripe integration",
        "95% user satisfaction"
      ],
      "task-manager-app": [
        "100% unit test coverage",
        "Optimized performance (<100ms)",
        "Available on web and mobile"
      ],
      "weather-dashboard": [
        "Accurate real-time data",
        "Support for 200,000+ cities",
        "Accessible and responsive design"
      ],
      "blog-engine": [
        "SEO optimized (Lighthouse >90)",
        "Intuitive editor for non-tech users",
        "Moderated comments"
      ],
    }
  },
  skills: {
    txtHeader: "Technical Skills",
    intro: "My skills have been developed over years building modern web applications, with a focus on quality, performance, and maintainability.",
    categories: {
      "frontend": "Frontend",
      "backend": "Backend",
      "devops": "DevOps & Cloud",
      "databases": "Databases",
      "testing": "Testing & Quality",
      "other": "Other"
    },
    items: {
      "react": "React",
      "javascript": "JavaScript",
      "typescript": "TypeScript",
      "tailwind": "Tailwind CSS",
      "nodejs": "Node.js",
      "express": "Express",
      "docker": "Docker",
      "git": "Git & GitHub",
      "postgresql": "PostgreSQL",
      "mysql": "MySQL",
      "mongodb": "MongoDB",
      "redis": "Redis",
      "jest": "Jest, Testing Library",
      "playwright": "Playwright (E2E)",
      "languages": "C,C++"
    }
  },
  hero: {
    btnDownload: '📄 Download CV',
    btnContact: '✉️ Contact me'
  },
  contact: {
    message: "Have a project in mind? Let's talk!",
    form: {
      name: "Name",
      email: "Email",
      message: "Message",
      buttonText: "Send",
      sending: "Sending...",
      error: "There was an error. Please try again later.",
      success: "Message sent! I'll get back to you soon.",
      invalidEmail: "Please enter a valid email address."
    }
  },
  footer: {
    developedBy: "Designed and developed by",
    rights: "All rights reserved"
  },
  ats: {
    summary: "{name} is a {roles} with experience in {skills}. Developer of modern web applications with focus on quality, performance, and scalability.",
    keyProjects: "Key projects: {projects}.",
    experience: "Professional experience at {company} leading full-stack development in agile environments.",
    contact: "Contact: {email}. Available on {social}.",
    languages: "Languages: Spanish (native), English (professional).",
    keywords: "Keywords:"
  }
};
