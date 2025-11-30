/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./App.tsx",
        "./index.tsx",
    ],
    theme: {
        extend: {
            fontFamily: {
                'heavenly': ['SVN-Heavenly', 'cursive'],
                'heavenly-bold': ['SVN-Heavenly-Bold', 'cursive'],
                'script': ['Great Vibes', 'cursive'],

                'vietnamese-script': ['Pacifico', 'cursive'],
                'serif': ['Cormorant Garamond', 'serif'],
                'body': ['Lato', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
