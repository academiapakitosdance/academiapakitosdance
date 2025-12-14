"use client"
} catch {
alert("Erro de rede")
} finally {
setIsSubmitting(false)
}
}


const handleBackToWelcome = () => setCurrentScreen("welcome")


/* TELAS (welcome / survey / submitted) permanecem IGUAIS
Apenas o bloco de higiene foi removido */


return (
<div className="flex min-h-screen flex-col items-center justify-center p-4 bg-black">
<Card className="w-full max-w-md rounded-2xl border-2 border-red-600 bg-white text-black shadow-2xl">
<CardHeader className="flex flex-col items-center space-y-6 p-8">
<CardTitle className="text-3xl font-bold text-red-600">PESQUISA DE SATISFAÇÃO</CardTitle>
</CardHeader>


{currentScreen === "dashboard" ? (
<Dashboard onBack={handleBackToWelcome} />
) : currentScreen === "survey" ? (
<CardContent className="p-8">
<form onSubmit={handleSubmit} className="space-y-6">
<div>
<Label>Atendimento *</Label>
<Select value={serviceRating} onValueChange={setServiceRating} name="serviceRating">
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
<Select value={infrastructureRating} onValueChange={setInfrastructureRating} name="infrastructureRating">
<SelectTrigger><SelectValue placeholder="Selecione" /></SelectTrigger>
<SelectContent>
<SelectItem value="excelente">Excelente</SelectItem>
<SelectItem value="bom">Bom</SelectItem>
<SelectItem value="ruim">Ruim</SelectItem>
</SelectContent>
</Select>
</div>


<div>
<Label>Sugestões</Label>
<Textarea value={suggestion} onChange={(e) => setSuggestion(e.target.value)} name="suggestion" />
</div>


<Button type="submit" disabled={isSubmitting} className="w-full">
{isSubmitting ? "Enviando..." : "Enviar"}
</Button>
<Button type="button" onClick={handleBackToWelcome} className="w-full">Voltar</Button>
</form>
</CardContent>
) : (
<CardContent className="p-8 text-center">
<p>Obrigado pela participação!</p>
<Button onClick={handleBackToWelcome} className="mt-4">Voltar</Button>
</CardContent>
)}


<CardFooter className="justify-center">
<p className="text-xs text-gray-400">© 2025 Rafael Nunes Gasperini</p>
</CardFooter>
</Card>
</div>
)
}
