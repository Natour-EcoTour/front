interface Reviews {
    id: string;
    user: string;
    point: string;
    rating: number;
}

interface ReviewsTableProps {
    reviews: Reviews[];
}

export function ReviewsTable({ reviews }: ReviewsTableProps) {
    return (
        <div className="overflow-hidden rounded-lg border-2 border-green-200">
            <table className="min-w-full table-auto">
                <thead className="bg-gray-200">
                    <tr>
                        {['Usuário', 'Ponto', 'Avaliação'].map(h => (
                            <th key={h} className="px-6 py-3 text-left text-emerald-600 text-sm font-bold">{h}</th>
                        ))}
                    </tr>
                </thead>

                <tbody className="bg-white divide-y divide-green-200">
                    {reviews.map((review) => {
                        return (
                            <tr key={review.id} className="hover:bg-green-50">
                                <td className="px-6 py-4 text-sm font-medium text-gray-900">{review.user}</td>

                                <td className="px-6 py-4 text-sm text-gray-500">{review.point}</td>

                                <td className="px-6 py-4 text-sm text-gray-500">{review.rating}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}
