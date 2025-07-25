import type { Config } from "tailwindcss"
import animate from "tailwindcss-animate"

const config: Config = {
    content: [
        "./src/**/*.{ts,tsx,js,jsx}",
        "./node_modules/react-toastify/dist/*.css"
    ],
    theme: {
        extend: {},
    },
    plugins: [animate],
}

export default config
