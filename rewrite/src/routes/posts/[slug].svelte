<script lang="ts">
	import { page } from '$app/stores';
	import { constants } from '$lib/constants';
	import { supabase } from '$lib/database';
	import Editor from '@tinymce/tinymce-svelte';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	let post: { title: any; content: any };

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
	}

	async function handleDelete() {}

	let submit = false;
	let commentContent;

	function handleKeyup(event) {
		alert(1);
		if (event.code == 'Enter') {
			event.preventDefault();
			event.target.value;
			commentContent = event.target.value;
			return false;
		}
	}
</script>

<a href="/posts">Go Back</a>
<div>
	<p>admin bar</p>
	<button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#editModal">Edit</button>
	<button
		class="btn btn-danger"
		on:click={handleDelete}
		data-bs-toggle="modal"
		data-bs-target="#deleteModal">Delete</button
	>
</div>

<div id="post-data">
	{#if post}
		<h2>{post.title}</h2>
		{@html post.content}
		<!-- Modal -->
		<div
			class="modal fade"
			id="editModal"
			tabindex="-1"
			aria-labelledby="editModalLabel"
			aria-hidden="true"
			data-bs-backdrop="static"
		>
			<div class="modal-dialog modal-fullscreen">
				<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title" id="editModalLabel">Edit post</h5>
						<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" />
					</div>
					<div class="modal-body">
						<div class="my-3">
							<label for="post-title">Title</label>
							<input name="post-title" type="text" class="form-control" bind:value={post.title} />
						</div>
						<Editor apiKey={constants.TINYMCE_APIKEY} bind:value={post.content} />
					</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
						<button
							type="button"
							class="btn btn-primary"
							data-bs-dismiss="modal"
							on:click={handleEdit}>Save changes</button
						>
					</div>
				</div>
			</div>
		</div>
	{:else}
		loading post
	{/if}
</div>
<hr />
<h5>Comments</h5>
<div>
	<div class="mt-3">
		<textarea class="form-control" placeholder="Add comment" rows="1" />
	</div>
	<div class="mt-3" />
</div>
