import { Eye, EyeOff } from "lucide-react";
import { useState, forwardRef } from "react";

interface PasswordInputProps {
    placeholder: string;
    id: string;
    error?: string;
    name?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
    value?: string;
}

export const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
    ({ placeholder, id, error, name, onChange, onBlur, value }, ref) => {
        const [showPassword, setShowPassword] = useState(false);

        return (
            <>
                <div className="relative flex items-center">
                    <input
                        ref={ref}
                        type={showPassword ? "text" : "password"}
                        id={id}
                        name={name}
                        placeholder={placeholder}
                        className={`border ${error ? 'border-red-500' : 'border-black'} rounded-md p-1 w-full text-black`}
                        onChange={onChange}
                        onBlur={onBlur}
                        value={value}
                    />
                    <button
                        type="button"
                        className="cursor-pointer absolute right-2 top-1/2 transform -translate-y-1/2 text-black"
                        onClick={() => setShowPassword(!showPassword)}>
                        {showPassword ? <Eye /> : <EyeOff />}
                    </button>
                </div>
                {error && <span className="text-red-500 text-sm mt-1">{error}</span>}
            </>
        )
    }
)

PasswordInput.displayName = 'PasswordInput';

export default PasswordInput;
