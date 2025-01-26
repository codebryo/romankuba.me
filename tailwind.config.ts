import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts,svx}'],
	darkMode: 'selector',

	theme: {
		extend: {}
	},

	plugins: [typography]
} satisfies Config;
