
'use client';

import Link from 'next/link';

const Navbar = () => {
    return (
        <>
            <nav className="fixed top-0 left-0 h-full w-80 bg-white shadow-xl z-50">
                <div className="p-6">
                    <div className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-800">Natour</h2>
                        <div className="w-12 h-1 bg-green-700 mt-2"></div>
                    </div>

                    <ul className="space-y-4">
                        <li>
                            <Link
                                href="/master/masterInicio"
                                className="block py-3 px-4 font-bold text-gray-700 hover:bg-gray-100 hover:text-green-800 rounded-lg transition-colors duration-200"
                            >
                                Inicio
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/master/masterUsersPage"
                                className="block py-3 px-4 font-bold text-gray-700 hover:bg-gray-100 hover:text-green-800 rounded-lg transition-colors duration-200"
                            >
                                Usuários
                            </Link>
                        </li>

                        <li>
                            <Link
                                href="/master/masterPointsPage"
                                className="block py-3 px-4 font-bold text-gray-700 hover:bg-gray-100 hover:text-green-800 rounded-lg transition-colors duration-200"
                            >
                                Pontos
                            </Link>
                        </li>
                        
                        <li>
                            <Link
                                href="/master/masterReviewsPage"
                                className="block py-3 px-4 font-bold text-gray-700 hover:bg-gray-100 hover:text-green-800 rounded-lg transition-colors duration-200"
                            >
                                Avaliações
                            </Link>
                        </li>

                        <li>
                            <Link
                                href="/master/masterTermsPage"
                                className="block py-3 px-4 font-bold text-gray-700 hover:bg-gray-100 hover:text-green-800 rounded-lg transition-colors duration-200"
                            >
                                Termos e Política
                            </Link>
                        </li>

                        <li>
                            <Link
                                href="/master/masterConfigsPage"
                                className="block py-3 px-4 font-bold text-gray-700 hover:bg-gray-100 hover:text-green-800 rounded-lg transition-colors duration-200"
                            >
                                Configurações
                            </Link>
                        </li>

                        <li>
                            <Link
                                href="/"
                                className="block py-3 px-4 font-bold text-gray-700 hover:bg-gray-100 hover:text-green-800 rounded-lg transition-colors duration-200"
                            >
                                Sair
                            </Link>
                        </li>
                    </ul>

                </div>
            </nav>
        </>
    );
}

export default Navbar;