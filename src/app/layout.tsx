import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "José Ailton - Desenvolvedor Full Stack",
  description: "Portfólio pessoal de José Ailton, desenvolvedor full stack especializado em React, Next.js e Node.js.",
  keywords: ["desenvolvedor", "full stack", "react", "nextjs", "nodejs", "typescript"],
  authors: [{ name: "José Ailton" }],
  openGraph: {
    title: "José Ailton - Desenvolvedor Full Stack",
    description: "Portfólio pessoal de José Ailton, desenvolvedor full stack especializado em React, Next.js e Node.js.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
