import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PaginationProps {
    page: string;
    currentPage: number;
    totalPages: number;
    itemsPerPage: number;
    totalItems: number;
    goToPage: (page: number) => void;
}

export function Pagination({
    page,
    currentPage,
    totalPages,
    itemsPerPage,
    totalItems,
    goToPage,
}: PaginationProps) {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = Math.min(currentPage * itemsPerPage, totalItems);
    const count = endIndex - startIndex;

    return (
        <div className="flex items-center justify-between mt-6">
            <div className="text-sm text-black">
                Mostrando {count} de {totalItems} {page}
            </div>

            <div className="flex items-center space-x-2">
                <button
                    onClick={() => goToPage(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={`p-2 rounded-md ${currentPage === 1
                        ? 'text-gray-400 cursor-not-allowed'
                        : 'text-gray-700 hover:bg-gray-100'
                        }`}
                >
                    <ChevronLeft size={20} />
                </button>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                        key={page}
                        onClick={() => goToPage(page)}
                        className={`px-3 py-2 text-sm rounded-md ${currentPage === page
                            ? 'bg-green-600 text-white'
                            : 'text-gray-700 hover:bg-gray-100'
                            }`}
                    >
                        {page}
                    </button>
                ))}

                <button
                    onClick={() => goToPage(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className={`p-2 rounded-md ${currentPage === totalPages
                        ? 'text-gray-400 cursor-not-allowed'
                        : 'text-gray-700 hover:bg-gray-100'
                        }`}
                >
                    <ChevronRight size={20} />
                </button>
            </div>
        </div>
    );
}
