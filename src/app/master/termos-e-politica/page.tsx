'use client'
import { useState, useRef } from 'react';
import MasterPageTitle from '@/components/MasterPageTitle/MasterPageTitle'
import TermsInput, { TermsInputRef } from '@/components/TermsInput/TermsInput'
import Modal from '@/components/Modal/Modal';
import { updateTerm } from '@/services/terms/updateTermsService';

export default function MasterTermsPage() {
    const [onEdit, setOnEdit] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const termsInputRef = useRef<TermsInputRef>(null);

    const handleButtonClick = () => {
        if (onEdit) {
            setShowModal(true);
        } else {
            setOnEdit(true);
        }
    };

    const handleConfirm = async () => {
        try {
            setIsLoading(true);
            
            // Get the current values from the textarea inputs
            const values = termsInputRef.current?.getTermsValues();
            
            if (values) {
                // Update terms of use (ID: 1)
                await updateTerm(1, values.termsContent);
                
                // Update privacy policy (ID: 2)
                await updateTerm(2, values.policyContent);
                
                console.log("Terms updated successfully!");
            }
            
            setOnEdit(false);
            setShowModal(false);
        } catch (error) {
            console.error("Error updating terms:", error);
            // You can add error handling here (toast, alert, etc.)
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="p-6 min-h-screen">
            <MasterPageTitle text="Termos e Políticas" />
            <button
                className="bg-green-500 hover:bg-green-600 text-white py-2 px-10 rounded-md cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                onClick={handleButtonClick}
                disabled={isLoading}
            >
                {isLoading ? "Salvando..." : onEdit ? "Salvar" : "Editar"}
            </button>

            <TermsInput ref={termsInputRef} onEdit={onEdit} />

            <Modal
                type="info"
                open={showModal}
                title="Editar termos"
                message='Ao clicar em "Confirmar", as alterações serão aplicadas e todos os usuários receberão um e-mail de aviso de atualização.'
                onClose={() => setShowModal(false)}
                onConfirm={handleConfirm}
            />
        </div>
    );
}
