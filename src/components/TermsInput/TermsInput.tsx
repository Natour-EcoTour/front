import { TermResponse, getTerm } from "@/services/terms/getTermService";
import Image from "next/image";
import { useEffect, useState, useRef, forwardRef, useImperativeHandle } from "react";

interface TermsInputProps {
    onEdit: boolean;
}

export interface TermsInputRef {
    getTermsValues: () => {
        termsContent: string;
        policyContent: string;
    };
}

export const TermsInput = forwardRef<TermsInputRef, TermsInputProps>(({ onEdit }, ref) => {
    const [isLoading, setIsLoading] = useState(false);
    const [term, setTerm] = useState<TermResponse | null>(null);
    const [policy, setPolicy] = useState<TermResponse | null>(null);
    
    const termsRef = useRef<HTMLTextAreaElement>(null);
    const policyRef = useRef<HTMLTextAreaElement>(null);

    useImperativeHandle(ref, () => ({
        getTermsValues: () => ({
            termsContent: termsRef.current?.value || "",
            policyContent: policyRef.current?.value || ""
        })
    }));

    useEffect(() => {
        const fetchTerms = async () => {
            setIsLoading(true);
            try {
                console.log("Fetching terms...");
                const [termResponse, policyResponse] = await Promise.all([
                    getTerm(1),
                    getTerm(2)
                ]);

                console.log("Terms fetched:", { termResponse, policyResponse });
                setTerm(termResponse);
                setPolicy(policyResponse);
            } catch (error) {
                console.error("Error fetching terms:", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchTerms();
    }, []);


    if (isLoading) {
        return (
            <div className="p-6 min-h-screen">
                <div className="flex justify-center items-center h-64">
                    <Image
                        src="/black_loading.svg"
                        alt="Carregando"
                        width={40}
                        height={40}
                        unoptimized
                        className="animate-spin"
                    />
                    <div className="text-lg text-black font-bold ml-3">Carregando termos...</div>
                </div>
            </div>
        );
    }

    return (
        <div className="flex justify-center gap-10 p-5">
            <div className="flex flex-col w-1/2">
                <b className="mb-2 text-lg  text-black font-bold">Termos de Uso</b>
                {!term?.content && !isLoading && (
                    <div className="text-sm text-gray-500 mb-2">
                        {term ? "Conteúdo vazio" : "Nenhum termo encontrado"}
                    </div>
                )}
                <textarea
                    ref={termsRef}
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
                    defaultValue={term?.content || ""}
                />
            </div>

            <div className="flex flex-col w-1/2">
                <b className="mb-2 text-lg text-black font-bold">Política de Privacidade</b>
                {!policy?.content && !isLoading && (
                    <div className="text-sm text-gray-500 mb-2">
                        {policy ? "Conteúdo vazio" : "Nenhuma política encontrada"}
                    </div>
                )}
                <textarea
                    ref={policyRef}
                    id="policy"
                    spellCheck={false}
                    disabled={!onEdit}
                    placeholder="Digite a política de privacidade..."
                    className={`
                        text-black 
                        bg-gray-100 border-2 
                        border-gray-300 rounded-md 
                        p-2 h-[50vh] resize-none
                        `}
                    defaultValue={policy?.content || ""}
                />
            </div>
        </div>
    );
});

TermsInput.displayName = "TermsInput";

export default TermsInput;
