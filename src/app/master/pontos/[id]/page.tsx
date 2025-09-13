'use client'
import { use, useEffect, useState } from "react";
import MasterPageTitle from "@/components/MasterPageTitle/MasterPageTitle";
import PointPhotos from "@/components/PointPhotos/PointPhotos";
import GoBackButton from "@/components/GoBackButton/GoBackButton";
import Image from "next/image";

import { pointDetails, PointDetailsResponse } from "@/services/points/pointDetailsService";
import { getPointTypeTranslation } from "@/utils/pointTypes";


interface MasterPointsIdPageProps {
    params: Promise<{
        id: string;
    }>;
}

export default function MasterPointsIdPage({ params }: MasterPointsIdPageProps) {
    const { id } = use(params);
    const [point, setPoint] = useState<PointDetailsResponse | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchPointDetails = async () => {
            try {
                setIsLoading(true);
                setError(null);
                const data = await pointDetails(id);
                setPoint(data);
            } catch (error) {
                console.error('Error fetching point details:', error);
                setError('Erro ao carregar os detalhes do ponto');
            } finally {
                setIsLoading(false);
            }
        };

        fetchPointDetails();
    }, [id]);

    if (isLoading) {
        return (
            <div className="p-6 bg-gray-50 min-h-screen">
                <div className="flex justify-center items-center h-64">
                    <Image
                        src="/black_loading.svg"
                        alt="Carregando"
                        width={40}
                        height={40}
                        unoptimized
                        className="animate-spin"
                    />
                    <div className="text-lg text-black font-bold ml-4">Carregando detalhes do ponto...</div>
                </div>
            </div>
        );
    }

    if (error || !point) {
        return (
            <div className="p-6 bg-gray-50 min-h-screen">
                <GoBackButton />
                <MasterPageTitle text="Erro ao carregar ponto" />
                <div className="text-center text-red-500 mt-8">
                    <p>{error || 'O ponto solicitado não foi encontrado.'}</p>
                </div>
            </div>
        );
    }

    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            <GoBackButton />
            <MasterPageTitle text={point.name} />

            <div className="text-black">
                <b className="text-xl font-semibold mb-4">Informações do Ponto</b>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div>
                        <p><span className="font-medium">Tipo:</span> {getPointTypeTranslation(point.point_type)}</p>
                        <p><span className="font-medium">Status:</span> {point.is_active ? 'Ativo' : 'Inativo'}</p>
                        <p><span className="font-medium">Visualizações:</span> {point.views}</p>
                        <p><span className="font-medium">Avaliação:</span> {point.avg_rating}/5</p>
                    </div>
                    <div>
                        <p><span className="font-medium">Cidade:</span> {point.city ? `${point.city}, ${point.state}` : 'Não informado'}</p>
                        <p><span className="font-medium">Bairro:</span> {point.neighborhood || 'Não informado'}</p>
                        <p><span className="font-medium">Horário:</span> {point.open_time} - {point.close_time}</p>
                        <p><span className="font-medium">Link:</span> {point.link ? (
                            <a href={point.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline ml-2">
                                Visitar
                            </a>
                        ) : 'Não informado'}</p>
                    </div>
                </div>
                <div className="mb-6">
                    <p><span className="font-medium">Descrição:</span></p>
                    <p className="text-gray-700 mt-2">{point.description}</p>
                </div>
            </div>

            <div>
                <b className="text-black text-xl font-semibold mb-4">Fotos do Ponto ({point.photos.length})</b>
                <PointPhotos photos={point.photos} />
            </div>
        </div>
    );
}
