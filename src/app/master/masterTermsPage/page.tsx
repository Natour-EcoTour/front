'use client'
import { useState } from 'react';
import MasterPageTitle from '@/components/MasterPageTitle/MasterPageTitle'
import TermsInput from '@/components/TermsInput/TermsInput'
import Modal from '@/components/Modal/Modal';

export default function MasterTermsPage() {
    const [onEdit, setOnEdit] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const handleButtonClick = () => {
        if (onEdit) {
            setShowModal(true);
        } else {
            setOnEdit(true);
        }
    };

    const handleConfirm = () => {
        setOnEdit(false);
        setShowModal(false);
    };

    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            <MasterPageTitle text="Termos e Políticas" />
            <button
                className="bg-green-500 hover:bg-green-600 text-white py-2 px-10 rounded-md cursor-pointer"
                onClick={handleButtonClick}
            >
                {onEdit ? "Salvar" : "Editar"}
            </button>

            <TermsInput onEdit={onEdit} />

            <Modal
                type="info"
                open={showModal}
                title="Editar termos"
                message="Edite os campos e clique em Salvar."
                onClose={() => setShowModal(false)}
                onConfirm={handleConfirm}
            />
        </div>
    );
}
