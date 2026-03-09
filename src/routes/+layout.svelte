<script lang="ts">
	import '../app.css';
	import { page } from '$app/state';
	import { onNavigate } from '$app/navigation';
	import { getLocale, localizeHref, deLocalizeHref, setLocale } from '$lib/paraglide/runtime.js';
	import { m } from '$lib/paraglide/messages.js';
	import MobileDrawer from './MobileDrawer.svelte';
	import PlebisOnline from '$lib/components/icons/PlebisOnline.svelte';
	import { links } from '$lib';
	import { Switch } from '@skeletonlabs/skeleton-svelte';
	import { Earth, Languages } from 'lucide-svelte';

	let { children } = $props();

	let real_route = $derived(deLocalizeHref(page.url.pathname));

	// View transition
	let currentTransition: ViewTransition | null = $state(null);

	onNavigate((navigation) => {
		if (!document.startViewTransition) return;

		return new Promise((resolve) => {
			if (currentTransition && currentTransition.skipTransition) {
				currentTransition.skipTransition();
			}

			currentTransition = document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});

			currentTransition.ready.catch(() => {});

			currentTransition.finished.finally(() => {
				currentTransition = null;
			});
		});
	});
</script>

<div class="flex min-h-screen flex-col">
	<header
		class="border-surface-500/20 bg-surface-50/90 dark:bg-surface-950/90 sticky top-0 z-50 flex h-17.5 w-full items-center border-b backdrop-blur-sm"
	>
		<div class="grid w-full grid-cols-[1fr_auto] items-center gap-4 px-4 md:px-10">
			<div class="flex items-center justify-start gap-6">
				<MobileDrawer />
				<a
					href={localizeHref('/')}
					title={m.nav_home()}
					class="hidden items-center justify-center md:flex"
				>
					<PlebisOnline
						size={42}
						class={real_route === '/' || real_route === '' ? 'logo-glowing' : 'opacity-100'}
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
			<div class="flex gap-5">
				<div class="flex items-center justify-end gap-1">
					{#each links as { name, icon: Icon, url }}
						<a class="btn-icon" href={url} target="_blank" title={name}>
							<Icon size="20" />
						</a>
					{/each}
				</div>
				<Switch
					checked={getLocale() === 'la'}
					onCheckedChange={() => {
						const next = getLocale() === 'en' ? 'la' : 'en';
						setLocale(next);
					}}
				>
					<Switch.Control>
						<Switch.Thumb>
							<Switch.Context>
								{#snippet children(switch_)}
									{#if switch_().checked}
										<Languages class="size-3" />
									{:else}
										<Earth class="size-3" />
									{/if}
								{/snippet}
							</Switch.Context>
						</Switch.Thumb>
					</Switch.Control>
					<Switch.Label></Switch.Label>
					<Switch.HiddenInput />
				</Switch>
			</div>
		</div>
	</header>

	<div class="w-full flex-1">
		{@render children?.()}
	</div>

	<footer
		class="border-surface-500/20 bg-surface-50/90 dark:bg-surface-950/90 flex w-full flex-col items-center justify-between gap-4 border-t px-4 py-6 md:flex-row md:px-10"
	>
		<!-- Left: Privacy Policy -->
		<div class="text-sm opacity-70">
			<a href={localizeHref('/privacy-policy')} class="hover:underline">
				{m.privacy_policy ? m.privacy_policy() : 'Privacy Policy'}
			</a>
		</div>

		<!-- Right: Social Links -->
		<div class="flex items-center">
			{#each links as { name, icon: Icon, url }}
				<a class="btn-icon" href={url} target="_blank" title={name}>
					<Icon size="20" />
				</a>
			{/each}
		</div>
	</footer>
</div>
