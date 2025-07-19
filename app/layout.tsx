import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-inter",
})

export const metadata = {
  title: "Pesquisa de Satisfação Academia Pakitos Dance",
  description: "Sua opinião é muito importante para nós! Ajude-nos a melhorar a Academia Pakitos Dance.",
  generator: "v0.dev",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={inter.variable}>{children}</body>
    </html>
  )
}
