
interface MasterPageTitleProps {
    text: string
}

const MasterPageTitle = ({ text }: MasterPageTitleProps) => {
    return (
        <h1 className='font-bold text-4xl text-black py-4'>{text}</h1>
    );
};

export default MasterPageTitle;
