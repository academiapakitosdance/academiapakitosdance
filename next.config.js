/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",

  // ESTAS LINHAS SÃO CRUCIAIS E DEVEM CORRESPONDER AO NOME DO SEU REPOSITÓRIO
  basePath: "/academiapakitosdance",
  assetPrefix: "/academiapakitosdance/",

  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
