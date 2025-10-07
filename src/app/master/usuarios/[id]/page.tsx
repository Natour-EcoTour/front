'use client'

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import MasterPageTitle from "@/components/MasterPageTitle/MasterPageTitle";
import UserDetails from "@/components/UserDetails/UserDetails";
import GoBackButton from "@/components/GoBackButton/GoBackButton";

import { getUserDetails, UserDetailsResponse } from "@/services/users/userDetailsService";
import Image from "next/image";

export default function MasterUsersIdPage() {
    const [isLoading, setIsloading] = useState(false);
    const [user, setUser] = useState<UserDetailsResponse | null>(null);
    const params = useParams();
    const userId = params.id as string;

    useEffect(() => {
        const fetchUserDetails = async () => {
            setIsloading(true);
            try {
                const userData: UserDetailsResponse = await getUserDetails(userId);
                setUser(userData);
            } catch (error) {
                console.error("Error fetching user details:", error);
            } finally {
                setIsloading(false);
            }
        };

        fetchUserDetails();
    }, [userId]);

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
                    <div className="text-lg text-black font-bold">Carregando usuário...</div>
                </div>
            </div>
        );
    }

    if (!user) {
        return (
            <div className="p-6 min-h-screen">
                <div className="flex justify-center items-center h-64">
                    <div className="text-lg text-red-600 font-bold">Usuário não encontrado</div>
                </div>
            </div>
        );
    }

    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            <GoBackButton />
            <MasterPageTitle text={user.username} />

            <UserDetails
                user={{
                    id: user.id.toString(),
                    name: user.username,
                    masked_email: user.masked_email,
                    photo: user.photo || '',
                    is_active: user.is_active,
                    created_at: user.created_at,
                    updated_at: user.updated_at
                }}
            />

        </div>
    );
}
