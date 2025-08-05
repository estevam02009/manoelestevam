import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Manoel Estevam - Desenvolvedor Full Stack",
  description: "Desenvolvedor Full Stack com foco em React, Node.js e MongoDB",
  keywords: [
    "Desenvolvedor Full Stack",
    "React",
    "Node.js",
    "MongoDB",
    "Desenvolvimento de Software",
    "Programação",
    "Tecnologia",
    "Inovação",
    "Empresa de Tecnologia",
    "Desenvolvimento de Aplicações",
    "Programação de Software",
    "Desenvolvimento de Sistemas",
    "Tecnologia da Informação",
    "Desenvolvimento de Soluções",
    "Programação de Aplicações",
    "Desenvolvimento de Software",
    "Programação de Sistemas",
    "Desenvolvimento de Aplicações",
    "Programação de Software",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
