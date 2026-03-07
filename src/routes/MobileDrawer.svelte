<script lang="ts">
	import { page } from '$app/state';
	import PlebisOnline from '$lib/components/icons/PlebisOnline.svelte';
	import { localizeHref, deLocalizeHref } from '$lib/paraglide/runtime.js';
	import { m } from '$lib/paraglide/messages';
	import { Dialog, Portal } from '@skeletonlabs/skeleton-svelte';
	import { Menu, X } from 'lucide-svelte';
	import { flyside, opacity } from '$lib/animations';

	let drawerState = $state(false);

	function drawerClose() {
		drawerState = false;
	}
</script>

<div class="md:hidden">
	<Dialog open={drawerState} onOpenChange={(e) => (drawerState = e.open)}>
		<Dialog.Trigger class="btn-icon"><Menu /></Dialog.Trigger>
		<Portal>
			<Dialog.Backdrop class="bg-surface-50-950/50 fixed inset-0 z-50  {opacity}" />
			<Dialog.Positioner class="fixed inset-0 z-50 flex justify-start">
				<Dialog.Content
					class="card bg-surface-100-900 h-screen w-sm space-y-4 p-4 shadow-xl duration-200 {flyside}"
				>
					<header class="flex items-center justify-between">
						<Dialog.Title class="itsems-center flex justify-start space-x-3">
							<PlebisOnline size={42} class="icon-glowing" />
							<h2 class="h2"><span class="text-glowing">Plebis Online</span></h2>
						</Dialog.Title>
						<Dialog.CloseTrigger class="btn-icon preset-tonal text-surface-950-50">
							<X />
						</Dialog.CloseTrigger>
					</header>
					<div class="flex flex-col gap-2">
						<a
							href={localizeHref('/')}
							class="hover:underline {deLocalizeHref(page.url.pathname) === '/' ||
							deLocalizeHref(page.url.pathname) === ''
								? ''
								: 'opacity-60'}"
							onclick={drawerClose}
							title={m.nav_home()}>{m.nav_home()}</a
						>
						<a
							href={localizeHref('/updates')}
							class="hover:underline {deLocalizeHref(page.url.pathname) === '/updates'
								? ''
								: 'opacity-60'}"
							onclick={drawerClose}
							title={m.nav_updates()}>{m.nav_updates()}</a
						>
						<a
							href={localizeHref('/about')}
							class="hover:underline {deLocalizeHref(page.url.pathname) === '/about'
								? ''
								: 'opacity-60'}"
							onclick={drawerClose}
							title={m.nav_about()}>{m.nav_about()}</a
						>
					</div>
				</Dialog.Content>
			</Dialog.Positioner>
		</Portal>
	</Dialog>
</div>
