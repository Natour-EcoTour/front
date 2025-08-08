import HomeButton from "@/components/HomeButton/HomeButton";

export default function MasterUsersPage() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center mt-10 px-4 max-w-6xl mx-auto">
                <HomeButton
                    name="Usuários"
                    description="Adiministre os usuários do sistema"
                    href="/master/masterUsersPage"
                />

                <HomeButton
                    name="Pontos"
                    description="Administre os pontos dos usuários do sistema"
                    href="/master/masterPointsPage"
                />

                <HomeButton
                    name="Avaliações"
                    description="Avalições dos pontos"
                    href="/master/masterReviewsPage"
                />

                <HomeButton
                    name="Termos e Política"
                    description="Pagina de administração de termos e política"
                    href="/master/masterTermsPage"
                />

                <HomeButton
                    name="Configurações"
                    description="Configurações da conta"
                    href="/master/masterConfigsPage"
                />

                <HomeButton
                    name="Sair"
                    description="Sair do sistema"
                    href="/"
                />
            </div>
    );
}