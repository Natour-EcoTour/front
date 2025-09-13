import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ApiPaginationProps {
    page: string;
    currentPage: number;
    totalItems: number;
    itemsPerPage: number;
    hasNext: boolean;
    hasPrevious: boolean;
    onNextPage: () => void;
    onPreviousPage: () => void;
}

export function ApiPagination({
    page,
    currentPage,
    totalItems,
    itemsPerPage,
    hasNext,
    hasPrevious,
    onNextPage,
    onPreviousPage,
}: ApiPaginationProps) {
    const startIndex = (currentPage - 1) * itemsPerPage + 1;
    const endIndex = Math.min(currentPage * itemsPerPage, totalItems);
    const currentCount = endIndex - startIndex + 1;

    return (
        <div className="flex items-center justify-between mt-6">
            <div className="text-sm text-black">
                Mostrando {currentCount} de {totalItems} {page}
            </div>

            <div className="flex items-center space-x-2">
                <button
                    onClick={onPreviousPage}
                    disabled={!hasPrevious}
                    className={`p-2 rounded-md ${!hasPrevious
                        ? 'text-gray-400 cursor-not-allowed'
                        : 'text-gray-700 hover:bg-gray-100'
                        }`}
                    title={hasPrevious ? 'Página anterior' : 'Primeira página'}
                >
                    <ChevronLeft size={20} />
                </button>

                <span className="px-3 py-2 text-sm rounded-md bg-green-600 text-white">
                    Página {currentPage}
                </span>

                <button
                    onClick={onNextPage}
                    disabled={!hasNext}
                    className={`p-2 rounded-md ${!hasNext
                        ? 'text-gray-400 cursor-not-allowed'
                        : 'text-gray-700 hover:bg-gray-100'
                        }`}
                    title={hasNext ? 'Próxima página' : 'Última página'}
                >
                    <ChevronRight size={20} />
                </button>
            </div>
        </div>
    );
}
