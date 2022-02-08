<script lang="ts">
	import { goto } from '$app/navigation';

	import { supabase } from '$lib/database';

	import { onMount } from 'svelte';

	let posts: any[];

	onMount(async () => {
		const { data, error } = await supabase.from('posts').select('*').limit(3);
		posts = data;
	});

	function handleClick(title: string) {
		goto('/posts/' + title);
	}
</script>

<main class="container">
	<a href="/posts/create">Create a post</a>
	<h2>test</h2>
	<h2 class="mt-3">latests Posts</h2>
	<div class="row">
		{#if posts}
			{#each posts as { title, content, updated_at, description }}
				<div
					on:click={() => {
						handleClick(title);
					}}
					class="col-xs-12 col-sm-6 col-mb-4 col-lg-3 mb-3 mx-lg-2"
					style="cursor: pointer"
				>
					<div class="card" style="width: 18rem;">
						<img src="https://picsum.photos/200" class="card-img-top" alt={title} />
						<div class="card-body">
							<h5 class="card-title">{title}</h5>
							<p class="card-text">{description}</p>
							<p class="card-text"><small class="text-muted">Last updated {updated_at}</small></p>
						</div>
					</div>
				</div>
			{/each}
		{:else}
			loading
		{/if}
	</div>
</main>
