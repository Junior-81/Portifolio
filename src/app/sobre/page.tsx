'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Download, MapPin, Mail, Calendar } from 'lucide-react';
import { personalInfo, skills, experiences } from '@/data';
import SkillsSection from '@/components/SkillsSection';

export default function SobrePage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white">
                Sobre Mim
              </h1>
              <div className="text-xl text-blue-600 dark:text-blue-400 font-medium">
                {personalInfo.title}
              </div>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                {personalInfo.bio}
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                  <MapPin className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  <span>{personalInfo.location}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                  <Mail className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  <a href={`mailto:${personalInfo.email}`} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              {personalInfo.resumeUrl && (
                <div className="pt-4">
                  <a
                    href={personalInfo.resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200 group"
                  >
                    <Download className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-200" />
                    Download CV
                  </a>
                </div>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative">
                <div className="w-80 h-80 rounded-2xl bg-gradient-to-br from-blue-400 to-purple-600 p-1">
                  <div className="w-full h-full rounded-2xl bg-white dark:bg-gray-800 p-2">
                    <Image
                      src={personalInfo.avatar}
                      alt={personalInfo.name}
                      width={300}
                      height={300}
                      className="w-full h-full rounded-xl object-cover"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <SkillsSection skills={skills} />

      {/* Journey Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-4 mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
              Minha Jornada
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Um pouco sobre minha trajetória profissional e acadêmica
            </p>
          </motion.div>

          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 border-l-4 border-blue-600"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {experience.position}
                    </h3>
                    <p className="text-blue-600 dark:text-blue-400 font-medium">
                      {experience.company}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mt-2 sm:mt-0">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">
                      {experience.startDate} - {experience.endDate || 'Presente'}
                    </span>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {experience.description}
                </p>
                {experience.technologies && (
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech) => (
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
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
