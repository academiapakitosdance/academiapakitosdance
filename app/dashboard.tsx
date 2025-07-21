"use client"

import type React from "react"
import { useState } from "react"
import { CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface DashboardProps {
  onBack: () => void
}

export default function Dashboard({ onBack }: DashboardProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  // Dados da enquete (você pode atualizar manualmente aqui)
  const surveyData = [
    { option: "Excelente, até indicaria para uma pessoa", votes: 15, color: "bg-green-500" },
    { option: "Ótimo, excelente trabalho", votes: 10, color: "bg-blue-500" },
    { option: "Bom, mas daria para melhorar", votes: 0, color: "bg-yellow-500" },
    { option: "Ruim, precisa de melhora", votes: 0, color: "bg-red-500" },
  ]

  const totalVotes = surveyData.reduce((sum, item) => sum + item.votes, 0)

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (password === "adminpakitos") {
      setIsAuthenticated(true)
      setError("")
    } else {
      setError("Senha incorreta!")
    }
  }

  if (!isAuthenticated) {
    return (
      <CardContent className="p-8">
        <div className="text-center space-y-6">
          <h3 className="text-2xl font-bold text-red-600">Acesso Restrito</h3>
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
        <div className="text-center">
          <h3 className="text-2xl font-bold text-red-600 mb-2">Resultados da Enquete</h3>
          <p className="text-gray-600 font-medium">Como você avalia o atendimento da academia?</p>
        </div>

        <div className="space-y-4">
          {surveyData.map((item, index) => {
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
        </div>

        <div className="bg-gray-50 rounded-xl p-4 border-2 border-red-600">
          <div className="text-center">
            <p className="text-lg font-bold text-gray-800">VOTOS TOTAIS</p>
            <p className="text-3xl font-bold text-red-600">{totalVotes}</p>
          </div>
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
