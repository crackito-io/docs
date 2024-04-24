import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://docs.crackito.io',
	integrations: [
		starlight({
			title: '',
			logo: {
				light: './src/assets/logo_docs.webp',
				dark: './src/assets/logo_docs_light.webp'
			},
			social: {
				github: 'https://github.com/crackito-io/crackito',
			},
			sidebar: [
				{
					label: 'Overview', link: '/overview'
				},
				{
					label: 'User',
					autogenerate: { directory: 'user' },
				},
				{
					label: 'Admin',
					autogenerate: { directory: 'admin' },
				},
				{
					label: 'Developper',
					autogenerate: { directory: 'developper' },
				},
			],
		}),
	],
});
