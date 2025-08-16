import { SearchIcon } from 'lucide-react';

interface SearchInputProps {
    placeholder: string;
}

export function SearchInput({ placeholder }: SearchInputProps) {
    return (
        <div className="relative mb-3">
            <input
                type="text"
                placeholder={placeholder}
                className="text-black block w-full py-2 pl-10 pr-4 border-2 border-black rounded-md focus:outline-none bg-gray-100"
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <SearchIcon className='w-5 h-5 text-gray-600' />
            </div>
        </div>
    );
}

export default SearchInput;
