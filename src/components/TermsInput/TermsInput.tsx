interface TermsInputProps {
    onEdit: boolean;
}

export function TermsInput({ onEdit }: TermsInputProps) {
    return (
        <div className="flex justify-center gap-10 p-5">

            <div className="flex flex-col w-1/2">
                <h2 className="mb-2 text-lg  text-black font-bold">Termos de Uso</h2>
                <textarea
                    id="terms"
                    disabled={!onEdit}
                    placeholder="Digite os termos de uso..."
                    className={`
                        text-black 
                        bg-gray-100 border-2 
                        border-gray-300 rounded-md 
                        p-2 h-[50vh] resize-none
                        `}
                />
            </div>

            <div className="flex flex-col w-1/2">
                <h2 className="mb-2 text-lg text-black font-bold">Política de Privacidade</h2>
                <textarea
                    id="policy"
                    disabled={!onEdit}
                    placeholder="Digite a política de privacidade..."
                    className={`
                        text-black 
                        bg-gray-100 border-2 
                        border-gray-300 rounded-md 
                        p-2 h-[50vh] resize-none
                        `} />
            </div>
        </div>
    );
}

export default TermsInput;
