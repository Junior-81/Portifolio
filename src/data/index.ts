import { PersonalInfo, Project, Experience, Skill, SocialLink } from '@/types';

export const personalInfo: PersonalInfo = {
  name: 'Ailton Junior',
  title: 'Backend Engineer · Java & Spring Boot',
  bio: 'Desenvolvedor Backend com atuação em produção em dois dos contextos mais exigentes em regras de negócio: HealthTech crítica e gestão pública. Especialista em Java, Spring Boot e PL/SQL, com entrega de microsserviços, APIs REST governadas por OpenAPI e sustentação de sistemas que geram alto impacto. Alia boas práticas consolidadas — SOLID, TDD, design patterns — com visão de produto formada no contato direto com o usuário final.',
  location: 'Recife, PE - Brasil',
  email: 'jab.junior81@gmail.com',
  avatar: '/images/avatar.jpg',
  resumeUrl: '/AiltonJunior_Curriculo.pdf'
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
  { name: 'Java', level: 'Avançado', category: 'Backend' },
  { name: 'Spring Boot', level: 'Avançado', category: 'Backend' },
  { name: 'JPA/Hibernate', level: 'Intermediário', category: 'Backend' },
  { name: 'JDBC/ORM', level: 'Iniciante', category: 'Backend' },
  { name: 'PL/SQL', level: 'Avançado', category: 'Backend' },
  { name: 'Spring Security', level: 'Intermediário', category: 'Backend' },

  // Database
  { name: 'PostgreSQL', level: 'Intermediário', category: 'Database' },
  { name: 'MySQL', level: 'Intermediário', category: 'Database' },
  { name: 'Oracle DB', level: 'Intermediário', category: 'Database' },
  { name: 'MongoDB', level: 'Iniciante', category: 'Database' },
  { name: 'Prisma ORM', level: 'Intermediário', category: 'Database' },
  { name: 'SQLAlchemy', level: 'Iniciante', category: 'Database' },

  // DevOps & Tools
  { name: 'Docker', level: 'Intermediário', category: 'DevOps' },
  { name: 'AWS', level: 'Iniciante', category: 'DevOps' },
  { name: 'Vercel', level: 'Intermediário', category: 'DevOps' },
  { name: 'Linux', level: 'Iniciante', category: 'DevOps' },
  { name: 'GitHub Actions', level: 'Intermediário', category: 'DevOps' },

  // Outras
  { name: 'Git', level: 'Intermediário', category: 'Outras' },
  { name: 'REST APIs', level: 'Intermediário', category: 'Outras' },
  { name: 'OpenAPI / Spectral', level: 'Intermediário', category: 'Outras' },
  { name: 'GraphQL', level: 'Iniciante', category: 'Outras' },
  { name: 'JWT', level: 'Intermediário', category: 'Outras' },
  { name: 'Microservices', level: 'Intermediário', category: 'Outras' },
  { name: 'TDD', level: 'Intermediário', category: 'Outras' },
  { name: 'Apache Kafka', level: 'Iniciante', category: 'Outras' },
  { name: 'WebSockets', level: 'Iniciante', category: 'Outras' },
  { name: 'Testes (JUnit, Jest, React Testing Library)', level: 'Iniciante', category: 'Outras' }
];

export const projects: Project[] = [
  {
    id: 'api-governance-tcc',
    title: 'Governança de APIs — TCC Bacharelado em CC',
    description: 'Arquitetura de migração de regras de negócio de banco legado Oracle para ecossistema de APIs modernas com validação de contratos via Spectral.',
    longDescription: 'Projeto de conclusão de curso focado em um problema real do setor de saúde: regras de negócio críticas presas em banco de dados legado (Oracle). Arquitetou a extração e transição dessas regras para APIs modernas documentadas com OpenAPI 3.0. Implementou pipeline de validação de contratos com Spectral (linting de schemas, versionamento, nomenclatura). Validou que a centralização de regras em APIs versionadas aumenta a segurança das integrações e reduz risco de regressão — tese diretamente aplicável a modernização de sistemas financeiros com múltiplos canais.',
    technologies: ['Java', 'Spring Boot', 'Oracle DB', 'OpenAPI 3.0', 'Spectral', 'PL/SQL'],
    image: '/images/projects/api-governance-tcc.svg',
    githubUrl: 'https://github.com/Junior-81',
    featured: true,
    year: 2025
  },
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
    id: 'kailane-design-portfolio',
    title: 'Kailane Design - Portfólio Profissional',
    description: 'Site portfólio para apresentação dos trabalhos e serviços da Kailane Design.',
    longDescription: 'Aplicação web desenvolvida com Next.js para destacar o portfólio da empresa Kailane Design. O site apresenta projetos realizados, serviços oferecidos, depoimentos de clientes, área de contato e design responsivo. Foco em experiência visual, navegação intuitiva e identidade visual personalizada para a marca.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'EmailJS', 'Vercel'],
    image: '/images/projects/kailane-design-portfolio.jpeg',
    demoUrl: 'https://kailanemaria.vercel.app',
    githubUrl: 'https://github.com/Junior-81/Port_Kailane',
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
  id: 'sec-trab-jaboatao-dashboard',
  title: 'Secretaria do Trabalho Jaboatão - Portal de Serviços',
  description: 'Portal completo para gestão e acesso aos serviços da Secretaria de Trabalho de Jaboatão dos Guararapes.',
  longDescription: 'Aplicação web moderna desenvolvida com Next.js para facilitar o acesso aos serviços da Secretaria de Trabalho de Jaboatão dos Guararapes. O sistema oferece agendamento online, informações institucionais, áreas de atuação, cadastro de empregadores e trabalhadores, além de integração com redes sociais e recursos de acessibilidade. Design responsivo, navegação intuitiva e otimização de performance.(Github fechado por ser projeto da prefeitura)',
  technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Axios'],
  image: '/images/projects/trabalho.jpeg',
  demoUrl: 'https://trabalhoteste.jaboatao.pe.gov.br',
  githubUrl: '',
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
  id: 'mv-sistemas-2025',
  company: 'MV Sistemas — HealthTech',
  position: 'Desenvolvedor Backend',
  startDate: 'out 2025',
  endDate: null,
  description: `Sustentação e evolução do sistema SOUL MV — núcleo de faturamento hospitalar de alta criticidade, impactando centenas de unidades de saúde com fluxos financeiros regulados pelo padrão TISS. Diagnóstico e correção de falhas em rotinas de extração de dados TISS, reduzindo glosas e garantindo conformidade regulatória. Refatoração de lógicas de valoração em PL/SQL/Oracle, eliminando gargalos em rotinas de fechamento de faturamento.`,
  technologies: ['Java', 'Spring Boot', 'PL/SQL', 'Oracle DB', 'REST APIs', 'Git'],
  type: 'work'
},
 {
  id: 'fullstack-dev-2024',
  company: 'Prefeitura Municipal de Jaboatão dos Guararapes',
  position: 'Desenvolvedor Backend',
  startDate: 'mai 2025',
  endDate: 'out 2025',
  description: `Atuação em sustentação e evolução de serviços back-end para sistemas da administração pública, com foco em Java e Spring Boot. Implementação e manutenção de APIs REST, integração com bancos relacionais (MySQL e PostgreSQL), otimização de consultas SQL e mapeamentos com JPA. Aplicação de SOLID e boas práticas de arquitetura para aumentar estabilidade, legibilidade e previsibilidade de deploy em ambiente de produção.`,
  technologies: [
    'Java', 'Spring Boot', 'Spring Data JPA', 'SQL',
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
