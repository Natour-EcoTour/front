interface LandingpageCardsProps {
    title: string;
    description: string;
}

const LandingpageCards = ({ title, description }: LandingpageCardsProps) => {
    return (
        <>
            <div className="group bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-emerald-500"></div>
                <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300"></div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
                <p className="text-gray-600 leading-relaxed">{description}</p>
            </div>
        </>
    )
}

export default LandingpageCards;