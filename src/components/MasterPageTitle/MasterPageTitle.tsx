
interface MasterPageTitleProps {
    text: string
}

const MasterPageTitle = ({ text }: MasterPageTitleProps) => {
    return (
        <b className='font-bold text-4xl text-black py-4 flex'>{text}</b>
    );
};

export default MasterPageTitle;
