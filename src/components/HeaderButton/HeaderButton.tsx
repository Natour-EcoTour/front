
interface HeaderButtonProps {
    title: string;
    targetId?: string;
}

const HeaderButton = ({ title, targetId }: HeaderButtonProps) => {
    const handleClick = () => {
        if (targetId) {
            const section = document.getElementById(targetId);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }
    return (
        <button className="cursor-pointer" onClick={handleClick}>
            <span className="text-green-700 text-[1.125rem] font-[800]">{title}</span>
        </button>
    )
}

export default HeaderButton;