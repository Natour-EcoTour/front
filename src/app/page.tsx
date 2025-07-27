'use client';

import Header from '@/components/Header/Header';
import { ImagesLandingPage } from '@/components/ImagesLandingPage/ImagesLandingPage';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      />

      <meta property="og:title" content="Natour" />
      <meta property="og:description" content="A sua plataforma imobiliária" />
      <meta property="og:image" content="https://media.discordapp.net/attachments/1264329016744083477/1387226547605209188/0MOFY.png?ex=6886c2e6&is=68857166&hm=a58d129f402ec4330a5a49f10e363b13b786260d85a652b46e53ebc1bcccb621&=&format=webp&quality=lossless&width=1540&height=505" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      <main className="relative">
        <Header />

        <section className="relative overflow-hidden" id='carousel'>
          <div
            className="absolute inset-0 bg-[url('/nature_trail.jpg')] bg-cover bg-center blur-xs z-0"
            aria-hidden="true"
          />

          <div className="relative z-10 p-[5.6875rem_7.5rem]">
            <ImagesLandingPage />
          </div>
        </section>

        <section className='py-16 px-8 bg-gradient-to-b from-gray-50 to-white' id='about'>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              Sobre nós
            </h2>

            <div className="text-lg md:text-xl leading-relaxed text-gray-700 space-y-6">
              <p className="text-2xl font-semibold text-green-700 mb-6">
                <strong className="text-green-800">Natour</strong> é uma plataforma digital desenvolvida para facilitar o cadastro, descoberta e gestão de pontos turísticos naturais.
              </p>

              <p className="leading-8">
                Voltada tanto para exploradores quanto para gestores e comunidades locais, a Natour combina tecnologia de ponta com uma interface amigável para promover experiências seguras, educativas e sustentáveis ao ar livre.
              </p>

              <div className="grid md:grid-cols-3 gap-8 mt-12">
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                  <div className="text-3xl mb-4">🌲</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Trilhas Ecológicas</h3>
                  <p className="text-gray-600">Descubra trilhas incríveis e conecte-se com a natureza de forma responsável.</p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                  <div className="text-3xl mb-4">🏞️</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Pontos Turísticos</h3>
                  <p className="text-gray-600">Encontre e cadastre locais únicos para experiências inesquecíveis.</p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                  <div className="text-3xl mb-4">🌍</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Sustentabilidade</h3>
                  <p className="text-gray-600">Promovemos o turismo consciente e a preservação ambiental.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id='downloads'>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              Baixe nosso aplicativo!
            </h2>

            <div>
              <Image
                src="/playstore.png"
                alt="Promoções do aplicativo"
                width={350}
                height={300}
                className="mx-auto"
              />
              <p className="mt-4 text-gray-600">
                *Nosso aplicativo ainda não está disponível na Play Store, mas você pode baixar o APK diretamente do nosso site.
              </p>
            </div>
          </div>
        </section>

        <section className='bg-green-200 mx-auto px-4 py-10' id='contact'>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              Fale conosco
            </h2>

            <p className="text-lg md:text-xl text-gray-700 mb-6">
              Estamos aqui para ajudar! Se você tiver alguma dúvida, sugestão ou feedback, entre em contato conosco.
            </p>

            <a href="mailto:natourproject@gmail.com" className="text-blue-600 hover:underline">
              natourproject@gmail.com
            </a>

            <a href="tel:+551111111111" className="block mt-2 text-blue-600 hover:underline">
              (11) 11111-1111
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
