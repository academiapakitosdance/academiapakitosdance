"use client"

import type React from "react"
import { useState } from "react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Textarea from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"

export default function SatisfactionSurvey() {
  const [rating, setRating] = useState("")
  const [suggestion, setSuggestion] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!rating) {
      alert("Por favor, selecione uma avaliação antes de enviar.")
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
        setSubmitted(true)
        setRating("")
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

  return (
    <div className="flex min-h-screen items-center justify-center p-4 bg-black">
      <Card className="w-full max-w-md rounded-2xl border-2 border-red-600 bg-white text-black shadow-2xl shadow-red-600/20">
        <CardHeader className="flex flex-col items-center space-y-6 p-8">
          <div className="inline-block rounded-xl border-3 border-red-600 shadow-lg shadow-red-600/30 overflow-hidden">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/files-blob/academiapakitosdance-main/public/logo/pakitos-dance-logo-GHgd7tBfEFqyykKsKS3aQXRAi9vp40.png"
              alt="Academia Pakitos Dance Logo"
              className="block max-w-[280px] h-auto"
              onError={(e) => {
                console.error("Erro ao carregar imagem:", e)
              }}
            />
          </div>

          {!submitted && (
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

        <CardContent className="p-8 pt-0">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid gap-3">
                <Label htmlFor="rating" className="text-lg font-semibold text-gray-800">
                  Como você avalia o atendimento da academia?
                </Label>
                <Select value={rating} onValueChange={setRating} name="rating">
                  <SelectTrigger
                    id="rating"
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
                <Label htmlFor="suggestion" className="text-lg font-semibold text-gray-800">
                  Deixe sua sugestão para melhorar nossa academia:
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

              <Button
                type="submit"
                className="w-full bg-red-600 text-white hover:bg-red-700 focus:ring-red-600 h-12 rounded-xl font-bold text-lg transition-all duration-200 shadow-lg hover:shadow-xl"
                disabled={isSubmitting || !rating}
              >
                {isSubmitting ? "Enviando..." : "Enviar Avaliação"}
              </Button>
            </form>
          ) : (
            <div className="text-center space-y-6">
              <h3 className="text-3xl font-bold text-red-600 mb-6">Obrigado por sua colaboração!</h3>
              <div className="space-y-4 text-gray-800 leading-relaxed">
                <p className="font-medium">
                  Sua opinião é essencial para que possamos evoluir e oferecer sempre o melhor para você.
                </p>
                <p className="font-medium">
                  Agradecemos por dedicar um momento do seu dia para responder à nossa pesquisa de satisfação. É através
                  do seu feedback que conseguimos melhorar nossos serviços, ambientes e atendimentos, criando uma
                  experiência cada vez mais positiva dentro da academia.
                </p>
                <p className="font-medium">
                  Continue firme nos seus treinos! Estamos aqui para te apoiar em cada etapa da sua jornada, ajudando
                  você a alcançar seus objetivos com saúde, motivação e constância.
                </p>
                <p className="font-medium">Conte sempre com a nossa equipe!</p>
                <p className="font-bold text-lg">Juntos somos mais fortes! 💪</p>
              </div>
            </div>
          )}
        </CardContent>

        {submitted && (
          <CardFooter className="flex justify-center p-8 pt-0">
            <Button
              onClick={() => setSubmitted(false)}
              className="bg-gray-200 text-black hover:bg-gray-300 border-2 border-red-600 rounded-xl font-bold px-8 py-3"
            >
              Voltar ao início
            </Button>
          </CardFooter>
        )}
      </Card>
    </div>
  )
}
