'use client';

import { motion } from 'framer-motion';
import { Calendar, Building, GraduationCap, Briefcase } from 'lucide-react';
import { experiences } from '@/data';
import { Experience } from '@/types';

export default function ExperienciaPage() {
  const workExperiences = experiences.filter(exp => exp.type === 'work');
  const educationExperiences = experiences.filter(exp => exp.type === 'education');

  const ExperienceCard = ({ experience, index }: { experience: Experience; index: number }) => (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border-l-4 border-blue-600"
    >
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
            {experience.position}
          </h3>
          <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-medium mb-2">
            {experience.type === 'work' ? 
              <Building className="w-4 h-4" /> : 
              <GraduationCap className="w-4 h-4" />
            }
            <span>{experience.company}</span>
          </div>
        </div>
        
        <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mt-2 sm:mt-0">
          <Calendar className="w-4 h-4" />
          <span className="text-sm">
            {experience.startDate} {experience.endDate }
          </span>
        </div>
      </div>
      
      <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
        {experience.description}
      </p>
      
      {experience.technologies && experience.technologies.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {experience.technologies.map((tech: string) => (
            <span
              key={tech}
              className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-sm font-medium rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      )}
    </motion.div>
  );

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-6"
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white">
              Experiência & Formação
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Minha trajetória profissional e acadêmica, destacando as experiências 
              que moldaram minha carreira como desenvolvedor.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Work Experience Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-4 mb-16"
          >
            <div className="flex items-center justify-center gap-3">
              <Briefcase className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
                Experiência Profissional
              </h2>
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Principais posições e conquistas na minha carreira
            </p>
          </motion.div>

          <div className="space-y-8">
            {workExperiences.map((experience, index) => (
              <ExperienceCard 
                key={experience.id} 
                experience={experience} 
                index={index} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-4 mb-16"
          >
            <div className="flex items-center justify-center gap-3">
              <GraduationCap className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
                Formação Acadêmica
              </h2>
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Minha base educacional e formação técnica
            </p>
          </motion.div>

          <div className="space-y-8">
            {educationExperiences.map((experience, index) => (
              <ExperienceCard 
                key={experience.id} 
                experience={experience} 
                index={index} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center space-y-2"
            >
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400">
                Mais de 2 
              </div>
              <div className="text-gray-600 dark:text-gray-400">
                Experiências Profissionais
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center space-y-2"
            >
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400">
                +2
              </div>
              <div className="text-gray-600 dark:text-gray-400">
                +Experiência
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center space-y-2"
            >
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400">
                 +10
              </div>
              <div className="text-gray-600 dark:text-gray-400">
                Tecnologias Conhecidas
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
