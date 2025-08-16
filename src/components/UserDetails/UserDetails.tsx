import Modal from "@/components/Modal/Modal";
import Image from "next/image";
import { useState } from "react";
import ResetPasswordButton from "../ResetPasswordButton/ResetPasswordButton";

interface UserDetailsProps {
    user: {
        id: string;
        name: string;
        email: string;
        avatar: string;
        status: string;
        deactivation_reason?: string;
        created_at: string;
        updated_at: string;
        points: number;
    };
}

export function UserDetails({ user }: UserDetailsProps) {

    const [showWarningModal, setShowWarningModal] = useState(false);
    const [showSuccessModal, setShowSuccessModal] = useState(false);

    const sendPassword = () => {
        console.log('Enviar e-mail de redefinição de senha');
        setShowWarningModal(false);
        setShowSuccessModal(true);
    };

    return (
        <>
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
            <ResetPasswordButton
                onResetClick={() => setShowWarningModal(true)}
            />

            <Modal
                open={showWarningModal}
                onClose={() => setShowWarningModal(false)}
                onConfirm={sendPassword}
                title="Redefinir senha"
                message={`Você tem certeza que deseja redefinir a senha? O usuário "${user.name}" receberá um e-mail com as instruções.`}
                type="warning"
            />

            <Modal
                open={showSuccessModal}
                onClose={() => setShowSuccessModal(false)}
                title="E-mail enviado"
                message={`A senha de "${user.name}" foi redefinida com sucesso.`}
                type="success"
            />
        </>
    )
}

export default UserDetails;