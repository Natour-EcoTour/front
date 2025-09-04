'use client'
import { useEffect, useState } from 'react';

import MasterPageTitle from '@/components/MasterPageTitle/MasterPageTitle'
import ResetPasswordModal from '@/components/ResetPasswordModal/ResetPasswordModal'

import { getMyInfo, MyInfoResponse } from '@/services/auth/myInfoService';
import Image from 'next/image';

interface UpdatePasswordFormData {
    currentPassword: string;
    newPassword: string;
    confirmPassword: string;
}
export default function MasterConfigsPage() {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState<MyInfoResponse | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const fetchMyInfo = async () => {
            setIsLoading(true);
            try {
                const response = await getMyInfo();
                setData(response);
            } catch (error) {
                console.error('Error fetching user info:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchMyInfo();
    }, []);

    if (isLoading) {
        return (
            <div className="p-6 min-h-screen">
                <MasterPageTitle text="Configurações" />
                <div className="flex justify-center items-center h-64">
                    <Image
                        src="/black_loading.svg"
                        alt="Carregando"
                        width={40}
                        height={40}
                        unoptimized
                        className="animate-spin"
                    />
                    <div className="text-lg text-gray-600">Carregando dados...</div>
                </div>
            </div>
        );
    }

    return (
        <>
            <div className="p-6 min-h-screen">
                <MasterPageTitle text="Configurações" />

                <div className='space-y-6 max-w-md'>
                    <div className='flex flex-col space-y-2'>
                        <label htmlFor="userName" className='text-black font-medium'>Usuário</label>
                        <div
                            id="userName"
                            className='border border-gray-300 rounded-md p-2 text-black bg-white w-full'
                        >
                            {data?.username}
                        </div>
                    </div>

                    <div className='flex flex-col space-y-2'>
                        <label htmlFor="userEmail" className='text-black font-medium'>E-mail</label>
                        <div
                            id="userEmail"
                            className='border border-gray-300 rounded-md p-2 text-black bg-white w-full'
                        >
                            {data?.email}
                        </div>
                    </div>

                    <div>
                        <button
                            className='w-full border border-gray-300 rounded-md p-2 text-white font-bold bg-green-500 hover:bg-green-600 cursor-pointer'
                            onClick={() => setIsModalOpen(true)}
                        >
                            Redefinir senha
                        </button>
                    </div>
                </div>
                <ResetPasswordModal
                    open={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    onConfirm={(data: UpdatePasswordFormData) => {
                        console.log('Password update data:', data);
                        setIsModalOpen(false);
                    }}
                />
            </div>
        </>
    )
}