<script>
	import Swal from 'sweetalert2/dist/sweetalert2.all';
	export let todo;

	const handleSave = () => {
		Swal.fire({
			icon: 'success',
			title: 'Todo updated'
		});
	};

	const handleDelete = () => {
		console.log(todo.id);
	};
</script>

<div class="card mb-3">
	<div class="card-body">
		<h5 class="card-title">{todo.title}</h5>
		<div>
			<textarea type="text" class="form-control mb-2" value={todo.description} />
		</div>
		<div class="mb-3 form-check">
			<input type="checkbox" class="form-check-input" id="done" checked={todo.done} />
			<label class="form-check-label" for="done">Status</label>
		</div>
		<button on:click={handleSave} class="btn btn-primary">Update</button>
		<button on:click={handleDelete} class="btn btn-danger">Delete</button>
	</div>
</div>
