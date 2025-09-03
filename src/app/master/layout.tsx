'use client';
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar/Navbar";

export default function MasterLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        const checkAuthentication = async () => {
            try {
                const accessToken = localStorage.getItem('access');
                
                if (!accessToken) {
                    router.replace('/login');
                    return;
                }

                setIsAuthenticated(true);
            } catch (error) {
                console.error('Error checking authentication:', error);
                router.replace('/login');
            } finally {
                setIsLoading(false);
            }
        };

        checkAuthentication();
    }, [router]);

    if (isLoading) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-gray-50">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-500 mx-auto"></div>
                    <p className="mt-4 text-gray-600">Verificando autenticação...</p>
                </div>
            </div>
        );
    }

    if (!isAuthenticated) {
        return null;
    }

    return (
        <div className="flex min-h-screen">
            <Navbar />

            <main className="ml-80 flex-1 min-h-screen relative">
                <div 
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: "url('/blured_nature_trail.png')",
                    }}
                />
                
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/80 via-green-50/70 to-teal-50/80 backdrop-blur-[1px]" />
                
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_1px_1px,_rgba(16,185,129,0.3)_1px,_transparent_0)] bg-[length:20px_20px]" />
                
                <div className="relative z-10">
                    {children}
                </div>
            </main>
        </div>
    );
}
