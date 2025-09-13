import { useEffect, useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { useDebounce } from '@/hooks/useDebounce';

import { Map, Eye, MapPinnedIcon, Trash } from 'lucide-react';

import Image from 'next/image';
import Modal from '@/components/Modal/Modal';
import SearchInput from '@/components/SearchInput/SearchInput';
import { Pagination } from '@/components/Pagination/Pagination';

import { PointListResponse, listPoints, PointItem } from '@/services/points/getPointsService';
import { changePointStatus } from '@/services/points/pointStatusService';
import { deletePoint } from '@/services/points/deletePointService';


export function RefusedPointsTable() {
    const [points, setPoints] = useState<PointItem[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [totalItems, setTotalItems] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(12);
    const [currentPage, setCurrentPage] = useState(1);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [showDeleteSuccessModal, setShowDeleteSuccessModal] = useState(false);
    const [showApproveModal, setShowApproveModal] = useState(false);
    const [showApproveSuccessModal, setShowApproveSuccessModal] = useState(false);
    const [selectedId, setSelectedId] = useState<string | null>(null);
    const [searchTerm, setSearchTerm] = useState('');
    const router = useRouter();
    const debouncedSearchTerm = useDebounce(searchTerm, 500)

    const truncateUrl = (url: string, maxLength: number = 50) => {
        if (url.length <= maxLength) return url;
        return url.substring(0, maxLength) + '...';
    };

    const refreshPoints = useCallback(async () => {
        setIsLoading(true);
        try {
            const searchParams: { page: number; name?: string; status: string } = { page: currentPage, status: 'false' }

            if (debouncedSearchTerm.trim()) {
                searchParams.name = debouncedSearchTerm.trim();
            }

            const pointData: PointListResponse = await listPoints(searchParams);
            setPoints(pointData.results);
            setTotalItems(pointData.count);

            if (currentPage === 1 && pointData.results.length > 0) {
                setItemsPerPage(pointData.results.length);
            }
            const pageSize = currentPage === 1 ? pointData.results.length : itemsPerPage;
            const calculatedTotalPages = Math.ceil(pointData.count / (pageSize || 12));
            setTotalPages(calculatedTotalPages);
        } catch (error) {
            console.error('Error fetching points:', error);
            setPoints([]);
            setTotalItems(0);
            setTotalPages(0);
        } finally {
            setIsLoading(false);
        }
    }, [currentPage, debouncedSearchTerm, itemsPerPage]);

    const refreshPointsSilently = useCallback(async () => {
        try {
            const searchParams: { page: number; name?: string; status: string } = { page: currentPage, status: 'false' }

            if (debouncedSearchTerm.trim()) {
                searchParams.name = debouncedSearchTerm.trim();
            }

            const pointData: PointListResponse = await listPoints(searchParams);
            setPoints(pointData.results);
            setTotalItems(pointData.count);

            if (currentPage === 1 && pointData.results.length > 0) {
                setItemsPerPage(pointData.results.length);
            }
            const pageSize = currentPage === 1 ? pointData.results.length : itemsPerPage;
            const calculatedTotalPages = Math.ceil(pointData.count / (pageSize || 12));
            setTotalPages(calculatedTotalPages);
        } catch (error) {
            console.error('Error fetching points:', error);
        }
    }, [currentPage, debouncedSearchTerm, itemsPerPage]);

    const handleApproveClick = (id: string) => {
        setSelectedId(id);
        setShowApproveModal(true);
    };

    const handleDeleteClick = (id: string) => {
        setSelectedId(id);
        setShowDeleteModal(true);
    };

    const confirmApprove = async () => {
        if (selectedId) {
            await changePointStatus(selectedId, { status: true, is_active: true })
                .then(() => {
                    setShowApproveSuccessModal(true);
                    refreshPointsSilently(); // Refresh the table silently after successful approval
                })
                .catch((error) => {
                    console.error('Error approving point:', error);
                });
        }
        setShowApproveModal(false);
        setSelectedId(null);
    };

    const confirmDelete = async () => {
        if (selectedId) {
            await deletePoint(selectedId)
                .then(() => {
                    setShowDeleteSuccessModal(true);
                    refreshPointsSilently(); // Refresh the table silently after successful deletion
                })
                .catch((error) => {
                    console.error('Error deleting point:', error);
                });
        }
        setShowDeleteModal(false);
        setSelectedId(null);
    };

    useEffect(() => {
        refreshPoints();
    }, [refreshPoints]);

    const goToPage = (page: number) => {
        setCurrentPage(page);
    };

    const handleSearchChange = (value: string) => {
        setSearchTerm(value);
        setCurrentPage(1);
    };

    if (isLoading) {
        return (
            <div className="p-6 min-h-screen">
                <div className="flex justify-center items-center h-64">
                    <Image
                        src="/black_loading.svg"
                        alt="Carregando"
                        width={40}
                        height={40}
                        unoptimized
                        className="animate-spin"
                    />
                    <div className="text-lg text-black font-bold">Carregando pontos...</div>
                </div>
            </div>
        );
    };

    return (
        <>
            <SearchInput
                placeholder="Digite o nome do ponto..."
                value={searchTerm}
                onChange={handleSearchChange}
                isLoading={isLoading}
            />

            <div className="overflow-hidden rounded-lg border-2 border-green-200">
                <table className="min-w-full table-auto">
                    <thead className="bg-gray-200">
                        <tr>
                            {['Nome', 'Link', 'Localização', 'Detalhes', 'Excluir', ''].map(h => (
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
                                            <a
                                                className="text-blue-500 underline"
                                                href={point.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                title={point.link}
                                            >
                                                {truncateUrl(point.link)}
                                            </a>
                                        ) : (
                                            <span className="text-gray-400">—</span>
                                        )}
                                    </td>

                                    <td className="px-6 py-4 text-sm text-gray-500">
                                        {point.state ? (
                                            <a
                                                href={pointAddressLink}
                                                target="_blank"
                                                rel="noopener noreferrer">
                                                <Map className="inline-block mr-1 text-green-600" />
                                                {point.state}
                                            </a>
                                        ) : (
                                            <a
                                                href={pointAddressLink}
                                                target="_blank"
                                                rel="noopener noreferrer">
                                                <MapPinnedIcon className="inline-block mr-1 text-green-600" />
                                            </a>
                                        )}
                                    </td>

                                    <td className="px-6 py-4 text-sm">
                                        <button onClick={() => router.push(`/master/pontos/${point.id}`)}>
                                            <Eye size={20} className="text-green-600 hover:text-green-900 cursor-pointer" />
                                        </button>
                                    </td>

                                    <td className="px-6 py-4 text-sm">
                                        <div className="flex space-x-2">
                                            <button onClick={() => handleDeleteClick(point.id.toString())}>
                                                <Trash size={16} className="text-red-600 hover:text-red-900 cursor-pointer" />
                                            </button>
                                        </div>
                                    </td>

                                    <td className='space-x-3'>
                                        <button
                                            onClick={() => handleApproveClick(point.id.toString())}
                                            className='cursor-pointer bg-green-500 hover:bg-green-600 text-white font-bold py-1 px-2 rounded'>
                                            Aprovar
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
                    open={showDeleteModal}
                    onClose={() => setShowDeleteModal(false)}
                    onConfirm={confirmDelete}
                    title="Deletar ponto?"
                    message="Ao deletar este ponto ele será removido permanentemente da plataforma."
                    type="error"
                />

                <Modal
                    open={showDeleteSuccessModal}
                    onClose={() => setShowDeleteSuccessModal(false)}
                    title="Ponto deletado"
                    message={`O ponto foi deletado com sucesso.`}
                    type="success"
                />
            </div>

            <Pagination
                page="pontos rejeitados"
                currentPage={currentPage}
                totalPages={totalPages}
                itemsPerPage={itemsPerPage}
                totalItems={totalItems}
                goToPage={goToPage}
            />
        </>
    );
}
