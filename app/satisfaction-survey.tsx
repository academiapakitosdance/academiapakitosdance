"use client"

import type React from "react"
import { useState } from "react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Textarea from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Shield, Users, Building2, Eye, Instagram, Calculator } from "lucide-react"
import Dashboard from "./dashboard"

export default function SatisfactionSurvey() {
  const [currentScreen, setCurrentScreen] = useState<"welcome" | "survey" | "submitted" | "dashboard">("welcome")
  const [serviceRating, setServiceRating] = useState("")
  const [infrastructureRating, setInfrastructureRating] = useState("")
  const [suggestion, setSuggestion] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!serviceRating || !infrastructureRating) {
      alert("Por favor, responda todas as perguntas obrigatórias antes de enviar.")
      return
    }

    setIsSubmitting(true)

    const formData = new FormData(event.currentTarget)

    try {
      const response = await fetch("https://formsubmit.co/ajax/academiapakitosdance@gmail.com", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      })

      if (response.ok) {
        setCurrentScreen("submitted")
        setServiceRating("")
        setInfrastructureRating("")
        setSuggestion("")
      } else {
        alert("Ocorreu um erro ao enviar sua pesquisa. Por favor, tente novamente.")
        console.error("Erro ao enviar formulário:", response.statusText)
      }
    } catch (error) {
      alert("Ocorreu um erro de rede. Por favor, verifique sua conexão e tente novamente.")
      console.error("Erro de rede:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleBackToWelcome = () => {
    setCurrentScreen("welcome")
  }

  const renderWelcomeScreen = () => (
    <CardContent className="p-8 pt-0">
      <div className="space-y-6">
        <div className="text-center space-y-4">
          <h3 className="text-2xl font-bold text-red-600">Como Funciona Nossa Pesquisa</h3>
          <div className="bg-gray-50 rounded-xl p-6 border-2 border-red-600 space-y-4">
            <div className="flex items-start space-x-3">
              <Shield className="text-red-600 mt-1 flex-shrink-0" size={20} />
              <div className="text-left">
                <h4 className="font-bold text-red-600 text-sm">TOTAL ANONIMATO</h4>
                <p className="text-gray-700 text-sm mt-1">
                  Sua participação é completamente anônima. Não coletamos nenhum dado pessoal, IP ou informação que
                  possa identificá-lo.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <Users className="text-red-600 mt-1 flex-shrink-0" size={20} />
              <div className="text-left">
                <h4 className="font-bold text-red-600 text-sm">AVALIAÇÕES DISPONÍVEIS</h4>
                <p className="text-gray-700 text-sm mt-1">
                  Você poderá avaliar dois aspectos: <strong>Atendimento</strong> (qualidade do serviço prestado) e{" "}
                  <strong>Infraestrutura</strong> (equipamentos, organização). Temos também o campo de{" "}
                  <strong>Sugestões para 2026</strong>, um campo opcional, mas que gostaríamos de saber sua opinião.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <Eye className="text-red-600 mt-1 flex-shrink-0" size={20} />
              <div className="text-left">
                <h4 className="font-bold text-red-600 text-sm">ACESSO ÀS SUGESTÕES</h4>
                <p className="text-gray-700 text-sm mt-1">
                  Apenas o desenvolvedor do sistema e o Alison têm acesso às sugestões enviadas. Todas as informações
                  são tratadas com total confidencialidade.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <Building2 className="text-red-600 mt-1 flex-shrink-0" size={20} />
              <div className="text-left">
                <h4 className="font-bold text-red-600 text-sm">OBJETIVO</h4>
                <p className="text-gray-700 text-sm mt-1">
                  Seu feedback nos ajuda a melhorar continuamente nossos serviços e instalações para oferecer a melhor
                  experiência possível.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <Button
            onClick={() => setCurrentScreen("dashboard")}
            className="w-full bg-gray-100 text-gray-700 hover:bg-gray-200 border-2 border-red-600 h-12 rounded-xl font-bold text-lg transition-all duration-200"
          >
            🔒 Acesso Restrito
          </Button>

          <Button
            onClick={() => setCurrentScreen("survey")}
            className="w-full bg-red-600 text-white hover:bg-red-700 focus:ring-red-600 h-12 rounded-xl font-bold text-lg transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Iniciar Pesquisa
          </Button>
        </div>
      </div>
    </CardContent>
  )

  const renderSurveyScreen = () => (
    <CardContent className="p-8 pt-0">
      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="grid gap-3">
          <Label htmlFor="serviceRating" className="text-lg font-semibold text-gray-800">
            Como você avalia o atendimento da academia? *
          </Label>
          <Select value={serviceRating} onValueChange={setServiceRating} name="serviceRating">
            <SelectTrigger
              id="serviceRating"
              className="border-2 border-red-600 focus:border-red-700 focus:ring-red-600 rounded-xl h-12 font-medium"
            >
              <SelectValue placeholder="Selecione sua avaliação" />
            </SelectTrigger>
            <SelectContent className="border-2 border-red-600 rounded-xl">
              <SelectItem value="excelente-indicaria" className="font-medium">
                Excelente, até indicaria para uma pessoa.
              </SelectItem>
              <SelectItem value="otimo-trabalho" className="font-medium">
                Ótimo, excelente trabalho.
              </SelectItem>
              <SelectItem value="bom-melhorar" className="font-medium">
                Bom, mas daria para melhorar.
              </SelectItem>
              <SelectItem value="ruim-precisa-melhora" className="font-medium">
                Ruim, precisa de melhora.
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid gap-3">
          <Label htmlFor="infrastructureRating" className="text-lg font-semibold text-gray-800">
            Como você avalia a infraestrutura da nossa academia? *
          </Label>
          <p className="text-sm text-gray-600 -mt-2">
            (Considere itens como organização, equipamentos, salas e ambiente em geral.)
          </p>
          <Select value={infrastructureRating} onValueChange={setInfrastructureRating} name="infrastructureRating">
            <SelectTrigger
              id="infrastructureRating"
              className="border-2 border-red-600 focus:border-red-700 focus:ring-red-600 rounded-xl h-12 font-medium"
            >
              <SelectValue placeholder="Selecione sua avaliação" />
            </SelectTrigger>
            <SelectContent className="border-2 border-red-600 rounded-xl">
              <SelectItem value="muito-bonita-nao-mudar" className="font-medium">
                Muito bonita, não precisa mudar nada!
              </SelectItem>
              <SelectItem value="boa-alguns-ajustes" className="font-medium">
                Boa, mas poderia ter alguns ajustes.
              </SelectItem>
              <SelectItem value="regular-precisa-melhorias" className="font-medium">
                Regular, precisa de melhorias em alguns pontos.
              </SelectItem>
              <SelectItem value="ruim-reforma-urgente" className="font-medium">
                Ruim, precisa de uma reforma urgente.
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid gap-3">
          <Label htmlFor="suggestion" className="text-lg font-semibold text-gray-800">
            Qual é sua sugestão para nossa academia em 2026?
          </Label>
          <Textarea
            id="suggestion"
            placeholder="Sua sugestão aqui..."
            value={suggestion}
            onChange={(e) => setSuggestion(e.target.value)}
            className="min-h-[120px] border-2 border-red-600 focus:border-red-700 focus:ring-red-600 rounded-xl font-medium resize-none"
            name="suggestion"
          />
        </div>

        <div className="space-y-4">
          <Button
            type="submit"
            className="w-full bg-red-600 text-white hover:bg-red-700 focus:ring-red-600 h-12 rounded-xl font-bold text-lg transition-all duration-200 shadow-lg hover:shadow-xl"
            disabled={isSubmitting || !serviceRating || !infrastructureRating}
          >
            {isSubmitting ? "Enviando..." : "Enviar Avaliação"}
          </Button>

          <Button
            type="button"
            onClick={handleBackToWelcome}
            className="w-full bg-gray-200 text-black hover:bg-gray-300 border-2 border-red-600 h-12 rounded-xl font-bold text-lg transition-all duration-200"
          >
            Voltar
          </Button>
        </div>
      </form>
    </CardContent>
  )

  const renderSubmittedScreen = () => (
    <CardContent className="p-8 pt-0">
      <div className="text-center space-y-6">
        <h3 className="text-3xl font-bold text-red-600 mb-6">Obrigado por sua colaboração!</h3>
        <div className="space-y-4 text-gray-800 leading-relaxed">
          <p className="font-medium">
            Sua opinião é essencial para que possamos evoluir e oferecer sempre o melhor para você.
          </p>
          <p className="font-medium">
            Agradecemos por dedicar um momento do seu dia para responder à nossa pesquisa de satisfação. É através do
            seu feedback que conseguimos melhorar nossos serviços, ambientes e atendimentos, criando uma experiência
            cada vez mais positiva dentro da academia.
          </p>
          <p className="font-medium">
            Continue firme nos seus treinos! Estamos aqui para te apoiar em cada etapa da sua jornada, ajudando você a
            alcançar seus objetivos com saúde, motivação e constância.
          </p>
          <p className="font-medium">Conte sempre com a nossa equipe!</p>
          <p className="font-bold text-lg">Juntos somos mais fortes! 💪</p>
        </div>
      </div>
    </CardContent>
  )

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4 bg-black">
      <Card className="w-full max-w-md rounded-2xl border-2 border-red-600 bg-white text-black shadow-2xl shadow-red-600/20">
        <CardHeader className="flex flex-col items-center space-y-6 p-8">
         <div className="inline-block rounded-xl border-3 border-red-600 shadow-lg shadow-red-600/30 overflow-hidden bg-white">
            <img
    src="/logo/pakitos-logo.png"
    alt="Academia Pakitos Dance Logo"
    className="block w-[280px] h-[120px] object-contain p-4"
  />
</div>

          {currentScreen === "welcome" && (
            <CardTitle className="text-3xl font-bold text-red-600 tracking-tight">PESQUISA DE SATISFAÇÃO</CardTitle>
          )}

          {currentScreen === "survey" && (
            <>
              <CardTitle className="text-3xl font-bold text-red-600 tracking-tight">AVALIE NOSSO SERVIÇO</CardTitle>
              <div className="text-center mt-4 max-w-sm">
                <p className="text-gray-700 text-base leading-relaxed font-medium">
                  Sua opinião é muito importante para nós! Por favor, dedique alguns minutos para responder às perguntas
                  abaixo e nos ajudar a melhorar a{" "}
                  <span className="font-bold text-red-600">Academia Pakitos Dance</span>.
                </p>
              </div>
            </>
          )}
        </CardHeader>

        {currentScreen === "dashboard" ? (
          <Dashboard onBack={handleBackToWelcome} />
        ) : currentScreen === "welcome" ? (
          renderWelcomeScreen()
        ) : currentScreen === "survey" ? (
          renderSurveyScreen()
        ) : (
          renderSubmittedScreen()
        )}

        {currentScreen === "submitted" && (
          <CardFooter className="flex justify-center p-8 pt-0">
            <Button
              onClick={handleBackToWelcome}
              className="bg-gray-200 text-black hover:bg-gray-300 border-2 border-red-600 rounded-xl font-bold px-8 py-3"
            >
              Voltar ao início
            </Button>
          </CardFooter>
        )}
      </Card>

      {/* Footer com copyright e contatos */}
      <div className="mt-6 text-center space-y-3">
        {/* Copyright */}
        <div>
          <p className="text-gray-400 text-xs">
            Copyright © 2025 - <span className="text-gray-300 font-medium">Rafael Nunes Gasperini</span>
          </p>
        </div>

        {/* Links */}
        <div className="bg-gray-800 rounded-lg px-4 py-3 space-y-2">
          <div className="flex items-center justify-center space-x-4">
            {/* Instagram Academia */}
            <a
              href="https://www.instagram.com/academiapakitosdance/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-300 hover:text-pink-400 transition-colors duration-200"
            >
              <Instagram size={16} />
              <span className="text-xs font-medium">Academia Pakitos Dance</span>
            </a>

            {/* Calculadora */}
            <a
              href="https://apppakitosdance.github.io/pakitos-dance/?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnR2erp95R6XDxAOhKKwl8mt22-UfB5dY4L9_IUp3BXVVZ37sg5br8dEA1pxs_aem_nlxw1kEYQkKOrOKrkYkBWA"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-300 hover:text-blue-400 transition-colors duration-200"
            >
              <Calculator size={16} />
              <span className="text-xs font-medium">Calculadora Pakitos Dance</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
