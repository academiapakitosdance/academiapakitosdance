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

  // Atendimento
  const serviceData = [
    { option: "Excelente, até indicaria para uma pessoa", votes: 41, color: "bg-green-500" },
    { option: "Ótimo, excelente trabalho", votes: 33, color: "bg-blue-500" },
    { option: "Bom, mas daria para melhorar", votes: 5, color: "bg-yellow-500" },
    { option: "Ruim, precisa de melhora", votes: 0, color: "bg-red-500" },
  ]

  // Infraestrutura
  const infrastructureData = [
    { option: "Muito bonita, não precisa mudar nada!", votes: 64, color: "bg-green-500" },
    { option: "Boa, mas poderia ter alguns ajustes", votes: 13, color: "bg-blue-500" },
    { option: "Regular, precisa de melhorias em alguns pontos", votes: 2, color: "bg-yellow-500" },
    { option: "Ruim, precisa de uma reforma urgente", votes: 0, color: "bg-red-500" },
  ]

  const suggestions = [
"Parabéns pro meu personal",
"Não tenho que reclamar tudo perfeito",
"Muito bom são muito atenciosos simpáticos que continue assim",
"Estão de parabéns, nada a reclamar",
"Limitar a quantidade de alunos por horário,.principalmente horários que atendam pessoas que trabalham. Muitos meninos e meninas treinam em grupo, demorando nos aparelhos, dificulta do o revezamento.",
"Excelente estrutura e profissionais atenciosos e capacitados",
"Tudo perfeito 👍",
"Um pouco mais de atenção da parte dos professores com a utilização dos aparelhos, pois infelizmente tem horários que os alunos ficam segurando os aparelhos com celular na mao,e ate conversando com outros alunos, dizendo que estão utilizando,e nao dão a vez nem de revezamento,e os professores desatentos nao se dão conta disso...",
"Excelentes professores estão de parabéns",
"a academia está ficando muito pequena pra muita gente, a cada vez colocam mais aparelhos e já não tem mais espaço e com mais gente que entra na academia fica difícil até de se locomover-se e se exercitar dentro do local porque fica sempre trombando nas pessoas acho que precisa ampliar o espaço",
"Maravilhosa a academia, com vários aparelhos super indicaria",
"Hoje está bem melhor com mais aparelhos duplos sem ter que ficar esperando ou revisando toda a hr com alguém , parabéns",
"Excelente, professor está de parabéns 👏👏",
"Elogiar o atendimento dos meninos, eles são muito atenciosos assim como Alisson com todos, não fazem distinção de ninguém e isso é muito bom pra gente.",
"Os meninos são ótimos quando da atenção. Mais tem momentos que eles esquecem que estão no trabalho e ficam de muita conversinha e acaba não prestando atenção em quem precisa de ajuda. Mais atenção",
"Super recomendo",
"Parabéns por tudo",
"Tudo ótimo, atendimento, espaço, decoração, aparelhos, excelente lugar para conquistar objetivos ! Amo as aulas, as corridas, os professores, todos estão de parabéns !",
"Excelente o atendimento continue tratando todos igualmente sem destinsao de pessoas",
"A única coisa que me incomoda é que as pessoas não colocam o peso que usaram no lugar e quem vai usar tem que tirar, acho que precisa conscientizar as pessoas sobre isso, pois muitas pessoas não usam muito peso, atrapalha mulheres que estão começando.",
"Só gratidão pelo acompanhamento nos exercícios , tds mto atenciosos...Parabéns pelo carinho que tem com os alunos, Deus abençoe tda equipe👏🙏",
"Sugestão ,no banheiro feminino poderia ter absorventes as vzs somos pegas de surpresa .",
"Poderia ter absorvente no banheiro feminino!",
"boa qualidade nos atendimentos e infraestrutura",
"Horário mais estendido aos sábados seria ótimo 😊",
"Manter os panos de limpesa com álcool mais limpo",
"É a melhor academia de Doutor Camargo, equipamentos de qualidade, atendimento nem se fala, toda equipe maravilhosa e atenciosa, super indico para todos…",
"Sobre o som. Músicas mais animadas ou um pouco mais alto. Música anima mais os treinos",
"Eu estou muito satisfeita amo os professores",
"Excelente atendimento, ótimos profissionais,aparelhos bons, ótima localização",
"Bom parabéns por todos os profssores",
"O Alisson e um cara mto responsável atento com todos os alunos e faz com vc se sinta em casa melhor academia melhor profissional o Alisson",
"Ótima",
"Tudo certinho !",
"Academia boa, aulao bom, instrutores maravilhosos, e muito Resultado, nada a reclamar",
"Excelente academia e excelentes profissionais lá dentro.",
"Gosto muito pois tem respeito dos profissionais que atendem, e estão sempre de prontidão para atender e tirar as dúvidas",
"No frio, não há necessidade de ligar o climatizador, fica muito frio na academia, principalmente na parte da frente no tapete e nas esteiras.",
"♥️♥️♥️ melhor da cidade",
"Excelente trabalho atencioso e sua equipe também está de parabéns",
"Não posso reclamar de nada, comecei a fazer ai e todos que trabalham no ambiente são ótimos, os aparelhos sempre em ótimas qualidades. Vejo isso, porque ja fiz em outra, e vi q nessa academia ( pakitos dance) tem muito mais estrutura.",
"Sugestão toldo na frente da academia",
"Melhor academia gosto muito sempre dispostos a estar ajudando a gente",
"Muito bom o atendimento os meninos sempre disposto a ajudar,o Alisson mesmo com a academia cheia tenta sempre dar atenção pra todos",

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
                className={`h-full ${item.color}`}
                style={{ width: `${percentage}%` }}
              />
            </div>
          </div>
        )
      })}
    </div>
  )

  // 🔒 TELA DE LOGIN
  if (!isAuthenticated) {
    return (
      <CardContent className="p-8">
        <div className="text-center space-y-6">
          <h3 className="text-2xl font-bold text-red-600">🔒 Acesso Restrito</h3>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <Label htmlFor="password">Senha</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {error && <p className="text-red-500 text-sm">{error}</p>}
            </div>

            <Button type="submit" className="w-full bg-red-600 text-white">
              Acessar
            </Button>

            <Button type="button" onClick={onBack} className="w-full">
              Voltar
            </Button>
          </form>
        </div>
      </CardContent>
    )
  }

  // 📊 DASHBOARD
  return (
    <CardContent className="p-8 space-y-6">
      <div className="bg-blue-50 p-4 rounded-xl border-2 border-blue-400">
        {renderChart(serviceData, totalServiceVotes, "AVALIAÇÃO DO ATENDIMENTO", <Users size={20} />)}
      </div>

      <div className="bg-green-50 p-4 rounded-xl border-2 border-green-400">
        {renderChart(
          infrastructureData,
          totalInfrastructureVotes,
          "AVALIAÇÃO DA INFRAESTRUTURA",
          <Building2 size={20} />,
        )}
      </div>

      <div className="bg-yellow-50 p-4 rounded-xl border-2 border-yellow-400 flex items-start gap-2">
        <AlertTriangle size={18} />
        <p className="text-sm">
          Resultados não são atualizados em tempo real.
        </p>
      </div>

      {/* 💡 SUGESTÕES RECEBIDAS */}
<div className="bg-purple-50 rounded-xl p-4 border-2 border-purple-400">
  <h4 className="text-lg font-bold text-purple-800 mb-4 text-center">
    💡 SUGESTÕES RECEBIDAS
  </h4>

  <div className="space-y-3 max-h-60 overflow-y-auto">
    {suggestions.length > 0 ? (
      suggestions.map((suggestion, index) => (
        <div
          key={index}
          className="bg-white rounded-lg p-3 border border-purple-200 shadow-sm"
        >
          <p className="text-gray-700 text-sm leading-relaxed">
            "{suggestion}"
          </p>
        </div>
      ))
    ) : (
      <p className="text-purple-600 text-center italic">
        Nenhuma sugestão cadastrada.
      </p>
    )}
  </div>

  <div className="mt-3 text-center">
    <p className="text-purple-600 text-sm font-medium">
      Total de sugestões: {suggestions.length}
    </p>
  </div>
</div>

      <Button onClick={onBack} className="w-full">
        Voltar ao início
      </Button>
    </CardContent>
  )
}
