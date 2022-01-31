<script>
	import { supabase } from '$lib/database';
	import Editor from '@tinymce/tinymce-svelte';
	import { constants } from '$lib/constants';
	let title;
	let content;
	let conf = constants.TINYMCE_CONFIG;
	async function handleSubmit() {
		const { data, error } = await supabase.from('posts').insert([{ title, content }]);
	}
</script>

<h2>Create post</h2>

<div class="my-3 w-50">
	<label for="post-title">Title</label>
	<input name="post-title" type="text" class="form-control" bind:value={title} />
</div>

<Editor apiKey={constants.TINYMCE_APIKEY} bind:value={content} {conf} />
<button class="btn btn-success" on:click={handleSubmit}>Save</button>
