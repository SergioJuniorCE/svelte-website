<script>
	import { onMount } from 'svelte';

	$: incomes = [];
	let amount;
	let name;

	onMount(() => {
		incomes = JSON.parse(localStorage.getItem('incomes')) || [];
	});

	const addIncome = () => {
		amount = parseFloat(amount);
		if (amount && amount > 0) {
			incomes = [
				...incomes,
				{
					name: name,
					amount: amount
				}
			];
			localStorage.setItem('incomes', JSON.stringify(incomes));
		} else if (amount <= 0) {
			alert('Income needs to be greater than 0');
		}
	};

	const editIncome = () => {
		incomes[incomes.indexOf()] = {
			name: name,
			amount: amount
		};
		localStorage.setItem('incomes', JSON.stringify(incomes));
	};

	const testClearIncome = () => {
		incomes = [];
		localStorage.setItem('incomes', JSON.stringify(incomes));
	};
</script>

<h1>50/30/20 follow the rule</h1>
<!-- add and clear income button group -->
<div class="btn-group mt-2" role="group" aria-label="Basic example">
	<button type="button" class="btn btn-primary" on:click={addIncome}>Add Income</button>
	<button type="button" class="btn btn-secondary" on:click={testClearIncome}>Clear Income</button>
</div>
<!-- Bootstrap table -->
<table class="table table-striped">
	<thead>
		<tr>
			<th scope="col">Name</th>
			<th scope="col">Income</th>
			<th scope="col">Actions</th>
		</tr>
	</thead>
	<tbody>
		{#if incomes.length > 0}
			{#each incomes as income}
				<tr>
					<td>
						<input class="form-control" type="text" bind:value={income.name} />
					</td>
					<td>
						<input class="form-control" type="number" bind:value={income.amount} />
					</td>
					<td>
						<!-- Edit income in local storage -->
						<button type="button" class="btn btn-primary" on:click={editIncome}>Edit</button>
					</td>
				</tr>
			{/each}
		{/if}
	</tbody>
</table>
