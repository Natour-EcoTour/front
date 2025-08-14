'use client'

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { mockUsers } from "@/mock/usersMocked";
import MasterPageTitle from "@/components/MasterPageTitle/MasterPageTitle";
import Modal from "@/components/Modal/Modal";
import Image from "next/image";
import { set } from "react-hook-form";

export default function MasterUsersIdPage() {
    const { id } = useParams();
    const router = useRouter();
    const [user, setUser] = useState<any | null>(null);
    const [showWarningModal, setShowWarningModal] = useState(false);
    const [showSuccessModal, setShowSuccessModal] = useState(false);

    useEffect(() => {
        if (!id) return;

        const foundUser = mockUsers.users.find(u => u.id === id);

        if (!foundUser) {
            router.back();
        } else {
            setUser(foundUser);
        }
    }, [id, router]);

    if (!user) {
        return <div className="p-6">Carregando usuário...</div>;
    }

    const sendPassword = () => {
        console.log('Enviar e-mail de redefinição de senha');
        setShowWarningModal(false);
        setShowSuccessModal(true);
    };

    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            <MasterPageTitle text={user.name} />

            <Image
                src={user.avatar || '/no_user.png'}
                alt={user.name}
                width={150}
                height={150}
                style={{ height: "auto" }}
                className="rounded-lg object-cover"
            />

            <div className=" mt-10 max-w-2xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-1">
                        <label className="text-sm font-medium text-gray-600 uppercase tracking-wide">Email:</label>
                        <div className="text-gray-900 font-medium">{user.email}</div>
                    </div>

                    <div className="space-y-1">
                        <label className="text-sm font-medium text-gray-600 uppercase tracking-wide">Status:</label>
                        <div className="flex items-center">
                            <span className={`inline-flex px-3 py-1 text-sm font-semibold rounded-full ${user.status === 'Ativo'
                                ? 'bg-green-100 text-green-800'
                                : 'bg-red-100 text-red-800'
                                }`}>
                                {user.status}
                            </span>
                        </div>
                    </div>

                    <div className="space-y-1">
                        <label className="text-sm font-medium text-gray-600 uppercase tracking-wide">Motivo:</label>
                        <div className="text-gray-900 font-medium">
                            {user.deactivation_reason || (
                                <span className="text-gray-500 italic">--</span>
                            )}
                        </div>
                    </div>

                    <div className="space-y-1">
                        <label className="text-sm font-medium text-gray-600 uppercase tracking-wide">Data de Criação:</label>
                        <div className="text-gray-900 font-medium">
                            {new Date(user.created_at).toLocaleDateString('pt-BR', {
                                day: '2-digit',
                                month: '2-digit',
                                year: 'numeric'
                            })}
                        </div>
                    </div>

                    <div className="space-y-1">
                        <label className="text-sm font-medium text-gray-600 uppercase tracking-wide">Pontos:</label>
                        <div className="text-2xl text-black">{user.points}</div>
                    </div>

                    <div className="space-y-1">
                        <label className="text-sm font-medium text-gray-600 uppercase tracking-wide">Última Atualização:</label>
                        <div className="text-gray-900 font-medium">
                            {new Date(user.updated_at).toLocaleDateString('pt-BR', {
                                day: '2-digit',
                                month: '2-digit',
                                year: 'numeric'
                            })}
                        </div>
                    </div>
                </div>
            </div>
            <button
                className="cursor-pointer mt-6 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                onClick={() => setShowWarningModal(true)}
            >
                Redefinir senha
            </button>

            <Modal
                open={showWarningModal}
                onClose={() => setShowWarningModal(false)}
                onConfirm={sendPassword}
                title="Redefinir senha"
                message={`Você tem certeza que deseja redefinir a senha? O usuário ${user.name} receberá um e-mail com as instruções.`}
                type="warning"
            />

            <Modal
                open={showSuccessModal}
                onClose={() => setShowSuccessModal(false)}
                title="E-mail enviado"
                message={`O e-mail de redefinição de senha foi enviado com sucesso para ${user.name}.`}
                type="success"
            />

        </div>
    );
}
