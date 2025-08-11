import { Map, Trash, Eye } from 'lucide-react';
import Switch from "@/components/Switch/Switch";
import Modal from '@/components/Modal/Modal';
import { useState } from 'react';

interface Points {
    id: string;
    name: string;
    link: string;
    state: string;
    views: number;
    status: boolean;
    // needed for Maps link fallback
    latitude?: number | null;
    longitude?: number | null;
    street?: string;
    number?: string;
    city?: string;
    zip_code?: string;
}

interface PointsTableProps {
    points: Points[];
    onEdit: (id: string) => void;
    onDelete: (id: string) => void;
    onView: (id: string) => void;
}

export function PointsTable({ points, onDelete, onView }: PointsTableProps) {
    const [showModal, setShowModal] = useState(false);
    const [selectedId, setSelectedId] = useState<string | null>(null);

    const handleDeleteClick = (id: string) => {
        setSelectedId(id);
        setShowModal(true);
    };

    const confirmDelete = () => {
        if (selectedId) onDelete(selectedId);
        setShowModal(false);
        setSelectedId(null);
    };

    return (
        <div className="overflow-hidden rounded-lg border-2 border-green-200">
            <table className="min-w-full table-auto">
                <thead className="bg-gray-5">
                    <tr>
                        {['Nome', 'Link', 'Localização', 'Visualizações', 'Status', 'Ações', 'Detalhes'].map(h => (
                            <th key={h} className="px-6 py-3 text-left text-emerald-600 text-sm font-bold">{h}</th>
                        ))}
                    </tr>
                </thead>

                <tbody className="bg-white divide-y divide-green-200">
                    {points.map((point) => {
                        const pointAddressLink =
                            point.latitude != null && point.longitude != null
                                ? `https://www.google.com/maps?q=${point.latitude},${point.longitude}`
                                : `https://www.google.com/maps?q=${encodeURIComponent(
                                    `${point?.street ?? ''}, ${point?.number ?? ''}, ${point?.city ?? ''} - ${point.state}, ${point?.zip_code ?? ''}`
                                )}`;

                        return (
                            <tr key={point.id} className="hover:bg-green-50">
                                <td className="px-6 py-4 text-sm font-medium text-gray-900">{point.name}</td>

                                <td className="px-6 py-4 text-sm">
                                    {point.link ? (
                                        <a className="text-blue-500 underline" href={point.link} target="_blank" rel="noopener noreferrer">
                                            {point.link}
                                        </a>
                                    ) : (
                                        <span className="text-gray-400">—</span>
                                    )}
                                </td>

                                <td className="px-6 py-4 text-sm text-gray-500">
                                    <a
                                        href={pointAddressLink}
                                        target="_blank"
                                        rel="noopener noreferrer">
                                        <Map className="inline-block mr-1 text-green-600" />
                                        {point.state}
                                    </a>
                                </td>

                                <td className="px-6 py-4 text-sm text-gray-500">{point.views}</td>

                                <td className="px-6 py-4">
                                    <Switch entity="point" />
                                </td>

                                <td className="px-6 py-4 text-sm">
                                    <div className="flex items-center justify-center">
                                        <button onClick={() => handleDeleteClick(point.id)}>
                                            <Trash size={16} className="text-red-600 hover:text-red-900 cursor-pointer" />
                                        </button>
                                    </div>
                                </td>

                                <td className="px-6 py-4 text-sm">
                                    <div className="flex items-center justify-center">
                                        <button onClick={() => onView(point.id)}>
                                            <Eye size={20} className="text-green-600 hover:text-green-900 cursor-pointer" />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>

            <Modal
                open={showModal}
                onClose={() => setShowModal(false)}
                onConfirm={confirmDelete}
                title="Deletar ponto"
                message="Esta ação não pode ser desfeita."
                type="error"
            />
        </div>
    );
}
