'use client'

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { mockUsers } from "@/mock/usersMocked";
import MasterPageTitle from "@/components/MasterPageTitle/MasterPageTitle";
import UserDetails from "@/components/UserDetails/UserDetails";
import GoBackButton from "@/components/GoBackButton/GoBackButton";


export default function MasterUsersIdPage() {
    const { id } = useParams();
    const router = useRouter();
    const [user, setUser] = useState<any | null>(null);


    useEffect(() => {
        if (!id) return;

        const foundUser = mockUsers.users.find(u => u.id === id);

        if (!foundUser) {
            router.back();
        } else {
            setUser(foundUser);
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
