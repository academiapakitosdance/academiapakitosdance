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
    { option: "Excelente, até indicaria para uma pessoa", votes: 56, color: "bg-green-500" },
    { option: "Ótimo, excelente trabalho", votes: 31, color: "bg-blue-500" },
    { option: "Bom, mas daria para melhorar", votes: 0, color: "bg-yellow-500" },
    { option: "Ruim, precisa de melhora", votes: 0, color: "bg-red-500" },
  ]

  // Infraestrutura
  const infrastructureData = [
    { option: "Muito bonita, não precisa mudar nada!", votes: 59, color: "bg-green-500" },
    { option: "Boa, mas poderia ter alguns ajustes", votes: 28, color: "bg-blue-500" },
    { option: "Regular, precisa de melhorias em alguns pontos", votes: 0, color: "bg-yellow-500" },
    { option: "Ruim, precisa de uma reforma urgente", votes: 0, color: "bg-red-500" },
  ]

  const suggestions = [
"Maravilhoso atendimento ótimo. Equipamentos tds bem cuidados, Pra mim esta td ótimo",
"Podia melhorar essa parte da climatização né… um climatizador ja fazia muita diferença.",
"Nada a dizer, somente que tudo é maravilhoso",
"eu gosto muito de treinar aqui, mas esse calor atrapalha demais… se tivesse mais ar condicionado ia melhorar muito.",
"Perfeitaaa",
"Tudo excelente!",
"eu teria colocado o refrigerador lá no fundo, está muito exposto la na frente, nao tem como os meninos ficar cuidando, o pagamento tinha q ser feito na hora e algum funcionario, se em algum dia tiver muito movimento e todos ocupados, alguem pode simplesmente pegar e ir embora",
"Sinceramente, tem dia que eu penso em ir embora de tão quente que tá, fica abafado demais.",
"O predio da academia ficou show após a reforma,gostaria de enfatizar sobre o atendimento dos meninos ,super atenciosos,parabéns pela equipe!",
"Sempre dando o melhor  tá d parabéns .",
"Pra mim tá ficando cada dia melhor Só tenho uma reclamação das pessoas acharem que são donas do aparelho e não quer dividir",
"A academia está excelente. Os equipamentos são ótimos e bem conservados, e a infraestrutura no geral é muito boa, não tenho do que reclamar. Os professores são atenciosos, sempre prestativos e dão um suporte muito bom durante os treinos. Além disso, a dinâmica das aulas é um diferencial, pois há bastante variedade e isso torna a rotina mais motivadora e agradável. Estou muito satisfeita com a experiência.",
"Continuar evoluindo,estão de parabéns",
"Está ótima",
"Linda ótimo atendimento",
"Acho que esses suplementos ali na frente ficam muito largados, sem ninguém pra olhar direto. Talvez se ficasse mais no fundo, perto do balcão, era mais seguro. Porque do jeito que tá, em horário cheio, ninguém nem percebe se alguém pega sem pagar.",
"As veiz a gente quer treinar bem, mas com esse calor fica dificil demais, desanima.",
"Podia investir mais nisso ai, ar condicionado ou climatizador, pq assim tá complicado.",
"Ótima lkkkkkkkkkkkkkkkkkkkk",
"Ta ficando pequena rsrsrs",
"BOTASSINI é perfeito D+  S2",
"Eu gosto daqui, mas essa parte do calor precisa melhorar urgente, não dá pra fingir que tá normal.",
"Poderia ter Tornozeleiras novas para fazer a extensão na polia 😅, e de sábado o horário da academia poderia ser até umas 12:00",
"Recomendar as pessoas não deixarem os patinetes no meio da entrada, além de atrapalhar é um perigo derrubar algum e te que pagar",
"Equipe nota 💯",
"deixar os suplementos ali na entrada é meio arriscado. Não tem sempre alguém pra cuidar, e com a correria, pode acontecer de sair sem pagar. Se ficasse mais próximo de algum funcionário, ia evitar esse problema.",
"com menos calor a experiência ia ser bem melhor.",
"A única coisa que  na minha opinião  sobre o grupo de watts zap , poderia ser só sobre academia ,não ficar colocando propaganda de roupa ou de produtos de limpeza",
"Ótimos professores",
"Podiam pensar em colocar mais ventiladores, nem precisa ser nada exagerado, só pra circular melhor o ar.",
"Todos os personal estão de parabéns principalmente o Alisson muito gentil e dedicado as pessoas.",
"Nota 1000",
"acho que essa parte da climatização podia ser melhor cuidada.",
"Tem dia que o calor tá tão forte que parece que a gente tá numa sauna, ai fica dificil manter o foco.",
"Poderia ampliar o espaço ou pegar prédio  e fazer em cima e em baixo potencial e professores bem treinados tem.  mais está assim já está ótimo e mudança sempre e bom",
"Poderia arrumar os ventiladores, atrás das baik , Um cuidado melhor na limpeza do banheiro feminino Da más e um lugar ótimo , onde agente se sente bem , e acolhido,.... Uma experiência, nova q estamos amando",
"se possível colocar uns ar condicionados que é mais garantido pois o local é muito grande e o climatizador não está dando conta 🫠🙃🫠",
"Só elogios parabéns",
"Academia está de parabéns",
"Amo a academia,mas tem hrs que agente quer usar um aparelho e tem muitas pessoas principalmente as meninas mais jovens que ficam no celular e acabam prejudicando quem realmente foi lá pra fazer seu exercício.",
"Sugiro que o grupo wats feminino seja somente para recados, avisos, e listas pertinentes a academia, sem propagandas e vendas de outras coisas.",
"Está tudo perfeito, Alison não deixa a desejar no atendimento e nem na evolução do ambiente. Parabéns a todos pelo excelente trabalho!",
"os ventiladores perto dos legumes 45 deveria ficar em direção pra baixo e rodando, pois são equipamentos que faz a gente sentir mais calor",
"Só um elogio! Alison, vc e o Matheus Botassini são maravilhosos, atenciosos, educados, prestativos... Continuem assim.",
"Profissionais mto dedicados",
"O atendimento é o diferencial de vocês! Parabéns pela dedicação e empenho com a gente!",
"Só elogios, parabéns professores 👏🏼👏🏼 ",
"A academia está ótima ,pequenos ajustes pra fazer ,um ou outro ventilador que está parado mas sempre vemos que vc está sempre fazendo os ajustes que precisa,os professores sempre atenciosos e prestativos",
"Coloca o Pix com Qrcode para pagamento lá onde está ficando os suplementos .",
"Ampliar horários ao sabados E horario do almoço (Talvez intercalando com os profissionais)",
"Tudo perfeito... parabéns 👏👏",
"Perfeito",
"Top top",
"Professores top. Sem nada a reclamar",
"MELHORAR A CLIMATIZAÇÃO TA MUITO RUIM NESSE CALOR",
"Acho legal colocar suportes nas paredes para aquelas barras, ficam todas amontoadas, nos horarios mais cheio além de muita pessosa fica muito ruim pq tem muita barra",
"A melhor academia, com os melhores profissionais!!!!!",
 "suporte paras baras pronta",
"mais halteres, muito dificil na hora do fuzue",
"A melhor não troco por nada parabéns Proff nota 1000👏🙏🏻",
"Sou aluna nova e para mim está perfeito em tudo .Os personal são muito atencioso o professor e excelente só tenho agradecer .",
"melhorar a climatização e suporte para as barras, q nao fiquem mais jogadas e amontoadas lá",
"Eu nem em sonho queria fazer academia, mais depois q comecei a ir na Pakitos dance, minha opinião mudou completamente.",
"A academia atende perfeitamente a necessidade dos frequentadores. Os profissionais são atenciosos (as aulas da professora Josi são excelentes). Uma sugestão é ter mais pontos com frascos de álcool e pano para higienizar os aparelhos.",


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
