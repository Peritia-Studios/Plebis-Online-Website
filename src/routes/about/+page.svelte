<script lang="ts">
	import { m } from '$lib/paraglide/messages';
</script>

<svelte:head>
	<title>{m.nav_about()} - Plebis Online</title>
	<meta name="description" content={m.nav_about()} />
	<!-- Open Graph -->
	<meta property="og:title" content="{m.nav_about()} - Plebis Online" />
	<meta property="og:description" content={m.nav_about()} />
</svelte:head>

<div class="content">
	<h2 class="h2"><span class="text-glowing">{m.about_journey()}</span></h2>
	{@html m.about_journey_text()}
	<h2 class="h2"><span class="text-glowing">{m.about_team()}</span></h2>
	{@html m.about_team_text()}
</div>
