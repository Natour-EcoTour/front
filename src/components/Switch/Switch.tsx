'use client';
import { useState } from 'react';
import Modal from '@/components/Modal/Modal';

export default function MySwitch() {
  const [isOn, setIsOn] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleToggle = () => {
    if (isOn) {
      setShowModal(true);
    } else {
      setIsOn(true);
    }
  };

  const confirmDeactivate = () => {
    setIsOn(false);
    setShowModal(false);
  };

  return (
    <>
      <label className="relative inline-flex items-center cursor-pointer select-none">
        <input
          type="checkbox"
          checked={isOn}
          onChange={handleToggle}
          className="sr-only peer"
        />

        <div
          className={`
            w-11 h-6 rounded-full transition-colors duration-200
            bg-red-100 peer-checked:bg-green-600
            peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-green-300
          `}
        />
        <span
          className={`
            absolute top-1 left-1 w-4 h-4 rounded-full bg-white shadow
            transition-transform duration-200 peer-checked:translate-x-5
          `}
        />
      </label>

      <Modal
        open={showModal}
        onClose={() => setShowModal(false)}
        onConfirm={() => confirmDeactivate()}
        title="Desativar usuário"
        message="Você tem certeza que deseja desativar este usuário?"
        type="warning"
      />

    </>
  );
}
