import { Pencil, Trash, Eye } from 'lucide-react';
import Switch from "@/components/Switch/Switch"
interface User {
    id: string;
    name: string;
    email: string;
    points: number;
    status: string;
}

interface UsersTableProps {
    users: User[];
    onEdit: (id: string) => void;
    onDelete: (id: string) => void;
    onView: (id: string) => void;
}

export function UsersTable({
    users,
    onEdit,
    onDelete,
    onView,
}: UsersTableProps) {
    return (
        <div className="overflow-hidden rounded-lg border-2 border-green-200">
            <table className="min-w-full table-auto">
                <thead className="bg-gray-5">
                    <tr>
                        {['Nome', 'E-mail', 'Qnt. pontos', 'Status', 'Ações', 'Detalhes'].map((h) => (
                            <th
                                key={h}
                                className="px-6 py-3 text-left text-emerald-600 text-sm font-bold"
                            >
                                {h}
                            </th>
                        ))}
                    </tr>
                </thead>

                <tbody className="bg-white divide-y divide-green-200">
                    {users.map((user) => (
                        <tr key={user.id} className="hover:bg-green-50">
                            <td className="px-6 py-4 text-sm font-medium text-gray-900">
                                {user.name}
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500">{user.email}</td>
                            <td className="px-6 py-4 text-sm text-gray-500">{user.points}</td>
                            <td className="px-6 py-4">
                                <span>
                                    <Switch />
                                </span>
                            </td>
                            <td className="px-6 py-4 text-sm">
                                <div className="flex space-x-2">
                                    <button onClick={() => onEdit(user.id)}>
                                        <Pencil size={16} className="text-blue-600 hover:text-blue-900 cursor-pointer" />
                                    </button>
                                    <button onClick={() => onDelete(user.id)}>
                                        <Trash size={16} className="text-red-600 hover:text-red-900 cursor-pointer" />
                                    </button>
                                </div>
                            </td>
                            <td className="px-6 py-4 text-sm">
                                <button onClick={() => onView(user.id)}>
                                    <Eye size={20} className="text-green-600 hover:text-green-900 cursor-pointer" />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
