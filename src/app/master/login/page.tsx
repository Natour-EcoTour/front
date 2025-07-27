'use client';
import Image from 'next/image';
import { useState } from 'react';

export default function MasterLogin() {
    const [isLoading, setIsLoading] = useState(false);
    return (
        <>
            <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-green-400 via-green-500 to-green-600">
                <section className="bg-white w-full max-w-md sm:max-w-lg md:max-w-xl top-[4rem] border border-black border-solid rounded-2xl shadow-lg">
                    <div className="text-black">
                        <h1 className="text-2xl font-bold text-center mt-6">Login</h1>
                        <form className="p-6 space-y-4">
                            <div>
                                <label htmlFor="username" className="block text-sm font-medium text-gray-700">Usuário</label>
                                <input
                                    type="text"
                                    id="username"
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                                    placeholder="Digite seu usuário"
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Senha</label>
                                <input
                                    type="password"
                                    id="password"
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                                    placeholder="Digite sua senha"
                                />
                            </div>
                            <button
                                type="submit"
                                className="cursor-pointer w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition duration-200 flex items-center justify-center"
                                onClick={() => setIsLoading(true)}
                            >
                                {isLoading ? (
                                    <Image
                                        src="/loading.svg"
                                        alt="Carregando"
                                        width={20}
                                        height={20}
                                        unoptimized
                                        className='animate-spin'
                                    />
                                ) : (
                                    'Entrar'
                                )}
                            </button>
                        </form>
                    </div>
                </section>
            </main>
        </>
    )
}