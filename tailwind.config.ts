import type { Config } from 'tailwindcss'
import animate from 'tailwindcss-animate'

const config: Config = {
    content: [
        './src/**/*.{js,ts,jsx,tsx}',
        './node_modules/react-toastify/dist/*.css'
    ],
    theme: {
        extend: {},
    },
    plugins: [animate],
}

export default config
