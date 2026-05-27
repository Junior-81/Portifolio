'use client';

import { motion } from 'framer-motion';
import { Server, GitBranch, Database, Shield } from 'lucide-react';

const specialties = [
  {
    title: 'Sistemas de Alta Criticidade',
    description:
      'Experiência em produção com faturamento hospitalar regulado (TISS) e sistemas de gestão pública. Onde indisponibilidade tem custo financeiro real.',
    icon: Server
  },
  {
    title: 'Arquitetura de APIs',
    description:
      'Design de APIs REST governadas por contrato com OpenAPI e validação via Spectral. Microsserviços desacoplados com Spring Boot 3.',
    icon: GitBranch
  },
  {
    title: 'Banco de Dados Complexo',
    description:
      'PL/SQL e Oracle DB em sistemas legados de alta volumetria. PostgreSQL e MySQL com modelagem relacional orientada a integridade transacional.',
    icon: Database
  },
  {
    title: 'Qualidade & Resiliência',
    description:
      'SOLID, design patterns, TDD com JUnit e análise de causa raiz (RCA) em incidentes de produção. Código que aguenta o ambiente real.',
    icon: Shield
  }
];

export default function SpecialtiesSection() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-10"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
            Especialidades
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Base técnica construída em ambientes reais, com alto impacto operacional e forte exigência de confiabilidade.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {specialties.map((specialty, index) => {
            const Icon = specialty.icon;

            return (
              <motion.div
                key={specialty.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-xl bg-white dark:bg-gray-800 shadow-lg border border-gray-200/70 dark:border-gray-700 p-5 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="shrink-0 p-3 rounded-lg bg-blue-100 dark:bg-blue-900/30">
                    <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {specialty.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                      {specialty.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
