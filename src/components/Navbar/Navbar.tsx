
'use client';

import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            {/* Hamburger Menu Button */}
            <button
                onClick={toggleNavbar}
                className="fixed top-4 left-4 z-50 p-2 rounded-md bg-white shadow-lg border border-gray-200 hover:bg-gray-50 transition-colors"
                aria-label="Toggle navigation menu"
            >
                <div className="w-6 h-6 flex flex-col justify-center items-center">
                    <span className={`bg-gray-600 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
                    <span className={`bg-gray-600 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                    <span className={`bg-gray-600 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
                </div>
            </button>

            {/* Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 z-40 transition-opacity"
                    onClick={toggleNavbar}
                ></div>
            )}

            {/* Left Side Navbar */}
            <nav className={`fixed top-0 left-0 h-full w-80 bg-white shadow-xl transform transition-transform duration-300 ease-in-out z-50 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className="p-6">
                    {/* Navbar Header */}
                    <div className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-800">Natour</h2>
                        <div className="w-12 h-1 bg-green-700 mt-2"></div>
                    </div>

                    {/* Navigation Links */}
                    <ul className="space-y-4">
                        <li>
                            <Link
                                href="/master/masterInicio"
                                className="block py-3 px-4 font-bold text-gray-700 hover:bg-gray-100 hover:text-green-800 rounded-lg transition-colors duration-200"
                                onClick={toggleNavbar}
                            >
                                Inicio
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/about"
                                className="block py-3 px-4 font-bold text-gray-700 hover:bg-gray-100 hover:text-green-800 rounded-lg transition-colors duration-200"
                                onClick={toggleNavbar}
                            >
                                Usuários
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/contact"
                                className="block py-3 px-4 font-bold text-gray-700 hover:bg-gray-100 hover:text-green-800 rounded-lg transition-colors duration-200"
                                onClick={toggleNavbar}
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