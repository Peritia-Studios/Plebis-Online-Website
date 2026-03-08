<script lang="ts">
	import { Carousel } from '@skeletonlabs/skeleton-svelte';
	import { ChevronLeft, ChevronRight } from 'lucide-svelte';

	interface Props {
		pictures: string[];
	}

	let { pictures }: Props = $props();
</script>

<Carousel
	class="my-auto"
	slideCount={pictures.length}
	slidesPerPage={1}
	spacing="16px"
	padding="24px"
	autoSize
>
	<div class="relative">
		<Carousel.Control>
			<Carousel.PrevTrigger
				class="btn-icon preset-filled absolute top-[50%] left-0 translate-y-[-50%] rounded-full"
			>
				<ChevronLeft />
			</Carousel.PrevTrigger>
			<Carousel.NextTrigger
				class="btn-icon preset-filled absolute top-[50%] right-0 translate-y-[-50%] rounded-full"
			>
				<ChevronRight />
			</Carousel.NextTrigger>
		</Carousel.Control>
		<Carousel.ItemGroup>
			{#each pictures as picture, i}
				<Carousel.Item
					index={i}
					class="card preset-tonal flex aspect-video h-fit items-center justify-center overflow-hidden"
				>
					<img src="gameplay/{picture}" alt={picture} loading="lazy" />
				</Carousel.Item>
			{/each}
		</Carousel.ItemGroup>
	</div>
	<Carousel.IndicatorGroup>
		<Carousel.Context>
			{#snippet children(carousel)}
				{#each carousel().pageSnapPoints as _, index}
					<Carousel.Indicator {index} />
				{/each}
			{/snippet}
		</Carousel.Context>
	</Carousel.IndicatorGroup>
</Carousel>
