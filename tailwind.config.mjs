import defaultTheme from 'tailwindcss/defaultTheme'
/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
    			sans: [
    				'Geist',
                    ...defaultTheme.fontFamily.sans
                ],
    			mono: [
    				'GeistMono',
                    ...defaultTheme.fontFamily.mono
                ],
    			gambarino: [
    				'Gambarino',
                    ...defaultTheme.fontFamily.sans
                ]
    		},

			animation: {
				shine: 'shine 2s linear infinite',
				gradient: 'gradient 8s linear infinite',
			},
		},
	},
	plugins: [],
}
