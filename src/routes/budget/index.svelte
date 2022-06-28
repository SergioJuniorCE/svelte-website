<script lang="ts">
	import { onMount } from 'svelte';

	type Item = {
		amount: number;
		description: string;
	};
	let amount: number;
	let description: string;

	$: items = [];

	onMount(async () => {
		items = JSON.parse(localStorage.getItem('items') || '[]');
	});

	function handleAddItemButton() {
		items = [...items, { amount, description }];
		localStorage.setItem('items', JSON.stringify(items));
		amount = 0;
		description = '';
	}

	function handleItemsChanged() {
		items = [...items];
		localStorage.setItem('items', JSON.stringify(items));
	}

	function handleChangePositions(index: number, direction: number) {
		let itemAux: Item;

		console.log(index, direction);
		if (index == 0 && direction == 1) {
			console.log('cant go further up');
			return;
		}
		if (index == items.length - 1 && direction == -1) {
			console.log('cant go further down');
			return;
		}

		console.log('normal logic');
		itemAux = items[index];
		// items[index] = items[index + direction];
		// items[index + direction] = itemAux;
		// items = [...items];
	}
</script>

<div class="container">
	<h2 class="mt-3">Expense planer</h2>
	<div class="row">
		<div class="col-sm-6">
			<div class="mb-3">
				<div class="d-flex gap-3 mb-3">
					<input type="number" class="form-control form-control-sm" bind:value={amount} />
					<input type="text" class="form-control form-control-sm" bind:value={description} />
					<button type="button" class="btn btn-primary" on:click={handleAddItemButton}>+</button>
				</div>
				{#if items != []}
					{#each items as item, i}
						<div class="d-flex gap-3 mt-3" on:change={handleItemsChanged}>
							<div>
								<i
									class="fa fa-arrow-up"
									on:click={() => {
										handleChangePositions(i, 1);
									}}
								/>
							</div>
							<div>
								<i
									class="fa-solid fa-arrow-down"
									on:click={() => {
										handleChangePositions(i, -1);
									}}
								/>
							</div>
							<input type="number" class="form-control form-control-sm" bind:value={item.amount} />
							<input
								type="text"
								class="form-control form-control-sm"
								bind:value={item.description}
							/>
							<button type="button" class="btn btn-danger">-</button>
						</div>
					{/each}
				{:else}
					<!-- else content here -->
				{/if}
			</div>
		</div>
		<div class="col-sm-6">
			<p>Incomes: xxxx</p>
			<p>Expenses: xxxx</p>
			<p>Remaining: xxxx</p>
		</div>
	</div>
</div>
