import HeaderButton from "../HeaderButton/HeaderButton";

const Header = () => {
    return (
        <header className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-lg shadow-sm border-b border-white/20">
            <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center px-6 py-4 gap-4">
                <div className="flex items-center">
                    <span className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                        Natour
                    </span>
                </div>

                <nav className="hidden md:flex items-center space-x-8">
                    <HeaderButton title="Sobre" targetId="about" />
                    <HeaderButton title="Downloads" targetId="downloads" />
                    <HeaderButton title="Contato" targetId="contact" />
                </nav>

                <div className="flex items-center space-x-4">
                    <button
                        className="text-gray-600 hover:text-green-600 font-medium transition-colors duration-200 hidden sm:block"
                        onClick={() => window.location.href = '/terms/termosDeUso'}>
                        Termos de uso
                    </button>

                    <button
                        className="text-gray-600 hover:text-green-600 font-medium transition-colors duration-200 hidden sm:block"
                        onClick={() => window.location.href = '/terms/politicaDePrivacidade'}>
                        Privacidade
                    </button>

                    <button
                        className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
                        onClick={() => window.location.href = '/master/login'}>
                        Login
                    </button>
                </div>

                <button className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                    <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
        </header>
    );
};

export default Header;