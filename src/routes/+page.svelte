<script lang="ts">
	import { Download } from 'lucide-svelte';
	import { steam_game_id } from '$lib';
	import { m } from '$lib/paraglide/messages';
	import Banner from './Banner.svelte';
	import PictureCarousel from './PictureCarousel.svelte';

	const pictures1 = ['lounge.png', 'bunker_2.png', 'bunker_5.png'];
	const pictures2 = ['shooting_range.png', 'bunker_3.png', 'subway_1.png'];
	const pictures3 = ['bunker_1.png', 'bunker_4.png', 'subway_2.png'];
</script>

<svelte:head>
	<title>Plebis Online</title>
	<meta name="description" content={m.short_description()} />
	<!-- Open Graph -->
	<meta property="og:title" content="Plebis Online" />
	<meta property="og:description" content={m.short_description()} />
</svelte:head>

<Banner />

<div class="content">
	<h3 class="h3 text-center">{@html m.short_description()}</h3>

	<div class="mx-auto my-4 h-fit w-fit overflow-hidden rounded-lg">
		<!-- I would suggest a button for installing the game -->
		<!-- <iframe
			title="Plebis Online on Steam"
			src="https://store.steampowered.com/widget/1230410"
			style="border: none; width: 600px; height: 190px;"
		></iframe> -->
		<a href="steam://run/{steam_game_id}/" class="btn preset-filled-primary-500 gap-3">
			<Download />
			{m.actions_install()}
		</a>
	</div>

	<hr class="hr" />

	<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-8">
		<div class="space-y-4">
			<h2 class="h2"><span class="text-glowing">{m.general_title()}</span></h2>
			<p>{@html m.general_text()}</p>
		</div>

		<PictureCarousel pictures={pictures1} />
	</div>

	<hr class="hr" />

	<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-8">
		<PictureCarousel pictures={pictures2} />

		<div class="space-y-4">
			<h2 class="h2"><span class="text-glowing">{m.gadgets_title()}</span></h2>
			<p>{@html m.gadgets_text()}</p>
		</div>
	</div>

	<hr class="hr" />

	<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-8">
		<div class="space-y-4">
			<h2 class="h2"><span class="text-glowing">{m.settings_title()}</span></h2>
			<p>{@html m.settings_text()}</p>
		</div>

		<PictureCarousel pictures={pictures3} />
	</div>

	<hr class="hr" />

	<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-8">
		<PictureCarousel pictures={pictures1} />

		<div class="space-y-4">
			<h2 class="h2"><span class="text-glowing">{m.arenas_title()}</span></h2>
			<p>{@html m.arenas_text()}</p>
		</div>
	</div>

	<hr class="hr" />

	<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-8">
		<div class="space-y-4">
			<h2 class="h2"><span class="text-glowing">{m.lore_title()}</span></h2>
			<p>{@html m.lore_text()}</p>
		</div>

		<PictureCarousel pictures={pictures2} />
	</div>

	<hr class="hr" />

	<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-8">
		<PictureCarousel pictures={pictures3} />

		<div class="space-y-4">
			<h2 class="h2"><span class="text-glowing">{m.friendship_title()}</span></h2>
			<p>{@html m.friendship_text()}</p>
		</div>
	</div>
</div>
