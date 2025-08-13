'use client'
import { X, Lock } from "lucide-react";
import { useEffect } from "react";
import { createPortal } from "react-dom";

interface ModalProps {
    open: boolean;
    onClose: () => void;
    onConfirm?: () => void;
    children?: React.ReactNode;
}

const ResetPasswordModal = ({ open, onClose, onConfirm, children }: ModalProps) => {
    useEffect(() => {
        const onEsc = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
        if (open) document.addEventListener('keydown', onEsc);
        return () => document.removeEventListener('keydown', onEsc);
    }, [open, onClose]);

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

                <h2 className="mb-2 text-lg font-bold text-black">Redefinir Senha</h2>

                <div className="grid gap-4">
                    <label className="text-black">Senha atual</label>

                    <label className="text-black">Nova senha</label>

                    <label className="text-black">Confirmação de senha</label>
                </div>

                <div className="mt-4 flex justify-end gap-2">
                    <button
                        className="rounded-md border border-black px-3 py-1 text-sm text-black hover:bg-gray-200 cursor-pointer"
                        onClick={onClose}
                    >
                        Cancelar
                    </button>

                    <button
                        className={`rounded-md px-3 py-1 text-sm text-white cursor-pointer bg-green-500 hover:bg-green-600`}
                        onClick={onConfirm}
                    >
                        Confirmar
                    </button>
                </div>
                {children}
            </div>
        </div>,
        document.body
    );
};

export default ResetPasswordModal;

