import { SearchIcon } from 'lucide-react';

export function SearchInput() {
    return (
        <div className="relative mb-3">
            <input
                type="text"
                placeholder="Digite o nome do usuário"
                className="text-black block w-full py-2 pl-10 pr-4 border-2 border-gray-300 rounded-md focus:outline-none"
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <SearchIcon className='w-5 h-5 text-gray-600' />
            </div>
        </div>
    );
}

export default SearchInput;
