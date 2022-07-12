// tailwind.config.js
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    content: [
        './index.html',
        './src/**/*.{vue,js,ts,jsx,tsx}',
        './src/App.jsx',
        './src/pages/**/*.{html,js,jsx}',
        './src/components/**/*.{html,js,jsx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter var', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                // cBlack: {
                //     100: '#f2e8e5',
                // }
                cBlack: '#111111',
                cGrey100: '#FAFAFA',
                cGrey200: '#f5f5f5',
                cGrey300: '#ececec',
            },
        },
    },
    plugins: [],
    // ...
};
