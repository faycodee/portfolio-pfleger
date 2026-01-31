// src/configs/lang/es.js
export default {
  site: {
    name: "Yassine El Amrani",
    title: "Professionelle Pflegefachkraft",
    description: "Engagierte Pflegefachkraft mit fundierter Erfahrung in der Patientenversorgung, medizinischen Assistenz und Gesundheitsförderung.",
    heroPhrases: [
      "Fachkraft für Gesundheits- und Krankenpflege",
      "Erfahren in der Grund- und Behandlungspflege",
      "Zuverlässig, empathisch und belastbar",
      "Bereit für neue Herausforderungen in Bayern"
    ]
  },
  nav: {
    hero: "Inicio",
    about: "Acerca",
    skills: "Habilidades",
    projects: "Proyectos",
    experience: "Experiencia",
    education: "Educación",
    contact: "Contacto"
  },
  sections: {
    about: "Acerca de mí",
    skills: "Habilidades Técnicas",
    projects: "Proyectos",
    experience: "Experiencia",
    education: "Educación",
    contact: "Contacto"
  },
  about: {
    bio: [
      "Soy desarrollador full-stack con experiencia en construir aplicaciones web robustas y escalables.",
      "Me apasiona escribir código limpio, bien testeado y mantenible. Uso TDD y CI/CD en todos mis proyectos.",
      "Fuera del código, me gusta compartir conocimientos, contribuir a open source y aprender nuevas tecnologías."
    ],
  },
  experience: {
    roles: {
      "senior-dev": "Desarrollador Senior Full-Stack",
      "dev-lead": "Líder Técnico",
      "frontend-dev": "Desarrollador Frontend",
      "backend-dev": "Desarrollador Backend"
    },
    descriptions: {
      "senior-dev": "Diseño e implemento soluciones full stack con React, Node.js y bases de datos modernas. Enfoque en rendimiento, accesibilidad y buenas prácticas.",
      "dev-lead": "Lidero equipos ágiles, defino arquitectura técnica y mentoreo a otros desarrolladores en buenas prácticas y testing.",
      "frontend-dev": "Desarrollo interfaces modernas con React, TypeScript y Tailwind CSS. Priorizo UX, accesibilidad y rendimiento.",
      "backend-dev": "Creo APIs RESTful y servicios backend con Node.js, Express y bases de datos SQL/NoSQL. Uso pruebas automatizadas en todo el flujo."
    }
  },
  education: {
    degrees: {
      "computer-science": "Ingeniería en Computación",
      "web-dev-bootcamp": "Bootcamp de Desarrollo Web",
      "tdd-course": "Curso de Test-Driven Development"
    },
    descriptions: {
      "computer-science": "Formación sólida en algoritmos, estructuras de datos, redes y desarrollo de software.",
      "web-dev-bootcamp": "Entrenamiento intensivo en tecnologías modernas: React, Node.js, MongoDB, Docker.",
      "tdd-course": "Enfoque avanzado en pruebas automatizadas, calidad de código y ciclos de desarrollo ágil."
    }
  },
  projects: {
    txtResults: "Resultados",
    buttons: {
      viewResults: "Ver resultados",
      hideResults: "Ocultar resultados",
      viewOnGithub: "Ver en GitHub",
    },
    titles: {
      "e-commerce-platform": "Plataforma de E-commerce",
      "task-manager-app": "Aplicación de Gestión de Tareas",
      "weather-dashboard": "Dashboard de Clima en Tiempo Real",
      "blog-engine": "Motor de Blog con CMS",
    },
    descriptions: {
      "e-commerce-platform": "Plataforma completa con carrito, pasarela de pago (Stripe) y panel de administración. Desarrollada con React, Node.js y MongoDB.",
      "task-manager-app": "App para gestión de tareas con autenticación, drag & drop y sincronización en tiempo real. Usé React, Firebase y Framer Motion.",
      "weather-dashboard": "Dashboard interactivo que muestra clima actual y pronóstico usando la API de OpenWeather. Diseño responsive y animaciones suaves.",
      "blog-engine": "Motor de blog con editor WYSIWYG, comentarios y SEO avanzado. Backend en Node.js con Express y base de datos PostgreSQL.",
    },
    results: {
      "e-commerce-platform": [
        "+10,000 visitas mensuales",
        "Integración con Stripe exitosa",
        "95% de satisfacción de usuarios"
      ],
      "task-manager-app": [
        "100% cubierto por pruebas unitarias",
        "Rendimiento optimizado (<100ms)",
        "Disponible en web y móvil"
      ],
      "weather-dashboard": [
        "Datos en tiempo real precisos",
        "Soporte para +200,000 ciudades",
        "Diseño accesible y responsive"
      ],
      "blog-engine": [
        "SEO optimizado (Lighthouse >90)",
        "Editor intuitivo para no técnicos",
        "Comentarios con moderación"
      ]
    }
  },
  skills: {
    txtHeader: "Habilidades Técnicas",
    intro: "Mis habilidades se han desarrollado durante años construyendo aplicaciones web modernas, con enfoque en calidad, rendimiento y mantenibilidad.",
    categories: {
      "frontend": "Frontend",
      "backend": "Backend",
      "devops": "DevOps & Cloud",
      "databases": "Bases de Datos",
      "testing": "Pruebas & Calidad",
      "other": "Otros"
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
    btnDownload: '📄 Descargar CV',
    btnContact: '✉️ Contáctame'
  },
  contact: {
    message: "¿Tienes un proyecto en mente? ¡Hablemos!",
    form: {
      name: "Nombre",
      email: "Correo",
      message: "Mensaje",
      buttonText: "Enviar",
      sending: "Enviando...",
      error: "Hubo un error. Inténtalo más tarde.",
      success: "¡Mensaje enviado! Te responderé pronto.",
      invalidEmail: "Por favor, ingresa un email válido."
    }
  },
  footer: {
    developedBy: "Diseñado y desarrollado por",
    rights: "Todos los derechos reservados"
  },
  ats: {
    summary: "{name} es {roles} con experiencia en {skills}. Desarrollador de aplicaciones web modernas con enfoque en calidad, rendimiento y escalabilidad.",
    keyProjects: "Proyectos destacados: {projects}.",
    experience: "Experiencia profesional en {company} liderando desarrollo full stack en entornos ágiles.",
    contact: "Contacto: {email}. Disponible en {social}.",
    languages: "Idiomas: Español (nativo), Inglés (profesional).",
    keywords: "Palabras clave:"
  }
};
