'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { LoginSchema } from '@/validations/LoginSchema';
import { Eye, EyeOff } from "lucide-react";

import { login, validateTokenAndRedirect } from '@/utils/tokenUtils';

interface LoginProps {
    email: string;
    password: string;
    rememberMe: boolean;
}

export default function MasterLogin() {
    const [showPassword, setShowPassword] = useState(false);
    const [isCheckingToken, setIsCheckingToken] = useState(true);
    const router = useRouter();

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<LoginProps>({
        resolver: yupResolver(LoginSchema),
    });

    useEffect(() => {
        const checkExistingToken = async () => {
            try {
                const isValid = await validateTokenAndRedirect(router);
                if (!isValid) {
                    setIsCheckingToken(false);
                }
            } catch (error) {
                console.error('Error checking token:', error);
                setIsCheckingToken(false);
            }
        };

        checkExistingToken();
    }, [router]);

    const onSubmit = async (data: LoginProps) => {
        try {
            await login({
                email: data.email,
                password: data.password,
                rememberMe: data.rememberMe
            });
            router.push('/master/inicio');
        } catch {
            console.error('Login failed');
        }
    };

    if (isCheckingToken) {
        return (
            <main className="relative min-h-screen flex items-center justify-center p-4">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/nature_trail.jpg"
                        alt="Nature Trail Background"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-green-900/80 via-green-800/70 to-emerald-900/80 backdrop-blur-sm"></div>
                </div>
                <section className="relative z-10 w-full max-w-md">
                    <div className="backdrop-blur-sm bg-white/95 border border-white/30 rounded-3xl shadow-2xl p-8">
                        <div className="flex flex-col items-center justify-center space-y-4">
                            <Image
                                src="/black_loading.svg"
                                alt="Carregando"
                                width={40}
                                height={40}
                                unoptimized
                                className="animate-spin"
                            />
                            <p className="text-gray-700 text-lg">Verificando credenciais...</p>
                        </div>
                    </div>
                </section>
            </main>
        );
    }

    return (
        <>
            <main className="relative min-h-screen flex items-center justify-center p-4">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/nature_trail.jpg"
                        alt="Nature Trail Background"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-green-900/80 via-green-800/70 to-emerald-900/80 backdrop-blur-sm"></div>
                </div>

                <section className="relative z-10 w-full max-w-md">
                    <div className="backdrop-blur-sm bg-white/95 border border-white/30 rounded-3xl shadow-2xl p-8">
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                            <div className="space-y-2">
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    E-mail
                                </label>
                                <div className="relative">
                                    <input
                                        type="email"
                                        id="email"
                                        {...register('email')}
                                        className={`w-full px-4 py-3 bg-white/10 border rounded-xl text-gray-800 placeholder-gray-400 backdrop-blur-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400 focus:bg-white/20 ${errors.email ? 'border-red-400 focus:ring-red-400' : 'border-gray-300'
                                            }`}
                                        placeholder="email@administrador.com"
                                    />
                                </div>
                                {errors.email && (
                                    <p className="text-red-500 text-sm flex items-center gap-1">
                                        {errors.email.message}
                                    </p>
                                )}
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                    Senha
                                </label>
                                <div className="relative">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        id="password"
                                        {...register('password')}
                                        className={`w-full pl-4 pr-12 py-3 bg-white/10 border rounded-xl text-gray-800 placeholder-gray-400 backdrop-blur-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400 focus:bg-white/20 ${errors.password ? 'border-red-400 focus:ring-red-400' : 'border-gray-300'
                                            }`}
                                        placeholder="*******"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 hover:text-gray-700 transition-colors"
                                    >
                                        {showPassword ? (
                                            <Eye />
                                        ) : (
                                            <EyeOff />
                                        )}
                                    </button>
                                </div>
                                {errors.password && (
                                    <p className="text-red-500 text-sm flex items-center gap-1">
                                        {errors.password.message}
                                    </p>
                                )}
                            </div>

                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    id="rememberMe"
                                    {...register('rememberMe')}
                                    className="w-4 h-4 text-green-500 bg-white/10 border-gray-300"
                                />
                                <label htmlFor="rememberMe" className="ml-2 text-sm text-gray-700">
                                    Lembrar de mim
                                </label>
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="cursor-pointer w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-transparent disabled:cursor-not-allowed disabled:transform-none"
                            >
                                <div className="flex items-center justify-center gap-2">
                                    {isSubmitting ? (
                                        <>
                                            <Image
                                                src="/loading.svg"
                                                alt="Carregando"
                                                width={20}
                                                height={20}
                                                unoptimized
                                                className="animate-spin"
                                            />
                                            <span>Entrando...</span>
                                        </>
                                    ) : (
                                        <>
                                            <span>Entrar</span>
                                        </>
                                    )}
                                </div>
                            </button>
                        </form>
                    </div>
                </section>
            </main>
        </>
    )
}