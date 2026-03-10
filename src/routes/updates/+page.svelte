<script lang="ts">
	import { page } from '$app/state';
	import { updates } from '$lib';
	import { m } from '$lib/paraglide/messages';
	import { getLocale } from '$lib/paraglide/runtime';
	import { Accordion } from '@skeletonlabs/skeleton-svelte';
	import { ChevronDownIcon } from 'lucide-svelte';
	import { onMount } from 'svelte';
	import { slide } from 'svelte/transition';

	let value = $state(['']);
	onMount(() => {
		value = [page.url.searchParams.get('version') || updates[0].version];
		let el = document.getElementById(value[0]);
		if (el) el.scrollIntoView();
	});
</script>

<svelte:head>
	<title>{m.nav_updates()} - Plebis Online</title>

	<meta name="description" content={m.nav_updates({ locale: "en" })} />

	<meta property="og:title" content={`${m.nav_updates({ locale: "en" })} - Plebis Online`} />
	<meta property="og:description" content={m.nav_updates({ locale: "en" })} />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://plebis.online/updates" />
	<meta property="og:image" content="https://plebis.online/social-preview.png" />

	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="content">
	<p>{m.updates_description()}!</p>
	<div
		class="card bg-surface-50-950 border-surface-200-800 flex items-center justify-center border p-4"
	>
		<Accordion {value} onValueChange={(e) => (value = e.value)} collapsible>
			{#each updates as { title, date, version, description }, i (version)}
				{#if i !== 0}
					<hr class="hr" />
				{/if}
				<Accordion.Item value={version}>
					<h3>
						<Accordion.ItemTrigger class="flex items-center justify-between gap-2 font-bold">
							<div class="flex w-full items-center justify-between">
								<p class="text-glowing">{title}</p>
								<p>{date.toLocaleString(undefined, { locale: getLocale() })}</p>
							</div>
							<Accordion.ItemIndicator class="group">
								<ChevronDownIcon class="h-5 w-5 transition group-data-[state=open]:rotate-180" />
							</Accordion.ItemIndicator>
						</Accordion.ItemTrigger>
					</h3>
					<Accordion.ItemContent>
						{#snippet element(attributes)}
							{#if !attributes.hidden}
								<div {...attributes} transition:slide={{ duration: 150 }}>
									<p>
										{description}
									</p>
								</div>
							{/if}
						{/snippet}
					</Accordion.ItemContent>
				</Accordion.Item>
			{/each}
		</Accordion>
		<!-- <Accordion {value} onValueChange={(e) => (value = e.value)} collapsible>
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
		</Accordion> -->
	</div>
</div>
