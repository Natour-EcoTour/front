'use client';
import { useEffect } from "react";
import { createPortal } from "react-dom";
import { X, Info, TriangleAlert, Ban } from 'lucide-react';

interface ModalProps {
    open: boolean;
    onClose: () => void;
    onConfirm?: () => void;
    children?: React.ReactNode;
    title: string;
    message?: string;
    type: 'info' | 'warning' | 'error';
}

const Modal = ({ open, onClose, onConfirm, children, title, message, type }: ModalProps) => {
    useEffect(() => {
        const onEsc = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
        if (open) document.addEventListener('keydown', onEsc);
        return () => document.removeEventListener('keydown', onEsc);
    }, [open, onClose]);

    if (!open) return null;

    const typeColors = {
        info: 'bg-blue-600 hover:bg-blue-700',
        warning: 'bg-yellow-500 hover:bg-yellow-600',
        error: 'bg-red-600 hover:bg-red-700',
    };

    const typeIcons = {
        info: <Info className="w-12 h-12 text-white" />,
        warning: <TriangleAlert className="w-12 h-12 text-white" />,
        error: <Ban className="w-12 h-12 text-white" />,
    }

    const bgByType = {
        info: 'bg-blue-600',
        warning: 'bg-yellow-500',
        error: 'bg-red-600',
    };

    return createPortal(
        <div className="fixed inset-0 z-50 flex items-center justify-center" role="dialog" aria-modal="true">
            <div className="absolute inset-0 bg-black/50" onClick={onClose} aria-hidden="true" />
            <div className="relative z-10 w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">
                <button
                    className="absolute right-3 top-3 rounded-md px-2 py-1 text-gray-600 hover:bg-gray-100"
                    onClick={onClose}
                    aria-label="Close modal"
                >
                    <X size={16} />
                </button>
                <div className={`mx-auto grid place-items-center w-16 h-16 ${bgByType[type]} rounded-full`}>
                    {typeIcons[type]}
                </div>
                <h2 className="mb-2 text-lg font-bold text-black">{title}</h2>
                {message && <p className="text-sm text-black">{message}</p>}
                <div className="mt-4 flex justify-end gap-2">
                    <button
                        className="rounded-md border border-black px-3 py-1 text-sm text-black hover:bg-gray-200 cursor-pointer"
                        onClick={onClose}
                    >
                        Cancelar
                    </button>
                    <button
                        className={`rounded-md px-3 py-1 text-sm text-white cursor-pointer ${typeColors[type]}`}
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

export default Modal;
