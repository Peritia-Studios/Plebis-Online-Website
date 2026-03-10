<script lang="ts">
	import { Download } from 'lucide-svelte';
	import { steam_game_id } from '$lib';
	import { youtube_trailer_ID } from '$lib';
	import { m } from '$lib/paraglide/messages';
	import Banner from './Banner.svelte';
	import PictureCarousel from './PictureCarousel.svelte';

	const pictures1 = ['lounge.png', 'bunker_2.png', 'bunker_5.png'];
	const pictures2 = ['shooting_range.png', 'bunker_3.png', 'subway_1.png'];
	const pictures3 = ['bunker_1.png', 'bunker_4.png', 'subway_2.png'];
</script>

<svelte:head>
	<title>Plebis Online</title>
	<meta name="description" content={m.short_description({ locale: "en" })} />
	<!-- Open Graph -->
	<meta property="og:title" content="Plebis Online" />
	<meta property="og:description" content={m.short_description({ locale: "en" })} />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://plebis.online/" />
	<meta property="og:image" content="https://plebis.online/social-preview.png" />

	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<Banner />

{#snippet ShopReference()}
	<div class="mx-auto my-4 h-fit w-fit overflow-hidden rounded-lg">
		<!-- I would suggest a button for installing the game -->
		<!-- <iframe
				title="Plebis Online on Steam"
				src="https://store.steampowered.com/widget/1230410"
				style="border: none; width: 600px; height: 190px;"
			></iframe> -->
		<a
			href="steam://run/{steam_game_id}/"
			class="btn preset-filled-primary-500 clip-octagon-relative gap-3 rounded-none"
		>
			<Download />
			{m.actions_install()}
		</a>
	</div>
{/snippet}

<div class="content">
	<h3 class="h3 text-center">{@html m.short_description()}</h3>

	{@render ShopReference()}

	<div class="relative h-0 w-full pb-[56.25%]">
		<iframe
			class="absolute top-0 left-0 h-full w-full"
			src="https://www.youtube.com/embed/{youtube_trailer_ID}?modestbranding=1&autoplay=1&rel=0&controls=0&loop=1&origin=http://plebis.online"
			title="Plebis Online Trailer"
			frameborder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
			allowfullscreen
		></iframe>
	</div>

	<hr class="hr" />

	<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-8">
		<div class="order-1 space-y-4 sm:order-1">
			<h2 class="h2"><span class="text-glowing">{m.general_title()}</span></h2>
			<p>{@html m.general_text()}</p>
		</div>

		<PictureCarousel pictures={pictures1} />
	</div>

	<hr class="hr" />

	<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-8">
		<PictureCarousel pictures={pictures2} />

		<div class="order-1 space-y-4 sm:order-1">
			<h2 class="h2"><span class="text-glowing">{m.gadgets_title()}</span></h2>
			<p>{@html m.gadgets_text()}</p>
		</div>
	</div>

	<hr class="hr" />

	<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-8">
		<div class="order-1 space-y-4 sm:order-1">
			<h2 class="h2"><span class="text-glowing">{m.settings_title()}</span></h2>
			<p>{@html m.settings_text()}</p>
		</div>

		<PictureCarousel pictures={pictures3} />
	</div>

	<hr class="hr" />

	<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-8">
		<PictureCarousel pictures={pictures1} />

		<div class="order-1 space-y-4 sm:order-1">
			<h2 class="h2"><span class="text-glowing">{m.arenas_title()}</span></h2>
			<p>{@html m.arenas_text()}</p>
		</div>
	</div>

	<hr class="hr" />

	<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-8">
		<div class="order-1 space-y-4 sm:order-1">
			<h2 class="h2"><span class="text-glowing">{m.lore_title()}</span></h2>
			<p>{@html m.lore_text()}</p>
		</div>

		<PictureCarousel pictures={pictures2} />
	</div>

	<hr class="hr" />

	<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-8">
		<PictureCarousel pictures={pictures3} />

		<div class="order-1 space-y-4 sm:order-1">
			<h2 class="h2"><span class="text-glowing">{m.friendship_title()}</span></h2>
			<p>{@html m.friendship_text()}</p>
			<p><a href="/about" class="text-glowing hover:underline">{m.our_journey_link()}</a></p>
		</div>
	</div>

	<hr class="hr" />

	{@render ShopReference()}
</div>
