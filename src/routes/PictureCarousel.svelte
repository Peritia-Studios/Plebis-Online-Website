<script lang="ts">
	import { Carousel } from '@skeletonlabs/skeleton-svelte';
	import { ChevronLeft, ChevronRight } from 'lucide-svelte';

	interface Props {
		pictures: string[];
	}

	let { pictures }: Props = $props();
</script>

<Carousel
	class="order-2 my-auto sm:order-1"
	slideCount={pictures.length}
	slidesPerPage={1}
	spacing="16px"
	padding="24px"
	autoSize
>
	<div class="relative">
		<Carousel.Control>
			<Carousel.PrevTrigger
				class="btn-icon preset-filled carousel-trigger clip-octagon absolute top-[50%] left-0 translate-y-[-50%]"
			>
				<ChevronLeft />
			</Carousel.PrevTrigger>
			<Carousel.NextTrigger
				class="btn-icon preset-filled carousel-trigger clip-octagon absolute top-[50%] right-0 translate-y-[-50%]"
			>
				<ChevronRight />
			</Carousel.NextTrigger>
		</Carousel.Control>
		<Carousel.ItemGroup>
			{#each pictures as picture, i}
				<Carousel.Item
					index={i}
					class="card preset-tonal flex aspect-video clip-octagon-16-9 h-fit items-center justify-center overflow-hidden"
				>
					<img src="gameplay/{picture}" alt={picture} loading="lazy" />
				</Carousel.Item>
			{/each}
		</Carousel.ItemGroup>
	</div>
	<Carousel.IndicatorGroup>
		<Carousel.Context>
			{#snippet children(carousel)}
				{#each carousel().pageSnapPoints as _, i}
					<Carousel.Indicator
						index={i}
						// class="carousel-indicator clip-octagon rounded-none border-0"
						class="carousel-indicator rounded-none border-0"
					>
						<svg viewBox="0 0 24 24" class="octagon-indicator">
							<path d="M24 16.971l-7.029 7.029h-9.942l-7.029-7.029v-9.942l7.029-7.029h9.942l7.029 7.029z" />
						</svg>
					</Carousel.Indicator>
				{/each}
			{/snippet}
		</Carousel.Context>
	</Carousel.IndicatorGroup>
</Carousel>
