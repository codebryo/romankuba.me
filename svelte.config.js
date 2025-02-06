import adapter from '@sveltejs/adapter-netlify';
import { mdsvex, escapeSvelte } from 'mdsvex';
import { createHighlighter } from 'shiki'; // cspell:disable-line
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const mdsvexOptions = {
	extensions: ['.md'],
	highlight: {
		highlighter: async (code, lang = 'text') => {
			const highlighter = await createHighlighter({
				themes: ['catppuccin-frappe'], // cspell:disable-line
				langs: ['javascript', 'typescript', 'dotenv', 'shellscript', 'json', 'html']
			});
			await highlighter.loadLanguage(
				'javascript',
				'typescript',
				'dotenv',
				'shellscript',
				'json',
				'html'
			);
			const html = escapeSvelte(highlighter.codeToHtml(code, { lang, theme: 'catppuccin-frappe' })); // cspell:disable-line
			return `{@html \`${html}\` }`;
		}
	},
	layout: {
		_: './src/mdsvex.svelte'
	}
};

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [vitePreprocess(), mdsvex(mdsvexOptions)],

	kit: {
		// adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://svelte.dev/docs/kit/adapters for more information about adapters.
		adapter: adapter()
	},

	extensions: ['.svelte', '.svx', '.md']
};

export default config;
