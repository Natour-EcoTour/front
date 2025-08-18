interface PointStatusButtonProps {
    selected: string;
    onStatusChange: (status: string) => void;
}

export function PointStatusButton({ selected, onStatusChange }: PointStatusButtonProps) {

    return (
        <div className="space-x-4 mb-4">
            <button
                onClick={() => onStatusChange("pending")}
                className={`cursor-pointer p-2 rounded-md ${selected === "pending"
                        ? "bg-green-500"
                        : "bg-green-700 hover:bg-green-800"
                    }`}
            >
                Pendentes
            </button>

            <button
                onClick={() => onStatusChange("approved")}
                className={`cursor-pointer p-2 rounded-md ${selected === "approved"
                        ? "bg-green-500"
                        : "bg-green-700 hover:bg-green-800"
                    }`}
            >
                Aprovados
            </button>

            <button
                onClick={() => onStatusChange("rejected")}
                className={`cursor-pointer p-2 rounded-md ${selected === "rejected"
                        ? "bg-green-500"
                        : "bg-green-700 hover:bg-green-800"
                    }`}
            >
                Recusados
            </button>
        </div>
    );
}

export default PointStatusButton;
