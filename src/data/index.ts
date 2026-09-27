import { PersonalInfo, Project, Experience, Skill, SocialLink } from '@/types';

export const personalInfo: PersonalInfo = {
  name: 'Ailton Junior',
  title: 'Desenvolvedor Backend Jr · Java, Spring Boot e APIs',
  bio: 'Desenvolvedor Backend com experiência em sistemas de produção para HealthTech e gestão pública. Atuo com Java, Spring Boot, PL/SQL, bancos relacionais e APIs REST, com atenção a regras de negócio críticas, contratos bem definidos, qualidade de código e sustentação de sistemas em ambiente real. Minha trajetória combina suporte, operação e desenvolvimento, base que direciona minha evolução para arquitetura de software.',
  location: 'Recife, PE - Brasil',
  email: 'jab.junior81@gmail.com',
  avatar: '/images/Avatar.jpeg',
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
  { name: 'Java', level: 'Avançado', category: 'Backend' },
  { name: 'Spring Boot', level: 'Avançado', category: 'Backend' },
  { name: 'JPA/Hibernate', level: 'Intermediário', category: 'Backend' },
  { name: 'PL/SQL', level: 'Avançado', category: 'Backend' },
  { name: 'Spring Security', level: 'Intermediário', category: 'Backend' },
  { name: 'Node.js', level: 'Intermediário', category: 'Backend' },
  { name: 'Express.js', level: 'Intermediário', category: 'Backend' },
  { name: 'TypeScript', level: 'Intermediário', category: 'Backend' },

  { name: 'PostgreSQL', level: 'Intermediário', category: 'Database' },
  { name: 'MySQL', level: 'Intermediário', category: 'Database' },
  { name: 'Oracle DB', level: 'Intermediário', category: 'Database' },

  { name: 'Docker', level: 'Intermediário', category: 'DevOps' },
  { name: 'GitHub Actions', level: 'Intermediário', category: 'DevOps' },
  { name: 'Linux', level: 'Iniciante', category: 'DevOps' },
  { name: 'Zabbix', level: 'Intermediário', category: 'DevOps' },

  { name: 'Git', level: 'Intermediário', category: 'Outras' },
  { name: 'REST APIs', level: 'Intermediário', category: 'Outras' },
  { name: 'OpenAPI / Spectral', level: 'Intermediário', category: 'Outras' },
  { name: 'JWT', level: 'Intermediário', category: 'Outras' },
  { name: 'Microservices', level: 'Iniciante', category: 'Outras' },
  { name: 'TDD', level: 'Intermediário', category: 'Outras' },
  { name: 'Apache Kafka', level: 'Iniciante', category: 'Outras' },
  { name: 'JUnit / Jest', level: 'Iniciante', category: 'Outras' },

  { name: 'React', level: 'Intermediário', category: 'Frontend' },
  { name: 'Next.js', level: 'Intermediário', category: 'Frontend' },
  { name: 'Tailwind CSS', level: 'Intermediário', category: 'Frontend' }
];

export const projects: Project[] = [
  {
    id: 'api-governance-tcc',
    title: 'TCC - Plataforma de APIs Governadas',
    description: 'Camada anticorrupção entre frontend e legado, com API-First, OpenAPI, Spectral, JWT, LGPD e testes automatizados.',
    longDescription: 'Prova de conceito do TCC em Ciência da Computação sobre estratégia de plataforma de APIs. O projeto demonstra como uma camada intermediária pode isolar consumidores modernos de regras presas ao banco, expondo contratos REST governados por OpenAPI e validados com Spectral no build. Implementa backend Express com TypeScript, PostgreSQL com PL/pgSQL, autenticação JWT, mascaramento de CPF para reduzir exposição de dados sensíveis e testes automatizados com Jest.',
    technologies: ['TypeScript', 'Express.js', 'PostgreSQL', 'OpenAPI 3.0', 'Spectral', 'JWT', 'Jest'],
    image: '/images/projects/api-governance-tcc.svg',
    githubUrl: 'https://github.com/Junior-81/TCC-PROJETO',
    featured: true,
    year: 2026
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
    featured: false,
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
    featured: false,
    year: 2025
  }, 
  {
  id: 'sec-trab-jaboatao-dashboard',
  title: 'Secretaria do Trabalho Jaboatão - Portal de Serviços',
  description: 'Portal completo para gestão e acesso aos serviços da Secretaria de Trabalho de Jaboatão dos Guararapes.',
  longDescription: 'Aplicação web desenvolvida para facilitar o acesso aos serviços da Secretaria de Trabalho de Jaboatão dos Guararapes. O sistema oferece agendamento online, informações institucionais, cadastro de empregadores e trabalhadores, integração com redes sociais e recursos de acessibilidade. Código-fonte fechado por ser projeto institucional.',
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
  position: 'Desenvolvedor Backend Jr',
  startDate: 'out 2025',
  endDate: null,
  description: `Atuação na sustentação e evolução do SOUL MV, sistema de alta criticidade para faturamento hospitalar. Trabalho com Java, PL/SQL e Oracle em rotinas ligadas ao padrão TISS, diagnóstico de falhas, análise de regras de negócio e melhoria de consultas e fluxos backend que impactam operações reais em unidades de saúde.`,
  technologies: ['Java', 'Spring Boot', 'PL/SQL', 'Oracle DB', 'REST APIs', 'Git'],
  type: 'work'
},
 {
  id: 'fullstack-dev-2024',
  company: 'Prefeitura Municipal de Jaboatão dos Guararapes',
  position: 'Desenvolvedor Backend',
  startDate: 'mai 2025',
  endDate: 'out 2025',
  description: `Desenvolvimento e manutenção de serviços backend para sistemas da administração pública, com Java, Spring Boot, APIs REST, JPA e bancos relacionais. Atuei na evolução de módulos, melhoria de consultas, integração com frontend e organização de código em componentes mais previsíveis para manutenção e deploy.`,
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
  position: 'Analista de Suporte de TI / Infra',
  startDate: 'fev 2024',
  endDate: 'fev 2025',
  description: `Atuação em suporte técnico, monitoramento e operação de sistemas municipais. Gerenciei chamados via GLPI, acompanhei ambientes com Zabbix, documentei soluções e participei de análises de causa raiz para incidentes recorrentes. Essa base operacional fortaleceu minha visão de produção, estabilidade e impacto real no usuário final.`,
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
