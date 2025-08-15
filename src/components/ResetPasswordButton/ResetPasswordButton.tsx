interface ResetPasswordButtonProps {
    onResetClick: () => void;
}

export function ResetPasswordButton({ onResetClick }: ResetPasswordButtonProps) {
    return (
        <>
            <button
                className="cursor-pointer mt-6 px-4 py-2 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700"
                onClick={onResetClick}
            >
                Redefinir senha
            </button>
        </>
    )
}

export default ResetPasswordButton;