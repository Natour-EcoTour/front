
interface HeaderButtonProps {
    title: string;
}

const HeaderButton = ({ title }: HeaderButtonProps) => {
    return (
        <button className="cursor-pointer">
            <span className="text-green-700 text-[1.125rem] font-[800]">{title}</span>
        </button>
    )
}

export default HeaderButton;