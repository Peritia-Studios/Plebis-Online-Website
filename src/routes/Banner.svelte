<script lang="ts">
	let loaded = $state(false);
	let loading = $state(false);
</script>

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
