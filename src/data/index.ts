import { PersonalInfo, Project, Experience, Skill, SocialLink } from '@/types';

export const personalInfo: PersonalInfo = {
  name: 'Ailton Junior',
  title: 'Desenvolvedor Full Stack', 
  bio: 'Desenvolvedor Full Stack em formação, apaixonado por tecnologia, aprendizado contínuo e desafios. Tenho experiência prática no desenvolvimento e manutenção de sistemas front-end e back-end, sempre focando em performance, usabilidade e boas práticas. Gosto de construir soluções escaláveis, colaborar com equipes e entregar valor real para o usuário. Estou sempre em busca de evoluir e contribuir com projetos inovadores!.',
  location: 'Recife, PE - Brasil',
  email: 'jab.junior81@gmail.com',
  avatar: '/images/avatar.jpg',
  resumeUrl: '/resume.pdf'
};

export const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/Junior-81',
    icon: 'Github'
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/ailton-juniordev/',
    icon: 'Linkedin'
  },
  {
    name: 'Email',
    url: 'mailto:jab.junior81@gmail.com',
    icon: 'Mail'
  },
  {
    name: 'WhatsApp',
    url: 'https://wa.me/5581981481075',
    icon: 'Phone'
  }
];

export const skills: Skill[] = [
  // Frontend
  { name: 'React', level: 'Intermediário', category: 'Frontend' },
  { name: 'Next.js', level: 'Intermediário', category: 'Frontend' },
  { name: 'TypeScript', level: 'Intermediário', category: 'Frontend' },
  { name: 'JavaScript', level: 'Avançado', category: 'Frontend' },
  { name: 'HTML5', level: 'Avançado', category: 'Frontend' },
  { name: 'CSS3', level: 'Intermediário', category: 'Frontend' },
  { name: 'Tailwind CSS', level: 'Intermediário', category: 'Frontend' },
  { name: 'Bootstrap', level: 'Intermediário', category: 'Frontend' },
  { name: 'Sass/SCSS', level: 'Iniciante', category: 'Frontend' },

  // Backend
  { name: 'Node.js', level: 'Intermediário', category: 'Backend' },
  { name: 'Express.js', level: 'Intermediário', category: 'Backend' },
  { name: 'NestJS', level: 'Iniciante', category: 'Backend' },
  { name: 'Python', level: 'Intermediário', category: 'Backend' },
  { name: 'FastAPI', level: 'Iniciante', category: 'Backend' },
  { name: 'Java', level: 'Intermediário', category: 'Backend' },
  { name: 'Spring Boot', level: 'Intermediário', category: 'Backend' },
  { name: 'JPA/Hibernate', level: 'Iniciante', category: 'Backend' },
  { name: 'JDBC/ORM', level: 'Iniciante', category: 'Backend' },

  // Database
  { name: 'PostgreSQL', level: 'Intermediário', category: 'Database' },
  { name: 'MySQL', level: 'Intermediário', category: 'Database' },
  { name: 'MongoDB', level: 'Iniciante', category: 'Database' },
  { name: 'Prisma ORM', level: 'Intermediário', category: 'Database' },
  { name: 'SQLAlchemy', level: 'Iniciante', category: 'Database' },

  // DevOps & Tools
  { name: 'Docker', level: 'Iniciante', category: 'DevOps' },
  { name: 'AWS', level: 'Iniciante', category: 'DevOps' },
  { name: 'Vercel', level: 'Intermediário', category: 'DevOps' },
  { name: 'Linux', level: 'Iniciante', category: 'DevOps' },
  { name: 'GitHub Actions', level: 'Intermediário', category: 'DevOps' },

  // Outras
  { name: 'Git', level: 'Intermediário', category: 'Outras' },
  { name: 'REST APIs', level: 'Intermediário', category: 'Outras' },
  { name: 'GraphQL', level: 'Iniciante', category: 'Outras' },
  { name: 'JWT', level: 'Intermediário', category: 'Outras' },
  { name: 'Microservices', level: 'Iniciante', category: 'Outras' },
  { name: 'TDD', level: 'Iniciante', category: 'Outras' },
  { name: 'WebSockets', level: 'Iniciante', category: 'Outras' },
  { name: 'Testes (JUnit, Jest, React Testing Library)', level: 'Iniciante', category: 'Outras' }
];

