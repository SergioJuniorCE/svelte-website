<script lang="ts">
	let name: string;
	let amount: number;
	let date: string;

	function handleSave(): void {
		var expenses = JSON.parse(localStorage.getItem('expenses')) || [];
		expenses = [...expenses, { name, amount, date }];
		localStorage.setItem('expenses', JSON.stringify(expenses));
	}
</script>

<!-- Button trigger modal -->
<button
	type="button"
	class="btn btn-success btn-lg"
	data-bs-toggle="modal"
	data-bs-target="#createExpense"
>
	Create Expense +
</button>
<!-- Modal -->
<div
	class="modal fade"
	id="createExpense"
	tabindex="-1"
	role="dialog"
	aria-labelledby="createExpenseModal"
	aria-hidden="true"
>
	<div class="modal-dialog" role="document">
		<div class="modal-content">
			<div class="modal-header">
				<h5 class="modal-title">Create your expense</h5>
				<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" />
			</div>
			<div class="modal-body">
				<div class="mb-3">
					<label for="date" class="form-label">Date</label>
					<input
						type="date"
						class="form-control"
						name="date"
						id="date"
						aria-describedby="date"
						placeholder=""
						bind:value={date}
					/>
				</div>
				<div class="mb-3">
					<label for="name" class="form-label">Name</label>
					<input
						type="text"
						class="form-control"
						name="name"
						id="name"
						aria-describedby="name"
						placeholder="name"
						bind:value={name}
					/>
				</div>
				<div class="mb-3">
					<label for="amount" class="form-label">amount</label>
					<input
						type="number"
						class="form-control"
						name="amount"
						id="amount"
						aria-describedby="amount"
						placeholder="amount"
						bind:value={amount}
					/>
				</div>
			</div>
			<div class="modal-footer">
				<button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
				<button type="button" class="btn btn-success" data-bs-dismiss="modal" on:click={handleSave}
					>Save</button
				>
			</div>
		</div>
	</div>
</div>
