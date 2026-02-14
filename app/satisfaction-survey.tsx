"use client"

import { useState } from "react"

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { Instagram } from "lucide-react"

export default function SatisfactionSurvey() {
  const [currentScreen, setCurrentScreen] = useState<
    "welcome" | "survey" | "submitted" | "dashboard"
  >("welcome")

  const [serviceRating, setServiceRating] = useState("")
  const [infrastructureRating, setInfrastructureRating] = useState("")
  const [suggestion, setSuggestion] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  // ===============================
  // SUBMIT
  // ===============================
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    setIsSubmitting(true)

    const formData = new FormData(event.currentTarget)

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/academiapakitosdance@gmail.com",
        {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json",
          },
        }
      )

      if (response.ok) {
        setCurrentScreen("submitted")
      } else {
        alert("Erro ao enviar formulário.")
      }
    } catch (error) {
      console.error(error)
      alert("Erro de conexão.")
    } finally {
      setIsSubmitting(false)
    }
  }

  function handleBackToWelcome() {
    setCurrentScreen("welcome")

    setServiceRating("")
    setInfrastructureRating("")
    setSuggestion("")
  }

  // ===============================
  // TELAS
  // ===============================
  const renderWelcomeScreen = () => (
    <CardContent className="p-8 text-center">
      <Button
        onClick={() => setCurrentScreen("survey")}
        className="bg-red-600 text-white font-bold px-8 py-4 rounded-xl"
      >
        Iniciar Pesquisa
      </Button>
    </CardContent>
  )

  const renderSurveyScreen = () => (
    <CardContent className="p-8 pt-0">
      <form
        onSubmit={handleSubmit}
        method="POST"
        className="space-y-8"
      >
        <input type="hidden" name="_captcha" value="false" />

        {/* Atendimento */}
        <div className="grid gap-3">
          <Label>Atendimento</Label>

          <Select
            value={serviceRating}
            onValueChange={setServiceRating}
            name="serviceRating"
          >
            <SelectTrigger>
              <SelectValue placeholder="Selecione" />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value="Excelente">Excelente</SelectItem>
              <SelectItem value="Bom">Bom</SelectItem>
              <SelectItem value="Regular">Regular</SelectItem>
              <SelectItem value="Ruim">Ruim</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Infra */}
        <div className="grid gap-3">
          <Label>Infraestrutura</Label>

          <Select
            value={infrastructureRating}
            onValueChange={setInfrastructureRating}
            name="infrastructureRating"
          >
            <SelectTrigger>
              <SelectValue placeholder="Selecione" />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value="Muito boa">Muito boa</SelectItem>
              <SelectItem value="Boa">Boa</SelectItem>
              <SelectItem value="Regular">Regular</SelectItem>
              <SelectItem value="Ruim">Ruim</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Sugestão */}
        <div className="grid gap-3">
          <Label>Sugestões</Label>

          <Textarea
            name="suggestion"
            value={suggestion}
            onChange={(e) => setSuggestion(e.target.value)}
          />
        </div>

        {/* Botão */}
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-red-600 text-white"
        >
          {isSubmitting ? "Enviando..." : "Enviar"}
        </Button>
      </form>
    </CardContent>
  )

  const renderSubmittedScreen = () => (
    <CardContent className="p-8 text-center">
      <h2 className="text-2xl font-bold text-green-600">
        Enviado com sucesso!
      </h2>
    </CardContent>
  )

  // ===============================
  // MAIN
  // ===============================
  return (
    <div className="flex min-h-screen items-center justify-center bg-black p-4">
      <Card className="w-full max-w-md bg-white border-red-600 border-2">

        <CardHeader className="text-center">
          <CardTitle className="text-red-600">
            Pesquisa de Satisfação
          </CardTitle>
        </CardHeader>

        {currentScreen === "welcome" && renderWelcomeScreen()}
        {currentScreen === "survey" && renderSurveyScreen()}
        {currentScreen === "submitted" && renderSubmittedScreen()}

        <CardFooter className="justify-center">
          <a
            href="https://www.instagram.com/academiapakitosdance/"
            target="_blank"
            className="flex items-center gap-2 text-sm"
          >
            <Instagram size={16} />
            Instagram
          </a>
        </CardFooter>

      </Card>
    </div>
  )
}
