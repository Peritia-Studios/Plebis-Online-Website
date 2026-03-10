<script lang="ts">
	import { m } from '$lib/paraglide/messages';
</script>

<svelte:head>
	<title>{m.nav_about({ locale: "en" })} - Plebis Online</title>

	<meta name="description" content={m.nav_about({ locale: "en" })} />

	<meta property="og:title" content={`${m.nav_about({ locale: "en" })} - Plebis Online`} />
	<meta property="og:description" content={m.nav_about({ locale: "en" })} />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://plebis.online/about" />
	<meta property="og:image" content="https://plebis.online/social-preview.png" />

	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="content">
	<h2 class="h2"><span class="text-glowing">{m.about_journey()}</span></h2>
	{@html m.about_journey_text()}
	<h2 class="h2"><span class="text-glowing">{m.about_team()}</span></h2>
	{@html m.about_team_text()}
</div>
