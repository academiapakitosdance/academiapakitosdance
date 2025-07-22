"use client"

import type React from "react"
import { useState } from "react"
import { CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { AlertTriangle } from "lucide-react"

interface DashboardProps {
  onBack: () => void
}

export default function Dashboard({ onBack }: DashboardProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  // Dados da enquete (você pode atualizar manualmente aqui)
  const surveyData = [
    { option: "Excelente, até indicaria para uma pessoa", votes: 40, color: "bg-green-500" },
    { option: "Ótimo, excelente trabalho", votes: 25, color: "bg-blue-500" },
    { option: "Bom, mas daria para melhorar", votes: 10, color: "bg-yellow-500" },
    { option: "Ruim, precisa de melhora", votes: 0, color: "bg-red-500" },
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
    "Os meninos mais conversam do que trabalham, na ausência do Alisson, em grande parte do tempo estão sempre juntos negligenciando os alunos que posteriormente podem precisar de atenção.",
    "Algumas ideias de maquinas: Trocar o Sumo pelo Belt Squat.Remada High Row e Low Row.Uma rosca scott seria interessante.Uma nova bicicleta, com um banco mais confortável.Mais barras ou alguns pesos montados, mais algumas cordas",
    "Melhorar a ventilação da academia e colocar mais leds",
    "quando o alisson esta esta certo 👍🏻",
    "boa qualidade",
    "mexer na pintura e teocar os pisos quebrados",
    "Tudo ótimo continue assim ☺️",
    "disponibilizar mais alteres mais maquinas que nos ajudem",
    "O atendimento do Alisson é ótimo, já de alguns outros personal deixa um pouco a desejar.",
    "Melhor academia para treina em Camargo",
    "Um suporte a mais para anilhas, acho que la no fundo ficaria legal, para organizar melhor, e um suporte para colocar as barras e triângulos do puxador, as vezes ficam no chão e ir pegar elas pode atrapalhar o pessoal fazendo exercício.",
    "Pedir para o leite parar de gemer kkkkkkkkkkkkkk",
    "acho que deviam ter orientações pra que não gritassem/gemessem na academia, se torna constrangedor pra quem está por perto",
    "alisson, que tal uma estante maior para os itens, tem alguns horários que fica impossível guardar as coisas, tem que deixar no chão a maioria das vezes",
    "Tudo ok",
    "ocorreu uma situação, ao pedir ajuda pra um dos instrutores da manhã, ele debochou e saiu rindo, negando ajuda pedida.",
    "Ventilador mais para cima na área das esteiras.",
    "A academia em si é excelente — em termos de estrutura, é a melhor de Doutor Camargo. Todas as máquinas são de ótima qualidade, realmente as melhores entre as três academias da cidade (já treinei em todas). Agora, em relação aos treinadores, é preciso uma cobrança maior. Alguns simplesmente parecem estátuas: ficam parados, olhando pro nada, sem dar atenção pra ninguém. Falta iniciativa, presença e vontade de realmente ajudar quem está treinando. E o pior, alguns parecem focar mais em ajudar as mulheres, deixando outros alunos de lado. Por outro lado, há profissionais que fazem valer a experiência, como o Matheus Leite — de longe um dos seus melhores funcionários. Sempre prestativo, atencioso e comprometido com os alunos. Merece reconhecimento. É claro que ainda há pontos a melhorar, como em qualquer lugar, mas você está de parabéns, Alisson, pela academia que montou!",
    "Venda de suplementos",
    "excelente academia, professores capacitadados atendimento personalizados sugestão de um futuro proximo alterar a iluminação do ambiente proporcionando uma iluminação mais tranquila investindo em luzes amarelas que tras uma acomodação ao ambiente, investir em panos e alcool para higienização dos aparelhos. Do mais excelente academia assinado gustavo",
    "Alguns instrutores andam falando mal dos próprios alunos…  A academia é show de bola, alisson é merecedor demais, mas isso me anda me chateando, parecem que eles querem ajudar quem ja sabe treinar, sempre vejo eles ajudando alguns que sabem treinar, e nós que nao sabemos saimos no prejuizo…",
    "acabar com o estacionamento de patinete na porta",
    "comprar a data ao lado kkkkkk",
    "Almenta o lugar onde guarda os celulares",
    "Suplemento grátis para todos que treinam em sua academia",
    "Trembolona, Para os alunos",
    "Está tudo perfeito",
    "Acho massa o funcional femenino, seria interessante que tivesse no masculino, e fosse avisado os dias que fosse ter.Mas do mais a academia è top",
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

        {/* Seção de Sugestões */}
        <div className="bg-blue-50 rounded-xl p-4 border-2 border-blue-400">
          <h4 className="text-lg font-bold text-blue-800 mb-4 text-center">SUGESTÕES RECEBIDAS</h4>
          <div className="space-y-3 max-h-60 overflow-y-auto">
            {suggestions.length > 0 ? (
              suggestions.map((suggestion, index) => (
                <div key={index} className="bg-white rounded-lg p-3 border border-blue-200 shadow-sm">
                  <p className="text-gray-700 text-sm leading-relaxed">"{suggestion}"</p>
                </div>
              ))
            ) : (
              <p className="text-blue-600 text-center italic">Nenhuma sugestão recebida ainda.</p>
            )}
          </div>
          {suggestions.length > 0 && (
            <div className="mt-3 text-center">
              <p className="text-blue-600 text-sm font-medium">Total de sugestões: {suggestions.length}</p>
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
