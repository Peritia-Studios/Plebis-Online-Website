<script lang="ts">
	import { page } from '$app/state';
	import { updates } from '$lib';
	import { m } from '$lib/paraglide/messages';
	import { getLocale } from '$lib/paraglide/runtime';
	import { Accordion } from '@skeletonlabs/skeleton-svelte';
	import { onMount } from 'svelte';

	let value = $state(['']);
	onMount(() => {
		value = [page.url.searchParams.get('version') || updates[0].version];
		let el = document.getElementById(value[0]);
		if (el) el.scrollIntoView();
	});
</script>

<svelte:head>
	<title>{m.nav_updates()} - Plebis Online</title>
	<meta name="description" content={m.nav_updates()} />
	<!-- Open Graph -->
	<meta property="og:title" content="{m.nav_updates()} - Plebis Online" />
	<meta property="og:description" content={m.nav_updates()} />
</svelte:head>

<div class="content">
	<p>{m.updates_description()}!</p>
	<div
		class="card bg-surface-50-950 border-surface-200-800 flex items-center justify-center border-[1px] p-4"
	>
		<Accordion {value} onValueChange={(e) => (value = e.value)} collapsible>
			{#each updates as { title, date, version, description }, i (version)}
				<div id={version}>
					<Accordion.Item value={version}>
						{#snippet control()}
							<div class="flex items-center justify-between">
								<p class="text-glowing">{title}</p>
								<p>{date.toLocaleString(undefined, { locale: getLocale() })}</p>
							</div>
						{/snippet}
						{#snippet panel()}<p>{@html description}</p>{/snippet}
					</Accordion.Item>
					{#if i != updates.length - 1}
						<hr class="hr" />
					{/if}
				</div>
			{/each}
		</Accordion>
	</div>
</div>
