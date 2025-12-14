import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-inter",
})

export const metadata = {
  title: "Academia Pakitos Dance - Pesquisa de Satisfação",
  description:
    "Sua opinião é muito importante para nós! Ajude-nos a melhorar a Academia Pakitos Dance com sua avaliação.",
  generator: "v0.dev",
  icons: {
    icon: "/images/files-blob-academiapakitosdance-main-public-logo-pakitos-dance-logo.png",
    shortcut: "/images/files-blob-academiapakitosdance-main-public-logo-pakitos-dance-logo.png",
    apple: "/images/files-blob-academiapakitosdance-main-public-logo-pakitos-dance-logo.png",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <link
          rel="icon"
          href="/images/files-blob-academiapakitosdance-main-public-logo-pakitos-dance-logo.png"
          type="image/png"
        />
        <link
          rel="shortcut icon"
          href="/images/files-blob-academiapakitosdance-main-public-logo-pakitos-dance-logo.png"
          type="image/png"
        />
        <link
          rel="apple-touch-icon"
          href="/images/files-blob-academiapakitosdance-main-public-logo-pakitos-dance-logo.png"
        />
        <meta name="theme-color" content="#dc2626" />
      </head>
      <body className={inter.variable}>{children}</body>
    </html>
  )
}
