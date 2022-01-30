<script>
	import { onMount } from 'svelte';
	import Line from 'svelte-chartjs/src/Doughnut.svelte';

	$: incomes = [];
	$: totalIncome = 0;
	let amount;
	let name;

	let data = [
		{
			label: 'Dataset',
			fill: true,
			backgroundColor: ['rgb(229,87,63)', 'rgb(241,188,88)', 'rgb(87,175,220)'],
			borderColor: ['rgb(229,87,63)', 'rgb(241,188,88)', 'rgb(87,175,220)'],
			data: [1, 1, 1]
		}
	];

	onMount(() => {
		incomes = JSON.parse(localStorage.getItem('incomes')) || [];
		if (incomes.length > 0) {
			incomes.forEach((income) => {
				totalIncome += income.amount;
			});
		}
		data[0].data = [totalIncome, 1, 1];
	});

	const updateIncomes = () => {
		incomes = [...incomes];
		localStorage.setItem('incomes', JSON.stringify(incomes));
	};

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
			updateIncomes();
			amount = '';
			name = '';
		} else if (amount <= 0) {
			alert('Income needs to be greater than 0');
		}
	};

	const editIncome = (index) => {
		incomes[index] = {
			name: name,
			amount: amount
		};
		updateIncomes();
	};

	const testClearIncome = () => {
		incomes = [];
		updateIncomes();
	};

	// Delete income with name
	const deleteIncome = (incomeName) => {
		incomes.forEach((income) => {
			if (income.name === incomeName) {
				incomes.splice(incomes.indexOf(income), 1);
			}
		});
		updateIncomes();
	};
</script>

<h1>50/30/20 follow the rule</h1>
<!-- Input -->
<div class="row">
	<div class="col">
		<!-- add and clear income button group -->
		<div class="btn-group mt-2" role="group" aria-label="Basic example">
			<button type="button" class="btn btn-primary" on:click={addIncome}>Add Income</button>
			<button type="button" class="btn btn-secondary" on:click={testClearIncome}
				>Clear Income</button
			>
		</div>
		<!-- Bootstrap table -->
		<table class="table table-hover">
			<thead>
				<tr>
					<th scope="col">Name</th>
					<th scope="col">Income</th>
					<th scope="col" class="actions">Actions</th>
				</tr>
			</thead>
			<tbody>
				<!-- Income form  -->
				<tr
					on:keypress={(event) => {
						if (event.key === 'Enter') {
							addIncome();
							name.focus();
						}
					}}
				>
					<td>
						<input
							class="form-control"
							type="text"
							placeholder="Enter income name"
							bind:value={name}
						/>
					</td>
					<td>
						<input
							class="form-control"
							type="number"
							placeholder="Enter income amount"
							bind:value={amount}
						/>
					</td>
					<td>
						<button type="button" class="btn btn-primary" on:click={addIncome}
							><i class="fas fa-plus" /></button
						>
					</td>
					<!-- Income form -->
				</tr>
				{#if incomes.length > 0}
					{#each incomes as income, i}
						<tr>
							<td>
								<input class="form-control" type="text" bind:value={income.name} />
							</td>
							<td>
								<input class="form-control" type="number" bind:value={income.amount} />
							</td>
							<td>
								<!-- Trashcan icon -->
								<button type="button" class="btn btn-primary" on:click={editIncome}
									><i class="fas fa-edit" /></button
								>
								<button
									type="button"
									class="btn btn-danger"
									on:click={() => deleteIncome(income.name)}><i class="fas fa-trash" /></button
								>
							</td>
						</tr>
					{/each}
				{/if}
			</tbody>
		</table>
	</div>
	<div class="col">
		asd
	</div>
</div>

<p>Income total = {totalIncome}</p>

<style>
</style>
