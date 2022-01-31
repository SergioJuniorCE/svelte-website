<script lang="ts">
	import Swal from 'sweetalert2';
	import { page } from '$app/stores';
	import { constants } from '$lib/constants';
	import { supabase } from '$lib/database';
	import Editor from '@tinymce/tinymce-svelte';
	import { onMount } from 'svelte';
	let post: { title: any; content: any };

	let conf = constants.TINYMCE_CONFIG;

	$: editing = false;

	onMount(async () => {
		let { data, error } = await supabase.from('posts').select('*').eq('title', $page.params.slug);
		post = data[0];
	});

	async function handleEdit() {
		let { data, error } = await supabase
			.from('posts')
			.update({
				title: post.title,
				content: post.content
			})
			.eq('title', $page.params.slug);
		if (error) Swal.fire();

		Swal.fire('Good job!', 'You clicked the button!', 'success');
		handleEditToggle();
	}

	async function handleEditToggle() {
		editing = !editing;
	}

	async function handleDelete() {}
</script>

<a href="/posts">Go Back</a>
<div>
	<button class="btn btn-primary" on:click={handleEditToggle}>Edit</button>
	{#if editing}
		<button type="button" class="btn btn-success mx-2" on:click={handleEdit}>Save changes</button>
	{/if}
</div>

<div id="post-data">
	{#if post}
		{#if editing}
			<div class="my-3">
				<label for="post-title">Title</label>
				<input name="post-title" type="text" class="form-control" bind:value={post.title} />
			</div>
			<Editor apiKey={constants.TINYMCE_APIKEY} bind:value={post.content} {conf} />
		{:else}
			<h2>{post.title}</h2>
			{@html post.content}
		{/if}
	{:else}
		loading post
	{/if}
</div>
<hr />
