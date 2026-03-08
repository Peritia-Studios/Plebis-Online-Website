<script lang="ts">
	import { Icon } from 'lucide-svelte';

	const iconNode: any = [
		[
			'path',
			{
				d: 'M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17'
			}
		],
		[
			'path',
			{
				d: 'm10 15 5-3-5-3z'
			}
		]
	];

	/**
	 * @component @name YouTube
	 * @description Lucide SVG icon component, renders SVG Element with children.
	 *
	 * @preview ![img](data:image/svg+xml;base64,...) - https://lucide.dev/icons/instagram
	 * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
	 *
	 * @param {Object} props - Lucide icons props and any valid SVG attribute
	 * @returns {FunctionalComponent} Svelte component
	 *
	 */
</script>

<Icon name="youtube" {...$$props} fill="none" strokeWidth="2" {iconNode}>
	<slot />
</Icon>
