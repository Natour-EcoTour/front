import Navbar from "@/components/Navbar/Navbar";
import HomeButton from "@/components/HomeButton/HomeButton";
export default function MasterUsersPage() {
    return (
        <div>
            <Navbar />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center mt-10 px-4 max-w-6xl mx-auto">
                <HomeButton
                    name="Usuários"
                    description="Página de usuários do sistema"
                    href="/master/masterUsersPage"
                />

                <HomeButton
                    name="Usuários"
                    description="Página de usuários do sistema"
                    href="/master/masterUsersPage"
                />

                <HomeButton
                    name="Usuários"
                    description="Página de usuários do sistema"
                    href="/master/masterUsersPage"
                />

                <HomeButton
                    name="Usuários"
                    description="Página de usuários do sistema"
                    href="/master/masterUsersPage"
                />

                <HomeButton
                    name="Usuários"
                    description="Página de usuários do sistema"
                    href="/master/masterUsersPage"
                />

                <HomeButton
                    name="Usuários"
                    description="Página de usuários do sistema"
                    href="/master/masterUsersPage"
                />
            </div>

        </div>
    );
}