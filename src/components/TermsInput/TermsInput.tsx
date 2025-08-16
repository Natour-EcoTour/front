interface TermsInputProps {
    onEdit: boolean;
}

export function TermsInput({ onEdit }: TermsInputProps) {
    return (
        <div className="flex justify-center gap-10 p-5">

            <div className="flex flex-col w-1/2">
                <b className="mb-2 text-lg  text-black font-bold">Termos de Uso</b>
                <textarea
                    id="terms"
                    spellCheck={false}
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
                <b className="mb-2 text-lg text-black font-bold">Política de Privacidade</b>
                <textarea
                    id="policy"
                    spellCheck={false}
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
