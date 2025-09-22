"use client"

import type React from "react"
import { useState } from "react"
import { CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { AlertTriangle, Users, Building2, Sparkles } from "lucide-react"

interface DashboardProps {
  onBack: () => void
}

export default function Dashboard({ onBack }: DashboardProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  // Dados da enquete de ATENDIMENTO (você pode atualizar manualmente aqui)
  const serviceData = [
    { option: "Excelente, até indicaria para uma pessoa", votes: 7, color: "bg-green-500" },
    { option: "Ótimo, excelente trabalho", votes: 6, color: "bg-blue-500" },
    { option: "Bom, mas daria para melhorar", votes: 1, color: "bg-yellow-500" },
    { option: "Ruim, precisa de melhora", votes: 0, color: "bg-red-500" },
  ]

  // Dados da enquete de INFRAESTRUTURA (você pode atualizar manualmente aqui)
  const infrastructureData = [
    { option: "Muito bonita, não precisa mudar nada!", votes: 9, color: "bg-green-500" },
    { option: "Boa, mas poderia ter alguns ajustes", votes: 5, color: "bg-blue-500" },
    { option: "Regular, precisa de melhorias em alguns pontos", votes: 0, color: "bg-yellow-500" },
    { option: "Ruim, precisa de uma reforma urgente", votes: 0, color: "bg-red-500" },
  ]

  // Dados da enquete de HIGIENE (você pode atualizar manualmente aqui)
  const hygieneData = [
    { option: "Sempre muito limpa, sem nada a reclamar!", votes: 13, color: "bg-green-500" },
    { option: "Limpeza boa, mas dá pra melhorar em alguns pontos", votes: 0, color: "bg-blue-500" },
    { option: "Às vezes deixa a desejar, precisa mais atenção", votes: 1, color: "bg-yellow-500" },
    { option: "Falta cuidado, limpeza é um problema sério aqui", votes: 0, color: "bg-red-500" },
  ]

  // Sugestões recebidas (você pode atualizar manualmente aqui)
  const suggestions = [
"Preciso voltar a treinar mais vezes",
"Espaço mais amplo, mais ventilação, mas e um lugar muito bom para treinos, irei indicar aos amigos",
"Mais equipamentos para panturrilha",
"Pra está tudo perfeitos",
"O espaço é curto, e eu sei disso, mas caso algum dia você queira comprar uma outra maquina, independente de qual for, aqui vai algumas sugestões: Remada High-row, Leg Press 180, Panturrila em pé, Supino sentado(aquele anilhado, que é pequeno, acredito q seria diferente este) e vejo bastante mulher pedindo máquinas de glúteos lkkkkkkkk, mas quero não 😎. Como falei é sugestão, sabendo que o espaço é curto, de resto esta tudo certo, parabéns pelo investimento 👏🏻👏🏻",
"Talvez mais uma barra e o “V” do puxador, pra deixar como “reserva”, tem um pessoal que leva para as polias e não trazem de volta.",
"Aumentar a quantidade de locais com pano e álcool gel para melhor higienizar os aparelhos, pois assim a pessoa que for fazer o exercício ela mesmo pode higieniza-lo",

  ]

  const totalServiceVotes = serviceData.reduce((sum, item) => sum + item.votes, 0)
  const totalInfrastructureVotes = infrastructureData.reduce((sum, item) => sum + item.votes, 0)
  const totalHygieneVotes = hygieneData.reduce((sum, item) => sum + item.votes, 0)

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
                className={`h-full ${item.color} transition-all duration-500 ease-out flex items-center justify-end pr-2`}
                style={{ width: `${percentage}%` }}
              >
                {percentage > 15 && <span className="text-white text-xs font-bold">{percentage.toFixed(1)}%</span>}
              </div>
            </div>
          </div>
        )
      })}

      <div className="bg-gray-50 rounded-xl p-3 border border-gray-300">
        <div className="text-center">
          <p className="text-sm font-bold text-gray-700">TOTAL DE VOTOS</p>
          <p className="text-2xl font-bold text-red-600">{totalVotes}</p>
        </div>
      </div>
    </div>
  )

  if (!isAuthenticated) {
    return (
      <CardContent className="p-8">
        <div className="text-center space-y-6">
          <h3 className="text-2xl font-bold text-red-600">🔒 Acesso Restrito</h3>
          <p className="text-gray-600">Digite a senha para acessar os resultados da enquete:</p>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <Label htmlFor="password" className="text-left block mb-2 font-semibold">
                Senha:
              </Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border-2 border-red-600 focus:border-red-700 focus:ring-red-600 rounded-xl h-12"
                placeholder="Digite a senha"
              />
              {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
            </div>

            <div className="space-y-3">
              <Button type="submit" className="w-full bg-red-600 text-white hover:bg-red-700 h-12 rounded-xl font-bold">
                Acessar Dashboard
              </Button>

              <Button
                type="button"
                onClick={onBack}
                className="w-full bg-gray-200 text-black hover:bg-gray-300 border-2 border-red-600 rounded-xl font-bold h-12"
              >
                Voltar
              </Button>
            </div>
          </form>
        </div>
      </CardContent>
    )
  }

  return (
    <CardContent className="p-8">
      <div className="space-y-6">
        {/* Aviso sobre atualização dos dados */}
        <div className="bg-yellow-50 border-2 border-yellow-400 rounded-xl p-4 flex items-start space-x-3">
          <AlertTriangle className="text-yellow-600 mt-0.5 flex-shrink-0" size={20} />
          <div>
            <h4 className="font-bold text-yellow-800 text-sm">AVISO IMPORTANTE</h4>
            <p className="text-yellow-700 text-sm mt-1">
              Os resultados apresentados não são atualizados em tempo real. As informações são processadas
              periodicamente e podem levar algum tempo para refletir as respostas mais recentes.
            </p>
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-bold text-red-600 mb-2">📊 Resultados da Enquete</h3>
        </div>

        {/* Gráfico de Atendimento */}
        <div className="bg-blue-50 rounded-xl p-4 border-2 border-blue-400">
          {renderChart(
            serviceData,
            totalServiceVotes,
            "AVALIAÇÃO DO ATENDIMENTO",
            <Users className="text-blue-600" size={20} />,
          )}
        </div>

        {/* Gráfico de Infraestrutura */}
        <div className="bg-green-50 rounded-xl p-4 border-2 border-green-400">
          {renderChart(
            infrastructureData,
            totalInfrastructureVotes,
            "AVALIAÇÃO DA INFRAESTRUTURA",
            <Building2 className="text-green-600" size={20} />,
          )}
        </div>

        {/* Gráfico de Higiene */}
        <div className="bg-cyan-50 rounded-xl p-4 border-2 border-cyan-400">
          {renderChart(
            hygieneData,
            totalHygieneVotes,
            "AVALIAÇÃO DA LIMPEZA E HIGIENE",
            <Sparkles className="text-cyan-600" size={20} />,
          )}
        </div>

        {/* Resumo Geral */}
        <div className="bg-red-50 rounded-xl p-4 border-2 border-red-400">
          <div className="text-center">
            <h4 className="text-lg font-bold text-red-800 mb-3">📈 RESUMO GERAL</h4>
            <div className="grid grid-cols-3 gap-3">
              <div className="bg-white rounded-lg p-3 border border-red-200">
                <p className="text-xs font-medium text-gray-600">Atendimento</p>
                <p className="text-xl font-bold text-red-600">{totalServiceVotes}</p>
                <p className="text-xs text-gray-500">votos</p>
              </div>
              <div className="bg-white rounded-lg p-3 border border-red-200">
                <p className="text-xs font-medium text-gray-600">Infraestrutura</p>
                <p className="text-xl font-bold text-red-600">{totalInfrastructureVotes}</p>
                <p className="text-xs text-gray-500">votos</p>
              </div>
              <div className="bg-white rounded-lg p-3 border border-red-200">
                <p className="text-xs font-medium text-gray-600">Higiene</p>
                <p className="text-xl font-bold text-red-600">{totalHygieneVotes}</p>
                <p className="text-xs text-gray-500">votos</p>
              </div>
            </div>
            <div className="mt-3 bg-white rounded-lg p-3 border border-red-200">
              <p className="text-sm font-medium text-gray-600">Total Geral</p>
              <p className="text-3xl font-bold text-red-600">
                {totalServiceVotes + totalInfrastructureVotes + totalHygieneVotes}
              </p>
              <p className="text-xs text-gray-500">participações</p>
            </div>
          </div>
        </div>

        {/* Seção de Sugestões */}
        <div className="bg-purple-50 rounded-xl p-4 border-2 border-purple-400">
          <h4 className="text-lg font-bold text-purple-800 mb-4 text-center">💡 SUGESTÕES RECEBIDAS</h4>
          <div className="space-y-3 max-h-60 overflow-y-auto">
            {suggestions.length > 0 ? (
              suggestions.map((suggestion, index) => (
                <div key={index} className="bg-white rounded-lg p-3 border border-purple-200 shadow-sm">
                  <p className="text-gray-700 text-sm leading-relaxed">"{suggestion}"</p>
                </div>
              ))
            ) : (
              <p className="text-purple-600 text-center italic">Nenhuma sugestão recebida ainda.</p>
            )}
          </div>
          {suggestions.length > 0 && (
            <div className="mt-3 text-center">
              <p className="text-purple-600 text-sm font-medium">Total de sugestões: {suggestions.length}</p>
            </div>
          )}
        </div>

        <Button
          onClick={onBack}
          className="w-full bg-gray-200 text-black hover:bg-gray-300 border-2 border-red-600 rounded-xl font-bold h-12"
        >
          Voltar ao Início
        </Button>
      </div>
    </CardContent>
  )
}
