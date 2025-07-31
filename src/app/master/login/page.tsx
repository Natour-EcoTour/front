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
    const router = useRouter();

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<LoginProps>({
        resolver: yupResolver(LoginSchema),
    });

    const onSubmit: SubmitHandler<LoginProps> = async (data) => {
        setLoginError(null);
        try {
            // simulate API call
            await new Promise((r) => setTimeout(r, 2000));
            router.push('/master/masterInicio');
        } catch {
            setLoginError('Erro ao fazer login. Tente novamente.');
        }
    };

    return (
        <>
            <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-green-400 via-green-500 to-green-600">
                <section className="bg-white w-full max-w-md sm:max-w-lg md:max-w-xl top-[4rem] border border-black border-solid rounded-2xl shadow-lg">
                    <div className="text-black">
                        <h1 className="text-2xl font-bold text-center mt-6">Login</h1>
                        <form onSubmit={handleSubmit(onSubmit)} className="p-6 space-y-4">
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">E-mail</label>
                                <input
                                    type="email"
                                    id="email"
                                    {...register('email')}
                                    className={`mt-1 block w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 ${
                                        errors.email ? 'border-red-500' : 'border-gray-300'
                                    }`}
                                    placeholder="Digite seu e-mail"
                                />
                                {errors.email && <p className="mt-2 text-sm text-red-500">{errors.email.message}</p>}
                            </div>
                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Senha</label>
                                <input
                                    type="password"
                                    id="password"
                                    {...register('password')}
                                    className={`mt-1 block w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 ${
                                        errors.password ? 'border-red-500' : 'border-gray-300'
                                    }`}
                                    placeholder="Digite sua senha"
                                />
                                {errors.password && <p className="mt-2 text-sm text-red-500">{errors.password.message}</p>}
                            </div>

                            {loginError && (
                                <p className="text-center text-sm text-red-600">{loginError}</p>
                            )}

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="flex w-full items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition duration-200"
                            >
                                {isSubmitting ? (
                                <Image
                                    src="/loading.svg"
                                    alt="Carregando"
                                    width={20}
                                    height={20}
                                    unoptimized
                                    className="animate-spin"
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