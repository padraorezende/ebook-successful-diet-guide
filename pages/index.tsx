import { Card } from '@/components/Card/Card';
import { Question } from '@/components/Question/Question';
import { Title } from '@/components/Title/Title';
import { faCheck, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Amatic_SC } from 'next/font/google';
import Head from 'next/head';
import { useState } from 'react';

const inter = Amatic_SC({
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ['latin'],
})


export default function Home() {

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
      <Head>
        <title>O guia ideal para uma dieta de sucesso</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <header className="w-full shadow-md">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-2 md:mb-0">
            <h1 className={`text-3xl font-bold leading-tight ${inter.className}`} >
              O GUIA IDEAL PARA UMA DIETA DE SUCESSO:
            </h1>
            <div className="inline-flex items-center">
              <h2 className={`text-xl font-bold leading-tight ${inter.className}`} >
                Saiba como alcançar seus objetivos
              </h2>
              <img src="/images/objective.png" alt="Stripe" className="w-8 ml-2" />
            </div>
          </div>
          <a href="#" className="text-blue-600 hover:text-blue-800 font-medium hidden sm:block">
            Ver outros produtos
          </a>
        </div>
      </header>

      <div className="py-12 h-full flex-col text-center">
        <h2 className="text-xl font-semibold text-gray-800 mb-8">
          Aprenda a alcançar seus objetivos com o nosso guia completo
        </h2>

        <div className="flex flex-col items-center justify-center mb-8">
          <div className="md:w-1/2 mx-2">
            <video className="rounded-lg shadow-lg mx-auto" controls autoPlay>
              <source src="/videos/ebook.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="md:w-1/2 mt-8 mx-2 flex flex-col">
            <button className="py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg shadow-lg font-medium">
              Finalizar minha Compra
            </button>
            <div className="flex flex-row mt-4 items-center justify-center">
              <img src="/images/visa.png" alt="Visa" className="w-8 mr-4" />
              <img src="/images/mastercard.png" alt="Mastercard" className="w-8 mr-4" />
              <img src="/images/paypal.png" alt="PayPal" className="w-8 mr-4" />
              <img src="/images/elo.png" alt="Stripe" className="w-8 mr-4" />
            </div>
          </div>
        </div>

        <div className="bg-gray-200 py-12">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            O que você vai aprender com o nosso guia de nutrição:
          </h3>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-center">

            <div className="w-full md:w-1/4 px-4 mb-4 md:mb-0">
              <img src="/images/ebook.png" alt="Guia de Nutrição" className="w-[500px]" />
            </div>

            <div className="w-full px-4 md:w-3/4">
              <div className="text-gray-700">
                <Title description="Por que uma dieta é importante para sua saúde e bem-estar" />
                <Title description="Definindo seus objetivos: como definir metas realistas para sua dieta" />
                <Title description="Fazendo escolhas alimentares saudáveis: como escolher alimentos nutritivos e balanceados" />
                <Title description="Planejando suas refeições: como elaborar um plano de alimentação semanal" />
                <Title description="Gerenciando seus desejos alimentares: estratégias para evitar compulsões alimentares!" />
                <Title description="Suplementos alimentares: quais suplementos podem ajudar a apoiar sua dieta" />
                <Title description="Mantendo a motivação: como lidar com os obstáculos e manter o compromisso com sua dieta" />
                <Title description="Conclusão: como manter uma dieta saudável a longo prazo e alcançar seus objetivos de saúde e bem-estar" />
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto py-12">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            O que nossos clientes estão dizendo:
          </h3>

          <div className="flex flex-col md:flex-row items-center justify-center">
            <Card description='O guia de nutrição me ajudou a entender melhor como escolher os alimentos certos para cada refeição, e as receitas são incríveis!' location='São Paulo' name='João Silva' />
            <Card description='Esse guia é incrível! As dicas práticas me ajudaram a montar meu cardápio semanal de forma equilibrada e variada.' location='Curitiba' name='Roberto Ferreira' />
            <Card description='Com o guia de nutrição, aprendi a importância de cada grupo alimentar e como combiná-los para uma dieta saudável e saborosa.' location='Recife' name='Camila Lima' />
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center mt-4">
            <Card description='Com o guia de nutrição, consegui alcançar meus objetivos de perda de peso de forma saudável e sem sacrifícios.' location='Rio de Janeiro' name='Maria Souza' />
            <Card description='As informações do guia de nutrição são muito claras e objetivas, me ajudaram a desmistificar muitos mitos sobre alimentação.' location='Porto Alegre' name='Fernanda Oliveira' />
          </div>

        </div>

        <div className="bg-gray-200 py-12">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-10">
              <div className="md:w-1/2 flex justify-center">
                <img src="/images/garantia.png" alt="Garantia de satisfação" className='w-[200px]' />
              </div>
              <div className="md:w-1/2 text-center md:text-left mx-4">
                <p className="text-lg text-gray-700 mb-4 leading-7 text-justify">
                  Nós estamos confiantes que você irá amar o nosso ebook, mas caso você não fique satisfeito com a sua compra, oferecemos uma garantia de devolução do dinheiro em até 7 dias após a compra.
                </p>
                <div className="flex justify-center md:justify-start items-center text-center">
                  <FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2 w-6" />
                  <p className="text-gray-700 text-base leading-6">
                    Nossa principal prioridade é a sua satisfação!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto py-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Perguntas frequentes</h2>
          <div className="grid sm:grid-cols-2 gap-6 grid-cols-1">
            <Question
              question="Quais os maiores benefícios que o programa irá me proporcionar?"
              answer="O programa proporciona mais qualidade de vida, disposição, melhora na pele, regulagem do intestino e perda de peso de forma saudável."
            />

            <Question
              question="Meu dia é corrido e não tenho muito tempo. O programa vai me ajudar?"
              answer="Sim. Temos diversas clientes que também possuem rotinas corridas e conseguiram alcançar excelentes resultados seguindo o nosso programa."
            />

            <Question
              question="Tenho que pagar todos os meses para continuar participando?"
              answer="Não. Você faz apenas um único pagamento e poderá participar do programa pelo tempo que quiser sem cobranças adicionais."
            />

            <Question
              question="A partir do momento que eu compro, em quanto tempo eu recebo o conteúdo?"
              answer="Você receberá o seu material imediatamente após a confirmação de sua compra, diretamente em seu email."
            />

            <div className="sm:col-span-2 col-span-1">
              <Question
                question="Em quanto tempo eu posso começar a ver resultados?"
                answer="Os resultados começam a aparecer logo nas primeiras semanas se você seguir o nosso passo a passo. Você notará que suas roupas começarão a ficar mais folgadas e você desinchará bastante."
              />
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-gray-800 py-8 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="flex justify-center md:justify-center md:w-1/2">
              <p className={`text-gray-400 text-center ${inter.className}`}>&copy; 2023 O GUIA IDEAL PARA UMA DIETA DE SUCESSO: SAIBA COMO ALCANÇAR SEUS OBJETIVOS</p>
            </div>
            <div className="flex justify-center md:justify-end md:w-1/2 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-gray-300 mx-2">
                Política de Privacidade
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-300 mx-2">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div >
  )
} 
