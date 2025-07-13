import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./assets/styles/globals.css";
import "devicon/devicon.min.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kane'e Sell Portifólio",
  description:
    "Portfólio fullstack de Kanee Sell, desenvolvedor com foco em front-end moderno, animações fluidas e experiência de usuário. Conhecimentos sólidos em back-end, React, Tailwind CSS, Node.js e boas práticas de UI/UX.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
