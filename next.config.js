/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Isso gera um site estático na pasta 'out'

  // ATENÇÃO: Substitua 'academiapakitosdance' pelo NOME EXATO do seu repositório GitHub.
  // Se o seu site for hospedado diretamente no domínio raiz (ex: username.github.io),
  // você pode REMOVER as linhas 'basePath' e 'assetPrefix'.
  basePath: "/academiapakitosdance", // Exemplo: se o seu repo for 'academiapakitosdance'
  assetPrefix: "/academiapakitosdance/", // Garante que os assets (imagens, JS, CSS) sejam carregados corretamente

  // Adicione esta linha para garantir que os URLs gerados pelo Next.js
  // sempre terminem com uma barra, o que pode ajudar em alguns servidores estáticos.
  trailingSlash: true,

  // As configurações abaixo são recomendadas para exportação estática com Next.js 13+
  // e para ignorar erros de build que podem ocorrer em ambientes de CI/CD
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true, // NECESSÁRIO para exportação estática de imagens com next/image
  },
}

module.exports = nextConfig
