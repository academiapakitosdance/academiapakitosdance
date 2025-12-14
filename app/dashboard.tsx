"use client"
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
className={`h-full ${item.color} transition-all duration-500 ease-out`}
style={{ width: `${percentage}%` }}
/>
</div>
</div>
)
})}
</div>
)


if (!isAuthenticated) {
return (
<CardContent className="p-8">
<div className="text-center space-y-6">
<h3 className="text-2xl font-bold text-red-600">🔒 Acesso Restrito</h3>


<form onSubmit={handleLogin} className="space-y-4">
<div>
<Label className="block mb-2">Senha:</Label>
<Input
type="password"
value={password}
onChange={(e) => setPassword(e.target.value)}
/>
{error && <p className="text-red-500 text-sm mt-2">{error}</p>}
</div>


<Button type="submit" className="w-full">Acessar</Button>
<Button type="button" onClick={onBack} className="w-full">Voltar</Button>
</form>
</div>
</CardContent>
)
}


return (
<CardContent className="p-8 space-y-6">
<div className="bg-yellow-50 border-2 border-yellow-400 rounded-xl p-4 flex space-x-3">
<AlertTriangle className="text-yellow-600" size={20} />
<p className="text-sm">Os dados não são atualizados em tempo real.</p>
</div>


<div className="bg-blue-50 rounded-xl p-4 border-2 border-blue-400">
{renderChart(serviceData, totalServiceVotes, "AVALIAÇÃO DO ATENDIMENTO", <Users size={20} />)}
</div>


<div className="bg-green-50 rounded-xl p-4 border-2 border-green-400">
{renderChart(infrastructureData, totalInfrastructureVotes, "AVALIAÇÃO DA INFRAESTRUTURA", <Building2 size={20} />)}
</div>


<Button onClick={onBack} className="w-full">Voltar ao Início</Button>
</CardContent>
)
}
