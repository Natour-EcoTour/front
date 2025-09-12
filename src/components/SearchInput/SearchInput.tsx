import { SearchIcon, Loader2 } from 'lucide-react';

interface SearchInputProps {
    placeholder: string;
    value?: string;
    onChange?: (value: string) => void;
    isLoading?: boolean;
}

export function SearchInput({ placeholder, value, onChange, isLoading }: SearchInputProps) {
    return (
        <div className="relative mb-3">
            <input
                type="text"
                placeholder={placeholder}
                value={value}
                onChange={(e) => onChange?.(e.target.value)}
                className="text-black block w-full py-2 pl-10 pr-4 border-2 border-black rounded-md focus:outline-none bg-gray-100"
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                {isLoading ? (
                    <Loader2 className='w-5 h-5 text-gray-600 animate-spin' />
                ) : (
                    <SearchIcon className='w-5 h-5 text-gray-600' />
                )}
            </div>
        </div>
    );
}

export default SearchInput;
