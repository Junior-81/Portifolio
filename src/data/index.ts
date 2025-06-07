import { PersonalInfo, Project, Experience, Skill, SocialLink } from '@/types';

export const personalInfo: PersonalInfo = {
  name: 'José Ailton',
  title: 'Desenvolvedor Full Stack | Backend & Frontend',
  bio: 'Desenvolvedor Full Stack com mais de 3 anos de experiência em desenvolvimento web. Especializado em tecnologias backend como Node.js, Python e PostgreSQL, e frontend com React, Next.js e TypeScript. Apaixonado por criar soluções robustas e escaláveis.',
  location: 'Recife, PE - Brasil',
  email: 'jab.junior81@gmail.com',
  avatar: '/images/avatar.svg',
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
    url: 'jab.junior81@gmail.com',
    icon: 'Mail'
  },
  {
    name: 'WhatsApp',
    url: 'https://wa.me/5581981481075',
    icon: 'Phone'
  }
];

export const skills: Skill[] = [
  // Backend
  { name: 'Node.js', level: 'Avançado', category: 'Backend' },
  { name: 'Python', level: 'Avançado', category: 'Backend' },
  { name: 'TypeScript', level: 'Avançado', category: 'Backend' },
  { name: 'Express.js', level: 'Avançado', category: 'Backend' },
  { name: 'NestJS', level: 'Intermediário', category: 'Backend' },
  { name: 'Django', level: 'Intermediário', category: 'Backend' },
  { name: 'FastAPI', level: 'Intermediário', category: 'Backend' },
  
  // Frontend
  { name: 'React', level: 'Avançado', category: 'Frontend' },
  { name: 'Next.js', level: 'Avançado', category: 'Frontend' },
  { name: 'JavaScript', level: 'Expert', category: 'Frontend' },
  { name: 'HTML5', level: 'Expert', category: 'Frontend' },
  { name: 'CSS3', level: 'Avançado', category: 'Frontend' },
  { name: 'Tailwind CSS', level: 'Avançado', category: 'Frontend' },
  { name: 'Bootstrap', level: 'Avançado', category: 'Frontend' },
  { name: 'Sass/SCSS', level: 'Avançado', category: 'Frontend' },
  
  // Database
  { name: 'PostgreSQL', level: 'Avançado', category: 'Database' },
  { name: 'MySQL', level: 'Avançado', category: 'Database' },
  { name: 'MongoDB', level: 'Intermediário', category: 'Database' },
  { name: 'Redis', level: 'Intermediário', category: 'Database' },
  { name: 'Prisma ORM', level: 'Avançado', category: 'Database' },
  { name: 'SQLAlchemy', level: 'Intermediário', category: 'Database' },
  
  // DevOps & Tools
  { name: 'Docker', level: 'Intermediário', category: 'DevOps' },
  { name: 'AWS', level: 'Intermediário', category: 'DevOps' },
  { name: 'Vercel', level: 'Avançado', category: 'DevOps' },
  { name: 'Linux', level: 'Intermediário', category: 'DevOps' },
  { name: 'Nginx', level: 'Intermediário', category: 'DevOps' },
  
  // Outras
  { name: 'Git', level: 'Avançado', category: 'Outras' },
  { name: 'REST APIs', level: 'Avançado', category: 'Outras' },
  { name: 'GraphQL', level: 'Intermediário', category: 'Outras' },
  { name: 'JWT', level: 'Avançado', category: 'Outras' },
  { name: 'Microservices', level: 'Intermediário', category: 'Outras' },
  { name: 'TDD', level: 'Intermediário', category: 'Outras' }
];

