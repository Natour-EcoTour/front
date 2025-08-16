'use client'

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { mockUsers } from "@/mock/usersMocked";
import MasterPageTitle from "@/components/MasterPageTitle/MasterPageTitle";
import UserDetails from "@/components/UserDetails/UserDetails";
import GoBackButton from "@/components/GoBackButton/GoBackButton";

interface User {
    id: string;
    role: string;
    avatar: string;
    name: string;
    points: number;
    status: string;
    email: string;
    deactivation_reason?: string;
    created_at: string;
    updated_at: string;
}

export default function MasterUsersIdPage() {
    const { id } = useParams();
    const router = useRouter();
    const [user, setUser] = useState<User | null>(null);


    useEffect(() => {
        if (!id) return;

        const foundUser = mockUsers.users.find(u => u.id === id);

        if (!foundUser) {
            router.back();
        } else {
            setUser({
                id: foundUser.id,
                role: foundUser.role,
                avatar: foundUser.avatar || '',
                name: foundUser.name,
                points: foundUser.points,
                status: foundUser.status,
                email: foundUser.email,
                deactivation_reason: foundUser.deactivation_reason || undefined,
                created_at: foundUser.created_at,
                updated_at: foundUser.updated_at
            });
        }
    }, [id, router]);

    if (!user) {
        return <div className="p-6">Carregando usuário...</div>;
    }



    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            <GoBackButton />
            <MasterPageTitle text={user.name} />

            <UserDetails
                user={user}
            />

        </div>
    );
}
