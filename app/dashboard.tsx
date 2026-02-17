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
    { option: "Excelente, até indicaria para uma pessoa", votes: 15, color: "bg-green-500" },
    { option: "Ótimo, excelente trabalho", votes: 9, color: "bg-blue-500" },
    { option: "Bom, mas daria para melhorar", votes: 3, color: "bg-yellow-500" },
    { option: "Ruim, precisa de melhora", votes: 0, color: "bg-red-500" },
  ]

  // Infraestrutura
  const infrastructureData = [
    { option: "Muito bonita, não precisa mudar nada!", votes: 18, color: "bg-green-500" },
    { option: "Boa, mas poderia ter alguns ajustes", votes: 9, color: "bg-blue-500" },
    { option: "Regular, precisa de melhorias em alguns pontos", votes: 0, color: "bg-yellow-500" },
    { option: "Ruim, precisa de uma reforma urgente", votes: 0, color: "bg-red-500" },
  ]

  const suggestions = [
"Tá tudo certo",
"Nada a reclamar, somente do calor, mas isso e uma coisa inevitável, tudo ótimo fora isso",
"climatização a melhorar",
"Parabéns estrutores muito atenciosos",
"Uma sugestão colocar a chicletes a venda e comprar o terreno do lado kkk",
"elogios: alison e sua equipe extremamente atenciosos e prestativos! academia com nítido investimento por parte do alison, dedicação admirável! sugestão: sugiro que por conta dos pesos que caem e o atrito com o chão da academia, um piso vinílico seria uma opção válida! a estética ficaria belíssima, aparência de sempre limpa e sem gastos com manutenções por quebra de azulejos.",
"Ótimo atendimento",
"Por mim top, atendimento , explicação, atenção sempre que precisar nota 10 a todos os professores pois não tem acepção de alunos e sim atende todos iguais parabéns continuem assim",
"Excelentes! Sugiro mudar a playlist das músicas, acaba ficando repetitivo e acredito que isso influencia no nosso ânimo rs... ou faça uma playlist colaborativa.. no mais está ótimo demais",
"Academia muito completa, não economizam em equipamentos, é a mais completa da cidade. Horário de funcionamento legal, preço acessível e o lugar é bem cuidado.",
"Acho que deveria ter catraca ou algum tipo de segurança",
"Muito boa, profissionais muito qualificados, aparelhos sempre sob observação e equipamentos para vários tipos de idade.",
"C. Melhorar estraga vcs estão de parabéns",
"Professores super profissionais antciosos nota 1000",
"A academia está muito bonita, sempre progredindo e servindo bem a todos os matrículados. Mais na minha opinião os pisos seria uma boa serem trocados! Fora isso o lugar n há mais nada pra falar.",
"Muito bom, equipamentos d última qualidade, ótimo atendimento",
"Muito boa a academia inteira ótimos aparelhos poderia por umas playlist eletrônica ou da uma diversificada nas músicas do resto estão de parabéns",
"Uma sugestão seria comprar máquinas diferentes ex: t-bar, banco romano. Entre outros",





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
