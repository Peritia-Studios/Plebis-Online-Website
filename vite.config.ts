import { paraglideVitePlugin } from '@inlang/paraglide-js';
import { sveltekit } from '@sveltejs/kit/vite';
import tailwind from '@tailwindcss/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		sveltekit(),
		tailwind(),
		paraglideVitePlugin({
			project: './project.inlang',
			outdir: './src/lib/paraglide',
			strategy: ['url', 'cookie', 'baseLocale'],
			urlPatterns: [
				{
					pattern: '/about',
					localized: [
						['en', '/about'],
						['la', '/de-nobis']
					]
				},
				{
					pattern: '/updates',
					localized: [
						['en', '/updates'],
						['la', '/novitates']
					]
				}
			]
		})
	]
});
