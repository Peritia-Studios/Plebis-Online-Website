<script lang="ts">
	import { m } from '$lib/paraglide/messages';
	import { hightlightGameTitle } from '$lib/textutils';
	import { hightlightWord } from '$lib/textutils';
	import { linkWord } from '$lib/textutils';
	import { socials_ole } from '$lib';
	import { socials_erik } from '$lib';
	import { socials_nico } from '$lib';
	import { socials_hanno } from '$lib';
	import { socials_nils } from '$lib';
	import { steam_store_page_chaos } from '$lib';
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
	{@html linkWord("Chaos", steam_store_page_chaos, hightlightGameTitle(m.about_journey_text()))}
	<h2 class="h2"><span class="text-glowing">{m.about_team()}</span></h2>
	{@html hightlightWord("Ole", socials_ole, hightlightWord("Erik", socials_erik, hightlightWord("Nico", socials_nico, hightlightWord("Hanno", socials_hanno, hightlightWord("Nils", socials_nils, hightlightGameTitle(m.about_team_text()))))))}
</div>
