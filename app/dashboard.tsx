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
    { option: "Excelente, até indicaria para uma pessoa", votes: 71, color: "bg-green-500" },
    { option: "Ótimo, excelente trabalho", votes: 66, color: "bg-blue-500" },
    { option: "Bom, mas daria para melhorar", votes: 14, color: "bg-yellow-500" },
    { option: "Ruim, precisa de melhora", votes: 0, color: "bg-red-500" },
  ]

  // Infraestrutura
  const infrastructureData = [
    { option: "Muito bonita, não precisa mudar nada!", votes: 110, color: "bg-green-500" },
    { option: "Boa, mas poderia ter alguns ajustes", votes: 39, color: "bg-blue-500" },
    { option: "Regular, precisa de melhorias em alguns pontos", votes: 2, color: "bg-yellow-500" },
    { option: "Ruim, precisa de uma reforma urgente", votes: 0, color: "bg-red-500" },
  ]

  const suggestions = [
"Só elogios",
"Ótima infraestrutura, ótimos profissionais.",
"Ótima academia ,ótimos professores estão de parabéns",
"Nada a reclamar só elogiar mesmo o excelente trabalho de vcs professores e paciência com a gente….",
"Excelentes profissionais. Muito atenciosos.",
"Academia muito bem equipada , atendimento maravilhoso, sempre me tiram dúvida e são solícitos, academia espaçosa , aparelhos de qualidade , cada dia melhor",
"Perfeitaaaa",
"Todos atendem a gente como eu esperava, Todos se preocupam com nós fznd os exercícios. Muito boa a estrutura principalmente todos os instrutores que estão ali dentro. Nota 10 para academia e principalmente para o Alisson que se preocupa sempre com todos",
"Ter mais esteiras e bicicletas . Os professores são todos excelentes, Alisson vc é nota 1000.",
"Só tenho elogios! A academia tem uma estrutura muito boa, mas o grande diferencial é o professor Alison, extremamente atencioso, dedicado e realmente se preocupa com a evolução de cada aluno.",
"Tudo perfeito!!!",
"Está ótima",
"Topp",
"So tenho elogios, professor nota 10 , os meninos super atenciosos !! Super satisfeita 👏🙌",
"Super indico academia está uma maravilha bem geladinha",
"Super indico os profs são bem atenciosos a academia está mais fresca",
"Não tenho nada a reclamar, inclusive faço propaganda para todos que conheço kkkk Instrutores ótimos e atenciosos, organização ok, só elogios !",
"Atendimento perfeito, professores atenciosos e prestativos",
"Qdo os instrutores treinam poderiam falar menos palavrão",
"Pra mim muito boa equipe ótima bastante equipamento e um ) professor que além de ser muito profissional tem Humildade❤️",
"Para mim está maravilhosa e os personal muito atencioso está perfeito só tenho agradecer.",
"Mudar a playlist,para não ficar enjoativa",
"acho q devia ter aqueles elasticos maiores, que de pra usar em maquinas, ja que o espaço ja está bem utilizado, visando isso da pra melhorar com bastante variações de exercicios",
"Precisava de um espaço maior, Mais esta perfeita em tudo, So o espaço que esta ficando pequeno",
"Eu gosto muito da academia pakito Dance , não troco de academia por q vcs não muito atencioso com agente, recomendo pra qual um",
"Acho q teria que ter thera band p alongamento",
"Que os instrutores tem que ajudar mais e não só explicar o exercício e já te deixa sozinha pq as vezes esqueço a forma de como executar o exercício e eles não dão atenção devida as vezes",
"Nada a falar. Só elogios.",
"Amando tudo vc arrasa muitoooo.. gratidão 🙏",
"Tá nota 1000",
"aquels elasticos grande que usa em maquina de academia e troca playlist",
"Está de parabéns",
"tudo ótimo, após o ar melhorou muito, mas acho q deveria trocar os pegadores, só tem 2 que não estão rachados, ai todos ficam tentando pegar ele e ngm usa o resto",
"Amo estar lá,além de ser muito bem assistida você Alison e toda sua equipe estão de parabéns.",
"O que falta mesmo é as pessoas guardarem as Anilhas serem mais organizadas.",
"Muito boa, continue sempre melhoras e buscando inovar",
"Os profissionais são de extrema competência, porém quando vamos treinar mais a noite vemos que eles já estão bem cansados e pouco dispostos a ajudar",
"Academia ótima",
"Continue fazendo o ótimo trabalho que já fazem",
"mais elastico",
"Então de parabéns Alison e equipe sempre trazendo atividades novas",
"mais maquina pequena para maior variação, e mais pegadores, estão todos rachados",
"Gostaria que tivesse mais álcool perto dos aparelhos. Tem usuários que deixam tudo melado de suor. Por uma caneta piloto para por o nome no copo para evitar desperdício. Cada um escreve o seu nome e utiliza o mesmo até o final do horário.",
"Sempre muito bem atendida noota 1000",
"Reforçar sempre para alunos limpar os aparelhos quando suam muito.",
"Academia top super indico",
"Acho que teria que aumentar mais pois está entrando muito gente e tendo pouco espaço e aparelhos",
"Academia muito boa e os professores muitos cuidadosos e atenciosos.",
"Ótima recomendo,,, preço acessível.. Instrutores muito atencioso, Parabéns",
"Mais Limpeza e organização.",
"pedir pra aquela lá, que me recuso a citar o nome, parar de usar as coisas para ficar se mostrando nos vídeos dela",
"Intensificar as orientações junto aos alunos para limpeza dos aparelhos e realocações dos mesmos no devido lugar após o uso.",
"Ótima academia, me sinto em casa local muito acolhedor",
"Poderia ter uma cobertura na frente como um toldo",
"mais halteres e cada vez mais máquinas",
"A academia funciona muito bem. Os instrutores são profissionais atenciosos e muito bons. Parabéns",
"Para mim esta ótima",
"boa a climatização após a nova adquiração",
"Acho que pelo fato de ser o melhor lugar pra treinar pelo tratamento que temos o espaço poderia ser maior acho que está ficando pequeno para todas as pessoas que frequentam, e também as vezes temos pouco tempo pra treinar e temos que ficar esperando pra usar os aparelhos. Mais sobre o tratamento na academia é excelente.",
"Sugestão: Trocar a malha das camisetas. São quentes para treinar.",
"2 coisas, os instrutores estão sendo muito grossos enquanto estão treinando, uma coisa é você avisar calmamente que não está no horário deles, e apontar quem está de plantão, outra coisa é ser grosso e falar que não esta no horario dele e que agr ta ocupado, outra coisa que anda me incomodando, tem uma ai q ta ocupando os acessórios, não sei como dizer, enfim para se gravar, atrapalhando o treino de várias pessoas, sem contar que tem gente que não gosta de aparecer nesse tipo de coisa",
"ESTA DE PARABÉNS PELO TRABALHO .",
"Mais colchonetes grossos, e lavar as toalhinhas de álcool semanalmente.",
"Ta perfeito",
"Continue como esta!",
"Está de parabéns",
"Tá de parabéns 👏",
"Instrutores na hora que estão treinando , fui tirar uma dúvida me tratou mal me ignorando.",
"Tudo ótimo, excelente.",
"Lenços de álcool, descartáveis para higienização dos aparelhos...",
"Ótimo atendimento.",
"Em determinados horários fica difícil de fazer cardio pelo fato de todas as esteiras e bicicletas estarem ocupadas.",
"Indico vocês estão todos de parabéns",
"pedir pra certas pessoas parar de pegar as caixas e bancos para gravar",
"Tudo perfeito, desde dos aparelhos, e professores 👏",
"colocar tempo pra usar os aparelhos os adolescentes estão brincando neles",
"Devido a tanto tipo de vírus , teria que ter álcool em todos os aparelhos , pois as x pegamos aparelho cheio de suor e fica meio ruim , então cada um usa , sai passa o álcool e deixa sempre limpo pr proximo",
"Sem reclamações está tudo ótimo como sempre",
"Sugestão: precisa de um espaço maior já kkk. Elogios: atendimento ótimo, limpeza excelente. Zero defeito",
"À unica coisa que incomoda, sao os aparelhos sempre com suor quando vamos utilizar, os alunos parecem terem preguiça dê ir até o local dos paninhos com alcool para limpar. À sugestao seria ter mais paninhos próximos dos aparelhos, porque nas esteiras ajudou muito estar pertinho. Mais eu entendo que isso não é culpa da academia e sim às pessoas que utilizam. Usou limpou",
"O horário de funcionamento aos sábados poderia ser até mais tarde .",
"charma a atenssao de quem fica passando tempo no aparelho",
"Lavar as toalhas de passar álcool semanalmente , as vezes elas estão com mal cheiro aí quando vai limpar os aparelhos fica pior 🫣, mais colchonetes daqueles grossos , os finos são desconfortáveis.",
"olha, minha unica reclamação é uma moça em especifico, que literalmente, está usando os bancos, halteres, maquinas, caixas, steps para se gravar, quando você vai pedir para pegar ainda acha ruim e diz que esta usando, isso é um desaforo",
"Super top recomendo tão d parabéns",
"elasticos maiores para ter mais variações de exercicios, e mais pegadores tbm, tem varios quebrados, os vermelhos estão machucando as maos!",
"Amoooo meus professores academia está maravilhosa não tenho nada pra reclamar",
"Só poderia mudar a playlist",
"Maravilhosa 👏🏻",
"Ótima academia, excelentes profissionais! Parabéns Alison por casa inovação vejo ainda mais muito sucesso pra você",
"Tô gostando muito de treinar com vcs, vcs são excelentes",
"Tudo perfeito academia top a melhor ,os Proff são nota 1000",
"Espaço esta ficando apertado, Ter mais aulão durante a semana 🙂",
"Pra tá ótimo",
"somente jogar o pendulo mais para tras, ta apertado passar entre ele e a mesa, principalmente quando estão usando, mas está tudo maravilhoso",
"Parabéns está excelente 👏🏼",
"Vocês são demais, uma equipe respeitosa, atenciosa e alegre da até gosto de ir na academia.",
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
