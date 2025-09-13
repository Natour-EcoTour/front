'use client';
import { useState } from 'react';
import Modal from '@/components/Modal/Modal';
import ReasonModal from '@/components/ReasonModal/ReasonModal';
import { changeUserStatus } from '@/services/users/userStatsService';
import { changePointStatus } from '@/services/points/changePointStatusService';

interface SwitchProps {
  entity: 'user' | 'point';
  status?: boolean;
  userId?: string;
  pointId?: string;
  onStatusChange?: () => void;
}
export default function Switch({ entity, status, userId, pointId, onStatusChange }: SwitchProps) {
  const [isOn, setIsOn] = useState(status || false);
  const [showWarningModal, setShowWarningModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showReasonModal, setShowReasonModal] = useState(false);
  const [lastAction, setLastAction] = useState<'activate' | 'deactivate'>('activate');

  const handleToggle = async () => {
    if (isOn) {
      // Deactivating
      setLastAction('deactivate');
      setShowWarningModal(true);
    } else {
      // Activating
      setLastAction('activate');
      try {
        if (entity === 'user') {
          await changeUserStatus(userId!, true, '');
        } else if (entity === 'point') {
          await changePointStatus(pointId!);
        }
        setIsOn(true);
        setShowSuccessModal(true);
        onStatusChange?.();
      } catch (error) {
        console.error(`Error activating ${entity}:`, error);
      }
    }
  };

  const confirmDeactivate = async () => {
    setShowWarningModal(false);
    if (entity === 'user') {
      setShowReasonModal(true);
    } else if (entity === 'point') {
      try {
        await changePointStatus(pointId!);
        setIsOn(false);
        setShowSuccessModal(true);
        onStatusChange?.();
      } catch (error) {
        console.error('Error deactivating point:', error);
      }
    }
  };

  const handleReasonSubmit = async (data: { reason: string }) => {
    try {
      if (entity === 'user') {
        await changeUserStatus(userId!, false, data.reason);
      }
      else if (entity === 'point') {
        console.log(pointId);
        await changePointStatus(pointId!);
      }
      setIsOn(false);
      setShowReasonModal(false);
      setShowSuccessModal(true);
      onStatusChange?.();
    } catch (error) {
      console.error('Error updating user status:', error);
    }
  };

  type ModalCopy = { title: string; message: string; type: 'info' | 'warning' | 'error' };
  type SuccessModalCopy = { title: string; message: string };

  const modalCopy: Record<SwitchProps['entity'], ModalCopy> = {
    user: {
      title: 'Desativar usuário',
      message: 'Você tem certeza que deseja desativar este usuário?',
      type: 'warning',
    },
    point: {
      title: 'Desativar ponto',
      message: 'Você tem certeza que deseja desativar este ponto?',
      type: 'warning',
    },
  };

  const successModalCopy: Record<SwitchProps['entity'], { activate: SuccessModalCopy; deactivate: SuccessModalCopy }> = {
    user: {
      activate: {
        title: 'Usuário ativado',
        message: 'O usuário foi ativado com sucesso.',
      },
      deactivate: {
        title: 'Usuário desativado',
        message: 'O usuário foi desativado com sucesso.',
      },
    },
    point: {
      activate: {
        title: 'Ponto ativado',
        message: 'O ponto foi ativado com sucesso.',
      },
      deactivate: {
        title: 'Ponto desativado',
        message: 'O ponto foi desativado com sucesso.',
      },
    },
  };

  const { title, message, type } = modalCopy[entity];
  const successModal = successModalCopy[entity][lastAction];

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
        open={showWarningModal}
        onClose={() => setShowWarningModal(false)}
        onConfirm={confirmDeactivate}
        title={title}
        message={message}
        type={type}
      />

      <ReasonModal
        open={showReasonModal && entity === 'user'}
        onClose={() => setShowReasonModal(false)}
        onConfirm={handleReasonSubmit}
      />

      <Modal
        open={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
        title={successModal.title}
        message={successModal.message}
        type="success"
      />

    </>
  );
}
