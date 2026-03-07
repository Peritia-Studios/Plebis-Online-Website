<script lang="ts">
	import { m } from '$lib/paraglide/messages';

	import PictureCarousel from './PictureCarousel.svelte';

	let loaded = $state(false);
	let loading = $state(false);

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

<!-- Video banner -->
<div class={loaded && !loading ? '' : 'placeholder animate-pulse rounded-none'}>
	<video
		class="aspect-21/9 w-full object-cover transition-opacity duration-300 {loaded
			? 'opacity-100'
			: 'opacity-0'}"
		ontimeupdate={() => (loaded = true)}
		onwaiting={() => (loading = true)}
		oncanplay={() => {
			loading = false;
			loaded = true;
		}}
		playsinline
		disablepictureinpicture
		muted
		loop
		autoplay
	>
		<track kind="captions" />
		<source src="/banner/1920w.mp4" type="video/mp4" media="(min-width: 1600px)" />
		<source src="/banner/1600w.mp4" type="video/mp4" media="(min-width: 1280px)" />
		<source src="/banner/1280w.mp4" type="video/mp4" media="(min-width: 1024px)" />
		<source src="/banner/1024w.mp4" type="video/mp4" media="(min-width: 768px)" />
		<source src="/banner/768w.mp4" type="video/mp4" media="(min-width: 480px)" />
		<source src="/banner/480w.mp4" type="video/mp4" media="(max-width: 479px)" />
		Your browser does not support the video tag.
	</video>
</div>

<div class="content">
	<h2 class="h2 text-center">{@html m.short_description()}</h2>

	<div class="mx-auto my-4 h-[190px] w-[600px] overflow-hidden rounded-lg">
		<iframe
			title="Plebis Online on Steam"
			src="https://store.steampowered.com/widget/1230410"
			style="border: none; width: 600px; height: 190px;"
		></iframe>
	</div>

	<hr class="mx-auto mt-8 mb-16 w-4/5 border-t-2 border-gray-300" />

	<div class="grid grid-cols-1 gap-24 lg:grid-cols-2">
		<div class="space-y-4">
			<h2 class="h2"><span class="text-glowing">{m.general_title()}</span></h2>
			<p>{@html m.general_text()}</p>
		</div>

		<PictureCarousel pictures={pictures1} />
	</div>

	<div class="grid grid-cols-1 gap-24 lg:grid-cols-2">
		<PictureCarousel pictures={pictures2} />

		<div class="space-y-4">
			<h2 class="h2"><span class="text-glowing">{m.gadgets_title()}</span></h2>
			<p>{@html m.gadgets_text()}</p>
		</div>
	</div>

	<div class="grid grid-cols-1 gap-24 lg:grid-cols-2">
		<div class="space-y-4">
			<h2 class="h2"><span class="text-glowing">{m.settings_title()}</span></h2>
			<p>{@html m.settings_text()}</p>
		</div>

		<PictureCarousel pictures={pictures3} />
	</div>

	<div class="grid grid-cols-1 gap-24 lg:grid-cols-2">
		<PictureCarousel pictures={pictures1} />

		<div class="space-y-4">
			<h2 class="h2"><span class="text-glowing">{m.arenas_title()}</span></h2>
			<p>{@html m.arenas_text()}</p>
		</div>
	</div>

	<div class="grid grid-cols-1 gap-24 lg:grid-cols-2">
		<div class="space-y-4">
			<h2 class="h2"><span class="text-glowing">{m.lore_title()}</span></h2>
			<p>{@html m.lore_text()}</p>
		</div>

		<PictureCarousel pictures={pictures2} />
	</div>

	<div class="grid grid-cols-1 gap-24 lg:grid-cols-2">
		<PictureCarousel pictures={pictures3} />

		<div class="space-y-4">
			<h2 class="h2"><span class="text-glowing">{m.friendship_title()}</span></h2>
			<p>{@html m.friendship_text()}</p>
		</div>
	</div>
</div>
