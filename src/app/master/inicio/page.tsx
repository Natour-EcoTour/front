import HomeButton from "@/components/HomeButton/HomeButton";

export default function MasterUsersPage() {
    return (
        // TODO APENAS DEIXAR ENTRAR NESSA TELA EM DIANTE SE FOR MASTER
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center mt-10 px-4 max-w-6xl mx-auto">
            <HomeButton
                name="Usuários"
                description="Adiministre os usuários do sistema"
                href="/master/usuarios"
            />

            <HomeButton
                name="Pontos"
                description="Administre os pontos dos usuários do sistema"
                href="/master/pontos"
            />

            <HomeButton
                name="Avaliações"
                description="Avalições dos pontos"
                href="/master/avaliacoes"
            />

            <HomeButton
                name="Termos e Política"
                description="Pagina de administração de termos e política"
                href="/master/termos-e-politica"
            />

            <HomeButton
                name="Configurações"
                description="Configurações da conta"
                href="/master/configuracoes"
            />

            <HomeButton
                name="Sair"
                description="Sair do sistema"
                href="/"
                isExit
            />
        </div>
    );
}