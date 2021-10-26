<script>
	import Swal from 'sweetalert2/dist/sweetalert2.all.js';
	import { variables } from '$lib/variables';
	let title = '';
	let description = '';
	let done = false;

	const handleCreate = async () => {
    if (title == '' || !title.trim()) {
			Swal.fire({
				title: "Title can't be empty.",
				icon: 'error'
			});
		} else {
			Swal.fire({
				title: 'Todo saved successfully',
				icon: 'success'
			});
		}
	};
</script>


<form on:submit|preventDefault={handleCreate}>
	<div class="mb-3">
		<label for="title" class="form-label">Title</label>
		<input type="text" class="form-control" id="title" bind:value={title} />
	</div>
	<div class="mb-3">
		<label for="description" class="form-label">Description</label>
		<textarea class="form-control" id="description" value={description} />
	</div>
	<div class="mb-3 form-check">
		<input type="checkbox" class="form-check-input" id="done" bind:checked={done} />
		<label class="form-check-label" for="done">Mark as already done.</label>
	</div>
	<button type="submit" class="btn btn-success">Save</button>
</form>