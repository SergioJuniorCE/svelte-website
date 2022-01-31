<script context="module">
	import { supabase } from '$lib/database';
	export async function load() {
		const { data: featuredPosts } = await supabase.from('posts').select('*').eq('featured', true);
		const { data: normalPosts } = await supabase.from('posts').select('*').eq('featured', false);

		return {
			props: {
				featuredPosts,
				normalPosts
			}
		};
	}
</script>

<script>
	import PostCard from '$lib/components/posts/PostCard.svelte';
	import SpinnerCard from '$lib/components/SpinnerCard.svelte';

	export let featuredPosts;
	export let normalPosts;
</script>

<main>
	<div class="text-center">
		<h3>Posts</h3>
		<h6>⭐ Featured posts</h6>
		{#if featuredPosts}
			<div class="row">
				{#each featuredPosts as { title }}
					<PostCard {title} />
				{:else}
					<p>No posts atm</p>
				{/each}
			</div>
		{:else}
			<SpinnerCard />
		{/if}
		{#if normalPosts}
			<div class="row">
				{#each normalPosts as { title }}
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
