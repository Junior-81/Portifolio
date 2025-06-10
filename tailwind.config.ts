import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class', // Ativa o dark mode por classe
  theme: {
    extend: {
      // suas configurações personalizadas aqui
    },
  },
  plugins: [],
}

export default config