export const projects: Project[] = [
  {
    id: 'robo-supervisorio',
    title: 'Robô Supervisório - Sistema de Controle AGV',
    description: 'Sistema de simulação e controle supervisório de robô móvel (AGV) com comunicação MQTT em tempo real.',
    longDescription: 'Sistema completo de simulação e controle supervisório de um robô móvel (AGV - Veículo Guiado Automaticamente) em ambiente 3D. Utiliza PyBullet para simulação física realista com obstáculos aleatórios, comunicação MQTT para controle remoto em tempo real e Node-RED para painel de controle web interativo. O robô responde a comandos básicos (frente, ré, esquerda, direita, parar), detecta obstáculos automaticamente, envia alertas de proximidade e transmite sua posição continuamente sem interrupções no funcionamento.',
    technologies: ['Python', 'PyBullet', 'MQTT', 'Node-RED', 'Mosquitto Broker', 'JavaScript'],
    image: '/images/projects/robo-supervisorio.jpeg',
    githubUrl: 'https://github.com/Junior-81/Robo_Supervisorio',
    demoUrl: 'https://www.youtube.com/watch?v=RNUIgsZoNa0',
    featured: true,
    year: 2025
  },
  {
    id: 'santander-dev-week-api',
    title: 'Santander Dev Week 2025 API',
    description: 'API RESTful para sistema bancário digital com CRUD completo e arquitetura robusta.',
    longDescription: 'API RESTful para sistema bancário digital desenvolvida durante o Desafio Santander Dev Week 2025 da DIO. Implementa CRUD completo de usuários bancários com relacionamentos JPA (conta, cartão, features, notícias), validação robusta com Bean Validation, documentação automática com Swagger/OpenAPI e deploy automatizado no Railway. Utiliza H2 para desenvolvimento e PostgreSQL para produção, com containerização Docker.',
    technologies: ['Java 17', 'Spring Boot 3', 'Spring Data JPA', 'H2 Database', 'PostgreSQL', 'Docker', 'Railway', 'Swagger/OpenAPI'],
    image: '/images/projects/santander-dev-week-api.svg',
    githubUrl: 'https://github.com/Junior-81/Projt_api_DIo',
    featured: true,
    year: 2025
  },
  {
    id: 'cryptoboard-dashboard',
    title: 'CryptoBoard - Dashboard de Criptomoedas',
    description: 'Dashboard completo para monitoramento de criptomoedas em tempo real com conversor de moedas e gráficos interativos.',
    longDescription: 'Aplicação web moderna desenvolvida com Next.js que permite monitorar criptomoedas em tempo real. Possui dashboard completo com informações detalhadas, sistema de favoritos, conversor de moedas entre criptomoedas e moedas fiduciárias (BRL, USD, EUR), gráficos históricos interativos, filtros de busca, tema claro/escuro e design totalmente responsivo. Utiliza a API do CoinGecko com sistema de cache para otimização.',
    technologies: ['Next.js', 'TypeScript', 'CoinGecko API', 'Chart.js', 'Axios', 'Tailwind CSS'],
    image: '/images/projects/cryptoboard-dashboard.jpg',
    demoUrl: 'https://projeto-dash-bord-crip-20.vercel.app',
    githubUrl: 'https://github.com/Junior-81/Projeto_DashBord_Crip',
    featured: true,
    year: 2025
  }, 
   {
    id: 'nextjs-landing-page',
    title: 'Starter - Landing Page Next.js',
    description: 'Landing page moderna e responsiva desenvolvida com Next.js, React e TypeScript para desenvolvedores.',
    longDescription: 'Landing page moderna, responsiva e otimizada, feita com Next.js, React, TypeScript e Tailwind CSS. Ideal para desenvolvedores que querem um ponto de partida profissional e bonito para seus projetos. Inclui header fixo transparente, seção hero com gradientes, área de features detalhadas com App Router, otimização de imagens, rotas de API integradas, design responsivo e animações suaves.',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'App Router'],
    image: '/images/projects/nextjs-landing-page.jpg',
    githubUrl: 'https://github.com/Junior-81/Projt.next_page',
    featured: false,
    year: 2025
  },
  {
    id: 'courses-track-kotlin',
    title: 'CoursesTrack - Gerenciador de Cursos',
    description: 'Aplicativo Android nativo em Kotlin para gerenciar cursos e acompanhar progresso de aprendizagem.',
    longDescription: 'Aplicativo Android desenvolvido em Kotlin para facilitar o gerenciamento de cursos e controlar o progresso de aprendizagem. Inclui cadastro de usuários, autenticação Firebase, gerenciamento completo de cursos, instituições e matérias, acompanhamento de progresso e interface moderna com Material Design. Projeto desenvolvido em equipe seguindo arquitetura MVVM.',
    technologies: ['Kotlin', 'Firebase Auth', 'Firestore', 'Hilt', 'Navigation', 'Material Design', 'MVVM'],
    image: '/images/projects/courses-track-kotlin.jpg',
    githubUrl: 'https://github.com/Junior-81/Projeto-Kotlin',
    featured: false,
    year: 2024
  },
  {
    id: 'biosafe-iot',
    title: 'BioSafe - Sistema IoT de Monitoramento',
    description: 'Sistema IoT completo para monitoramento baseado em MQTT com dashboard em tempo real.',
    longDescription: 'Sistema IoT desenvolvido para monitoramento em tempo real utilizando arquitetura baseada em MQTT. Implementa comunicação entre dispositivos IoT através do broker Mosquitto, processamento de dados com Node-RED e dashboard interativo. Inclui monitoramento de sensores de temperatura e umidade, controle de dispositivos remotos, alertas configuráveis, API REST para integração e interface web responsiva. Containerizado com Docker para facilitar deployment.',
    technologies: ['C++', 'JavaScript', 'MQTT', 'Node-RED', 'Mosquitto', 'Docker', 'ESP32', 'Arduino'],
    image: '/images/projects/biosafe-iot.svg',
    githubUrl: 'https://github.com/Junior-81/biosafe-iot',
    featured: false,
    year: 2025
  },
  {
    id: 'board-java-kanban',
    title: 'Board - Sistema de Gerenciamento Kanban',
    description: 'Sistema de gerenciamento de quadros Kanban desenvolvido em Java com interface de linha de comando.',
    longDescription: 'Sistema completo de gerenciamento de quadros Kanban desenvolvido em Java inspirado na metodologia ágil. Implementa CRUD completo de boards e cards, sistema de colunas personalizáveis (INITIAL, PENDING, FINAL, CANCEL), controle de bloqueios com histórico, persistência em MySQL com migrations automáticas via Liquibase e interface de linha de comando interativa. Segue padrões arquiteturais como MVC, DAO, DTO e Service Layer.',
    technologies: ['Java 17', 'MySQL', 'Liquibase', 'Gradle', 'Lombok', 'JDBC'],
    image: '/images/projects/board-java-kanban.svg',
    githubUrl: 'https://github.com/Junior-81/board-java',
    featured: false,
    year: 2025
  },
];

