'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Filter } from 'lucide-react';
import { projects } from '@/data';

const projectFilters = [
  { id: '', label: 'Todos', technologies: [] },
  { id: 'backend', label: 'Backend', technologies: ['Java', 'Spring Boot', 'Node.js', 'Express.js', 'TypeScript'] },
  { id: 'apis', label: 'APIs e Governança', technologies: ['REST APIs', 'OpenAPI 3.0', 'Spectral', 'Swagger/OpenAPI', 'JWT'] },
  { id: 'dados', label: 'Dados', technologies: ['PostgreSQL', 'MySQL', 'Oracle DB', 'PL/SQL', 'H2 Database'] },
  { id: 'integracoes', label: 'Integrações', technologies: ['MQTT', 'Node-RED', 'CoinGecko API', 'Axios'] },
  { id: 'frontend', label: 'Frontend', technologies: ['Next.js', 'React', 'Tailwind CSS'] },
];

export default function ProjetosPage() {
  const [selectedFilter, setSelectedFilter] = useState<string>('');

  const activeFilter = projectFilters.find(filter => filter.id === selectedFilter) || projectFilters[0];
  const filteredProjects = activeFilter.technologies.length
    ? projects.filter(project =>
        project.technologies.some(tech => activeFilter.technologies.includes(tech))
      )
    : projects;

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-6"
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white">
              Meus Projetos
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Projetos selecionados para mostrar backend, contratos de API, bancos de dados,
              integrações e decisões de arquitetura.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-6 bg-gray-50 dark:bg-gray-900 border-y border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
              <Filter className="w-5 h-5" />
              <span className="font-medium">Filtrar por foco:</span>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {projectFilters.map((filter) => (
                <button
                  key={filter.id || 'all'}
                  onClick={() => setSelectedFilter(filter.id)}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    selectedFilter === filter.id
                      ? 'bg-gray-900 text-white dark:bg-white dark:text-gray-900'
                      : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-500'
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            layout
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden group"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                  <div className="absolute top-4 right-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-medium">
                    {project.year}
                  </div>
                  {project.featured && (
                    <div className="absolute top-4 left-4 bg-gray-900/90 text-white rounded-md px-3 py-1 text-xs font-medium">
                      Destaque
                    </div>
                  )}
                </div>
                
                <div className="p-6 space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2">
                      {project.description}
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-xs font-medium rounded-md bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2.5 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-xs font-medium rounded-md">
                        +{project.technologies.length - 3} mais
                      </span>
                    )}
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex items-center gap-3">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                          title="Ver código no GitHub"
                        >
                          <Github className="w-5 h-5" />
                        </a>
                      )}
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                          title="Ver demo"
                        >
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                    
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                Nenhum projeto encontrado com a tecnologia selecionada.
              </p>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}
