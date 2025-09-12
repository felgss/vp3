import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Shield, Home, Clock, Phone, Wrench, Zap, Droplets, Car, CheckCircle, Star } from 'lucide-react'
import './App.css'

// Importando as imagens
import heroImage from './assets/BdtbSs0loZ5L.png'
import assistanceImage from './assets/b6RqGaGpMx5c.jpg'
import protectionImage from './assets/t9sHXK0mjxBa.jpg'
import seg3Logo from './assets/seg3-new-logo.png'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const assistencias = [
    {
      icon: <Wrench className="w-8 h-8 text-blue-600" />,
      title: "Assistência Elétrica",
      description: "Reparo de instalações elétricas, troca de disjuntores e soluções para problemas elétricos.",
      economia: "R$ 150-300"
    },
    {
      icon: <Droplets className="w-8 h-8 text-blue-600" />,
      title: "Assistência Hidráulica",
      description: "Reparo de vazamentos, desentupimentos e manutenção de encanamentos.",
      economia: "R$ 200-400"
    },
    {
      icon: <Home className="w-8 h-8 text-blue-600" />,
      title: "Chaveiro 24h",
      description: "Abertura de portas, troca de fechaduras e cópias de chaves a qualquer hora.",
      economia: "R$ 80-150"
    },
    {
      icon: <Zap className="w-8 h-8 text-blue-600" />,
      title: "Vidraceiro",
      description: "Troca e reparo de vidros, espelhos e box de banheiro.",
      economia: "R$ 100-250"
    },
    {
      icon: <Car className="w-8 h-8 text-blue-600" />,
      title: "Assistência Portão",
      description: "Manutenção e reparo de portões eletrônicos e sistemas de automação.",
      economia: "R$ 120-300"
    },
    {
      icon: <Phone className="w-8 h-8 text-blue-600" />,
      title: "Suporte 24/7",
      description: "Atendimento telefônico especializado disponível todos os dias do ano.",
      economia: "Sem custo adicional"
    }
  ]

  const beneficios = [
    "Cobertura contra incêndio, raio e explosão",
    "Proteção contra roubo e furto qualificado",
    "Danos elétricos em equipamentos",
    "Responsabilidade civil familiar",
    "Despesas de hospedagem em hotel",
    "Assistência funeral familiar"
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <img src={seg3Logo} alt="SEG3 Logo" className="h-20 w-auto" />
            </div>
            
            <nav className="hidden md:flex space-x-8">
              <a href="#inicio" className="text-gray-700 hover:text-blue-600 transition-colors">Início</a>
              <a href="#assistencias" className="text-gray-700 hover:text-blue-600 transition-colors">Assistências</a>
              <a href="#beneficios" className="text-gray-700 hover:text-blue-600 transition-colors">Benefícios</a>
              <a href="#economia" className="text-gray-700 hover:text-blue-600 transition-colors">Economia</a>
            </nav>

            <Button 
              className="bg-blue-600 hover:bg-blue-700 text-white"
              onClick={() => window.open('https://wa.me/5532999023260?text=Olá! Gostaria de fazer uma cotação do seguro residencial.', '_blank')}
            >
              Cotação Grátis
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-blue-500 text-white mb-4">
                Seguro que se paga sozinho
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Proteção Total do Seu Lar com + de 30 assistências
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Seguro residencial completo com assistências 24h que economizam mais do que você paga. 
                Sua casa protegida e sua família tranquila.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-4"
                  onClick={() => window.open('https://wa.me/5532999023260?text=Olá! Gostaria de fazer uma cotação do seguro residencial.', '_blank')}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Cotação Gratuita
                </Button>

              </div>
            </div>
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Família feliz em casa protegida" 
                className="rounded-lg shadow-2xl w-full h-auto"
              />
              <div className="absolute -bottom-6 -left-6 bg-white text-blue-600 p-4 rounded-lg shadow-lg">
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 mr-2" />
                  <span className="font-semibold">Proteção Garantida</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Assistências Section */}
      <section id="assistencias" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Assistências 24h Inclusas
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Serviços especializados disponíveis a qualquer hora, que sozinhos já pagam o valor do seguro
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {assistencias.map((assistencia, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    {assistencia.icon}
                    <Badge variant="secondary" className="text-green-600 bg-green-100">
                      Economia: {assistencia.economia}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl">{assistencia.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {assistencia.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="bg-white p-8 rounded-lg shadow-lg inline-block">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Economia Total Anual
              </h3>
              <div className="text-4xl font-bold text-green-600 mb-2">
                R$ 1.200 - R$ 2.400
              </div>
              <p className="text-gray-600">
                Valor médio economizado por ano apenas com as assistências
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios Section */}
      <section id="beneficios" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Cobertura Completa para Sua Casa
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Além das assistências, você conta com proteção total contra os principais riscos que podem afetar seu lar.
              </p>
              
              <div className="space-y-4">
                {beneficios.map((beneficio, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-green-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{beneficio}</span>
                  </div>
                ))}
              </div>

              <Button size="lg" className="mt-8 bg-blue-600 hover:bg-blue-700 text-white">
                Ver Todas as Coberturas
              </Button>
            </div>
            
            <div className="relative">
              <img 
                src={protectionImage} 
                alt="Casa protegida com escudo" 
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Economia Section */}
      <section id="economia" className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Um Seguro que se Paga Sozinho
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Veja como as assistências inclusas já cobrem o valor do seguro ao longo do ano
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="bg-white text-gray-900">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Valor do Seguro</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">R$ 25</div>
                <p className="text-gray-600">por mês</p>
                <div className="text-2xl font-semibold mt-4">R$ 300/ano</div>
              </CardContent>
            </Card>

            <Card className="bg-white text-gray-900">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Economia Mínima</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">R$ 100</div>
                <p className="text-gray-600">por mês</p>
                <div className="text-2xl font-semibold mt-4">R$ 1.200/ano</div>
              </CardContent>
            </Card>

            <Card className="bg-white text-gray-900">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Lucro Líquido</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">R$ 75</div>
                <p className="text-gray-600">por mês</p>
                <div className="text-2xl font-semibold mt-4">R$ 900/ano</div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <p className="text-xl mb-8">
              Isso significa que você <strong>ganha dinheiro</strong> tendo o seguro!
            </p>
            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-4"
              onClick={() => window.open('https://wa.me/5532999023260?text=Olá! Gostaria de fazer uma cotação do seguro residencial.', '_blank')}
            >
              <Phone className="w-5 h-5 mr-2" />
              Quero Minha Cotação Agora
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              O que nossos clientes dizem
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "Já usei 3 vezes a assistência elétrica este ano. Só isso já pagou o seguro inteiro!"
                </p>
                <div className="font-semibold">Maria Silva</div>
                <div className="text-sm text-gray-500">São Paulo, SP</div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "O chaveiro veio em 20 minutos no domingo à noite. Atendimento excepcional!"
                </p>
                <div className="font-semibold">João Santos</div>
                <div className="text-sm text-gray-500">Rio de Janeiro, RJ</div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "Melhor investimento que fiz. As assistências realmente funcionam e economizo muito."
                </p>
                <div className="font-semibold">Ana Costa</div>
                <div className="text-sm text-gray-500">Belo Horizonte, MG</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Proteja Sua Casa e Ainda Economize Dinheiro
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Faça sua cotação gratuita agora e descubra como ter um seguro que se paga sozinho
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-4"
              onClick={() => window.open('https://wa.me/5532999023260?text=Olá! Gostaria de fazer uma cotação do seguro residencial.', '_blank')}
            >
              <Phone className="w-5 h-5 mr-2" />
              (32) 99902-3260
            </Button>
            <Button 
              size="lg" 
              className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-4"
              onClick={() => window.open('https://wa.me/5532999023260?text=Olá! Gostaria de fazer uma cotação do seguro residencial.', '_blank')}
            >
              Cotação Online
            </Button>
          </div>

          <p className="mt-6 text-blue-200">
            Atendimento de segunda a sexta, das 8h às 18h
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <img src={seg3Logo} alt="SEG3 Logo" className="h-16 w-auto" />
              </div>
              <p className="text-gray-400">
                Protegendo lares brasileiros com segurança e economia.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Produtos</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Seguro Residencial</li>
                <li>Assistências 24h</li>
                <li>Cobertura Completa</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Suporte</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Central de Ajuda</li>
                <li>Fale Conosco</li>
                <li>Sinistros</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Contato</h3>
              <ul className="space-y-2 text-gray-400">
                <li>(11) 9999-9999</li>
                <li>contato@seg3.com.br</li>
                <li>Atendimento 24h</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 SEG3. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

