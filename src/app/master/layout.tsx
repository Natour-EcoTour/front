import Navbar from "@/components/Navbar/Navbar";

export default function MasterLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex">
            <Navbar />

            <main className="ml-80 flex-1 min-h-screen">
                {children}
            </main>
        </div>
    );
}
