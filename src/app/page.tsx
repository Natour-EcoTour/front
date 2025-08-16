'use client';

import Image from 'next/image';
import { ImagesLandingPage } from '@/components/ImagesLandingPage/ImagesLandingPage';
import Header from '@/components/Header/Header';
import LandingpageCards from '@/components/LandingpageCards/LandingpageCards';

export default function Home() {
  return (
    <>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      />

      <meta property="og:title" content="Natour" />
      <meta property="og:description" content="O Natour é uma plataforma que conecta amantes da natureza e viajantes." />
      <meta property="og:image" content="https://media.discordapp.net/attachments/1406071153335992360/1406071166308716595/image.png?ex=68a12151&is=689fcfd1&hm=51f7b02703cbbd907d7e5d90f29234c5e4703068f164f74b4f116b7c7caa2622&=&format=webp&quality=lossless&width=976&height=376" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      <main>
        <Header />

        <section className="relative overflow-hidden min-h-screen flex items-center" id='carousel'>
          <div
            className="absolute inset-0 bg-[url('/blured_nature_trail.png')] bg-cover bg-center z-0"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-black/20 z-0" aria-hidden="true" />

          <div className="relative z-10 w-full px-4 md:px-8 lg:px-16 py-20">
            <div className="max-w-7xl mx-auto">

              <div className="text-center mb-12">
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6 tracking-tight">
                  <span className="bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">
                    Natour
                  </span>
                </h1>
                <p className="text-xl md:text-2xl font-sans text-white/90 max-w-3xl mx-auto mb-8 leading-relaxed">
                  Descubra e preserve a natureza através da tecnologia.
                  <span className="block mt-2 font-medium">Sua plataforma para ecoturismo sustentável.</span>
                </p>
              </div>

              <div className="mt-16">
                <ImagesLandingPage />
              </div>
            </div>
          </div>
        </section>

        <section className='py-24 px-8 bg-gradient-to-b from-gray-50 to-white relative' id='about'>
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
            <div className="absolute top-20 left-10 w-32 h-32 bg-green-100 rounded-full opacity-50 blur-xl"></div>
            <div className="absolute bottom-20 right-10 w-48 h-48 bg-emerald-100 rounded-full opacity-50 blur-xl"></div>
          </div>

          <div className="max-w-7xl mx-auto text-center relative z-10">
            <div className="mb-16">
              <span className="text-green-600 font-sans font-semibold text-lg tracking-wide uppercase">Sobre Nós</span>
              <h2 className="text-4xl md:text-6xl font-serif font-bold text-gray-900 mt-4 mb-8 tracking-tight">
                Conectando você com a
                <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent block">
                  natureza
                </span>
              </h2>
            </div>

            <div className="text-lg md:text-xl leading-relaxed text-gray-700 space-y-8 max-w-4xl mx-auto">
              <p className="text-2xl font-sans font-semibold text-green-700 leading-relaxed">
                <strong className="text-green-800">Natour</strong> é uma plataforma digital inovadora desenvolvida para facilitar o cadastro, descoberta e gestão de pontos turísticos naturais.
              </p>

              <p className="leading-8 font-sans text-gray-600">
                Voltada tanto para exploradores quanto para gestores e comunidades locais, a Natour combina tecnologia de ponta com uma interface amigável para promover experiências seguras, educativas e sustentáveis ao ar livre.
              </p>

              <div className="grid md:grid-cols-3 gap-8 mt-16">
                <LandingpageCards
                  title="Trilhas Ecológicas"
                  description="Descubra trilhas incríveis e conecte-se com a natureza de forma responsável e sustentável."
                />
                <LandingpageCards
                  title="Pontos Turísticos"
                  description="Encontre e cadastre locais únicos para experiências inesquecíveis em meio à natureza."
                />
                <LandingpageCards
                  title="Sustentabilidade"
                  description="Promovemos o turismo consciente e a preservação ambiental para futuras gerações."
                />
              </div>
            </div>
          </div>
        </section>

        <section className='py-24 px-8 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50' id='downloads'>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-green-600 font-sans font-semibold text-lg tracking-wide uppercase">Download</span>
              <h2 className="text-4xl md:text-6xl font-serif font-bold text-gray-900 mt-4 mb-8 tracking-tight">
                Baixe nosso
                <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent block">
                  aplicativo!
                </span>
              </h2>
            </div>

            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-100 max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="text-left">
                  <h3 className="text-2xl font-serif font-bold text-gray-900 mb-6">
                    Explore a natureza na palma da sua mão
                  </h3>
                  <ul className="space-y-4 font-sans text-gray-600 mb-8">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      Descubra trilhas próximas a você
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      Comunidade de ecoturistas
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      Contribua com novos pontos
                    </li>
                  </ul>
                  <button className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-sans font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
                    Baixar APK
                  </button>
                </div>
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-500 rounded-2xl blur-lg opacity-20 transform scale-105"></div>
                  <Image
                    src="/playstore.png"
                    alt="Promoções do aplicativo"
                    width={350}
                    height={300}
                    className="mx-auto relative z-10 drop-shadow-xl"
                  />
                </div>
              </div>
              <p className="mt-8 text-center font-sans text-gray-500 text-sm">
                *Nosso aplicativo ainda não está disponível na Play Store, mas você pode baixar o APK diretamente do nosso site.
              </p>
            </div>
          </div>
        </section>

        <section className='bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden' id='contact'>
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-64 h-64 bg-green-600 rounded-full opacity-10 blur-3xl"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-emerald-600 rounded-full opacity-10 blur-3xl"></div>
          </div>

          <div className="relative z-10 max-w-6xl mx-auto px-8 py-24">
            <div className="text-center mb-16">
              <span className="text-green-400 font-sans font-semibold text-lg tracking-wide uppercase">Contato</span>
              <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mt-4 mb-8 tracking-tight">
                Fale
                <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                  {" "}conosco
                </span>
              </h2>
              <p className="text-xl font-sans text-gray-300 max-w-3xl mx-auto">
                Estamos aqui para ajudar! Se você tiver alguma dúvida, sugestão ou feedback, entre em contato conosco.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
              <div className="flex items-center space-x-6 group">
                <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <a href="mailto:natourproject@gmail.com" className="text-white hover:text-green-400 font-semibold text-lg transition-colors duration-300">
                    natourproject@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-6 group">
                <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Telefone</p>
                  <a href="tel:+551111111111" className="text-white hover:text-blue-400 font-semibold text-lg transition-colors duration-300">
                    (11) 11111-1111
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
