// tailwind.config.js
module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                "primary-theme": "var(--primary-theme)",
                "primary-700": "var(--dark-primary)",
                "info": "var(--yellow-variant-1)",
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}