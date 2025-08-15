import { useState, useMemo } from 'react';

export function usePagination<T>(items: T[], itemsPerPage: number) {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = useMemo(
        () => Math.ceil(items.length / itemsPerPage),
        [items.length, itemsPerPage]
    );
    const currentData = useMemo(
        () =>
            items.slice(
                (currentPage - 1) * itemsPerPage,
                currentPage * itemsPerPage
            ),
        [items, currentPage, itemsPerPage]
    );
    const goToPage = (page: number) => {
        if (page >= 1 && page <= totalPages) setCurrentPage(page);
    };
    return { currentData, currentPage, totalPages, goToPage };
}
