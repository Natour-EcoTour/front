'use client'
import MasterPageTitle from '@/components/MasterPageTitle/MasterPageTitle'
import ResetPasswordModal from '@/components/ResetPasswordModal/ResetPasswordModal'
import { useState } from 'react';

interface UpdatePasswordFormData {
    currentPassword: string;
    newPassword: string;
    confirmPassword: string;
}
export default function MasterConfigsPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    return (
        <>
            <div className="p-6 bg-gray-50 min-h-screen">
                <MasterPageTitle text="Configurações" />

                <div className='space-y-6 max-w-md'>
                    <div className='flex flex-col space-y-2'>
                        <label htmlFor="userName" className='text-black font-medium'>Usuário</label>
                        <div id="userName" className='border border-gray-300 rounded-md p-2 text-black bg-white w-full'>Master</div>
                    </div>

                    <div className='flex flex-col space-y-2'>
                        <label htmlFor="userEmail" className='text-black font-medium'>E-mail</label>
                        <div id="userEmail" className='border border-gray-300 rounded-md p-2 text-black bg-white w-full'>natour@master.com.br</div>
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