export const experiences: Experience[] = [
 {
  id: 'fullstack-dev-2024',
  company: 'Prefeitura Municipal de Jaboatão dos Guararapes',
  position: 'Desenvolvedor Full Stack',
  startDate: '2025 - Atual',
  description: `Atuação abrangente em desenvolvimento full stack, englobando experiências sólidas em front-end e back-end, além de integração de sistemas e colaboração com equipes multidisciplinares. No front-end, trabalhei com sustentação e evolução de sistemas utilizando TypeScript, JavaScript, HTML, CSS e GitHub, focando em performance, usabilidade e manutenção de aplicações legadas. Fui responsável por implementar melhorias, arquitetar componentes e realizar integrações com APIs REST, além de contribuir em code reviews, versionamento e boas práticas de desenvolvimento.

No back-end, participei de projetos de sustentação e desenvolvimento de sistemas utilizando Java, Spring Boot, Spring Data JPA, além de implementação e manutenção de APIs REST, integração com bancos de dados relacionais (MySQL, PostgreSQL), criação de consultas SQL, mapeamentos relacionais e aplicação de padrões de arquitetura como SOLID e Clean Code. Apoiei ainda a documentação técnica e a equipe em processos de integração.

O contato contínuo com times de suporte e infraestrutura me proporcionou uma visão completa do ciclo de vida das aplicações, desde o desenvolvimento até o monitoramento, análise de incidentes e melhorias contínuas nos ambientes corporativos.

Principais tecnologias: Java, Spring Boot, JPA, SQL, JavaScript, TypeScript, HTML, CSS, Git, PostgreSQL, MySQL.
`,
  technologies: [
    'Java', 'Spring Boot', 'Spring Data JPA', 'SQL',
    'JavaScript', 'TypeScript', 'HTML', 'CSS',
     'Docker', 'PostgreSQL', 'MySQL',
    'Git'
  ],
  type: 'work'
},
  {
  id: 'support-ti-2024',
  company: 'Prefeitura Municipal de Jaboatão dos Guararapes',
  position: 'Suporte de TI',
  startDate: '2024 - 2025',
  description: `Experiência sólida em suporte técnico, com ênfase no gerenciamento de chamados via GLPI, monitoramento de infraestrutura utilizando Zabbix e análise de causa raiz (RCA) para resolução de problemas recorrentes. Responsável por garantir o atendimento dentro do SLA, documentar soluções técnicas e integrar ferramentas de monitoramento e atendimento. Atuação voltada para estabilidade, eficiência operacional e suporte a times de desenvolvimento e usuários finais.`,
  technologies: [
    'GLPI', 'Zabbix', 'Monitoramento de Infraestrutura', 'Atendimento ao Usuário', 'Documentação Técnica'
  ],
  type: 'work'
},

  {
    id: 'computer-science',
    company: 'Faculdade Nova Roma',
    position: 'Bacharelado em Ciência da Computação',
    startDate: '2022-02',
    endDate: '2026-01',
    description: 'Formação completa em Ciência da Computação com ênfase em desenvolvimento de software, algoritmos avançados, estruturas de dados e arquitetura de sistemas computacionais. A trajetória acadêmica abrange desde fundamentos de programação, banco de dados e engenharia de software até conteúdos avançados como inteligência artificial, computação gráfica, visão computacional, sistemas embarcados, computação em nuvem, Internet das Coisas (IoT) e automação robótica.',
    type: 'education'
  },
  {
    id: 'technical-course',
    company: 'Faculdade Nova Roma',
    position: 'Tecnólogo Análise e Desenvolvimento de Sistemas',
    startDate: '2022-02',
    endDate: '2024-02',
    description: 'Formação tecnológica em Análise e Desenvolvimento de Sistemas com foco em desenvolvimento de software, arquitetura de sistemas, banco de dados e aplicações web e mobile. Estudo aprofundado de algoritmos, estruturas de dados, programação orientada a objetos e desenvolvimento full stack, incluindo projetos práticos em todas as etapas do curso.',
    type: 'education'
  }
];
