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
    { option: "Excelente, até indicaria para uma pessoa", votes: 66, color: "bg-green-500" },
    { option: "Ótimo, excelente trabalho", votes: 54, color: "bg-blue-500" },
    { option: "Bom, mas daria para melhorar", votes: 3, color: "bg-yellow-500" },
    { option: "Ruim, precisa de melhora", votes: 0, color: "bg-red-500" },
  ]

  // Dados da enquete de INFRAESTRUTURA (você pode atualizar manualmente aqui)
  const infrastructureData = [
    { option: "Muito bonita, não precisa mudar nada!", votes: 67, color: "bg-green-500" },
    { option: "Boa, mas poderia ter alguns ajustes", votes: 54, color: "bg-blue-500" },
    { option: "Regular, precisa de melhorias em alguns pontos", votes: 2, color: "bg-yellow-500" },
    { option: "Ruim, precisa de uma reforma urgente", votes: 0, color: "bg-red-500" },
  ]

  // Dados da enquete de HIGIENE (você pode atualizar manualmente aqui)
  const hygieneData = [
    { option: "Sempre muito limpa, sem nada a reclamar!", votes: 90, color: "bg-green-500" },
    { option: "Limpeza boa, mas dá pra melhorar em alguns pontos", votes: 29, color: "bg-blue-500" },
    { option: "Às vezes deixa a desejar, precisa mais atenção", votes: 4, color: "bg-yellow-500" },
    { option: "Falta cuidado, limpeza é um problema sério aqui", votes: 0, color: "bg-red-500" },
  ]

  // Sugestões recebidas (você pode atualizar manualmente aqui)
  const suggestions = [
"banheiro das mulheres por algum motivo fica com cheiro desagradável as vezes, só de ficar próximo da pra sentir um odor forte.",
"Seria ótimo outro suporte para os acessórios da polia! oque tem está sobrecarregado e desorganizado, dificultando o acesso aos equipamentos que estão atrás.",
"poderia pedir gentilmente para que os alunos tenham mais noção e não deixem seus objetos pessoais na academia integralmente, isso atrapalha em horários de pico pois mesmo aumentando a estante continuam poucos espaços vazios.",
"Espaço mais amplo!",
"Procurar ajustar os treinos de acordo com as necessidades do aluno.",
"Os aulão de dança poderia ser em um local com mais infraestrutura, com ventiladores e água. E quem sabe futuramente ter estrutura pr aula de spinnig, as aulas já são boas, acho que com essa novidade seria um atrativo a mais e a academia tem potencial pra isso.",
"Sugestão: manter sempre os aparelhos limpos e sem poeira, e aumentar o espaço do bebedouro ou trocar de lugar.",
"Está tudo ótimo.",
"A academia é ótima os professores são atenciosos e os dono nem se fale sempre preocupado sempre perguntando se está tudo bem se precisa de alguma coisa tudo perfeito",
"Td ótimo",
"pensar em um espaço para alongamentos, mobilidade e abdominal dentro da academia",
"Acho que precisa aumentar a academia, como você é nota 1000 tem os 500 alunos não está cabendo. No mais está tudo ótimo. Bjusss",
"Precisa de mais cochonete mais grosso tem uns bons mais são poucos se tiver mais agradeço",
"Tudo certo!",
"Está ótima",
"Por enquanto não tenho o que opinar em melhoria. Está excelente o atendimento e os professores.",
"A sugestão é continuem com o ótimo trabalho,estão no caminho certo",
"Almofada nova própria para elevação pélvica",
"Nao tenho nenhuma reclamação Atendimento maravilhoso Sempre atencioso",
"Já é ótimo",
"Pra mim ter o ambiente sempre arejado pois tenho muita falta de ar",
"Ótimo vindo da minha visão n precisa mudar nd",
"mais aulas de jump",
"alguns detalhes como o relógio no fundo da academia que está desregulado e o dispenser de copos descartáveis que frequentemente trava e não sai nada",
"halter de 7 e 9kgs pra completar!",
"câmeras na frente da academia e na parte que ficam os pertences, traria mais segurança aos alunos",
"Está ótimo",
"poderia ter mais aparelhos de aeróbicos, como elíptico.",
"Poderia ter mais colchonetes daqueles mais grossos , pq os fininhos são desconfortáveis. E uma garrafa de café principalmente de manhã kkkkkkkkkkkk (brincadeira )",
"coloque um simulador de escada pra fazer cardio",
"a limpeza em geral é boa, só acho que deveria melhorar em questão dos emborrachados do chão, acumula bastante poeira lá..",
"Pra mim  está tudo perfeito ☺️",
"Que o pessoal dos patinetes tivessem um lugar para guardá-los .porque atrapalha a entrada, principalmente no horário das 17 e 18 hrs.",
"Acredito que regular o tempo em que algumas pessoas ficam nos aparelhos ajudaria. Muitas meninas, principalmente, ficam no celular ou conversando, atrasando o treino de quem quer agilidade.",
"suporte de papel higiênico com maior capacidade dentro das cabines, é comum o papel ter acabado e a pessoa perceber só depois de fazer as  necessidades, seria interessante também no banheiro feminino disponibilizar alguns absorventes em casos de emergência.",
"Mais ventiladores ou um ar seria ótimo 😅",
"Uma sugestão um ar condicionado 😃",
"Fosse um ambiente maior",
"Maravilhosa",
"Melhorar a disposição das bicicletas ergométrica ficam muito perto",
"Academia é maravilhosa tudo é perfeito, aqueles matérias de boxe poderia ser usados mais, talvez agente aprender uma ou outra coisinha sobre acho interessante, mais a academia e a melhor de todas amo 💕",
"Atendimento excepcional Ajuda Atenção Proatividade  Limpeza  Tudo muito bom, não tenho do que reclamar.",
"Café ☕ seria ótimo",
"Nomes nos aparelhos",
"Otima",
"proibir os patinetes do lado de dentro, n sabia q a academia tinha virado estacionamento kkkkkk",
"Poderia ter alguma coisa voltada a criança, seria muito bacana ter atividades kids com professores capacitados seria ótimo",
"Muitas companhias indesejadas😂 tipo as aranha e as casa delas no teto, meu tique de limpeza gritou 😂. E por favor deixar o ventilador ligados ajudaria ainda mais nos nossas treinos.",
"Ventiladores ligados na hora do treino pra ventilar o ambiente seria bom, e limpeza no teto pra tirar as telhas de aranha. Fora isso está tudo ótimo",
"Tá td ok",
"Acho quê tá perfeita do mante a mesma pegada de atendimento  aparelhos sempre bem conservado e é isso mas tá de parabéns hoje é a melhor academia quê temos aqui na nossa cidade",
"Está excelente não precisa melhorar nada… nota 10",
"Colchonete para as aulas da proh mais top da academia 🤭🤣🤣",
"Mas bicicletas",
"Tudo otimo",
"Se possível comprar mais elásticos, daria uma variedade maior para fazermos mais exercícios e além de variações de exercícios que já conhecemos, elásticos grande de preferência e mais band, q só tem 1 no momento, e se tiver alguem usando acabamos ficando sem.",
"Sei que o espaço está dificil, mas, se possível comprar um glúteo 4 apoio, ninguém tem na cidade, isso traria mais daquela “sensação” de ser unica na cidade, trazendo mais cliente!!",
"Uma sugestão eh a de registrar com foto o início de cada aluno que começa pois a evolução vista eh muito importante para a motivação de cada um!",
"A academia eh boa.... acredito que a melhor da cidade. E pela qualidade do atendimento e da estrutura tende a crescer, sugiro algo aquático pois muitos precisam de exercícios sem impacto. E também as aulas extras não conseguem alcançar a todos pelo espaço e horários sugiro repensar isso!",
"Tudo bom",
"Vc arrasa proff,  parabens pela dedicação sempre com todos que passa pela academia, muito sucesso sempre a você 🥰🙏🏻👏🏻🚀",
"Simulador de escada poderia ter, Mais estão de parabéns",
"Eu sugiro virar as cadeiras adutora e abdutora para a parede ou em um espaço ali não tão 'frequentado'. Pelo fato dessas duas cadeiras ficarem de frente para o espelho e para as pessoas que passam na frente, no meu ponto de vista, principalmente maioria das mulheres se sentem desconfortável.",
"Pedir principalmente para estes jovens, que por gentileza, parassem de FUMAR esta PORCARIA de cigarro eletrônico dentro da academia, pq isso realmente é desconfortável",
"Mais professoras mulheres",
"uma máquina de gluteo beijos",
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
