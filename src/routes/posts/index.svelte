<script context="module">
	import { supabase } from '$lib/database';
	export async function load() {
		const { data } = await supabase.from('posts').select('*');

		return {
			props: {
				posts: data
			}
		};
	}
</script>

<script>
	import PostCard from '$lib/components/posts/PostCard.svelte';
	import SpinnerCard from '$lib/components/SpinnerCard.svelte';

	export let posts;
</script>

<main>
	<div class="text-center">
		<h3>Posts</h3>
		{#if posts}
			<div class="row">
				{#each posts as { title }}
					<PostCard {title} />
				{:else}
					<p>No posts atm</p>
				{/each}
			</div>
		{:else}
			<SpinnerCard />
		{/if}
	</div>
</main>
