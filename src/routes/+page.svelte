<script lang="ts">
	import { videoTime } from '$lib';
	import { m } from '$lib/paraglide/messages';

	import PictureCarousel from './PictureCarousel.svelte';

	let loaded = $state(false);
	let loading = $state(false);

	const pictures = [
		'lounge.png',
		'shooting_range.png',
		'bunker_1.png',
		'bunker_2.png',
		'bunker_3.png',
		'bunker_4.png',
		'bunker_5.png',
		'subway_1.png',
		'subway_2.png'
	];
</script>

<svelte:head>
	<title>Plebis Online</title>
	<meta name="description" content={m.example()} />
	<!-- Open Graph -->
	<meta property="og:title" content="Plebis Online" />
	<meta property="og:description" content={m.example()} />
</svelte:head>

<!-- Video banner -->
<div class={loaded && !loading ? '' : 'placeholder animate-pulse rounded-none'}>
	<video
		bind:currentTime={$videoTime}
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
		autoplay
		loop
		muted
	>
		<track kind="captions" />
		<source src="/banner/banner.mp4" type="video/mp4" />
		Your browser does not support the video tag.
	</video>
</div>

<div class="content">
	<h2 class="h2">
		<span class="text-glowing">{m.example()}</span>
	</h2>
	<div class="grid grid-cols-1 gap-8 lg:grid-cols-2">
		<div class="space-y-4">
			<p>Hier sind Bilder und viel Text!</p>

			<p>
				Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
				invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
				et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
				Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
				diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
				voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
				gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
				amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
				dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
				et ea rebum.
			</p>
		</div>

		<PictureCarousel {pictures} />
	</div>
</div>
