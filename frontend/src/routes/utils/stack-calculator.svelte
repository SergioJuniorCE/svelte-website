<script>
	import { onMount } from 'svelte';

	$: blocks = [];

	let name = '';
	let amount = 0;

	onMount(() => {
		blocks = JSON.parse(localStorage.getItem('blocks')) || [];
	});

	function convert() {
		let convertion = (amount / 64).toString().split('.');
		let stacks = convertion[0];
		let items = parseFloat('.' + convertion[1]) * 64;
		let result = `${stacks} stacks, ${items} items`;
		if (stacks == 0) {
			result = `${items} items`;
		}
		return result;
	}

	function addBlock() {
		let items = convert();
		blocks = [...blocks, { name: capitalize(name), amount: items }];
		name = '';
		amount = '';
		update();
	}

	function clear() {
		blocks = [];
		update();
	}

	function update() {
		localStorage.setItem('blocks', JSON.stringify(blocks));
	}

	function focus() {
		document.getElementById('name').focus();
	}

	function capitalize(string) {
		return string.charAt(0).toUpperCase() + string.slice(1);
	}

</script>

<!-- Center div horizontally -->
<div style="width: 25rem; margin: auto;">
	<form on:submit|preventDefault={focus}>
		<table>
			<tr>
				<td>
					<input id="name" class="form-control" type="text" placeholder="Block name" bind:value={name} />
				</td>
				<td>
					<input
						class="form-control"	
						type="number"
						placeholder="Block amount"
						min="0"
						bind:value={amount}
					/>
				</td>
				<td>
					<button class="btn btn-primary" on:click={addBlock}>Add</button>
				</td>
				<td>
					<button class="btn btn-danger" on:click={clear}>Clear</button>
				</td>
			</tr>
		</table>
	</form>

	{#each blocks as block}
		<div class="block-card">
			<div class="container">
				<div class="row">
					<div class="col-sm" on:click={() => {console.log(1)}}>
						<input type="checkbox">&nbsp &nbsp<span>{block.name}</span>
					</div>
					<div class="col-sm">
						{block.amount}
					</div>
				</div>
			</div>
		</div>
	{/each}
</div>

<style>
	.block-card {
		margin: 0.2rem;
		padding: 0.5rem;
		border: 1px solid #ccc;
		border-radius: 5px;
	}
</style>