<script lang="ts">
	import { formatMoney } from '$lib/utils';

	let monthlyIncome: number;

	$: needsThreshold = monthlyIncome / 50;
	$: wantsThreshold = monthlyIncome / 30;
	$: savingsThreshold = monthlyIncome / 20;
</script>

<h2 class="mt-3">Calculate your montly expenses</h2>
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
