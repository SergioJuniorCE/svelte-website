<script lang="ts">
	import PostCard from '$lib/components/PostCard.svelte';
	export let posts: any[];
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

<style>
	.center {
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
