<script lang="ts">
	import { supabase } from '$lib/database';
	import Editor from '@tinymce/tinymce-svelte';
	import { constants } from '$lib/constants';
	import Swal from 'sweetalert2';

	let title: string;
	let content: string;
	let description: string;
	let image: string;

	let conf = constants.TINYMCE_CONFIG;
	async function handleSubmit() {
		// if title is empty show error alert
		if (title === '' || title === undefined || title === null) {
			Swal.fire({
				title: 'Error',
				text: 'Title is required',
				icon: 'error',
				confirmButtonText: 'Ok'
			});
			return;
		}

		// if content is empty show error alert
		if (content === '' || content === undefined || content === null) {
			Swal.fire({
				title: 'Error',
				text: 'Content is required',
				icon: 'error',
				confirmButtonText: 'Ok'
			});
			return;
		}

		const { data, error } = await supabase.from('posts').insert([{ title, content }]);
		if (error) {
			Swal.fire({
				title: 'Error',
				text: error.message,
				icon: 'error',
				confirmButtonText: 'Ok'
			});
		}
		// Success swal alert
		Swal.fire({
			title: 'Success',
			text: 'Post created successfully',
			icon: 'success',
			confirmButtonText: 'Ok'
		});
	}
</script>

<div class="my-3 w-50">
	<label for="post-title">Title</label>
	<input name="post-title" type="text" class="form-control" bind:value={title} />
</div>

<div class="my-3">
	<label for="description">Description</label>
	<textarea name="description" class="form-control" bind:value={description} />
</div>

<Editor apiKey={constants.TINYMCE_APIKEY} bind:value={content} {conf} />
<button class="btn btn-success" on:click={handleSubmit}>Save</button>
