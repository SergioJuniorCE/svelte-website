<script>
	import { supabase } from '$lib/database';
	import { onMount } from 'svelte';

	import Editor from '@tinymce/tinymce-svelte';
	import { constants } from '$lib/constants';

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

	onMount(async () => {
		// const { data, error } = await supabase.from('posts').select('*');
		// posts = data;
	});

	async function handleSubmit() {
		const { data, error } = await supabase.from('posts').insert([{ title, content }]);
	}
</script>

<main>
	<div class="row">
		<div class="col">
			<div>
				<h2>Create post</h2>

				<div class="my-3 w-50">
					<label for="post-title">Title</label>
					<input name="post-title" type="text" class="form-control" bind:value={title} />
				</div>

				<Editor apiKey={constants.TINYMCE_APIKEY} bind:value={content} />

				<div>{@html content}</div>

				<button on:click={handleSubmit}>Save</button>
			</div>
		</div>
		<div class="col">
			<h2>View posts</h2>
			{#if $posts}
				{#each $posts as { title, featured }}
					{#if featured === false}
						<a href="/posts/{title}">{title}</a>
						<br />
					{/if}
				{:else}
					<p>No posts atm</p>
				{/each}
			{:else}
				<p>waiting on posts</p>
			{/if}
		</div>
	</div>
</main>
