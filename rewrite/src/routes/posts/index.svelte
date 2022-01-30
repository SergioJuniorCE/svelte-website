<script>
	import Search from './Search.svelte';

	import { supabase } from '$lib/database';
	import { readable, get } from 'svelte/store';
	let title;
	let content;
	const posts = readable(null, (set) => {
		supabase
			.from('posts')
			.select('*')
			.then(({ data, error }) => set(data));
		const subscriptions = supabase
			.from('posts')
			.on('*', (payload) => {
				if (payload.eventType === 'INSERT') {
					set([...get(posts), payload.new]);
				}
			})
			.subscribe();

		return () => {
			supabase.removeSubscription(subscriptions);
		};
	});
</script>

<main>
	<Search />
	<h2 class="text-center">View posts</h2>

	{#if $posts}
		{#each $posts as { title, featured }}
			{#if featured === false}
				<li><a class="h6" style="color: cornflowerblue" href="/posts/{title}">{title}</a></li>
			{/if}
		{:else}
			<p>No posts atm</p>
		{/each}
	{:else}
		<p>waiting on posts</p>
	{/if}
</main>
