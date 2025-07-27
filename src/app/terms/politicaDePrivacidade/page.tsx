import Link from 'next/link';

export default function PoliticaDePrivacidade() {
    return (
        <>
            <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">

                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold text-gray-900 mb-4">
                            Política de Privacidade
                        </h1>
                        <p className="text-lg text-gray-600">
                            Última atualização: {new Date().toLocaleDateString('pt-BR')}
                        </p>
                    </div>

                    <div className="bg-white rounded-lg shadow-lg p-8 space-y-8">

                        <text className="text-black">Conteúdo da Política de Privacidade</text>

                        <div className="border-t pt-8 mt-8">
                            <div className="flex flex-col sm:flex-row justify-between items-center">
                                <p className="text-gray-600 text-sm">
                                    © 2025 Natour. Todos os direitos reservados.
                                </p>
                                <div className="flex space-x-4 mt-4 sm:mt-0">
                                    <Link href="/" className="text-green-600 hover:text-green-700 text-sm">
                                        Voltar ao Início
                                    </Link>
                                    <Link href="/terms/termosDeUso" className="text-green-600 hover:text-green-700 text-sm">
                                        Termos de Uso
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}