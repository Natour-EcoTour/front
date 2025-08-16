import Navbar from "@/components/Navbar/Navbar";

export default function MasterLayout({
    children,
}: {
    children: React.ReactNode;
}) {
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
