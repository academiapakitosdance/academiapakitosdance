"use client"


import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import Dashboard from "./dashboard"


export default function SatisfactionSurvey() {
const [screen, setScreen] = useState<"welcome" | "survey" | "dashboard">("welcome")
const [serviceRating, setServiceRating] = useState("")
const [infrastructureRating, setInfrastructureRating] = useState("")


const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
e.preventDefault()
if (!serviceRating || !infrastructureRating) {
alert("Responda todas as perguntas obrigatórias")
return
}
alert("Pesquisa enviada com sucesso!")
setScreen("welcome")
}


if (screen === "dashboard") return <Dashboard onBack={() => setScreen("welcome")} />


if (screen === "survey") {
return (
<CardContent>
<form onSubmit={handleSubmit} className="space-y-6">
<div>
<Label>Atendimento *</Label>
<Select value={serviceRating} onValueChange={setServiceRating}>
<SelectTrigger><SelectValue placeholder="Selecione" /></SelectTrigger>
<SelectContent>
<SelectItem value="excelente">Excelente</SelectItem>
<SelectItem value="bom">Bom</SelectItem>
<SelectItem value="ruim">Ruim</SelectItem>
</SelectContent>
</Select>
</div>


<div>
<Label>Infraestrutura *</Label>
<Select value={infrastructureRating} onValueChange={setInfrastructureRating}>
<SelectTrigger><SelectValue placeholder="Selecione" /></SelectTrigger>
<SelectContent>
<SelectItem value="excelente">Excelente</SelectItem>
<SelectItem value="bom">Bom</SelectItem>
<SelectItem value="ruim">Ruim</SelectItem>
</SelectContent>
</Select>
</div>


<Button type="submit">Enviar</Button>
<Button type="button" onClick={() => setScreen("welcome")}>Voltar</Button>
</form>
</CardContent>
)
}


return (
<CardContent className="space-y-4 text-center">
<CardTitle>Pesquisa de Satisfação</CardTitle>
<Button onClick={() => setScreen("survey")}>Iniciar Pesquisa</Button>
<Button onClick={() => setScreen("dashboard")}>Acesso Restrito</Button>
</CardContent>
)
}