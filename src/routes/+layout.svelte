<script lang="ts">
	import '../app.css';
	import { page } from '$app/state';
	import { getLocale, locales, localizeHref, deLocalizeHref } from '$lib/paraglide/runtime.js';
	import { m } from '$lib/paraglide/messages.js';
	import MobileDrawer from './MobileDrawer.svelte';
	import PlebisOnline from '$lib/components/icons/PlebisOnline.svelte';
	import { links } from '$lib';

	let { children } = $props();

	let real_route = $derived(deLocalizeHref(page.url.pathname));
</script>

<div class="min-h-screen">
	<header
		class="border-surface-500/20 bg-surface-50/90 dark:bg-surface-950/90 sticky top-0 z-50 flex h-[70px] w-full items-center border-b-[1px] backdrop-blur-sm"
	>
		<div
			class="grid w-full grid-cols-[auto_1fr_auto] items-center gap-4 px-4 md:grid-cols-[1fr_auto_1fr] md:px-10"
		>
			<div class="flex items-center justify-start gap-6">
				<MobileDrawer />
				<a
					href={localizeHref('/')}
					title={m.nav_home()}
					class="hidden items-center justify-center md:flex"
				>
					<PlebisOnline
						size={42}
						class={real_route === '/' || real_route === '' ? 'icon-glowing' : 'opacity-80'}
					/>
				</a>
				<a
					class="hidden hover:underline md:flex {deLocalizeHref(page.url.pathname) === '/updates'
						? ''
						: 'opacity-60'}"
					href={localizeHref('/updates')}
					title={m.nav_updates()}>{m.nav_updates()}</a
				>
				<a
					class="hidden hover:underline md:flex {deLocalizeHref(page.url.pathname) === '/about'
						? ''
						: 'opacity-60'}"
					href={localizeHref('/about')}
					title={m.nav_about()}>{m.nav_about()}</a
				>
			</div>
			<div class="flex items-center gap-2">
				{#each locales as locale}
					<a
						data-sveltekit-reload
						href={localizeHref(page.url.pathname, { locale })}
						class="hover:underline {locale === getLocale() ? '' : 'opacity-60'}"
					>
						{locale.toUpperCase()}
					</a>
				{/each}
			</div>
			<div class="flex items-center justify-end gap-1">
				{#each links as { name, icon: Icon, url }}
					<a class="btn-icon" href={url} target="_blank" title={name}>
						<Icon size="20" />
					</a>
				{/each}
			</div>
		</div>
	</header>

	<div class="w-full">
		{@render children?.()}
	</div>
</div>
