'use client'
import { use } from "react";
import MasterPageTitle from "@/components/MasterPageTitle/MasterPageTitle";
import PointPhotos from "@/components/PointPhotos/PointPhotos";
import { mockPoints } from "@/mock";

interface MasterPointsIdPageProps {
    params: Promise<{
        id: string;
    }>;
}

export default function MasterPointsIdPage({ params }: MasterPointsIdPageProps) {
    // Unwrap the params Promise
    const { id } = use(params);
    
    // Find the point by ID
    const point = mockPoints.points.find(p => p.id === id);

    // If point not found, show error message
    if (!point) {
        return (
            <div className="p-6 bg-gray-50 min-h-screen">
                <MasterPageTitle text="Ponto não encontrado" />
                <div className="text-center text-gray-500 mt-8">
                    <p>O ponto solicitado não foi encontrado.</p>
                </div>
            </div>
        );
    }

    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            <MasterPageTitle text={point.name} />

            <div className="text-black">
                <h2 className="text-xl font-semibold mb-4">Informações do Ponto</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div>
                        <p><span className="font-medium">Tipo:</span> {point.point_type}</p>
                        <p><span className="font-medium">Status:</span> {point.is_active ? 'Ativo' : 'Inativo'}</p>
                        <p><span className="font-medium">Visualizações:</span> {point.views}</p>
                        <p><span className="font-medium">Avaliação:</span> {point.avg_rating}/5</p>
                    </div>
                    <div>
                        <p><span className="font-medium">Cidade:</span> {point.city}, {point.state}</p>
                        <p><span className="font-medium">Bairro:</span> {point.neighborhood}</p>
                        <p><span className="font-medium">Horário:</span> {point.open_time} - {point.close_time}</p>
                    </div>
                </div>
                <div className="mb-6">
                    <p><span className="font-medium">Descrição:</span></p>
                    <p className="text-gray-700 mt-2">{point.description}</p>
                </div>
            </div>

            <div>
                <h2 className="text-black text-xl font-semibold mb-4">Fotos do Ponto ({point.photos.length})</h2>
                <PointPhotos photos={point.photos} />
            </div>
        </div>
    );
}
