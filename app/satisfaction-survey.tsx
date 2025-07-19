"use client"

import type React from "react"
import { useState } from "react"
import Image from "next/image"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Textarea from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"

export default function SatisfactionSurvey() {
  const [rating, setRating] = useState("")
  const [suggestion, setSuggestion] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false) // Novo estado para controlar o envio

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault() // Impede o comportamento padrão de submissão do formulário (redirecionamento)

    if (!rating) {
      // Opcional: Adicionar alguma validação visual aqui se a avaliação for obrigatória
      alert("Por favor, selecione uma avaliação antes de enviar.")
      return
    }

    setIsSubmitting(true) // Define o estado de envio para desabilitar o botão

    const formData = new FormData(event.currentTarget)
    // O Formsubmit.co espera os dados como 'application/x-www-form-urlencoded' ou 'multipart/form-data'
    // FormData funciona bem para isso.

    try {
      // ATENÇÃO: Substitua 'seu-email@example.com' pelo seu endereço de e-mail real
      const response = await fetch("https://formsubmit.co/ajax/academiapakitosdance@gmail.com", {
        // <-- AQUI VOCÊ COLOCA SEU E-MAIL
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json", // Importante para receber uma resposta JSON e não ser redirecionado
        },
      })

      if (response.ok) {
        // Sucesso no envio
        setSubmitted(true) // Mostra a mensagem de agradecimento
        setRating("") // Limpa os campos
        setSuggestion("")
      } else {
        // Lidar com erros de envio
        alert("Ocorreu um erro ao enviar sua pesquisa. Por favor, tente novamente.")
        console.error("Erro ao enviar formulário:", response.statusText)
      }
    } catch (error) {
      alert("Ocorreu um erro de rede. Por favor, verifique sua conexão e tente novamente.")
      console.error("Erro de rede:", error)
    } finally {
      setIsSubmitting(false) // Reabilita o botão após o envio (sucesso ou falha)
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center p-4 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-black to-red-700">
      <Card className="w-full max-w-md rounded-xl border-transparent bg-white text-black shadow-2xl">
        {" "}
        {/* <-- ALTERADO AQUI: borda transparente no Card */}
        <CardHeader className="flex flex-col items-center space-y-4 p-6">
          <div className="w-full max-w-[400px] h-[200px] relative">
     import Image from "next/image";

<Image
  src="/logo/pakitos-dance-logo.png"
  alt="Pakitos Dance"
  width={64}
  height={64}
  className="rounded-lg"
/>


          </div>
          <CardTitle className="text-3xl font-bold text-red-600">AVALIE NOSSO SERVIÇO</CardTitle>{" "}
          {/* <-- MANTIDO AQUI: novo título em maiúsculas */}
          <div className="text-center mt-4 max-w-sm">
            <p className="text-gray-700 text-base leading-relaxed">
              Sua opinião é muito importante para nós! Por favor, dedique alguns minutos para responder às perguntas
              abaixo e nos ajudar a melhorar a{" "}
              <span className="font-semibold text-red-600">Academia Pakitos Dance</span>.
            </p>
          </div>
        </CardHeader>
        <CardContent className="p-6 pt-0">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-2">
                <Label htmlFor="rating" className="text-lg font-medium">
                  Como você avalia o atendimento da academia?
                </Label>
                <Select value={rating} onValueChange={setRating} name="rating">
                  <SelectTrigger id="rating" className="border-gray-300 focus:border-red-600 focus:ring-red-600">
                    <SelectValue placeholder="Selecione" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="excelente-indicaria">Excelente, até indicaria para uma pessoa.</SelectItem>
                    <SelectItem value="otimo-trabalho">Ótimo, excelente trabalho.</SelectItem>
                    <SelectItem value="bom-melhorar">Bom, mas daria para melhorar.</SelectItem>
                    <SelectItem value="ruim-precisa-melhora">Ruim, precisa de melhora.</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="suggestion" className="text-lg font-medium">
                  Deixe sua sugestão para melhorar nossa academia:
                </Label>
                <Textarea
                  id="suggestion"
                  placeholder="Sua sugestão aqui..."
                  value={suggestion}
                  onChange={(e) => setSuggestion(e.target.value)}
                  className="min-h-[100px] border-gray-300 focus:border-red-600 focus:ring-red-600"
                  name="suggestion"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-red-600 text-white hover:bg-red-700 focus:ring-red-600"
                disabled={isSubmitting || !rating} // Desabilita durante o envio e se não houver avaliação
              >
                {isSubmitting ? "Enviando..." : "Enviar"}
              </Button>
            </form>
          ) : (
            <div className="text-center py-10">
              <h3 className="text-3xl font-extrabold text-red-600 mb-4">Obrigado pela sua colaboração!</h3>
              <p className="mt-4 text-lg text-gray-800">Sua opinião é fundamental para o nosso crescimento.</p>
            </div>
          )}
        </CardContent>
        {submitted && (
          <CardFooter className="flex justify-center p-6 pt-0">
            <Button
              onClick={() => setSubmitted(false)} // Apenas reseta o estado 'submitted'
              className="bg-gray-200 text-black hover:bg-gray-300"
            >
              Fazer outra pesquisa
            </Button>
          </CardFooter>
        )}
      </Card>
    </div>
  )
}
