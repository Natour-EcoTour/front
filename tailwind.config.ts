import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './src/**/*.{js,ts,jsx,tsx}',
        './node_modules/react-toastify/dist/*.css'
    ],
    theme: {
        extend: {},
    },
    plugins: [],
}

export default config
