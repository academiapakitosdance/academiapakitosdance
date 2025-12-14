import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import type { Metadata } from "next"

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Academia Pakitos Dance - Pesquisa de Satisfação",
  description:
    "Sua opinião é muito importante para nós! Ajude-nos a melhorar a Academia Pakitos Dance com sua avaliação.",
  icons: {
    icon: [
      { url: "/icon-light-32x32.png", media: "(prefers-color-scheme: light)" },
      { url: "/icon-dark-32x32.png", media: "(prefers-color-scheme: dark)" },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <meta name="theme-color" content="#dc2626" />
      </head>
      <body className={inter.variable}>{children}</body>
    </html>
  )
}
