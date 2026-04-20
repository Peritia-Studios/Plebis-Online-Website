<script lang="ts">
	import { onMount, onDestroy } from 'svelte';

	let video: HTMLVideoElement | null = null;
	let observer: IntersectionObserver;
	let isPiP = false;

	onMount(() => {
		if (!video) return;

		// Detect PiP enter/leave
		video.addEventListener('enterpictureinpicture', () => {
			isPiP = true;
		});

		video.addEventListener('leavepictureinpicture', () => {
			isPiP = false;
		});

		observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (entry.isIntersecting || isPiP) {
						video?.play().catch(() => {});
					} else {
						video?.pause();
					}
				}
			},
			{ threshold: 0.5 }
		);

		observer.observe(video);
	});

	onDestroy(() => {
		observer?.disconnect();
	});

	let playing = $state(false);

	function toggle() {
		if (!video) return;

		if (video?.paused) {
			video.play();
			playing = true;
		} else {
			video?.pause();
			playing = false;
		}
	}
</script>

<video
	playsinline
	loop
	muted
    controls
	bind:this={video}
	class="clip-octagon-16-9 w-full"
	preload="metadata"
	poster="/trailer/preview.png"
>
	<source src="/trailer/3840w.mp4" type="video/mp4" />
	Your browser does not support the video tag.
</video>
