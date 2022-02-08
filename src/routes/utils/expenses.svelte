<!-- <script context="module">
	export async function load({ session }) {}
</script> -->
<script lang="ts">
	import ExpenseItemTable from '$lib/components/expenses/ExpenseItemTable.svelte';

	import AddItemForm from '$lib/components/expenses/AddItemForm.svelte';
	import { formatMoney } from '$lib/utils';
	import { onMount } from 'svelte';

	let monthlyIncome: number = 27000;
	let stage = 2;

	$: needsThreshold = monthlyIncome / 50;
	$: wantsThreshold = monthlyIncome / 30;
	$: savingsThreshold = monthlyIncome / 20;

	onMount(async () => {});
</script>

<svelte:head>
	<title>SJCE - Expenses</title>
</svelte:head>

{#if stage === 1}
	<div>
		<h2 class="mt-3">Calculate your montly expenses (50/30/20)</h2>
		<div class="mb-3">
			<label for="monthly-income" class="form-label">Monthly Income</label>
			<input
				type="number"
				class="form-control"
				name="monthly-income"
				id="monthly-income"
				aria-describedby="montly-income-help"
				placeholder=""
				min="1"
				step="any"
				bind:value={monthlyIncome}
			/>
			<small id="montly-income-help" class="form-text text-muted"
				>The amount of money you earn in a month</small
			>
		</div>

		<h5>needs: ${formatMoney(needsThreshold)}</h5>
		<h5>wants: ${formatMoney(wantsThreshold)}</h5>
		<h5>savings: ${formatMoney(savingsThreshold)}</h5>
	</div>
{:else if stage == 2}
	<div class="row mt-2">
		<div class="col-10">
			<h3>Calculate your expenses</h3>
			<AddItemForm />
			<h4>Needs</h4>
			<ExpenseItemTable category="need" />
			<h4>Wants</h4>
			<ExpenseItemTable category="want" />
			<h4>Savings</h4>
			<ExpenseItemTable category="savings" />
		</div>
		<div class="col-2">
			<hr />
			<div class="row">
				<div class="col">
					<p>needs:</p>
				</div>
				<div class="col">
					${formatMoney(needsThreshold)}
				</div>
			</div>
			<div class="row">
				<div class="col">
					<p>wants:</p>
				</div>
				<div class="col">
					${formatMoney(wantsThreshold)}
				</div>
			</div>
			<div class="row">
				<div class="col">
					<p>savings:</p>
				</div>
				<div class="col">
					${formatMoney(savingsThreshold)}
				</div>
			</div>
			<hr />
		</div>
	</div>
{/if}

{#if stage != 1}
	<button
		class="btn btn-primary"
		on:click={() => {
			stage--;
		}}
	>
		Previous
	</button>
{/if}

{#if stage != 3}
	<button
		class="btn btn-primary"
		on:click={() => {
			stage++;
		}}
	>
		Next
	</button>
{/if}
