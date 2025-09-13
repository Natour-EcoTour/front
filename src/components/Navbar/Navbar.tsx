
'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Navbar = () => {
    const router = useRouter();

    const menuItems = [
        { href: '/master/inicio', label: 'Início' },
        { href: '/master/usuarios', label: 'Usuários' },
        { href: '/master/pontos', label: 'Pontos' },
        { href: '/master/avaliacoes', label: 'Avaliações' },
        { href: '/master/termos-e-politica', label: 'Termos e Política' },
        { href: '/master/configuracoes', label: 'Configurações' },
    ];

    const handleLogout = () => {
        try {
            // Clear authentication tokens
            localStorage.removeItem('access');
            localStorage.removeItem('refresh');

            // Redirect to login page
            router.replace('/login');
        } catch (error) {
            console.error('Error during logout:', error);
            // Still redirect even if there's an error clearing tokens
            router.replace('/login');
        }
    };

    return (
        <>
            <nav className="fixed top-0 left-0 h-full w-80 bg-gradient-to-br from-emerald-600 via-green-500 to-teal-500 shadow-2xl z-50 backdrop-blur-sm">
                <div className="flex flex-col h-full">

                    <div className="p-6 border-b border-white">
                        <div className="flex items-center gap-3 mb-2">
                            <div>
                                <h2 className="text-2xl font-bold text-white">Natour</h2>
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 p-6">
                        <ul className="space-y-2">
                            {menuItems.map((item) => {
                                return (
                                    <li key={item.href}>
                                        <Link
                                            href={item.href}
                                            className="border-b border-white group flex items-center gap-3 py-3 px-4 text-white/90 hover:text-white hover:bg-white/20"
                                        >
                                            <span className="font-medium">{item.label}</span>
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>

                    <div className="p-6 border-t border-white">
                        <button
                            onClick={handleLogout}
                            className="cursor-pointer w-full group flex items-center gap-3 py-3 px-4 text-white hover:bg-white/20 rounded-xl transition-colors"
                        >
                            <span className="font-medium">Sair</span>
                        </button>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;