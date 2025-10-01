'use client';

import React, { useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft, BookOpen, TrendingUp, Target, BarChart3, Zap, Crown } from 'lucide-react';

const EbookViewer = () => {
  const [currentChapter, setCurrentChapter] = useState(0);
  const [readingProgress, setReadingProgress] = useState(0);
  const [completedChapters, setCompletedChapters] = useState(new Set());

  const chapters = [
    {
      id: 0,
      title: "Introdução – O Jogo Mudou",
      icon: <Crown className="w-5 h-5" />,
      content: (
        <div className="space-y-8">
          <div className="text-center mb-12">
            <img 
              src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&h=400&fit=crop&auto=format" 
              alt="Transformação Digital" 
              className="w-full h-64 object-cover rounded-2xl shadow-2xl mb-8"
            />
            <div className="bg-gradient-to-r from-amber-400 to-orange-500 text-black px-6 py-3 rounded-full inline-block font-bold text-lg mb-6">
              🏆 CONTEÚDO PREMIUM EXCLUSIVO
            </div>
          </div>

          <div className="prose prose-lg max-w-none text-gray-100">
            <p className="text-xl leading-relaxed mb-8 text-amber-300 font-medium">
              Esquece tudo o que você já ouviu sobre tráfego pago. Aqui não tem enrolação, não tem segredo guardado a sete chaves.
            </p>

            <p className="text-lg leading-relaxed mb-6">
              O que você está prestes a descobrir é um sistema completo, testado e aprovado por quem já faturou milhões usando exatamente essas estratégias. Não é teoria de coach. É método real, com resultados reais.
            </p>

            <div className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 p-8 rounded-2xl border border-purple-500/30 mb-8">
              <h3 className="text-2xl font-bold text-amber-300 mb-4">Por que este ebook é diferente?</h3>
              <ul className="space-y-3 text-lg">
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">✓</span>
                  <span>Estratégias usadas por empresas que faturam 7 e 8 dígitos</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">✓</span>
                  <span>Cases reais com prints de resultados</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">✓</span>
                  <span>Sistema passo a passo que qualquer pessoa pode seguir</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">✓</span>
                  <span>Técnicas avançadas nunca reveladas publicamente</span>
                </li>
              </ul>
            </div>

            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop&auto=format" 
              alt="Gráficos de Crescimento" 
              className="w-full h-48 object-cover rounded-xl shadow-lg mb-8"
            />

            <p className="text-lg leading-relaxed mb-6">
              Você não precisa ser um expert em marketing. Não precisa gastar meses estudando teorias complexas. E o melhor: não precisa começar com um público-alvo superdefinido (isso é mito, e vou provar).
            </p>

            <div className="bg-gradient-to-r from-red-900/30 to-orange-900/30 p-6 rounded-xl border-l-4 border-orange-500 mb-8">
              <p className="text-lg font-medium text-orange-300">
                <strong>ATENÇÃO:</strong> Este não é mais um ebook sobre "como ganhar dinheiro na internet". Este é um manual técnico baseado em R$ 50 milhões investidos em tráfego pago nos últimos 5 anos.
              </p>
            </div>

            <p className="text-lg leading-relaxed mb-6">
              O que você vai aprender aqui é simples na teoria, mas poderoso na prática: como colocar anúncios no ar e fazer eles trabalharem 24 horas por dia para você, gerando leads qualificados e vendas consistentes.
            </p>

            <p className="text-lg leading-relaxed mb-8">
              Quem não gostaria de ter um sistema que trabalha enquanto você dorme? Que gera oportunidades de negócio sem você precisar fazer networking ou cold calling? Que escala seus resultados sem você precisar trabalhar mais horas?
            </p>

            <div className="text-center bg-gradient-to-r from-purple-600 to-blue-600 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-white mb-4">O Que Você Vai Dominar:</h3>
              <div className="grid md:grid-cols-2 gap-4 text-left">
                <div className="space-y-2">
                  <p className="flex items-center text-white"><span className="text-yellow-400 mr-2">🎯</span> Segmentação de audiência que converte</p>
                  <p className="flex items-center text-white"><span className="text-yellow-400 mr-2">💰</span> Otimização de campanhas para ROI máximo</p>
                  <p className="flex items-center text-white"><span className="text-yellow-400 mr-2">📊</span> Análise de métricas que realmente importam</p>
                </div>
                <div className="space-y-2">
                  <p className="flex items-center text-white"><span className="text-yellow-400 mr-2">🚀</span> Escalonamento inteligente de campanhas</p>
                  <p className="flex items-center text-white"><span className="text-yellow-400 mr-2">🎨</span> Criativos que param o scroll</p>
                  <p className="flex items-center text-white"><span className="text-yellow-400 mr-2">⚡</span> Automações que economizam tempo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 1,
      title: "Capítulo 1 – A Verdade Sobre Tráfego Pago",
      icon: <Target className="w-5 h-5" />,
      content: (
        <div className="space-y-8">
          <img 
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop&auto=format" 
            alt="Dashboard de Anúncios" 
            className="w-full h-64 object-cover rounded-2xl shadow-2xl mb-8"
          />

          <div className="prose prose-lg max-w-none text-gray-100">
            <h2 className="text-3xl font-bold text-amber-300 mb-6">O Que é Tráfego Pago de Verdade</h2>
            
            <p className="text-xl leading-relaxed mb-8 text-blue-300">
              Tráfego pago não é "jogar dinheiro no Facebook e torcer para dar certo". É uma ciência exata, com fórmulas, métricas e sistemas que podem ser replicados infinitamente.
            </p>

            <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-600 mb-8">
              <h3 className="text-2xl font-bold text-amber-300 mb-4">A Definição Técnica</h3>
              <p className="text-lg mb-4">
                Tráfego pago é o processo de investir capital em plataformas de mídia para direcionar usuários qualificados para suas propriedades digitais, com o objetivo de gerar conversões mensuráveis e escaláveis.
              </p>
              <p className="text-lg text-gray-300">
                Em português claro: você paga para colocar sua mensagem na frente das pessoas certas, na hora certa, com a oferta certa.
              </p>
            </div>

            <img 
              src="https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=300&fit=crop&auto=format" 
              alt="Funil de Vendas" 
              className="w-full h-48 object-cover rounded-xl shadow-lg mb-8"
            />

            <h3 className="text-2xl font-bold text-amber-300 mb-6">Por Que 95% das Pessoas Falham</h3>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-red-900/30 p-6 rounded-xl border border-red-500/50">
                <h4 className="text-xl font-bold text-red-300 mb-4">❌ O Que NÃO Funciona</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>• Copiar anúncios de concorrentes</li>
                  <li>• Não ter sistema de acompanhamento</li>
                  <li>• Focar apenas no custo por clique</li>
                  <li>• Não testar criativos suficientes</li>
                  <li>• Desistir nos primeiros R$ 100</li>
                </ul>
              </div>
              <div className="bg-green-900/30 p-6 rounded-xl border border-green-500/50">
                <h4 className="text-xl font-bold text-green-300 mb-4">✅ O Que Realmente Funciona</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>• Sistema de testes estruturado</li>
                  <li>• Foco em métricas de conversão</li>
                  <li>• Criativos baseados em dados</li>
                  <li>• Otimização contínua</li>
                  <li>• Paciência estratégica</li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 p-8 rounded-2xl border border-purple-500/30 mb-8">
              <h3 className="text-2xl font-bold text-amber-300 mb-4">Case Real: De R$ 0 a R$ 100k/mês</h3>
              <p className="text-lg mb-4">
                <strong>Cliente:</strong> E-commerce de suplementos<br/>
                <strong>Investimento inicial:</strong> R$ 50/dia<br/>
                <strong>Resultado em 90 dias:</strong> R$ 847.000 em vendas
              </p>
              <div className="bg-black/50 p-4 rounded-lg">
                <p className="text-green-400 font-mono">
                  ROI: 847% | CPA: R$ 23,50 | Ticket Médio: R$ 187
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-amber-300 mb-6">As 3 Pilares do Tráfego Pago Lucrativo</h3>

            <div className="space-y-6 mb-8">
              <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 p-6 rounded-xl border border-blue-500/30">
                <h4 className="text-xl font-bold text-blue-300 mb-3">1. AUDIÊNCIA CERTA</h4>
                <p className="text-lg">
                  Não é sobre encontrar "todo mundo". É sobre encontrar as pessoas que já estão procurando exatamente o que você oferece. Vou te mostrar como identificar essas pessoas usando dados comportamentais avançados.
                </p>
              </div>

              <div className="bg-gradient-to-r from-green-900/50 to-teal-900/50 p-6 rounded-xl border border-green-500/30">
                <h4 className="text-xl font-bold text-green-300 mb-3">2. MENSAGEM IRRESISTÍVEL</h4>
                <p className="text-lg">
                  Sua mensagem precisa parar o scroll, despertar curiosidade e gerar ação imediata. Existe uma fórmula científica para isso, baseada em gatilhos psicológicos comprovados.
                </p>
              </div>

              <div className="bg-gradient-to-r from-orange-900/50 to-red-900/50 p-6 rounded-xl border border-orange-500/30">
                <h4 className="text-xl font-bold text-orange-300 mb-3">3. SISTEMA DE CONVERSÃO</h4>
                <p className="text-lg">
                  De nada adianta trazer tráfego se você não tem um sistema que converte visitantes em clientes. Isso inclui landing pages otimizadas, sequências de e-mail e processos de vendas automatizados.
                </p>
              </div>
            </div>

            <img 
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=300&fit=crop&auto=format" 
              alt="Métricas e Analytics" 
              className="w-full h-48 object-cover rounded-xl shadow-lg mb-8"
            />

            <div className="bg-gradient-to-r from-yellow-900/30 to-orange-900/30 p-6 rounded-xl border-l-4 border-yellow-500 mb-8">
              <h4 className="text-xl font-bold text-yellow-300 mb-3">💡 Insight Milionário</h4>
              <p className="text-lg">
                "O tráfego pago não é sobre gastar dinheiro. É sobre investir dinheiro para gerar mais dinheiro. A diferença está na mentalidade e no sistema."
              </p>
              <p className="text-sm text-gray-400 mt-2">- Empresário que faturou R$ 50M com tráfego pago</p>
            </div>

            <h3 className="text-2xl font-bold text-amber-300 mb-6">O Mindset Milionário</h3>
            
            <p className="text-lg leading-relaxed mb-6">
              Antes de falar de técnicas, você precisa entender que tráfego pago é um investimento, não um gasto. Cada real investido deve retornar pelo menos R$ 3,00. Se não está acontecendo, o problema não é a plataforma - é o sistema.
            </p>

            <div className="bg-black/50 p-8 rounded-2xl border border-gray-600">
              <h4 className="text-xl font-bold text-amber-300 mb-4">Fórmula do Sucesso:</h4>
              <div className="text-center text-2xl font-mono text-green-400 mb-4">
                AUDIÊNCIA + MENSAGEM + SISTEMA = LUCRO ESCALÁVEL
              </div>
              <p className="text-center text-gray-300">
                Domine esses 3 elementos e você terá uma máquina de fazer dinheiro 24/7
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 2,
      title: "Capítulo 2 – O Mito do Público-Alvo Perfeito",
      icon: <TrendingUp className="w-5 h-5" />,
      content: (
        <div className="space-y-8">
          <img 
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop&auto=format" 
            alt="Segmentação de Audiência" 
            className="w-full h-64 object-cover rounded-2xl shadow-2xl mb-8"
          />

          <div className="prose prose-lg max-w-none text-gray-100">
            <h2 className="text-3xl font-bold text-amber-300 mb-6">A Maior Mentira do Marketing Digital</h2>
            
            <div className="bg-gradient-to-r from-red-900/50 to-orange-900/50 p-8 rounded-2xl border border-red-500/30 mb-8">
              <h3 className="text-2xl font-bold text-red-300 mb-4">🚨 ALERTA: Você Foi Enganado</h3>
              <p className="text-xl leading-relaxed">
                "Você precisa definir seu público-alvo antes de anunciar" é a maior mentira que te contaram. Essa crença limitante já quebrou mais negócios do que a crise econômica.
              </p>
            </div>

            <p className="text-lg leading-relaxed mb-8">
              Muita gente trava porque acha que precisa ter o "público perfeito" antes de anunciar. Passam meses criando personas detalhadas, fazendo pesquisas de mercado, tentando descobrir se o cliente ideal "gosta de café ou chá".
            </p>

            <p className="text-xl font-bold text-blue-300 mb-8">
              Isso é perda de tempo. E vou provar matematicamente.
            </p>

            <h3 className="text-2xl font-bold text-amber-300 mb-6">A Verdade Que Ninguém Te Conta</h3>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-600">
                <h4 className="text-xl font-bold text-red-300 mb-4">❌ Método Tradicional</h4>
                <ul className="space-y-3 text-gray-300">
                  <li>• 3-6 meses definindo persona</li>
                  <li>• Pesquisas intermináveis</li>
                  <li>• Paralisia por análise</li>
                  <li>• Zero dados reais</li>
                  <li>• Suposições baseadas em "achismo"</li>
                </ul>
                <div className="mt-4 p-3 bg-red-900/30 rounded-lg">
                  <p className="text-red-300 font-bold">Resultado: R$ 0 em vendas</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-800 to-green-900 p-6 rounded-xl border border-green-600">
                <h4 className="text-xl font-bold text-green-300 mb-4">✅ Método Milionário</h4>
                <ul className="space-y-3 text-gray-300">
                  <li>• Público amplo inicial</li>
                  <li>• Testes rápidos com dados reais</li>
                  <li>• Otimização baseada em resultados</li>
                  <li>• Algoritmo trabalha para você</li>
                  <li>• Refinamento contínuo</li>
                </ul>
                <div className="mt-4 p-3 bg-green-900/30 rounded-lg">
                  <p className="text-green-300 font-bold">Resultado: Dados reais + vendas</p>
                </div>
              </div>
            </div>

            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=300&fit=crop&auto=format" 
              alt="Algoritmo de Machine Learning" 
              className="w-full h-48 object-cover rounded-xl shadow-lg mb-8"
            />

            <h3 className="text-2xl font-bold text-amber-300 mb-6">Como o Algoritmo Realmente Funciona</h3>

            <div className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 p-8 rounded-2xl border border-purple-500/30 mb-8">
              <h4 className="text-xl font-bold text-purple-300 mb-4">🤖 A Inteligência Artificial Trabalha Para Você</h4>
              <p className="text-lg mb-4">
                O Facebook processa mais de 4 petabytes de dados por dia. Ele sabe mais sobre comportamento de compra do que qualquer pesquisa de mercado tradicional.
              </p>
              <div className="bg-black/50 p-4 rounded-lg">
                <p className="text-green-400 font-mono text-sm">
                  ALGORITMO: Analisa 10.000+ sinais por usuário em tempo real<br/>
                  VOCÊ: "Acho que meu público gosta de café"
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-amber-300 mb-6">Case Real: R$ 2.3 Milhões Sem "Público Definido"</h3>

            <div className="bg-gradient-to-r from-green-900/30 to-teal-900/30 p-8 rounded-2xl border border-green-500/30 mb-8">
              <h4 className="text-xl font-bold text-green-300 mb-4">📈 Evolução de 90 Dias</h4>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-bold text-green-300 mb-3">📊 Dados da Campanha</h5>
                  <ul className="space-y-2 text-gray-300">
                    <li><strong>Nicho:</strong> Curso online</li>
                    <li><strong>Público inicial:</strong> "Interessados em educação" (18M+ pessoas)</li>
                    <li><strong>Investimento:</strong> R$ 180.000</li>
                    <li><strong>Faturamento:</strong> R$ 2.347.000</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-bold text-green-300 mb-3">🎯 Otimização Automática</h5>
                  <ul className="space-y-2 text-gray-300">
                    <li><strong>Semana 1:</strong> Público amplo</li>
                    <li><strong>Semana 2:</strong> IA identifica padrões</li>
                    <li><strong>Semana 3:</strong> Otimização automática</li>
                    <li><strong>Resultado:</strong> ROI de 1.304%</li>
                  </ul>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-amber-300 mb-6">O Sistema de 3 Fases</h3>

            <div className="space-y-6 mb-8">
              <div className="bg-gradient-to-r from-blue-900/50 to-indigo-900/50 p-6 rounded-xl border border-blue-500/30">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4">1</div>
                  <h4 className="text-xl font-bold text-blue-300">FASE DESCOBERTA (Dias 1-7)</h4>
                </div>
                <p className="text-lg mb-3">
                  <strong>Objetivo:</strong> Deixar o algoritmo aprender quem converte
                </p>
                <ul className="space-y-2 text-gray-300 ml-4">
                  <li>• Público amplo (1M+ pessoas)</li>
                  <li>• Múltiplos criativos testando</li>
                  <li>• Orçamento baixo (R$ 50-100/dia)</li>
                  <li>• Foco em conversões, não cliques</li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-green-900/50 to-emerald-900/50 p-6 rounded-xl border border-green-500/30">
                <div className="flex items-center mb-4">
                  <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4">2</div>
                  <h4 className="text-xl font-bold text-green-300">FASE OTIMIZAÇÃO (Dias 8-21)</h4>
                </div>
                <p className="text-lg mb-3">
                  <strong>Objetivo:</strong> Refinar baseado em dados reais
                </p>
                <ul className="space-y-2 text-gray-300 ml-4">
                  <li>• Análise de audiências que converteram</li>
                  <li>• Criação de lookalikes</li>
                  <li>• Eliminação de criativos ruins</li>
                  <li>• Aumento gradual do orçamento</li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 p-6 rounded-xl border border-purple-500/30">
                <div className="flex items-center mb-4">
                  <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4">3</div>
                  <h4 className="text-xl font-bold text-purple-300">FASE ESCALA (Dias 22+)</h4>
                </div>
                <p className="text-lg mb-3">
                  <strong>Objetivo:</strong> Maximizar resultados com público otimizado
                </p>
                <ul className="space-y-2 text-gray-300 ml-4">
                  <li>• Público refinado automaticamente</li>
                  <li>• Criativos de alta performance</li>
                  <li>• Orçamento otimizado</li>
                  <li>• ROI maximizado</li>
                </ul>
              </div>
            </div>

            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=300&fit=crop&auto=format" 
              alt="Dashboard de Performance" 
              className="w-full h-48 object-cover rounded-xl shadow-lg mb-8"
            />

            <div className="bg-gradient-to-r from-yellow-900/30 to-orange-900/30 p-6 rounded-xl border-l-4 border-yellow-500 mb-8">
              <h4 className="text-xl font-bold text-yellow-300 mb-3">⚡ Hack Milionário</h4>
              <p className="text-lg">
                "Não tente ser mais inteligente que uma IA que processa bilhões de dados por segundo. Use ela a seu favor. Comece amplo, deixe ela aprender, depois refine baseado em resultados reais."
              </p>
            </div>

            <h3 className="text-2xl font-bold text-amber-300 mb-6">Por Que Isso Funciona Melhor</h3>

            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-4 p-4 bg-gray-800/50 rounded-lg">
                <div className="bg-green-500 rounded-full p-2">
                  <span className="text-white font-bold">1</span>
                </div>
                <div>
                  <h4 className="font-bold text-green-300">Dados Reais vs. Suposições</h4>
                  <p className="text-gray-300">Você trabalha com comportamento real de compra, não com "achismos"</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-gray-800/50 rounded-lg">
                <div className="bg-blue-500 rounded-full p-2">
                  <span className="text-white font-bold">2</span>
                </div>
                <div>
                  <h4 className="font-bold text-blue-300">Velocidade de Aprendizado</h4>
                  <p className="text-gray-300">Em 7 dias você tem mais dados do que 6 meses de pesquisa tradicional</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-gray-800/50 rounded-lg">
                <div className="bg-purple-500 rounded-full p-2">
                  <span className="text-white font-bold">3</span>
                </div>
                <div>
                  <h4 className="font-bold text-purple-300">Descobertas Inesperadas</h4>
                  <p className="text-gray-300">Você descobre nichos e audiências que nunca imaginaria</p>
                </div>
              </div>
            </div>

            <div className="bg-black/50 p-8 rounded-2xl border border-gray-600">
              <h4 className="text-xl font-bold text-amber-300 mb-4 text-center">A Regra de Ouro:</h4>
              <div className="text-center text-xl font-bold text-green-400 mb-4">
                "COMECE AMPLO → DEIXE A IA APRENDER → REFINE COM DADOS REAIS"
              </div>
              <p className="text-center text-gray-300">
                Esta é a diferença entre quem fatura milhões e quem fica eternamente "definindo o público-alvo"
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 3,
      title: "Capítulo 3 – Sistema de Campanhas Milionárias",
      icon: <Zap className="w-5 h-5" />,
      content: (
        <div className="space-y-8">
          <img 
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=400&fit=crop&auto=format" 
            alt="Configuração de Campanhas" 
            className="w-full h-64 object-cover rounded-2xl shadow-2xl mb-8"
          />

          <div className="prose prose-lg max-w-none text-gray-100">
            <h2 className="text-3xl font-bold text-amber-300 mb-6">O Passo a Passo Para Sua Primeira Campanha Milionária</h2>
            
            <div className="bg-gradient-to-r from-green-900/50 to-emerald-900/50 p-8 rounded-2xl border border-green-500/30 mb-8">
              <h3 className="text-2xl font-bold text-green-300 mb-4">🎯 Sistema Testado em R$ 50 Milhões</h3>
              <p className="text-xl leading-relaxed">
                Este não é um tutorial básico. É o mesmo sistema usado por empresas que faturam 8 dígitos. Cada passo foi testado, otimizado e comprovado em milhares de campanhas.
              </p>
            </div>

            <h3 className="text-2xl font-bold text-amber-300 mb-6">PASSO 1: Configuração da Conta (Fundação Sólida)</h3>

            <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-600 mb-8">
              <h4 className="text-xl font-bold text-blue-300 mb-4">🏗️ Business Manager - Configuração Profissional</h4>
              
              <div className="space-y-4">
                <div className="bg-blue-900/30 p-4 rounded-lg">
                  <p className="font-bold text-blue-300 mb-2">1. Acesse business.facebook.com</p>
                  <p className="text-gray-300">Configure como empresa, não como pessoa física. Isso dá mais credibilidade e recursos avançados.</p>
                </div>

                <div className="bg-green-900/30 p-4 rounded-lg">
                  <p className="font-bold text-green-300 mb-2">2. Configuração de Pagamento Estratégica</p>
                  <ul className="text-gray-300 space-y-1 ml-4">
                    <li>• Use cartão de crédito empresarial (limite alto)</li>
                    <li>• Configure backup de pagamento</li>
                    <li>• Ative faturamento automático</li>
                    <li>• Defina limite diário inicial: R$ 500</li>
                  </ul>
                </div>

                <div className="bg-purple-900/30 p-4 rounded-lg">
                  <p className="font-bold text-purple-300 mb-2">3. Pixel de Conversão (Crucial)</p>
                  <p className="text-gray-300">Instale o pixel ANTES de criar qualquer campanha. Sem dados de conversão, você está voando cego.</p>
                </div>
              </div>
            </div>

            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=300&fit=crop&auto=format" 
              alt="Objetivos de Campanha" 
              className="w-full h-48 object-cover rounded-xl shadow-lg mb-8"
            />

            <h3 className="text-2xl font-bold text-amber-300 mb-6">PASSO 2: Escolha do Objetivo (A Decisão de R$ 1 Milhão)</h3>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gradient-to-br from-blue-900/50 to-indigo-900/50 p-6 rounded-xl border border-blue-500/30">
                <h4 className="text-lg font-bold text-blue-300 mb-3">🎯 CONVERSÕES</h4>
                <p className="text-sm text-gray-300 mb-3">Para vendas diretas</p>
                <div className="bg-blue-900/30 p-3 rounded-lg">
                  <p className="text-xs text-blue-200">Melhor para: E-commerce, infoprodutos, serviços</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-900/50 to-emerald-900/50 p-6 rounded-xl border border-green-500/30">
                <h4 className="text-lg font-bold text-green-300 mb-3">📧 GERAÇÃO DE LEADS</h4>
                <p className="text-sm text-gray-300 mb-3">Para capturar contatos</p>
                <div className="bg-green-900/30 p-3 rounded-lg">
                  <p className="text-xs text-green-200">Melhor para: Consultoria, imóveis, seguros</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 p-6 rounded-xl border border-purple-500/30">
                <h4 className="text-lg font-bold text-purple-300 mb-3">🚀 TRÁFEGO</h4>
                <p className="text-sm text-gray-300 mb-3">Para aquecer audiência</p>
                <div className="bg-purple-900/30 p-3 rounded-lg">
                  <p className="text-xs text-purple-200">Melhor para: Conteúdo, remarketing</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-yellow-900/30 to-orange-900/30 p-6 rounded-xl border-l-4 border-yellow-500 mb-8">
              <h4 className="text-xl font-bold text-yellow-300 mb-3">💡 Dica Milionária</h4>
              <p className="text-lg">
                <strong>90% dos iniciantes escolhem "Tráfego" porque é "mais barato".</strong> Erro fatal. O Facebook otimiza para cliques baratos, não para vendas. Sempre escolha o objetivo final que você quer alcançar.
              </p>
            </div>

            <h3 className="text-2xl font-bold text-amber-300 mb-6">PASSO 3: Configuração de Audiência (Sistema Inteligente)</h3>

            <div className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 p-8 rounded-2xl border border-purple-500/30 mb-8">
              <h4 className="text-xl font-bold text-purple-300 mb-4">🎯 Estratégia de Audiência em 3 Camadas</h4>
              
              <div className="space-y-6">
                <div className="bg-black/30 p-6 rounded-lg">
                  <h5 className="font-bold text-green-300 mb-3">CAMADA 1: Audiência Ampla (Descoberta)</h5>
                  <ul className="space-y-2 text-gray-300">
                    <li>• <strong>Tamanho:</strong> 2-10 milhões de pessoas</li>
                    <li>• <strong>Segmentação:</strong> Apenas dados demográficos básicos</li>
                    <li>• <strong>Exemplo:</strong> Mulheres, 25-45 anos, interessadas em "fitness"</li>
                    <li>• <strong>Orçamento:</strong> 60% do total</li>
                  </ul>
                </div>

                <div className="bg-black/30 p-6 rounded-lg">
                  <h5 className="font-bold text-blue-300 mb-3">CAMADA 2: Interesses Específicos</h5>
                  <ul className="space-y-2 text-gray-300">
                    <li>• <strong>Tamanho:</strong> 500k-2 milhões de pessoas</li>
                    <li>• <strong>Segmentação:</strong> Interesses mais específicos</li>
                    <li>• <strong>Exemplo:</strong> Interessados em "suplementos" + "academia"</li>
                    <li>• <strong>Orçamento:</strong> 30% do total</li>
                  </ul>
                </div>

                <div className="bg-black/30 p-6 rounded-lg">
                  <h5 className="font-bold text-orange-300 mb-3">CAMADA 3: Lookalike (Poder da IA)</h5>
                  <ul className="space-y-2 text-gray-300">
                    <li>• <strong>Tamanho:</strong> 1-3% da população</li>
                    <li>• <strong>Base:</strong> Clientes existentes ou conversões do pixel</li>
                    <li>• <strong>Exemplo:</strong> Lookalike 1% de compradores</li>
                    <li>• <strong>Orçamento:</strong> 10% do total</li>
                  </ul>
                </div>
              </div>
            </div>

            <img 
              src="https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=300&fit=crop&auto=format" 
              alt="Criativos de Alta Performance" 
              className="w-full h-48 object-cover rounded-xl shadow-lg mb-8"
            />

            <h3 className="text-2xl font-bold text-amber-300 mb-6">PASSO 4: Criativos Que Convertem (A Arte da Persuasão)</h3>

            <div className="space-y-6 mb-8">
              <div className="bg-gradient-to-r from-red-900/50 to-pink-900/50 p-6 rounded-xl border border-red-500/30">
                <h4 className="text-xl font-bold text-red-300 mb-4">🎨 Fórmula do Criativo Milionário</h4>
                <div className="bg-black/50 p-4 rounded-lg font-mono text-green-400 text-center text-lg">
                  HOOK + PROBLEMA + SOLUÇÃO + PROVA + CTA = CONVERSÃO
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-800/50 p-6 rounded-xl">
                  <h5 className="font-bold text-blue-300 mb-3">📝 TEXTO (Copy)</h5>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li>• <strong>Hook:</strong> Primeira frase para parar o scroll</li>
                    <li>• <strong>Problema:</strong> Dor que seu público sente</li>
                    <li>• <strong>Solução:</strong> Como você resolve</li>
                    <li>• <strong>Prova:</strong> Resultado, depoimento, número</li>
                    <li>• <strong>CTA:</strong> Ação clara e específica</li>
                  </ul>
                </div>

                <div className="bg-gray-800/50 p-6 rounded-xl">
                  <h5 className="font-bold text-green-300 mb-3">🖼️ VISUAL</h5>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li>• <strong>Contraste:</strong> Cores que chamam atenção</li>
                    <li>• <strong>Faces:</strong> Pessoas geram mais engajamento</li>
                    <li>• <strong>Movimento:</strong> Vídeos performam 3x melhor</li>
                    <li>• <strong>Texto na imagem:</strong> Máximo 20%</li>
                    <li>• <strong>Formato:</strong> Quadrado ou vertical</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-900/30 to-teal-900/30 p-8 rounded-2xl border border-green-500/30 mb-8">
              <h4 className="text-xl font-bold text-green-300 mb-4">📊 Case: Criativo de R$ 500k</h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-bold text-green-300 mb-2">Copy Vencedor:</h5>
                  <div className="bg-black/50 p-4 rounded-lg text-sm text-gray-300">
                    <p><strong>"Você sabia que 97% das pessoas que fazem dieta recuperam o peso em 1 ano?"</strong></p>
                    <p className="mt-2">Eu descobri o método que quebra esse ciclo...</p>
                    <p className="mt-2">Em 90 dias, meus alunos perderam em média 15kg SEM dieta restritiva.</p>
                    <p className="mt-2"><strong>Quer saber como? Clique aqui 👇</strong></p>
                  </div>
                </div>
                <div>
                  <h5 className="font-bold text-green-300 mb-2">Resultados:</h5>
                  <ul className="space-y-1 text-gray-300 text-sm">
                    <li>• <strong>CTR:</strong> 4.2% (média: 1.5%)</li>
                    <li>• <strong>CPC:</strong> R$ 0.85</li>
                    <li>• <strong>Conversão:</strong> 12.3%</li>
                    <li>• <strong>ROI:</strong> 847%</li>
                    <li>• <strong>Faturamento:</strong> R$ 523.000</li>
                  </ul>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-amber-300 mb-6">PASSO 5: Orçamento Estratégico (Matemática do Sucesso)</h3>

            <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 p-8 rounded-2xl border border-blue-500/30 mb-8">
              <h4 className="text-xl font-bold text-blue-300 mb-4">💰 Fórmula do Orçamento Inteligente</h4>
              
              <div className="space-y-4">
                <div className="bg-black/50 p-4 rounded-lg">
                  <h5 className="font-bold text-yellow-300 mb-2">Orçamento Inicial = (Ticket Médio × 0.3) × 50</h5>
                  <p className="text-gray-300 text-sm">
                    Exemplo: Produto de R$ 100 → (100 × 0.3) × 50 = R$ 1.500/dia inicial
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-green-900/30 p-4 rounded-lg text-center">
                    <h6 className="font-bold text-green-300">TESTE</h6>
                    <p className="text-2xl font-bold text-white">R$ 50-100</p>
                    <p className="text-xs text-gray-400">Primeiros 7 dias</p>
                  </div>
                  <div className="bg-blue-900/30 p-4 rounded-lg text-center">
                    <h6 className="font-bold text-blue-300">OTIMIZAÇÃO</h6>
                    <p className="text-2xl font-bold text-white">R$ 200-500</p>
                    <p className="text-xs text-gray-400">Dias 8-21</p>
                  </div>
                  <div className="bg-purple-900/30 p-4 rounded-lg text-center">
                    <h6 className="font-bold text-purple-300">ESCALA</h6>
                    <p className="text-2xl font-bold text-white">R$ 1000+</p>
                    <p className="text-xs text-gray-400">Após validação</p>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-amber-300 mb-6">PASSO 6: Monitoramento e Otimização</h3>

            <div className="space-y-4 mb-8">
              <div className="bg-gray-800/50 p-6 rounded-xl">
                <h5 className="font-bold text-amber-300 mb-3">📊 Métricas Críticas (Primeiras 48h)</h5>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="space-y-2 text-gray-300">
                    <li>• <strong>CTR {'>'} 2%:</strong> Criativo funcionando</li>
                    <li>• <strong>CPC {'<'} R$ 2:</strong> Audiência adequada</li>
                    <li>• <strong>CPM {'<'} R$ 15:</strong> Boa competitividade</li>
                  </ul>
                  <ul className="space-y-2 text-gray-300">
                    <li>• <strong>Frequência {'<'} 2:</strong> Sem saturação</li>
                    <li>• <strong>Relevância {'>'} 7:</strong> Anúncio aprovado</li>
                    <li>• <strong>Conversões {'>'} 0:</strong> Sistema funcionando</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-black/50 p-8 rounded-2xl border border-gray-600">
              <h4 className="text-xl font-bold text-amber-300 mb-4 text-center">Checklist da Primeira Campanha:</h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-bold text-green-300 mb-3">✅ Antes de Publicar:</h5>
                  <ul className="space-y-1 text-gray-300 text-sm">
                    <li>□ Pixel instalado e testado</li>
                    <li>□ Objetivo alinhado com meta</li>
                    <li>□ Audiência ampla configurada</li>
                    <li>□ 3+ criativos diferentes</li>
                    <li>□ Orçamento conservador</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-bold text-blue-300 mb-3">📈 Primeiros 3 Dias:</h5>
                  <ul className="space-y-1 text-gray-300 text-sm">
                    <li>□ Monitorar métricas 2x/dia</li>
                    <li>□ NÃO fazer mudanças bruscas</li>
                    <li>□ Anotar insights e padrões</li>
                    <li>□ Preparar próximos criativos</li>
                    <li>□ Aguardar dados suficientes</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 4,
      title: "Capítulo 4 – Decifrando os Números do Sucesso",
      icon: <BarChart3 className="w-5 h-5" />,
      content: (
        <div className="space-y-8">
          <img 
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop&auto=format" 
            alt="Analytics e Métricas" 
            className="w-full h-64 object-cover rounded-2xl shadow-2xl mb-8"
          />

          <div className="prose prose-lg max-w-none text-gray-100">
            <h2 className="text-3xl font-bold text-amber-300 mb-6">Como Analisar Seus Resultados Como um Profissional</h2>
            
            <div className="bg-gradient-to-r from-red-900/50 to-orange-900/50 p-8 rounded-2xl border border-red-500/30 mb-8">
              <h3 className="text-2xl font-bold text-red-300 mb-4">🚨 A Verdade Brutal</h3>
              <p className="text-xl leading-relaxed">
                95% das pessoas que fazem tráfego pago olham para as métricas erradas. Elas se preocupam com curtidas, comentários e alcance, enquanto deveriam focar apenas no que gera dinheiro.
              </p>
            </div>

            <p className="text-lg leading-relaxed mb-8">
              O segredo do tráfego pago não é apertar botões e torcer. É ler os números como um cientista, entender o que eles significam e tomar decisões baseadas em dados, não em emoções.
            </p>

            <h3 className="text-2xl font-bold text-amber-300 mb-6">As Únicas Métricas Que Importam</h3>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-gradient-to-br from-green-800 to-green-900 p-6 rounded-xl border border-green-600">
                <h4 className="text-xl font-bold text-green-300 mb-4">💰 MÉTRICAS DE DINHEIRO</h4>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center">
                    <span className="text-green-400 mr-3 text-xl">•</span>
                    <span><strong>ROAS:</strong> Retorno sobre investimento em anúncios</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-400 mr-3 text-xl">•</span>
                    <span><strong>CPA:</strong> Custo por aquisição de cliente</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-400 mr-3 text-xl">•</span>
                    <span><strong>LTV:</strong> Valor vitalício do cliente</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-400 mr-3 text-xl">•</span>
                    <span><strong>Margem de Lucro:</strong> Quanto sobra após custos</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-blue-800 to-blue-900 p-6 rounded-xl border border-blue-600">
                <h4 className="text-xl font-bold text-blue-300 mb-4">📊 MÉTRICAS DE PERFORMANCE</h4>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center">
                    <span className="text-blue-400 mr-3 text-xl">•</span>
                    <span><strong>CTR:</strong> Taxa de cliques (interesse)</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-400 mr-3 text-xl">•</span>
                    <span><strong>CPC:</strong> Custo por clique (eficiência)</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-400 mr-3 text-xl">•</span>
                    <span><strong>CVR:</strong> Taxa de conversão (qualidade)</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-400 mr-3 text-xl">•</span>
                    <span><strong>Frequência:</strong> Quantas vezes a pessoa viu</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-yellow-900/30 to-orange-900/30 p-6 rounded-xl border-l-4 border-yellow-500 mb-8">
              <h4 className="text-xl font-bold text-yellow-300 mb-3">⚡ Regra de Ouro</h4>
              <p className="text-lg">
                <strong>Se uma métrica não te ajuda a tomar uma decisão de otimização, ignore ela.</strong> Curtidas não pagam suas contas. Conversões sim.
              </p>
            </div>

            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=300&fit=crop&auto=format" 
              alt="Dashboard de ROI" 
              className="w-full h-48 object-cover rounded-xl shadow-lg mb-8"
            />

            <h3 className="text-2xl font-bold text-amber-300 mb-6">Decodificando Cada Métrica</h3>

            <div className="space-y-6 mb-8">
              <div className="bg-gradient-to-r from-green-900/50 to-emerald-900/50 p-6 rounded-xl border border-green-500/30">
                <h4 className="text-xl font-bold text-green-300 mb-4">💎 ROAS - A Métrica Mais Importante</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-bold text-green-300 mb-2">O que é:</h5>
                    <p className="text-gray-300 mb-4">Return on Ad Spend - quanto você ganha para cada R$ 1 investido</p>
                    
                    <div className="bg-black/50 p-4 rounded-lg">
                      <p className="text-green-400 font-mono text-center">
                        ROAS = Receita ÷ Investimento em Anúncios
                      </p>
                    </div>
                  </div>
                  <div>
                    <h5 className="font-bold text-green-300 mb-2">Benchmarks:</h5>
                    <ul className="space-y-2 text-gray-300">
                      <li>• <strong>ROAS 2:1</strong> → Ponto de equilíbrio</li>
                      <li>• <strong>ROAS 3:1</strong> → Bom resultado</li>
                      <li>• <strong>ROAS 4:1</strong> → Excelente resultado</li>
                      <li>• <strong>ROAS 5:1+</strong> → Campanha milionária</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-900/50 to-indigo-900/50 p-6 rounded-xl border border-blue-500/30">
                <h4 className="text-xl font-bold text-blue-300 mb-4">🎯 CTR - O Termômetro do Interesse</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-bold text-blue-300 mb-2">O que significa:</h5>
                    <ul className="space-y-2 text-gray-300">
                      <li>• <strong>CTR &lt; 1%:</strong> Criativo ruim, troque</li>
                      <li>• <strong>CTR 1-2%:</strong> Mediano, pode melhorar</li>
                      <li>• <strong>CTR 2-3%:</strong> Bom, mantenha</li>
                      <li>• <strong>CTR 3%+:</strong> Excelente, escale</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-bold text-blue-300 mb-2">Como melhorar:</h5>
                    <ul className="space-y-2 text-gray-300">
                      <li>• Hook mais forte na primeira linha</li>
                      <li>• Imagem com mais contraste</li>
                      <li>• Oferta mais atrativa</li>
                      <li>• Público mais específico</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 p-6 rounded-xl border border-purple-500/30">
                <h4 className="text-xl font-bold text-purple-300 mb-4">💰 CPA - O Custo da Conquista</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-bold text-purple-300 mb-2">Fórmula do Sucesso:</h5>
                    <div className="bg-black/50 p-4 rounded-lg mb-4">
                      <p className="text-purple-400 font-mono text-center">
                        CPA = Gasto Total ÷ Número de Conversões
                      </p>
                    </div>
                    <p className="text-gray-300 text-sm">
                      Seu CPA deve ser no máximo 30% do seu ticket médio para ser lucrativo
                    </p>
                  </div>
                  <div>
                    <h5 className="font-bold text-purple-300 mb-2">Exemplo Prático:</h5>
                    <div className="bg-purple-900/30 p-4 rounded-lg">
                      <ul className="space-y-1 text-gray-300 text-sm">
                        <li>• <strong>Produto:</strong> R$ 300</li>
                        <li>• <strong>CPA máximo:</strong> R$ 90</li>
                        <li>• <strong>CPA atual:</strong> R$ 65</li>
                        <li>• <strong>Margem:</strong> R$ 25 por venda</li>
                        <li>• <strong>Status:</strong> ✅ Lucrativo</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-amber-300 mb-6">Sistema de Análise em 3 Níveis</h3>

            <div className="space-y-6 mb-8">
              <div className="bg-gradient-to-r from-red-900/50 to-orange-900/50 p-6 rounded-xl border border-red-500/30">
                <div className="flex items-center mb-4">
                  <div className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4">1</div>
                  <h4 className="text-xl font-bold text-red-300">NÍVEL EMERGÊNCIA (Primeiras 24h)</h4>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-bold text-red-300 mb-2">🚨 Sinais de Alerta:</h5>
                    <ul className="space-y-1 text-gray-300 text-sm">
                      <li>• CTR &lt; 0.5% → Pause imediatamente</li>
                      <li>• CPC &gt; R$ 5 → Audiência muito específica</li>
                      <li>• CPM &gt; R$ 50 → Muita competição</li>
                      <li>• Zero conversões em 50 cliques</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-bold text-red-300 mb-2">⚡ Ações Imediatas:</h5>
                    <ul className="space-y-1 text-gray-300 text-sm">
                      <li>• Trocar criativo principal</li>
                      <li>• Ampliar audiência</li>
                      <li>• Reduzir orçamento 50%</li>
                      <li>• Verificar pixel/landing page</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-yellow-900/50 to-orange-900/50 p-6 rounded-xl border border-yellow-500/30">
                <div className="flex items-center mb-4">
                  <div className="bg-yellow-500 text-black rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4">2</div>
                  <h4 className="text-xl font-bold text-yellow-300">NÍVEL OTIMIZAÇÃO (Dias 2-7)</h4>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-bold text-yellow-300 mb-2">📊 Análise Profunda:</h5>
                    <ul className="space-y-1 text-gray-300 text-sm">
                      <li>• Comparar performance por horário</li>
                      <li>• Analisar dados demográficos</li>
                      <li>• Identificar dispositivos que convertem</li>
                      <li>• Mapear jornada do cliente</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-bold text-yellow-300 mb-2">🔧 Otimizações:</h5>
                    <ul className="space-y-1 text-gray-300 text-sm">
                      <li>• Ajustar horários de exibição</li>
                      <li>• Excluir públicos que não convertem</li>
                      <li>• Criar lookalikes dos conversores</li>
                      <li>• Testar novos criativos</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-900/50 to-emerald-900/50 p-6 rounded-xl border border-green-500/30">
                <div className="flex items-center mb-4">
                  <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4">3</div>
                  <h4 className="text-xl font-bold text-green-300">NÍVEL ESCALA (Semana 2+)</h4>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-bold text-green-300 mb-2">🚀 Indicadores de Escala:</h5>
                    <ul className="space-y-1 text-gray-300 text-sm">
                      <li>• ROAS consistente &gt; 3:1</li>
                      <li>• CPA estável por 7+ dias</li>
                      <li>• Volume de conversões crescente</li>
                      <li>• Frequência &lt; 2.5</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-bold text-green-300 mb-2">💰 Estratégias de Escala:</h5>
                    <ul className="space-y-1 text-gray-300 text-sm">
                      <li>• Aumentar orçamento 20% a cada 3 dias</li>
                      <li>• Duplicar campanhas vencedoras</li>
                      <li>• Expandir para novos países/regiões</li>
                      <li>• Criar campanhas similares</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <img 
              src="https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=300&fit=crop&auto=format" 
              alt="Relatórios Avançados" 
              className="w-full h-48 object-cover rounded-xl shadow-lg mb-8"
            />

            <h3 className="text-2xl font-bold text-amber-300 mb-6">Case Real: Análise de R$ 2.8 Milhões</h3>

            <div className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 p-8 rounded-2xl border border-purple-500/30 mb-8">
              <h4 className="text-xl font-bold text-purple-300 mb-4">📈 Evolução de 90 Dias</h4>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-black/50 p-6 rounded-lg text-center">
                  <h5 className="font-bold text-red-300 mb-2">MÊS 1</h5>
                  <div className="space-y-2">
                    <p className="text-2xl font-bold text-white">R$ 45k</p>
                    <p className="text-sm text-gray-400">Faturamento</p>
                    <div className="text-xs space-y-1 text-gray-300">
                      <p>ROAS: 2.1</p>
                      <p>CPA: R$ 89</p>
                      <p>CTR: 1.8%</p>
                    </div>
                  </div>
                </div>

                <div className="bg-black/50 p-6 rounded-lg text-center">
                  <h5 className="font-bold text-yellow-300 mb-2">MÊS 2</h5>
                  <div className="space-y-2">
                    <p className="text-2xl font-bold text-white">R$ 180k</p>
                    <p className="text-sm text-gray-400">Faturamento</p>
                    <div className="text-xs space-y-1 text-gray-300">
                      <p>ROAS: 3.8</p>
                      <p>CPA: R$ 52</p>
                      <p>CTR: 2.9%</p>
                    </div>
                  </div>
                </div>

                <div className="bg-black/50 p-6 rounded-lg text-center">
                  <h5 className="font-bold text-green-300 mb-2">MÊS 3</h5>
                  <div className="space-y-2">
                    <p className="text-2xl font-bold text-white">R$ 520k</p>
                    <p className="text-sm text-gray-400">Faturamento</p>
                    <div className="text-xs space-y-1 text-gray-300">
                      <p>ROAS: 5.2</p>
                      <p>CPA: R$ 38</p>
                      <p>CTR: 3.4%</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 bg-green-900/30 p-4 rounded-lg">
                <h5 className="font-bold text-green-300 mb-2">🔑 Principais Otimizações:</h5>
                <ul className="space-y-1 text-gray-300 text-sm">
                  <li>• <strong>Semana 2:</strong> Identificou que mulheres 35-45 convertiam 3x mais</li>
                  <li>• <strong>Semana 4:</strong> Descobriu que vídeos performavam 400% melhor que imagens</li>
                  <li>• <strong>Semana 6:</strong> Horário 19h-22h tinha CPA 60% menor</li>
                  <li>• <strong>Semana 8:</strong> Lookalike 1% de compradores gerou 70% das vendas</li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-orange-900/30 to-red-900/30 p-6 rounded-xl border-l-4 border-orange-500 mb-8">
              <h4 className="text-xl font-bold text-orange-300 mb-3">🎯 Insight Milionário</h4>
              <p className="text-lg">
                "Os dados não mentem, mas você precisa saber fazer as perguntas certas. Cada métrica conta uma história. Sua missão é ser o detetive que desvenda essa história e transforma insights em lucro."
              </p>
            </div>

            <div className="bg-black/50 p-8 rounded-2xl border border-gray-600">
              <h4 className="text-xl font-bold text-amber-300 mb-4 text-center">Dashboard de Controle Diário:</h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-bold text-green-300 mb-3">✅ Métricas para Acompanhar:</h5>
                  <ul className="space-y-1 text-gray-300 text-sm">
                    <li>□ ROAS das últimas 24h</li>
                    <li>□ CPA vs. meta estabelecida</li>
                    <li>□ CTR por criativo</li>
                    <li>□ Frequência por audiência</li>
                    <li>□ Conversões por dispositivo</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-bold text-red-300 mb-3">🚨 Alertas Automáticos:</h5>
                  <ul className="space-y-1 text-gray-300 text-sm">
                    <li>□ ROAS &lt; 2.0 por 2 dias</li>
                    <li>□ CPA 50% acima da meta</li>
                    <li>□ CTR &lt; 1% por 24h</li>
                    <li>□ Frequência &gt; 3.0</li>
                    <li>□ Zero conversões em 100 cliques</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 5,
      title: "Capítulo 5 – Escalonamento Milionário",
      icon: <TrendingUp className="w-5 h-5" />,
      content: (
        <div className="space-y-8">
          <img 
            src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&h=400&fit=crop&auto=format" 
            alt="Crescimento Exponencial" 
            className="w-full h-64 object-cover rounded-2xl shadow-2xl mb-8"
          />

          <div className="prose prose-lg max-w-none text-gray-100">
            <h2 className="text-3xl font-bold text-amber-300 mb-6">O Segredo Para Crescer Sem Quebrar</h2>
            
            <div className="bg-gradient-to-r from-green-900/50 to-emerald-900/50 p-8 rounded-2xl border border-green-500/30 mb-8">
              <h3 className="text-2xl font-bold text-green-300 mb-4">🚀 A Diferença Entre R$ 10k e R$ 1M por Mês</h3>
              <p className="text-xl leading-relaxed">
                Não é sorte. Não é timing. É sistema. Empresas que faturam milhões seguem protocolos específicos de escalonamento que 99% dos empreendedores desconhecem.
              </p>
            </div>

            <p className="text-lg leading-relaxed mb-8">
              Depois que você encontrar uma campanha que funciona, a tentação é aumentar o orçamento de R$ 100 para R$ 1.000 da noite para o dia. <strong>Esse é o erro que quebra 90% dos negócios.</strong>
            </p>

            <div className="bg-gradient-to-r from-red-900/50 to-orange-900/50 p-8 rounded-2xl border border-red-500/30 mb-8">
              <h3 className="text-2xl font-bold text-red-300 mb-4">⚠️ Os 3 Erros Fatais do Escalonamento</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-black/50 p-4 rounded-lg">
                  <h4 className="font-bold text-red-300 mb-2">1. PRESSA MORTAL</h4>
                  <p className="text-gray-300 text-sm">Aumentar orçamento muito rápido quebra o algoritmo e destrói a performance</p>
                </div>
                <div className="bg-black/50 p-4 rounded-lg">
                  <h4 className="font-bold text-red-300 mb-2">2. FALTA DE ESTRUTURA</h4>
                  <p className="text-gray-300 text-sm">Escalar sem sistema de monitoramento é como dirigir de olhos vendados</p>
                </div>
                <div className="bg-black/50 p-4 rounded-lg">
                  <h4 className="font-bold text-red-300 mb-2">3. DEPENDÊNCIA ÚNICA</h4>
                  <p className="text-gray-300 text-sm">Apostar tudo em uma campanha é receita para o desastre</p>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-amber-300 mb-6">O Sistema de Escalonamento Científico</h3>

            <div className="space-y-6 mb-8">
              <div className="bg-gradient-to-r from-blue-900/50 to-indigo-900/50 p-6 rounded-xl border border-blue-500/30">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4">1</div>
                  <h4 className="text-xl font-bold text-blue-300">FASE VALIDAÇÃO (Dias 1-14)</h4>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-bold text-blue-300 mb-3">🎯 Critérios de Validação:</h5>
                    <ul className="space-y-2 text-gray-300">
                      <li>• <strong>ROAS &gt; 3:1</strong> por 7 dias consecutivos</li>
                      <li>• <strong>50+ conversões</strong> para dados estatísticos</li>
                      <li>• <strong>CPA estável</strong> (variação &lt; 20%)</li>
                      <li>• <strong>Frequência &lt; 2.5</strong> (sem saturação)</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-bold text-blue-300 mb-3">⚡ Ações Nesta Fase:</h5>
                    <ul className="space-y-2 text-gray-300">
                      <li>• Monitorar métricas 3x por dia</li>
                      <li>• Documentar padrões de performance</li>
                      <li>• Preparar criativos de backup</li>
                      <li>• Mapear horários de pico</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-900/50 to-emerald-900/50 p-6 rounded-xl border border-green-500/30">
                <div className="flex items-center mb-4">
                  <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4">2</div>
                  <h4 className="text-xl font-bold text-green-300">FASE ESCALONAMENTO VERTICAL (Dias 15-30)</h4>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-bold text-green-300 mb-3">📈 Protocolo 20/3:</h5>
                    <div className="bg-black/50 p-4 rounded-lg mb-3">
                      <p className="text-green-400 font-mono text-center">
                        Aumento de 20% a cada 3 dias
                      </p>
                    </div>
                    <ul className="space-y-1 text-gray-300 text-sm">
                      <li>• Dia 1: R$ 100 → R$ 120</li>
                      <li>• Dia 4: R$ 120 → R$ 144</li>
                      <li>• Dia 7: R$ 144 → R$ 173</li>
                      <li>• Dia 10: R$ 173 → R$ 208</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-bold text-green-300 mb-3">🚨 Sinais de Alerta:</h5>
                    <ul className="space-y-2 text-gray-300">
                      <li>• ROAS cai &gt; 15% por 2 dias</li>
                      <li>• CPA aumenta &gt; 25%</li>
                      <li>• CTR diminui &gt; 30%</li>
                      <li>• Frequência &gt; 3.0</li>
                    </ul>
                    <div className="bg-red-900/30 p-3 rounded-lg mt-3">
                      <p className="text-red-300 text-sm font-bold">
                        Se 2+ alertas ativarem: PAUSE e analise
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 p-6 rounded-xl border border-purple-500/30">
                <div className="flex items-center mb-4">
                  <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4">3</div>
                  <h4 className="text-xl font-bold text-purple-300">FASE ESCALONAMENTO HORIZONTAL (Mês 2+)</h4>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-bold text-purple-300 mb-3">🔄 Estratégias de Diversificação:</h5>
                    <ul className="space-y-2 text-gray-300">
                      <li>• <strong>Duplicação:</strong> Copiar campanha vencedora</li>
                      <li>• <strong>Lookalikes:</strong> 1%, 2%, 3% da base</li>
                      <li>• <strong>Geo-expansão:</strong> Novos estados/países</li>
                      <li>• <strong>Novos criativos:</strong> Variações do vencedor</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-bold text-purple-300 mb-3">📊 Distribuição de Orçamento:</h5>
                    <ul className="space-y-2 text-gray-300">
                      <li>• <strong>60%:</strong> Campanhas validadas</li>
                      <li>• <strong>25%:</strong> Testes de escala</li>
                      <li>• <strong>10%:</strong> Novos criativos</li>
                      <li>• <strong>5%:</strong> Experimentos</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=300&fit=crop&auto=format" 
              alt="Múltiplas Campanhas" 
              className="w-full h-48 object-cover rounded-xl shadow-lg mb-8"
            />

            <h3 className="text-2xl font-bold text-amber-300 mb-6">Case Real: De R$ 5k para R$ 500k em 120 Dias</h3>

            <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-600 mb-8">
              <h4 className="text-xl font-bold text-amber-300 mb-4">📈 Cronologia do Crescimento</h4>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4 p-4 bg-blue-900/30 rounded-lg">
                  <div className="bg-blue-500 rounded-full p-2 text-white font-bold text-sm">MÊS 1</div>
                  <div className="flex-1">
                    <h5 className="font-bold text-blue-300">Validação e Otimização</h5>
                    <p className="text-gray-300 text-sm">R$ 50/dia → R$ 200/dia | ROAS: 2.1 → 3.8 | Faturamento: R$ 15k</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-green-900/30 rounded-lg">
                  <div className="bg-green-500 rounded-full p-2 text-white font-bold text-sm">MÊS 2</div>
                  <div className="flex-1">
                    <h5 className="font-bold text-green-300">Escalonamento Vertical</h5>
                    <p className="text-gray-300 text-sm">R$ 200/dia → R$ 800/dia | ROAS: 3.8 → 4.2 | Faturamento: R$ 67k</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-purple-900/30 rounded-lg">
                  <div className="bg-purple-500 rounded-full p-2 text-white font-bold text-sm">MÊS 3</div>
                  <div className="flex-1">
                    <h5 className="font-bold text-purple-300">Escalonamento Horizontal</h5>
                    <p className="text-gray-300 text-sm">5 campanhas ativas | R$ 2.500/dia total | ROAS: 4.5 | Faturamento: R$ 180k</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-yellow-900/30 rounded-lg">
                  <div className="bg-yellow-500 rounded-full p-2 text-black font-bold text-sm">MÊS 4</div>
                  <div className="flex-1">
                    <h5 className="font-bold text-yellow-300">Diversificação Total</h5>
                    <p className="text-gray-300 text-sm">12 campanhas | 3 países | R$ 6.000/dia | ROAS: 4.8 | Faturamento: R$ 520k</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 bg-green-900/30 p-4 rounded-lg">
                <h5 className="font-bold text-green-300 mb-2">🔑 Fatores Críticos do Sucesso:</h5>
                <ul className="space-y-1 text-gray-300 text-sm">
                  <li>• <strong>Paciência:</strong> Nunca aumentou mais de 20% por vez</li>
                  <li>• <strong>Dados:</strong> Todas as decisões baseadas em métricas</li>
                  <li>• <strong>Backup:</strong> Sempre teve 3+ criativos funcionando</li>
                  <li>• <strong>Diversificação:</strong> Não dependia de uma única campanha</li>
                </ul>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-amber-300 mb-6">Sistema de Monitoramento Avançado</h3>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-gradient-to-br from-blue-800 to-blue-900 p-6 rounded-xl border border-blue-600">
                <h4 className="text-xl font-bold text-blue-300 mb-4">📊 Dashboard de Controle</h4>
                <div className="space-y-3">
                  <div className="bg-black/50 p-3 rounded-lg">
                    <h5 className="font-bold text-blue-300 text-sm mb-1">ROAS por Campanha</h5>
                    <div className="flex justify-between text-xs text-gray-300">
                      <span>Campanha A: 4.2</span>
                      <span className="text-green-400">✅</span>
                    </div>
                    <div className="flex justify-between text-xs text-gray-300">
                      <span>Campanha B: 2.8</span>
                      <span className="text-yellow-400">⚠️</span>
                    </div>
                    <div className="flex justify-between text-xs text-gray-300">
                      <span>Campanha C: 1.9</span>
                      <span className="text-red-400">🚨</span>
                    </div>
                  </div>
                  
                  <div className="bg-black/50 p-3 rounded-lg">
                    <h5 className="font-bold text-blue-300 text-sm mb-1">Orçamento Diário</h5>
                    <div className="text-xs text-gray-300">
                      <p>Total: R$ 2.450</p>
                      <p>Utilizado: R$ 2.380 (97%)</p>
                      <p>Disponível: R$ 70</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-800 to-green-900 p-6 rounded-xl border border-green-600">
                <h4 className="text-xl font-bold text-green-300 mb-4">🚨 Sistema de Alertas</h4>
                <div className="space-y-3">
                  <div className="bg-red-900/30 p-3 rounded-lg border border-red-500/50">
                    <h5 className="font-bold text-red-300 text-sm mb-1">Alertas Críticos</h5>
                    <ul className="text-xs text-gray-300 space-y-1">
                      <li>• ROAS &lt; 2.0 por 24h</li>
                      <li>• CPA &gt; 150% da meta</li>
                      <li>• Zero conversões em 100 cliques</li>
                    </ul>
                  </div>
                  
                  <div className="bg-yellow-900/30 p-3 rounded-lg border border-yellow-500/50">
                    <h5 className="font-bold text-yellow-300 text-sm mb-1">Alertas de Atenção</h5>
                    <ul className="text-xs text-gray-300 space-y-1">
                      <li>• CTR &lt; 1.5% por 12h</li>
                      <li>• Frequência &gt; 2.5</li>
                      <li>• CPC aumentou &gt; 30%</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-yellow-900/30 to-orange-900/30 p-6 rounded-xl border-l-4 border-yellow-500 mb-8">
              <h4 className="text-xl font-bold text-yellow-300 mb-3">⚡ Hack Milionário</h4>
              <p className="text-lg">
                "O escalonamento não é sobre aumentar orçamento. É sobre multiplicar sistemas que funcionam. Um sistema de R$ 100/dia que gera ROAS 4:1 vale mais que um sistema de R$ 1.000/dia que gera ROAS 1.5:1."
              </p>
            </div>

            <h3 className="text-2xl font-bold text-amber-300 mb-6">Protocolo de Emergência</h3>

            <div className="bg-gradient-to-r from-red-900/50 to-orange-900/50 p-8 rounded-2xl border border-red-500/30 mb-8">
              <h4 className="text-xl font-bold text-red-300 mb-4">🆘 Quando Tudo Dá Errado</h4>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-bold text-red-300 mb-3">🚨 Sinais de Colapso:</h5>
                  <ul className="space-y-2 text-gray-300">
                    <li>• ROAS despenca &gt; 50% em 24h</li>
                    <li>• CPA dobra sem explicação</li>
                    <li>• CTR cai para &lt; 0.5%</li>
                    <li>• Frequência &gt; 5.0</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-bold text-red-300 mb-3">⚡ Protocolo de Recuperação:</h5>
                  <ol className="space-y-2 text-gray-300">
                    <li>1. <strong>PAUSE</strong> campanhas problemáticas</li>
                    <li>2. <strong>VOLTE</strong> ao orçamento anterior</li>
                    <li>3. <strong>ANALISE</strong> o que mudou</li>
                    <li>4. <strong>TESTE</strong> novos criativos</li>
                    <li>5. <strong>RECOMECE</strong> o escalonamento</li>
                  </ol>
                </div>
              </div>

              <div className="mt-6 bg-black/50 p-4 rounded-lg">
                <p className="text-orange-300 font-bold text-center">
                  "Melhor perder 1 dia de lucro do que 1 mês tentando recuperar uma campanha quebrada"
                </p>
              </div>
            </div>

            <div className="bg-black/50 p-8 rounded-2xl border border-gray-600">
              <h4 className="text-xl font-bold text-amber-300 mb-4 text-center">Checklist do Escalonamento Perfeito:</h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-bold text-green-300 mb-3">✅ Antes de Escalar:</h5>
                  <ul className="space-y-1 text-gray-300 text-sm">
                    <li>□ ROAS &gt; 3:1 por 7+ dias</li>
                    <li>□ 50+ conversões coletadas</li>
                    <li>□ CPA estável (variação &lt; 20%)</li>
                    <li>□ Criativos de backup prontos</li>
                    <li>□ Sistema de monitoramento ativo</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-bold text-blue-300 mb-3">📈 Durante o Escalonamento:</h5>
                  <ul className="space-y-1 text-gray-300 text-sm">
                    <li>□ Aumentos máximos de 20%</li>
                    <li>□ Intervalo mínimo de 3 dias</li>
                    <li>□ Monitoramento 3x por dia</li>
                    <li>□ Documentar todas as mudanças</li>
                    <li>□ Ter plano B sempre pronto</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 6,
      title: "Conclusão – Sua Jornada Milionária Começa Agora",
      icon: <Crown className="w-5 h-5" />,
      content: (
        <div className="space-y-8">
          <div className="text-center mb-12">
            <img 
              src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&h=400&fit=crop&auto=format" 
              alt="Sucesso e Conquista" 
              className="w-full h-64 object-cover rounded-2xl shadow-2xl mb-8"
            />
            <div className="bg-gradient-to-r from-gold-400 to-yellow-500 text-black px-8 py-4 rounded-full inline-block font-bold text-xl mb-6">
              🏆 VOCÊ CHEGOU AO FINAL - AGORA É HORA DA AÇÃO
            </div>
          </div>

          <div className="prose prose-lg max-w-none text-gray-100">
            <h2 className="text-3xl font-bold text-amber-300 mb-6">Você Não É Mais a Mesma Pessoa</h2>
            
            <p className="text-xl leading-relaxed mb-8 text-blue-300">
              Quando você começou a ler este ebook, você era apenas mais uma pessoa com sonhos de liberdade financeira. Agora, você tem nas mãos o mesmo sistema que criou milhões em faturamento.
            </p>

            <div className="bg-gradient-to-r from-green-900/50 to-emerald-900/50 p-8 rounded-2xl border border-green-500/30 mb-8">
              <h3 className="text-2xl font-bold text-green-300 mb-4">🎯 O Que Você Aprendeu</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-green-400 mr-3 text-xl">✓</span>
                    <span>A verdade sobre tráfego pago (não é sorte, é sistema)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-3 text-xl">✓</span>
                    <span>Por que o "público-alvo perfeito" é um mito</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-3 text-xl">✓</span>
                    <span>Como criar campanhas que convertem desde o primeiro dia</span>
                  </li>
                </ul>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-green-400 mr-3 text-xl">✓</span>
                    <span>Quais métricas realmente importam (e quais ignorar)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-3 text-xl">✓</span>
                    <span>O sistema científico de escalonamento</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-3 text-xl">✓</span>
                    <span>Como transformar R$ 100 em R$ 500 consistentemente</span>
                  </li>
                </ul>
              </div>
            </div>

            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=300&fit=crop&auto=format" 
              alt="Momento de Decisão" 
              className="w-full h-48 object-cover rounded-xl shadow-lg mb-8"
            />

            <h3 className="text-2xl font-bold text-amber-300 mb-6">A Diferença Entre Saber e Fazer</h3>

            <div className="bg-gradient-to-r from-red-900/50 to-orange-900/50 p-8 rounded-2xl border border-red-500/30 mb-8">
              <h4 className="text-xl font-bold text-red-300 mb-4">⚠️ O Momento da Verdade</h4>
              <p className="text-lg leading-relaxed mb-4">
                Agora você tem duas opções: fechar este ebook e continuar sonhando, ou abrir o Gerenciador de Anúncios e criar sua primeira campanha.
              </p>
              <div className="bg-black/50 p-4 rounded-lg">
                <p className="text-orange-300 font-bold text-center text-lg">
                  "Conhecimento sem ação é apenas entretenimento caro"
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-600">
                <h4 className="text-xl font-bold text-gray-300 mb-4">😴 O Caminho da Mediocridade</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>• "Vou começar na segunda-feira"</li>
                  <li>• "Preciso estudar mais um pouco"</li>
                  <li>• "Não tenho dinheiro para testar"</li>
                  <li>• "E se não der certo?"</li>
                  <li>• "Talvez não seja para mim"</li>
                </ul>
                <div className="mt-4 p-3 bg-red-900/30 rounded-lg">
                  <p className="text-red-300 font-bold text-center">Resultado: Mesma vida de sempre</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-800 to-green-900 p-6 rounded-xl border border-green-600">
                <h4 className="text-xl font-bold text-green-300 mb-4">🚀 O Caminho do Sucesso</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>• "Vou começar hoje mesmo"</li>
                  <li>• "Vou aprender fazendo"</li>
                  <li>• "R$ 50 é um investimento, não um gasto"</li>
                  <li>• "E se der certo?"</li>
                  <li>• "Eu mereço uma vida melhor"</li>
                </ul>
                <div className="mt-4 p-3 bg-green-900/30 rounded-lg">
                  <p className="text-green-300 font-bold text-center">Resultado: Liberdade financeira</p>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-amber-300 mb-6">Seu Plano de Ação dos Próximos 30 Dias</h3>

            <div className="space-y-6 mb-8">
              <div className="bg-gradient-to-r from-blue-900/50 to-indigo-900/50 p-6 rounded-xl border border-blue-500/30">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4">1</div>
                  <h4 className="text-xl font-bold text-blue-300">SEMANA 1: FUNDAÇÃO</h4>
                </div>
                <ul className="space-y-2 text-gray-300 ml-4">
                  <li>• Criar conta no Business Manager</li>
                  <li>• Instalar pixel no seu site/landing page</li>
                  <li>• Configurar forma de pagamento</li>
                  <li>• Criar sua primeira campanha com R$ 50/dia</li>
                  <li>• Monitorar métricas básicas</li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-green-900/50 to-emerald-900/50 p-6 rounded-xl border border-green-500/30">
                <div className="flex items-center mb-4">
                  <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4">2</div>
                  <h4 className="text-xl font-bold text-green-300">SEMANA 2: OTIMIZAÇÃO</h4>
                </div>
                <ul className="space-y-2 text-gray-300 ml-4">
                  <li>• Analisar dados da primeira semana</li>
                  <li>• Pausar criativos com CTR &lt; 1%</li>
                  <li>• Criar 3 novos criativos baseados nos insights</li>
                  <li>• Ajustar audiências que não converteram</li>
                  <li>• Documentar padrões de performance</li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 p-6 rounded-xl border border-purple-500/30">
                <div className="flex items-center mb-4">
                  <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4">3</div>
                  <h4 className="text-xl font-bold text-purple-300">SEMANA 3: VALIDAÇÃO</h4>
                </div>
                <ul className="space-y-2 text-gray-300 ml-4">
                  <li>• Identificar campanhas com ROAS &gt; 3:1</li>
                  <li>• Coletar pelo menos 50 conversões</li>
                  <li>• Criar lookalike dos compradores</li>
                  <li>• Preparar criativos de backup</li>
                  <li>• Planejar estratégia de escalonamento</li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-yellow-900/50 to-orange-900/50 p-6 rounded-xl border border-yellow-500/30">
                <div className="flex items-center mb-4">
                  <div className="bg-yellow-500 text-black rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4">4</div>
                  <h4 className="text-xl font-bold text-yellow-300">SEMANA 4: ESCALONAMENTO</h4>
                </div>
                <ul className="space-y-2 text-gray-300 ml-4">
                  <li>• Aplicar protocolo 20/3 nas campanhas validadas</li>
                  <li>• Duplicar campanhas vencedoras</li>
                  <li>• Testar expansão geográfica</li>
                  <li>• Implementar sistema de monitoramento avançado</li>
                  <li>• Celebrar seus primeiros R$ 10k em vendas!</li>
                </ul>
              </div>
            </div>

            <img 
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=300&fit=crop&auto=format" 
              alt="Conquista e Vitória" 
              className="w-full h-48 object-cover rounded-xl shadow-lg mb-8"
            />

            <h3 className="text-2xl font-bold text-amber-300 mb-6">A Última Coisa Que Você Precisa Saber</h3>

            <div className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 p-8 rounded-2xl border border-purple-500/30 mb-8">
              <h4 className="text-xl font-bold text-purple-300 mb-4">💎 O Segredo Final</h4>
              <p className="text-lg leading-relaxed mb-4">
                Não existe momento perfeito. Não existe preparação suficiente. Não existe garantia de sucesso. Mas existe uma coisa que separa quem vence de quem fica para trás:
              </p>
              <div className="bg-black/50 p-6 rounded-lg">
                <p className="text-amber-300 font-bold text-center text-2xl">
                  CORAGEM PARA COMEÇAR
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 p-8 rounded-2xl border border-green-500/30 mb-8">
              <h4 className="text-xl font-bold text-green-300 mb-4">🎯 Sua Missão (Se Você Aceitar)</h4>
              <div className="space-y-4">
                <p className="text-lg">
                  Nas próximas 24 horas, você vai criar sua primeira campanha de tráfego pago. Não importa se você tem medo. Não importa se você acha que não está pronto.
                </p>
                <p className="text-lg">
                  Você vai investir R$ 50 e descobrir que o mundo não vai acabar. Você vai ver seus primeiros cliques chegando. Você vai sentir a adrenalina da primeira conversão.
                </p>
                <p className="text-lg font-bold text-green-300">
                  E então você vai entender que sua vida mudou para sempre.
                </p>
              </div>
            </div>

            <div className="text-center bg-gradient-to-r from-amber-600 to-orange-600 p-12 rounded-2xl mb-8">
              <h3 className="text-3xl font-bold text-white mb-6">Bem-vindo ao Clube dos 1%</h3>
              <p className="text-xl text-white mb-6">
                Você agora faz parte do seleto grupo de pessoas que não apenas sonham, mas fazem acontecer.
              </p>
              <div className="bg-black/30 p-6 rounded-xl">
                <p className="text-2xl font-bold text-yellow-300 mb-2">
                  "O futuro pertence àqueles que acreditam na beleza de seus sonhos"
                </p>
                <p className="text-white">- Eleanor Roosevelt</p>
              </div>
            </div>

            <div className="bg-black/50 p-8 rounded-2xl border border-gray-600">
              <h4 className="text-xl font-bold text-amber-300 mb-4 text-center">Seu Compromisso Final:</h4>
              <div className="text-center space-y-4">
                <p className="text-lg text-gray-300">
                  "Eu, _________________, me comprometo a aplicar pelo menos uma estratégia deste ebook nas próximas 24 horas."
                </p>
                <p className="text-lg text-gray-300">
                  "Eu entendo que conhecimento sem ação é inútil, e que minha liberdade financeira depende das decisões que eu tomar hoje."
                </p>
                <p className="text-lg text-gray-300">
                  "Eu mereço uma vida extraordinária, e vou lutar por ela."
                </p>
                <div className="mt-8 p-4 bg-green-900/30 rounded-lg">
                  <p className="text-green-300 font-bold text-xl">
                    Assinatura: _________________ Data: _________
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-white mb-4">🚀 Sua Jornada Milionária Começa AGORA</h3>
                <p className="text-lg text-white mb-6">
                  Não deixe este momento passar. Não seja mais uma pessoa que "um dia vai fazer". Seja a pessoa que faz HOJE.
                </p>
                <div className="bg-white/20 p-4 rounded-lg">
                  <p className="text-yellow-300 font-bold text-xl">
                    O mundo está esperando pelo seu sucesso. Não o decepcione.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setReadingProgress(prev => {
        const increment = 100 / (chapters[currentChapter].content.props.children.length * 50);
        return Math.min(prev + increment, 100);
      });
    }, 100);

    return () => clearInterval(timer);
  }, [currentChapter, chapters]);

  useEffect(() => {
    if (readingProgress >= 90) {
      setCompletedChapters(prev => new Set([...prev, currentChapter]));
    }
  }, [readingProgress, currentChapter]);

  const nextChapter = () => {
    if (currentChapter < chapters.length - 1) {
      setCurrentChapter(currentChapter + 1);
      setReadingProgress(0);
    }
  };

  const prevChapter = () => {
    if (currentChapter > 0) {
      setCurrentChapter(currentChapter - 1);
      setReadingProgress(0);
    }
  };

  const goToChapter = (index) => {
    setCurrentChapter(index);
    setReadingProgress(0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <div className="bg-black/50 backdrop-blur-sm border-b border-purple-500/30 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <BookOpen className="w-8 h-8 text-amber-400" />
              <div>
                <h1 className="text-xl font-bold text-white">Tráfego Pago Simples</h1>
                <p className="text-sm text-gray-400">O Passo a Passo Para Começar do Zero</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <p className="text-sm text-gray-400">Progresso</p>
                <p className="text-lg font-bold text-amber-400">{Math.round(readingProgress)}%</p>
              </div>
              <div className="w-32 h-2 bg-gray-700 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-amber-400 to-orange-500 transition-all duration-300"
                  style={{ width: `${readingProgress}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex gap-8">
          {/* Sidebar */}
          <div className="w-80 flex-shrink-0">
            <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/30 sticky top-24">
              <h3 className="text-lg font-bold text-amber-300 mb-4 flex items-center">
                <BookOpen className="w-5 h-5 mr-2" />
                Índice
              </h3>
              <div className="space-y-2">
                {chapters.map((chapter, index) => (
                  <button
                    key={chapter.id}
                    onClick={() => goToChapter(index)}
                    className={`w-full text-left p-3 rounded-lg transition-all duration-200 flex items-center space-x-3 ${
                      currentChapter === index
                        ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'
                        : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50'
                    }`}
                  >
                    <div className="flex-shrink-0">
                      {completedChapters.has(index) ? (
                        <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs">✓</span>
                        </div>
                      ) : (
                        chapter.icon
                      )}
                    </div>
                    <span className="text-sm font-medium">{chapter.title}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/30">
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-bold text-amber-300 flex items-center">
                    {chapters[currentChapter].icon}
                    <span className="ml-3">{chapters[currentChapter].title}</span>
                  </h2>
                  <div className="text-sm text-gray-400">
                    {currentChapter + 1} de {chapters.length}
                  </div>
                </div>
                <div className="w-full h-1 bg-gray-700 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-amber-400 to-orange-500 transition-all duration-300"
                    style={{ width: `${readingProgress}%` }}
                  />
                </div>
              </div>

              <div className="prose prose-lg max-w-none">
                {chapters[currentChapter].content}
              </div>

              {/* Navigation */}
              <div className="flex justify-between items-center mt-12 pt-8 border-t border-gray-700">
                <button
                  onClick={prevChapter}
                  disabled={currentChapter === 0}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition-all duration-200 ${
                    currentChapter === 0
                      ? 'bg-gray-800 text-gray-500 cursor-not-allowed'
                      : 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700'
                  }`}
                >
                  <ChevronLeft className="w-5 h-5" />
                  <span>Anterior</span>
                </button>

                <div className="flex space-x-2">
                  {chapters.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToChapter(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-200 ${
                        currentChapter === index
                          ? 'bg-amber-400'
                          : completedChapters.has(index)
                          ? 'bg-green-500'
                          : 'bg-gray-600 hover:bg-gray-500'
                      }`}
                    />
                  ))}
                </div>

                <button
                  onClick={nextChapter}
                  disabled={currentChapter === chapters.length - 1}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition-all duration-200 ${
                    currentChapter === chapters.length - 1
                      ? 'bg-gray-800 text-gray-500 cursor-not-allowed'
                      : 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700'
                  }`}
                >
                  <span>Próximo</span>
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EbookViewer;