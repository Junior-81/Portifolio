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
  title: "Ailton Junior — Desenvolvedor Backend Jr | Java & Spring Boot",
  description:
    "Desenvolvedor Backend Jr com foco em Java, Spring Boot, PL/SQL, bancos relacionais, sistemas críticos e governança de APIs REST.",
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
    title: "Ailton Junior — Desenvolvedor Backend Jr",
    description: "Java, Spring Boot, PL/SQL, sistemas críticos e governança de APIs.",
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
