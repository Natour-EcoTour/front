import Link from "next/link";

interface HomeButtonProps {
    name: string;
    description: string;
    href: string;
}

const HomeButton = ({ name, description, href }: HomeButtonProps) => {
    return (
        <Link href={href} className="group block animate-fade-in-up">
            <div className="bg-white hover:bg-gradient-to-br hover:from-green-50 hover:to-blue-50 w-64 h-40 flex flex-col items-center justify-center gap-3 p-6 rounded-xl shadow-lg hover:shadow-xl border border-gray-200 hover:border-green-300 transition-all duration-300 transform hover:-translate-y-1">
                <span className="text-xl font-semibold text-gray-800 group-hover:text-green-700 transition-colors duration-300 text-center">
                    {name}
                </span>

                <span className="text-sm text-gray-500 group-hover:text-gray-600 transition-colors duration-300 text-center leading-relaxed">
                    {description}
                </span>
            </div>
        </Link>
    );
};

export default HomeButton;