<script context="module">
	import { onMount } from 'svelte';
	export async function load({ session }) {
		try {
			const { data: expenses } = await supabase.from('expense_items').select('*');
			return {
				props: {
					 
				}
			}
		} catch (error) {
			console.error(error);
		}
	}
</script>

<script lang="ts">
	import CreateExpenseModal from '$lib/components/CreateExpenseModal.svelte';
	import { supabase } from '$lib/database';

	export let expenses;

	let section: number;
	let range: string;

	onMount(async () => {
		// get section from localStorage
		section = parseInt(localStorage.getItem('section')) || 1;
		range = localStorage.getItem('range') || 'biweekly';
	});

	function handleNextSection() {
		section++;
		localStorage.setItem('section', section.toString());
	}

	function handlePreviousSection() {
		if (section !== 1) {
			section--;
		}
		localStorage.setItem('section', section.toString());
	}

	function handleRange() {
		localStorage.setItem('range', range);
	}
</script>

<!-- selecting budget range -->
{#if section == 1}
	<p>Select a range of budget</p>
	<!-- select with 3 options -->
	<div class="mb-3">
		<label for="budget-range" class="form-label">Range</label>
		<select
			class="form-control"
			name="budget-range"
			id="budget-range"
			bind:value={range}
			on:change={handleRange}
		>
			<option value="weekly">Weeks</option>
			<option value="biweekly">Bi-Weeks</option>
			<option value="monthly">Months</option>
		</select>
	</div>
{:else if section == 2}
	<h2 class="mt-3">Expense list</h2>
	<div class="my-3">
		<CreateExpenseModal />
	</div>

	<div style="display: flex; justify-content: center;">
		<table class="table table-striped">
			<thead>
				<tr>
					<th />
					<th>date</th>
					<th>name</th>
					<th>price</th>
				</tr>
			</thead>
			<tbody>
				{#if expenses}
					{#each expenses as expense}
						<tr>
							<td>📝</td>
							<td>{expense.date}</td>
							<td>{expense.name}</td>
							<td>{expense.amount}</td>
						</tr>
					{/each}
				{/if}
			</tbody>
			<tfoot>
				<td />
				<td />
				<td />
				<td>1000</td>
			</tfoot>
		</table>
	</div>

	{$expenses}

	<div>
		{#if range === 'weekly'}
			period: weekly
		{:else if range === 'biweekly'}
			period: biweekly
		{:else if range === 'monthly'}
			period: monthly
		{/if}
	</div>
{/if}

<!-- Navigation buttons -->
<div>
	<button type="button" class="btn btn-danger" on:click={handlePreviousSection}>Previous</button>
	<button type="button" class="btn btn-success" on:click={handleNextSection}>Next</button>
	{section}
</div>

<style type="text/scss">
	#budget-range {
		width: 50%;
	}
</style>
