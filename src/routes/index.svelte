<script lang="ts">
	import PostCard from '$lib/components/PostCard.svelte';
	import { supabase } from '$lib/database';

	import { onMount } from 'svelte';

	let posts: any[];

	onMount(async () => {
		const { data } = await supabase.from('posts').select('*').limit(3);
		posts = data;
	});
</script>

<main class="container">
	<a href="/posts/create">Create a post</a>
	<h2 class="mt-3">Posts</h2>
	<div class="row">
		{#if posts}
			{#each posts as { title, updated_at, description }}
				<PostCard {title} {updated_at} {description} />
			{/each}
		{:else}
			loading
		{/if}
	</div>
</main>
