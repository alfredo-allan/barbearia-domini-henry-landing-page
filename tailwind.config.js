/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/**/*.{js,ts,jsx,tsx}',
        './app/**/*.{js,ts,jsx,tsx}', // Certifique-se de incluir a pasta app
    ],
    theme: {
        extend: {
            colors: {
                // Use as variáveis CSS que você definiu em globals.css
                primary: 'var(--color-primary)',
                secondary: 'var(--color-secondary)',
                accent: 'var(--color-accent)',
                background: 'var(--color-background)',
                textPrimary: 'var(--color-text-primary)',
                textSecondary: 'var(--color-text-secondary)',
                footerBg: 'var(--color-footer-bg)',
                headerBg: 'var(--color-header-bg)',
            },
            fontFamily: {
                // A fonte já está como variável no HTML via next/font
                // Então, aqui você apenas se refere a ela
                lubrifont: ['var(--font-lubrifont)', 'sans-serif'],
            },
        },
    },
    plugins: [],
};