import { Trash, Eye } from 'lucide-react';
import Switch from "@/components/Switch/Switch"
import Modal from '@/components/Modal/Modal';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface User { id: string; name: string; email: string; points: number; status: string; }
interface UsersTableProps {
  users: User[];
  onDelete: (id: string) => void;
}

export function UsersTable({ users, onDelete }: UsersTableProps) {
  const [showWarningModal, setShowWarningModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const router = useRouter();

  const handleDeleteClick = (id: string) => {
    setSelectedId(id);
    setShowWarningModal(true);
  };

  const confirmDelete = () => {
    if (selectedId) {
      onDelete(selectedId);
      setSelectedId(null);
      setShowWarningModal(false);
      setShowSuccessModal(true);
    }
  };

  return (
    <div className="overflow-hidden rounded-lg border-2 border-green-200">
      <table className="min-w-full table-auto">
        <thead className="bg-gray-5">
          <tr>
            {['Nome', 'E-mail', 'Qnt. pontos', 'Status', 'Ações', 'Detalhes'].map(h => (
              <th key={h} className="px-6 py-3 text-left text-emerald-600 text-sm font-bold">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-green-200">
          {users.map((user) => (
            <tr key={user.id} className="hover:bg-green-50">
              <td className="px-6 py-4 text-sm font-medium text-gray-900">{user.name}</td>
              <td className="px-6 py-4 text-sm text-gray-500">{user.email}</td>
              <td className="px-6 py-4 text-sm text-gray-500">{user.points}</td>
              <td className="px-6 py-4"><Switch entity='user' /></td>
              <td className="px-6 py-4 text-sm">
                <div className="flex space-x-2">
                  {/* <button onClick={()=>onEdit(user.id)}>
                    <Pencil size={16} className="text-blue-600 hover:text-blue-900 cursor-pointer" />
                  </button> */}
                  <button onClick={() => handleDeleteClick(user.id)}>
                    <Trash size={16} className="text-red-600 hover:text-red-900 cursor-pointer" />
                  </button>
                </div>
              </td>
              <td className="px-6 py-4 text-sm">
                <button onClick={() => router.push(`/master/masterUsersPage/${user.id}`)}>
                  <Eye size={20} className="text-green-600 hover:text-green-900 cursor-pointer" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Modal
        open={showWarningModal}
        onClose={() => setShowWarningModal(false)}
        onConfirm={confirmDelete}
        title="Deletar usuário"
        message="Esta ação não pode ser desfeita."
        type="error"
      />

      <Modal
        open={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
        title="Usuário deletado"
        message={`O usuário foi deletado com sucesso.`}
        type="success"
      />
    </div>
  );
}
