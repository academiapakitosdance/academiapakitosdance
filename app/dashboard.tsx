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
    { option: "Excelente, até indicaria para uma pessoa", votes: 17, color: "bg-green-500" },
    { option: "Ótimo, excelente trabalho", votes: 12, color: "bg-blue-500" },
    { option: "Bom, mas daria para melhorar", votes: 0, color: "bg-yellow-500" },
    { option: "Ruim, precisa de melhora", votes: 0, color: "bg-red-500" },
  ]

  // Infraestrutura
  const infrastructureData = [
    { option: "Muito bonita, não precisa mudar nada!", votes: 25, color: "bg-green-500" },
    { option: "Boa, mas poderia ter alguns ajustes", votes: 4, color: "bg-blue-500" },
    { option: "Regular, precisa de melhorias em alguns pontos", votes: 0, color: "bg-yellow-500" },
    { option: "Ruim, precisa de uma reforma urgente", votes: 0, color: "bg-red-500" },
  ]

  const suggestions = [
"Só elogios",
"Ótima infraestrutura, ótimos profissionais.",
"Ótima academia ,ótimos professores estão de parabéns",
"Nada a reclamar só elogiar mesmo o excelente trabalho de vcs professores e paciência com a gente….",
"Excelentes profissionais. Muito atenciosos.",
"Academia muito bem equipada , atendimento maravilhoso, sempre me tiram dúvida e são solícitos, academia espaçosa , aparelhos de qualidade , cada dia melhor",
"Perfeitaaaa",
"Todos atendem a gente como eu esperava, Todos se preocupam com nós fznd os exercícios. Muito boa a estrutura principalmente todos os instrutores que estão ali dentro. Nota 10 para academia e principalmente para o Alisson que se preocupa sempre com todos",
"Ter mais esteiras e bicicletas . Os professores são todos excelentes, Alisson vc é nota 1000.",
"Só tenho elogios! A academia tem uma estrutura muito boa, mas o grande diferencial é o professor Alison, extremamente atencioso, dedicado e realmente se preocupa com a evolução de cada aluno.",
"Tudo perfeito!!!",
"Está ótima",
"Topp",
"So tenho elogios, professor nota 10 , os meninos super atenciosos !! Super satisfeita 👏🙌",
"Super indico academia está uma maravilha bem geladinha",
"Super indico os profs são bem atenciosos a academia está mais fresca",
"Não tenho nada a reclamar, inclusive faço propaganda para todos que conheço kkkk Instrutores ótimos e atenciosos, organização ok, só elogios !",
"Atendimento perfeito, professores atenciosos e prestativos",
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
