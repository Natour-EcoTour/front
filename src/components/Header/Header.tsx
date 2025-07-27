import HeaderButton from "../HeaderButton/HeaderButton";
const Header = () => {
    return (
        <div className="flex flex-wrap justify-center md:justify-between items-center p-4 gap-2 text-black">
            <HeaderButton title="Sobre" />
            <HeaderButton title="Downloads" />
            <HeaderButton title="Contato" />
            <HeaderButton title="Termos de uso" />
            <HeaderButton title="Política de privacidade" />

            <button
                className={`
                text-[1.125rem] 
                font-[800] 
                cursor-pointer 
                border-[0.0625rem] border-green-700 rounded-[0.3125rem] 
                flex items-center justify-between 
                p-[0.5625rem_1.3125rem]`
                }>
                <span className="text-green-700 text-[1.125rem]">Login</span>
            </button>
        </div>
    );
};

export default Header;