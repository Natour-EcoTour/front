'use client'
import Link from "next/link";
import { getTerm, TermResponse } from "@/services/terms/getTermService";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function TermosDeUso() {
    const [term, setTerm] = useState<TermResponse | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchTerm = async () => {
            setIsLoading(true);
            const termData = await getTerm(1);
            setTerm(termData);
            setIsLoading(false);
        };

        fetchTerm();
    }, []);

    return (
        <>
            <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">

                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold text-gray-900 mb-4">
                            Termos de Uso
                        </h1>
                        <p className="text-lg text-gray-600">
                            Última atualização: {term?.updated_at ? new Date(term.updated_at).toLocaleDateString('pt-BR') : 'Não atualizado'}
                        </p>
                    </div>

                    <div className="bg-white rounded-lg shadow-lg p-8 space-y-8">

                        {isLoading ? (
                            <div className="flex justify-center">
                                <h1 className="text-black">Carregando...</h1>
                                <Image
                                    src="/black_loading.svg"
                                    alt="Carregando"
                                    width={20}
                                    height={20}
                                    unoptimized
                                    className="animate-spin"
                                />
                            </div>
                        ) : (
                            <h1 className="text-black">{term?.content}</h1>
                        )}

                        <div className="border-t pt-8 mt-8">
                            <div className="flex flex-col sm:flex-row justify-between items-center">
                                <p className="text-gray-600 text-sm">
                                    © 2025 Natour. Todos os direitos reservados.
                                </p>
                                <div className="flex space-x-4 mt-4 sm:mt-0">
                                    <Link href="/" className="text-green-600 hover:text-green-700 text-sm">
                                        Voltar ao Início
                                    </Link>
                                    <Link href="/terms/politica-de-privacidade" className="text-green-600 hover:text-green-700 text-sm">
                                        Política de Privacidade
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