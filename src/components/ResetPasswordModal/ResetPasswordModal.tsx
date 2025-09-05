'use client'
import { X, Lock } from "lucide-react";
import { useEffect } from "react";
import { createPortal } from "react-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import PasswordInput from "@/components/PasswordInput/PasswordInput";

import { UpdatePasswordSchema } from "@/validations/UpdatePasswordSchema";

import { changeUserPassword } from "@/services/auth/changePasswordService";
import { toast } from "react-toastify";

interface ModalProps {
    open: boolean;
    onClose: () => void;
    onConfirm?: (data: UpdatePasswordFormData) => void;
    children?: React.ReactNode;
}

interface UpdatePasswordFormData {
    old_password: string;
    new_password: string;
    confirm_password: string;
}

const ResetPasswordModal = ({ open, onClose, onConfirm, children }: ModalProps) => {
    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
        reset
    } = useForm<UpdatePasswordFormData>({
        resolver: yupResolver(UpdatePasswordSchema),
        mode: "onChange"
    });

    useEffect(() => {
        const onEsc = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
        if (open) document.addEventListener('keydown', onEsc);
        return () => document.removeEventListener('keydown', onEsc);
    }, [open, onClose]);

    useEffect(() => {
        if (!open) {
            reset();
        }
    }, [open, reset]);

    const onSubmit = async (data: UpdatePasswordFormData) => {
        if (onConfirm) {
            try {
                await changeUserPassword(data.old_password, data.new_password, data.confirm_password);
                onConfirm(data);
            } catch (error: any) {
                // TODO TRAZER MENSAGEM DE ERRO CORRETA
                toast.error(error?.response.data?.message || 'Erro ao alterar a senha. Verifique os dados e tente novamente.');
                console.error('Error changing password:', error);
            }
        }
    };

    if (!open) return null;


    return createPortal(
        <div className="fixed inset-0 z-50 flex items-center justify-center" role="dialog" aria-modal="true">
            <div className="absolute inset-0 bg-black/50" onClick={onClose} aria-hidden="true" />
            <div className="relative z-10 w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">

                <button
                    className="absolute right-3 top-3 rounded-md px-2 py-1 text-gray-600 hover:bg-gray-100 cursor-pointer"
                    onClick={onClose}
                    aria-label="Close modal"
                >
                    <X size={16} />
                </button>

                <div className={`mx-auto grid place-items-center w-16 h-16 bg-green-500 rounded-full`}>
                    <Lock size={35} className="text-white" />
                </div>

                <b className="mb-2 text-lg font-bold text-black flex justify-center">Redefinir Senha</b>

                <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
                    <div>
                        <label className="text-black">Senha atual</label>
                        <PasswordInput
                            {...register("old_password")}
                            placeholder="Digite a sua senha atual"
                            id="current-password"
                            error={errors.old_password?.message}
                        />
                    </div>

                    <div>
                        <label className="text-black">Nova senha</label>
                        <PasswordInput
                            {...register("new_password")}
                            placeholder="Digite a sua nova senha"
                            id="new-password"
                            error={errors.new_password?.message}
                        />
                    </div>

                    <div>
                        <label className="text-black">Confirmação de senha</label>
                        <PasswordInput
                            {...register("confirm_password")}
                            placeholder="Confirme a sua nova senha"
                            id="confirm-password"
                            error={errors.confirm_password?.message}
                        />
                    </div>

                    <div className="mt-4 flex justify-center gap-2">
                        <button
                            type="button"
                            className="rounded-md border border-black px-3 py-1 text-sm text-black hover:bg-gray-200 cursor-pointer"
                            onClick={onClose}
                        >
                            Cancelar
                        </button>

                        <button
                            type="submit"
                            disabled={!isValid}
                            className={`rounded-md px-3 py-1 text-sm text-white cursor-pointer ${isValid
                                ? 'bg-green-500 hover:bg-green-600'
                                : 'bg-gray-400 cursor-not-allowed'
                                }`}
                        >
                            Confirmar
                        </button>
                    </div>
                </form>
                {children}
            </div>
        </div>,
        document.body
    );
};

export default ResetPasswordModal;

