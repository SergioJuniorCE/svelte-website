<script>
	import { supabase } from '$lib/database';
	import { onMount } from 'svelte';

	let posts;
  let find;
  let search = '';
  $: {
    find = search.toLowerCase();
  }

	onMount(async () => {
		posts = await supabase.from('posts').select('*');
	});
</script>

<div>
	<input type="text" bind:value={search}/>
	{#if posts}
    <h1>{find} {posts}</h1>
		{#each posts as post}
			<p>{post.title}</p>
		{:else}
			<p>No posts found</p>
		{/each}
	{:else}
		<p>Wait for more posts to be added</p>
	{/if}
	<p>asd</p>
</div>