export const projects: Project[] = [
  {
    id: 'ecommerce-api',
    title: 'API E-commerce Completa',
    description: 'API RESTful robusta para e-commerce com autenticação JWT, processamento de pagamentos e gestão de inventário.',
    longDescription: 'Desenvolvimento de uma API completa para e-commerce utilizando Node.js e Express. Inclui sistema de autenticação com JWT, integração com gateways de pagamento (Stripe/PagSeguro), gestão de produtos, carrinho de compras, pedidos e usuários. Implementação de cache com Redis e documentação com Swagger.',
    technologies: ['Node.js', 'Express.js', 'PostgreSQL', 'Prisma', 'JWT', 'Redis', 'Stripe API'],
    image: '/images/projects/ecommerce-api.svg',
    githubUrl: 'https://github.com/jose-ailton/ecommerce-api',
    featured: true,
    year: 2024
  },
  {
    id: 'task-manager-fullstack',
    title: 'Sistema de Gestão de Tarefas',
    description: 'Aplicação full stack para gestão de projetos e tarefas com colaboração em tempo real.',
    longDescription: 'Sistema completo de gestão de tarefas desenvolvido com React/Next.js no frontend e Node.js no backend. Funcionalidades incluem autenticação, criação de projetos, atribuição de tarefas, notificações em tempo real com WebSocket, dashboard analítico e exportação de relatórios.',
    technologies: ['Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Socket.io', 'Tailwind CSS'],
    image: '/images/projects/task-manager.svg',
    demoUrl: 'https://taskmanager-demo.vercel.app',
    githubUrl: 'https://github.com/jose-ailton/task-manager-fullstack',
    featured: true,
    year: 2024
  },
  {
    id: 'financial-dashboard',
    title: 'Dashboard Financeiro',
    description: 'Dashboard interativo para controle de finanças pessoais com gráficos e relatórios.',
    longDescription: 'Aplicação web para controle financeiro pessoal com categorização de gastos, metas financeiras, gráficos interativos e geração de relatórios. Backend desenvolvido em Python Django com frontend em React.',
    technologies: ['React', 'Python', 'Django', 'PostgreSQL', 'Chart.js', 'Material-UI'],
    image: '/images/projects/financial-dashboard.svg',
    demoUrl: 'https://finance-dashboard-demo.netlify.app',
    githubUrl: 'https://github.com/jose-ailton/financial-dashboard',
    featured: true,
    year: 2023
  },  {
    id: 'microservices-auth',
    title: 'Sistema de Autenticação Microserviços',
    description: 'Arquitetura de microserviços para autenticação com JWT, OAuth2 e Redis cache.',
    longDescription: 'Sistema distribuído de autenticação desenvolvido com arquitetura de microserviços. Inclui serviços independentes para usuários, autenticação, autorização, com cache Redis, documentação Swagger e deploy com Docker.',
    technologies: ['Node.js', 'Express', 'Redis', 'MongoDB', 'JWT', 'Docker'],
    image: '/images/projects/microservices-auth.svg',
    githubUrl: 'https://github.com/jose-ailton/microservices-auth',
    featured: false,
    year: 2023
  },
  {
    id: 'inventory-system',
    title: 'Sistema de Controle de Estoque',
    description: 'Sistema web para controle de inventário com alertas de baixo estoque e relatórios.',
    technologies: ['Python', 'FastAPI', 'PostgreSQL', 'React', 'TypeScript', 'Docker'],
    image: '/images/projects/inventory-system.svg',
    githubUrl: 'https://github.com/jose-ailton/inventory-system',
    featured: false,
    year: 2023
  },
  {
    id: 'restaurant-pos',
    title: 'Sistema PDV para Restaurante',
    description: 'Point of Sale (PDV) para restaurantes com gestão de mesas, pedidos e cardápio.',
    technologies: ['Node.js', 'Express', 'MySQL', 'React', 'Socket.io', 'Thermal Printer API'],
    image: '/images/projects/restaurant-pos.svg',
    githubUrl: 'https://github.com/jose-ailton/restaurant-pos',
    featured: false,
    year: 2022
  }
];

export const experiences: Experience[] = [
  {
    id: 'fullstack-dev-2024',
    company: 'TechSolutions Brasil',
    position: 'Desenvolvedor Full Stack Pleno',
    startDate: '2023-03',
    description: 'Desenvolvimento e manutenção de aplicações web usando Node.js, React e PostgreSQL. Implementação de APIs RESTful, otimização de performance e colaboração em equipes ágeis. Responsável por arquitetar soluções escaláveis e mentorizar desenvolvedores júniores.',
    technologies: ['Node.js', 'React', 'PostgreSQL', 'TypeScript', 'Docker', 'AWS'],
    type: 'work'
  },
  {
    id: 'backend-dev-2022',
    company: 'Inovare Sistemas',
    position: 'Desenvolvedor Backend',
    startDate: '2022-01',
    endDate: '2023-02',
    description: 'Especialização em desenvolvimento backend com Python e Django. Criação de APIs robustas, integração com bancos de dados MySQL e PostgreSQL, implementação de sistemas de autenticação e autorização. Trabalho com microserviços e containerização.',
    technologies: ['Python', 'Django', 'MySQL', 'PostgreSQL', 'Redis', 'Docker'],
    type: 'work'
  },
  {
    id: 'junior-dev-2021',
    company: 'Digital Web PE',
    position: 'Desenvolvedor Web Júnior',
    startDate: '2021-06',
    endDate: '2021-12',
    description: 'Início da carreira profissional desenvolvendo sites e sistemas web. Trabalho com HTML, CSS, JavaScript e PHP. Aprendizado de frameworks modernos como React e Node.js. Participação em projetos de e-commerce e sites institucionais.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL', 'WordPress'],
    type: 'work'
  },
  {
    id: 'freelancer-2020',
    company: 'Freelancer',
    position: 'Desenvolvedor Web Freelancer',
    startDate: '2020-08',
    endDate: '2021-05',
    description: 'Desenvolvimento de sites e sistemas web para pequenas empresas locais. Criação de landing pages, sites institucionais e pequenos sistemas de gestão. Primeira experiência profissional na área de desenvolvimento.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL', 'Bootstrap'],
    type: 'work'
  },
  {
    id: 'computer-science',
    company: 'Universidade Federal de Pernambuco (UFPE)',
    position: 'Bacharelado em Ciência da Computação',
    startDate: '2018-03',
    endDate: '2022-12',
    description: 'Formação completa em Ciência da Computação com foco em desenvolvimento de software, algoritmos e estruturas de dados. Participação em projetos de extensão e iniciação científica. TCC sobre desenvolvimento de aplicações web modernas.',
    type: 'education'
  },
  {
    id: 'technical-course',
    company: 'SENAI PE',
    position: 'Técnico em Informática',
    startDate: '2016-02',
    endDate: '2017-12',
    description: 'Curso técnico abrangendo fundamentos da programação, banco de dados, redes de computadores e manutenção de hardware. Primeiro contato formal com programação e desenvolvimento web.',
    type: 'education'
  }
];
