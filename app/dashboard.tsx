"use client"

import type React from "react"
import { useState } from "react"
import { CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { AlertTriangle, Users, Building2 } from "lucide-react"

interface DashboardProps {
  onBack: () => void
}

export default function Dashboard({ onBack }: DashboardProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  // Atendimento
  const serviceData = [
    { option: "Excelente, até indicaria para uma pessoa", votes: 25, color: "bg-green-500" },
    { option: "Ótimo, excelente trabalho", votes: 15, color: "bg-blue-500" },
    { option: "Bom, mas daria para melhorar", votes: 2, color: "bg-yellow-500" },
    { option: "Ruim, precisa de melhora", votes: 0, color: "bg-red-500" },
  ]

  // Infraestrutura
  const infrastructureData = [
    { option: "Muito bonita, não precisa mudar nada!", votes: 20, color: "bg-green-500" },
    { option: "Boa, mas poderia ter alguns ajustes", votes: 21, color: "bg-blue-500" },
    { option: "Regular, precisa de melhorias em alguns pontos", votes: 0, color: "bg-yellow-500" },
    { option: "Ruim, precisa de uma reforma urgente", votes: 0, color: "bg-red-500" },
  ]

  const suggestions = [
"Muitas pessoas treinando nos mesmos equipamentos ao mesmo tempo",
"Colocar mais chão de borracha",
"🤠🥇🧃",
"Para mim está tudo ótimo",
"Sem sugestão",
"acho q poderia melhorar um pouco mais a ventilação",
"Não precisa mudar",
"Está ótima ☺️",
"Ventilação precisara ser mudada..ou outros climatizadores...pois estamos em um momento bem crítico de calor daí o treino acaba ficando exaustivo",
"Cada equipamento poderia ser identificada com nome com uma plaquinha de identificação.",
"Colchonetes, atualizar play list e melhorar ventilação.",
"Ar condicionado seria ideial kkk",
"Ja que sou da academia,pedi para um amigo meu de maringa que veio aqui por esses dias, alguma sugestao, disse que principalmente a ventilação que é precaria, precisa de ajuste urgente! Ele também 2 ideias para costas, porque nao temos um exercicio especifico para lombar, aquele banco que trabalha a lombar, n sei o nome kkkkk, e uma remada em T, disse que isso fecharia mto em questao do que falta, entao essa é minha sugestao",
"Pedir pro matheus leite gemer menos 🤣🤣🤣🤣🤣",
"Pede pro matheus gemer só quando agarram ele com força no agachamento",
"Danone 💉 e creatina de graça para fiéis",
"Acho que temos que fazer mais coisas diferentes em datas especiais, vejo as outras academias se movimentando com o publico em geral, não só com homem ou mulher",
"Melhora o brinde pq o das outras foram melhor, vou mudar pra la pegar brinde e volto 😝💪🏻",
"Vender suplementos,eu acredito que aumentaria ainda mais,a credibilidade da academia.",
"Climatização do local",
"Somente o calor que e demais, (e uma coisa que não temos MT oq fzr) mas fora isso não tenho nada a reclamar",
"Investimento no futuro em pintura e iluminação",
]

  const totalServiceVotes = serviceData.reduce((sum, item) => sum + item.votes, 0)
  const totalInfrastructureVotes = infrastructureData.reduce((sum, item) => sum + item.votes, 0)

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (password === "adminpakitos") {
      setIsAuthenticated(true)
      setError("")
    } else {
      setError("Senha incorreta!")
    }
  }

  const renderChart = (data: any[], totalVotes: number, title: string, icon: React.ReactNode) => (
    <div className="space-y-4">
      <div className="text-center flex items-center justify-center space-x-2">
        {icon}
        <h4 className="text-lg font-bold text-gray-800">{title}</h4>
      </div>

      {data.map((item, index) => {
        const percentage = totalVotes > 0 ? (item.votes / totalVotes) * 100 : 0

        return (
          <div key={index} className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-gray-700 flex-1 pr-2">{item.option}</span>
              <div className="flex items-center space-x-2 text-sm font-bold">
                <span className="text-gray-600">{item.votes} votos</span>
                <span className="text-red-600">{percentage.toFixed(1)}%</span>
              </div>
            </div>

            <div className="w-full bg-gray-200 rounded-full h-6 overflow-hidden">
              <div
                className={`h-full ${item.color}`}
                style={{ width: `${percentage}%` }}
              />
            </div>
          </div>
        )
      })}
    </div>
  )

  // 🔒 TELA DE LOGIN
  if (!isAuthenticated) {
    return (
      <CardContent className="p-8">
        <div className="text-center space-y-6">
          <h3 className="text-2xl font-bold text-red-600">🔒 Acesso Restrito</h3>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <Label htmlFor="password">Senha</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {error && <p className="text-red-500 text-sm">{error}</p>}
            </div>

            <Button type="submit" className="w-full bg-red-600 text-white">
              Acessar
            </Button>

            <Button type="button" onClick={onBack} className="w-full">
              Voltar
            </Button>
          </form>
        </div>
      </CardContent>
    )
  }

  // 📊 DASHBOARD
  return (
    <CardContent className="p-8 space-y-6">
      <div className="bg-blue-50 p-4 rounded-xl border-2 border-blue-400">
        {renderChart(serviceData, totalServiceVotes, "AVALIAÇÃO DO ATENDIMENTO", <Users size={20} />)}
      </div>

      <div className="bg-green-50 p-4 rounded-xl border-2 border-green-400">
        {renderChart(
          infrastructureData,
          totalInfrastructureVotes,
          "AVALIAÇÃO DA INFRAESTRUTURA",
          <Building2 size={20} />,
        )}
      </div>

      <div className="bg-yellow-50 p-4 rounded-xl border-2 border-yellow-400 flex items-start gap-2">
        <AlertTriangle size={18} />
        <p className="text-sm">
          Resultados não são atualizados em tempo real.
        </p>
      </div>

      {/* 💡 SUGESTÕES RECEBIDAS */}
<div className="bg-purple-50 rounded-xl p-4 border-2 border-purple-400">
  <h4 className="text-lg font-bold text-purple-800 mb-4 text-center">
    💡 SUGESTÕES RECEBIDAS
  </h4>

  <div className="space-y-3 max-h-60 overflow-y-auto">
    {suggestions.length > 0 ? (
      suggestions.map((suggestion, index) => (
        <div
          key={index}
          className="bg-white rounded-lg p-3 border border-purple-200 shadow-sm"
        >
          <p className="text-gray-700 text-sm leading-relaxed">
            "{suggestion}"
          </p>
        </div>
      ))
    ) : (
      <p className="text-purple-600 text-center italic">
        Nenhuma sugestão cadastrada.
      </p>
    )}
  </div>

  <div className="mt-3 text-center">
    <p className="text-purple-600 text-sm font-medium">
      Total de sugestões: {suggestions.length}
    </p>
  </div>
</div>

      <Button onClick={onBack} className="w-full">
        Voltar ao início
      </Button>
    </CardContent>
  )
}
