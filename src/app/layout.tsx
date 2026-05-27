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
  title: "Ailton Junior — Backend Engineer | Java & Spring Boot",
  description:
    "Desenvolvedor Backend especializado em Java, Spring Boot e PL/SQL. Experiência em sistemas de alta criticidade, microsserviços e governança de APIs REST.",
  keywords: [
    "desenvolvedor backend",
    "java",
    "spring boot",
    "pl/sql",
    "microsserviços",
    "api rest",
    "oracle",
    "recife",
    "pernambuco",
  ],
  authors: [{ name: "José Ailton" }],
  openGraph: {
    title: "Ailton Junior — Backend Engineer",
    description: "Especialista em Java, Spring Boot e sistemas de alta criticidade.",
    url: "https://portifolio-mu-khaki.vercel.app",
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
