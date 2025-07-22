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

  // Dados da enquete de ATENDIMENTO (você pode atualizar manualmente aqui)
  const serviceData = [
    { option: "Excelente, até indicaria para uma pessoa", votes: 17, color: "bg-green-500" },
    { option: "Ótimo, excelente trabalho", votes: 10, color: "bg-blue-500" },
    { option: "Bom, mas daria para melhorar", votes: 6, color: "bg-yellow-500" },
    { option: "Ruim, precisa de melhora", votes: 0, color: "bg-red-500" },
  ]

  // Dados da enquete de INFRAESTRUTURA (você pode atualizar manualmente aqui)
  const infrastructureData = [
    { option: "Muito bonita, não precisa mudar nada!", votes: 0, color: "bg-green-500" },
    { option: "Boa, mas poderia ter alguns ajustes", votes: 0, color: "bg-blue-500" },
    { option: "Regular, precisa de melhorias em alguns pontos", votes: 0, color: "bg-yellow-500" },
    { option: "Ruim, precisa de uma reforma urgente", votes: 0, color: "bg-red-500" },
  ]

  // Sugestões recebidas (você pode atualizar manualmente aqui)
  const suggestions = [
    "Disponibilização de mais alteres e mais algumas máquinas",
    "Pra mim está tudo ótimo. os professores são notas mil.",
    "Mais máquinas e um espaço mais grande com solo emborrachado para fazer levantamento terra e outros.",
    "Máquinas novas.",
    "Mr Olympia na academia, com o prêmio drogas anabolizantes, agradeço desde já!",
    "Se possível o aumento do álcool 70",
    "Distribuir dose de whey",
    "Mais halteres, mais barras de ferro, mais cordas e mais anilhas.",
    "Trazer uma polia grande.",
    "Comprar barras montadas",
    "Talvez dividir os instrutores por “regiões” da academia. Muitas vezes quando Alisson não está eles ficam conversando entre si e não atendem de forma ampla todo espaço, fazendo com que muitas pessoas tenham que ir atrás deles, muitos adolescentes sentem vergonha e isso acaba dificultando o treino.",
    "Tudo perfeito.",
    "Acho uma ótima academia, bem completa, ótimo atendimento, e de ótimo valor",
    "tirar o buzetti",
    "Contratar o Matheus Gali",
    "Contratar o matheus galli",
    "Contratar o Matheus Galli",
    "Melhorar a ventilação da academia, muito quente",
    "Uma bicicleta nova, mais uma ajudaria a conter o pessoal fazendo cardio",
    "Gosto muito da academia, mas os instrutores as vezes deixam a desejar, pois as vezes nao ajudam, ficam em grupinho conversando, faltando com profissionalismo",
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

        {/* Resumo Geral */}
        <div className="bg-red-50 rounded-xl p-4 border-2 border-red-400">
          <div className="text-center">
            <h4 className="text-lg font-bold text-red-800 mb-3">📈 RESUMO GERAL</h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-lg p-3 border border-red-200">
                <p className="text-sm font-medium text-gray-600">Atendimento</p>
                <p className="text-2xl font-bold text-red-600">{totalServiceVotes}</p>
                <p className="text-xs text-gray-500">votos</p>
              </div>
              <div className="bg-white rounded-lg p-3 border border-red-200">
                <p className="text-sm font-medium text-gray-600">Infraestrutura</p>
                <p className="text-2xl font-bold text-red-600">{totalInfrastructureVotes}</p>
                <p className="text-xs text-gray-500">votos</p>
              </div>
            </div>
            <div className="mt-3 bg-white rounded-lg p-3 border border-red-200">
              <p className="text-sm font-medium text-gray-600">Total Geral</p>
              <p className="text-3xl font-bold text-red-600">{totalServiceVotes + totalInfrastructureVotes}</p>
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
