'use client';
import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { LoginSchema } from '@/validations/LoginSchema';

interface LoginProps {
    email: string;
    password: string;
}

export default function MasterLogin() {
    const [loginError, setLoginError] = useState<string | null>(null);
    const [showPassword, setShowPassword] = useState(false);
    const router = useRouter();

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<LoginProps>({
        resolver: yupResolver(LoginSchema),
    });

    const onSubmit: SubmitHandler<LoginProps> = async (_data) => {
        setLoginError(null);
        try {
            await new Promise((r) => setTimeout(r, 2000));
            router.push('/master/inicio');
        } catch {
            setLoginError('Erro ao fazer login. Tente novamente.');
        }
    };

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

                <section className="relative z-10 w-full max-w-md animate-fade-in-up">
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
                                        placeholder="seu@email.com"
                                    />
                                </div>
                                {errors.email && (
                                    <p className="text-red-500 text-sm flex items-center gap-1">
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                        </svg>
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
                                            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
                                            </svg>
                                        ) : (
                                            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                            </svg>
                                        )}
                                    </button>
                                </div>
                                {errors.password && (
                                    <p className="text-red-500 text-sm flex items-center gap-1">
                                        {errors.password.message}
                                    </p>
                                )}
                            </div>

                            {loginError && (
                                <div className="p-3 bg-red-100 border border-red-300 rounded-xl">
                                    <p className="text-red-700 text-sm text-center flex items-center justify-center gap-2">
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                        </svg>
                                        {loginError}
                                    </p>
                                </div>
                            )}

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