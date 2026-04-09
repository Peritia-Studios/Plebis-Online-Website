<script lang="ts">
	import { page } from '$app/state';
	import { updates } from '$lib';
	import { links } from '$lib';
	import { future_features } from '$lib';
	import { m } from '$lib/paraglide/messages';
	import { getLocale } from '$lib/paraglide/runtime';
	import { Accordion } from '@skeletonlabs/skeleton-svelte';
	import { ChevronDownIcon } from 'lucide-svelte';
	import { onMount } from 'svelte';
	import { slide } from 'svelte/transition';
	import { hightlightGameTitle } from '$lib/textutils';
	import { linkWord } from '$lib/textutils';

	let value = $state(['']);
	onMount(() => {
		value = [page.url.searchParams.get('version') || updates[0].version];
		let el = document.getElementById(value[0]);
		if (el) el.scrollIntoView();
	});
</script>

<svelte:head>
	<title>{m.nav_updates()} - Plebis Online</title>

	<meta name="description" content={m.nav_updates({ locale: 'en' })} />

	<meta property="og:title" content={`${m.nav_updates({ locale: 'en' })} - Plebis Online`} />
	<meta property="og:description" content={m.nav_updates({ locale: 'en' })} />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://plebis.online/updates" />
	<meta property="og:image" content="https://plebis.online/social-preview.png" />

	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="content">
	<h2 class="h2"><span class="text-glowing">What’s coming?</span></h2>
	<p>
		{@html hightlightGameTitle(
			'Plebis Online is a project that fully runs on our own very little ressources. We just cannot put in as much work as we would really want to. Thus, we have unfortunately not been able to implement all the features we want yet, mostly because they are not part of the core game experience and we just did not consider them as important as other features already in the game.'
		)}
	</p>
	<p>
		{@html hightlightGameTitle(
			'We are working really hard and with a lot of passion to improve Plebis Online and we can present to you our personal To-Do of what we will soon be implementing still, aside from regular updates containing new Maps, Weapons, Gadgets and Modes, of course.'
		)}
	</p>

	<h3 class="h3"><span class="text-glowing">Things to look forward to:</span></h3>
	<ul class="custom-list">
		{#each future_features as feature}
			<li>
				<svg viewBox="0 0 24 24" class="bullet-point">
					<path
						d="M24 16.971l-7.029 7.029h-9.942l-7.029-7.029v-9.942l7.029-7.029h9.942l7.029 7.029z"
					/>
				</svg>
				{@html hightlightGameTitle(feature)}
			</li>
		{/each}
	</ul>

	<p>
		{@html linkWord("Discord", links.filter((element) => element.name == "Discord")[0].url, hightlightGameTitle(
			'Please share your ideas and visions for Plebis Online with us! Join our Discord to make suggestions and discuss future features and updates.'
		))}
	</p>

	<hr class="hr" />

	<h2 class="h2"><span class="text-glowing">Latest Updates to Plebis Online:</span></h2>

	<!-- <div
		class="card bg-surface-50-950 border-surface-200-800 flex items-center justify-center border p-4"
	> -->
	<Accordion {value} onValueChange={(e) => (value = e.value)} collapsible>
		{#each updates.sort((a, b) => b.date.diff(a.date).milliseconds) as { title, date, version, description }, i (version)}
			{#if i !== 0}
				<hr class="hr" />
			{/if}
			<Accordion.Item value={version}>
				<h3>
					<Accordion.ItemTrigger
						class="flex items-center justify-between gap-2 hover:bg-[rgb(var(--primary-colour-rgb)/0.15)] hover:text-white"
					>
						<div class="flex w-full items-center justify-between">
							<p class="text-glowing h3">{title}</p>
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
									{@html hightlightGameTitle(description)}
								</p>
								<p class="text-gray-400 text-right">
									{version}
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
	<!-- </div> -->
</div>
