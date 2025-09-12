import { Map, Eye } from 'lucide-react';
import Modal from '@/components/Modal/Modal';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface Points {
    id: string;
    name: string;
    link: string;
    state: string;
    views: number;
    status: boolean | null;
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
}

export function PendingPointsTable({ points, onDelete }: PointsTableProps) {
    const [showApproveModal, setShowApproveModal] = useState(false);
    const [showApproveSuccessModal, setShowApproveSuccessModal] = useState(false);
    const [showReproveModal, setShowReproveModal] = useState(false);
    const [showReproveSuccessModal, setShowReproveSuccessModal] = useState(false);

    const [selectedId, setSelectedId] = useState<string | null>(null);

    const router = useRouter();

    const handleApproveClick = (id: string) => {
        setSelectedId(id);
        setShowApproveModal(true);
    };

    const handleReproveClick = (id: string) => {
        setSelectedId(id);
        setShowReproveModal(true);
    };

    const confirmApprove = () => {
        if (selectedId) {
            console.log('Approving point:', selectedId);
        }
        setShowApproveModal(false);
        setSelectedId(null);
        setShowApproveSuccessModal(true);
    };

    const confirmReprove = () => {
        if (selectedId) {
            console.log('Rejecting point:', selectedId);
        }
        setShowReproveModal(false);
        setSelectedId(null);
        setShowReproveSuccessModal(true);
    };

    return (
        <div className="overflow-hidden rounded-lg border-2 border-green-200">
            <table className="min-w-full table-auto">
                <thead className="bg-gray-200">
                    <tr>
                        {['Nome', 'Link', 'Localização', 'Visualizações', 'Detalhes', ''].map(h => (
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

                                <td className="px-6 py-4 text-sm">
                                    <button onClick={() => router.push(`/master/pontos/${point.id}`)}>
                                        <Eye size={20} className="text-green-600 hover:text-green-900 cursor-pointer" />
                                    </button>
                                </td>

                                <td className='space-x-3'>
                                    <button
                                        onClick={() => handleApproveClick(point.id)}
                                        className='cursor-pointer bg-green-500 hover:bg-green-600 text-white font-bold py-1 px-2 rounded'>
                                        Aprovar
                                    </button>

                                    <button
                                        onClick={() => handleReproveClick(point.id)}
                                        className='cursor-pointer bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-2 rounded'>
                                        Reprovar
                                    </button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>

            <Modal
                open={showApproveModal}
                onClose={() => setShowApproveModal(false)}
                onConfirm={confirmApprove}
                title="Aprovar ponto?"
                message="Ao aprovar este ponto ele irá aparecer para todos os usuários da plataforma."
                type="warning"
            />

            <Modal
                open={showApproveSuccessModal}
                onClose={() => setShowApproveSuccessModal(false)}
                title="Ponto aprovado"
                message={`O ponto foi aprovado com sucesso.`}
                type="success"
            />

            <Modal
                open={showReproveModal}
                onClose={() => setShowReproveModal(false)}
                onConfirm={confirmReprove}
                title="Reprovar ponto?"
                message="Ao reprovar este ponto ele não irá aparecer para nenhum usuário da plataforma."
                type="error"
            />

            <Modal
                open={showReproveSuccessModal}
                onClose={() => setShowReproveSuccessModal(false)}
                title="Ponto reprovado"
                message={`O ponto foi reprovado com sucesso.`}
                type="success"
            />
        </div>
    );
}
