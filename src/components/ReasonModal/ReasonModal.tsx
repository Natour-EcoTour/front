'use client'
import { X, Text } from "lucide-react";
import { useEffect } from "react";
import { createPortal } from "react-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { RefusalSchema } from "@/validations/RefusalSchema";

interface ModalProps {
    open: boolean;
    onClose: () => void;
    onConfirm?: (data: RefusalReasonProps) => void;
    children?: React.ReactNode;
}

interface RefusalReasonProps {
    reason: string;
}

const ReasonModal = ({ open, onClose, onConfirm, children }: ModalProps) => {
    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
        reset
    } = useForm<RefusalReasonProps>({
        resolver: yupResolver(RefusalSchema),
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

    const onSubmit = (data: RefusalReasonProps) => {
        if (onConfirm) {
            onConfirm(data);
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
                    <Text size={35} className="text-white" />
                </div>

                <h2 className="mb-2 text-lg font-bold text-black">Motivo da desativação</h2>

                <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
                    <div>
                        <textarea
                            // type="text"
                            placeholder="Digite o motivo"
                            className={`text-black border rounded-md p-2 w-full h-60 ${errors.reason ? 'border-red-500' : 'border-gray-300'
                                }`}
                            {...register("reason")}
                        />
                        {errors.reason && (
                            <p className="mt-1 text-sm text-red-500">{errors.reason.message}</p>
                        )}
                    </div>

                    <div className="mt-4 flex justify-end gap-2">
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

export default ReasonModal;

