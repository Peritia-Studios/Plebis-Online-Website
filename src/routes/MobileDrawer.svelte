<script lang="ts">
	import { page } from '$app/state';
	import PlebisOnline from '$lib/components/icons/PlebisOnline.svelte';
	import { localizeHref, deLocalizeHref } from '$lib/paraglide/runtime.js';
	import { m } from '$lib/paraglide/messages';
	import { Modal } from '@skeletonlabs/skeleton-svelte';
	import { Menu, X } from 'lucide-svelte';

	let drawerState = $state(false);

	function drawerClose() {
		drawerState = false;
	}
</script>

<div class="md:hidden">
	<Modal
		open={drawerState}
		onOpenChange={(e) => (drawerState = e.open)}
		triggerBase="btn-icon"
		contentBase="bg-surface-100-900 p-4 space-y-4 shadow-xl w-[320px] h-screen"
		positionerJustify="justify-start"
		positionerAlign=""
		positionerPadding=""
		transitionsPositionerIn={{ x: -320, duration: 200 }}
		transitionsPositionerOut={{ x: -320, duration: 200 }}
	>
		{#snippet trigger()}<Menu />{/snippet}
		{#snippet content()}
			<header class="flex items-center justify-between">
				<div class="itsems-center flex justify-start space-x-3">
					<PlebisOnline size={42} class="icon-glowing" />
					<h2 class="h2"><span class="text-glowing">Plebis Online</span></h2>
				</div>
				<button class="btn-icon" onclick={drawerClose}><X /></button>
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
		{/snippet}
	</Modal>
</div>
