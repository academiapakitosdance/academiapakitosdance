import type React from "react"
import "./globals.css"
import { Poppins } from "next/font/google" // <-- Importação da fonte Poppins

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // <-- Pesos comuns para Poppins
  variable: "--font-poppins",
}) // <-- Carregamento da fonte Poppins

export const metadata = {
  title: "Pesquisa de Satisfação Academia Pakitos Dance",
  description: "Sua opinião é muito importante para nós! Ajude-nos a melhorar a Academia Pakitos Dance.",
    generator: 'v0.dev'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={poppins.variable}>{children}</body> {/* <-- Aplicação da fonte Poppins */}
    </html>
  )
}
