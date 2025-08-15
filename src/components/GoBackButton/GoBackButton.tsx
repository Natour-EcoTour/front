import { useRouter } from "next/navigation";

export function GoBackButton() {
    const router = useRouter();
    return (
        <>
            <button
                className="cursor-pointer text-white bg-green-500 hover:bg-green-600 p-2 w-24 rounded-xl"
                onClick={() => router.back()}
            >
                Voltar
            </button>
        </>
    )
}

export default GoBackButton;
