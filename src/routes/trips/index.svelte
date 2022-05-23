<script lang="ts">
	let tankSize: number;
	let range: number;
	let gasPrice: number;
	let distance: number;
	let total: number;

	function handleDemoData() {
		tankSize = 40;
		range = 320;
		gasPrice = 21;
		distance = 8;
	}

	function calculateTotal() {
		let efficiency = range / tankSize;
		let fuelNeeded = efficiency / distance;
		total = fuelNeeded * gasPrice;
	}
</script>

<div class="container">
	<h2 class="text-center">Trip cost calculator</h2>
	<h3>How it works</h3>
	<p>
		It determines the fuel efficiency of the vehicle and returns the price for doing X amount of
		trips with the given distance, fuel capacity and the total distance the vehicle can go from 100%
		to 0% of its total capacity
	</p>
	<div>
		<input name="test" id="test" class="btn btn-primary" type="button" value="Use demo data" on:click={handleDemoData} />
	</div>
	<div>
		<small>Demo data to test the calculator</small>
	</div>
	<hr />
	<div class="row">
		<div class="col-sm-6">
			<div class="mb-3">
				<label for="number" class="form-label">Tank Size</label>
				<input
					type="number"
					class="form-control"
					name="number"
					id="number"
					aria-describedby="number"
					placeholder="Enter the capacity of the tank"
					bind:value={tankSize}
				/>
			</div>
		</div>
		<div class="col-sm-6">
			<div class="mb-3">
				<label for="number" class="form-label">Vehicle range</label>
				<input
					type="number"
					class="form-control"
					name="number"
					id="number"
					aria-describedby="number"
					placeholder="Enter the vehicle range"
					bind:value={range}
				/>
			</div>
		</div>
		<div class="col-sm-6">
			<div class="mb-3">
				<label for="number" class="form-label">Vehicle range</label>
				<input
					type="number"
					class="form-control"
					name="number"
					id="number"
					aria-describedby="number"
					placeholder="Enter the vehicle range"
					bind:value={range}
				/>
			</div>
		</div>
		<div class="col-sm-6">
			<div class="mb-3">
				<label for="number" class="form-label">Vehicle range</label>
				<input
					type="number"
					class="form-control"
					name="number"
					id="number"
					aria-describedby="number"
					placeholder="Enter the vehicle range"
					bind:value={range}
				/>
			</div>
		</div>
	</div>
	<div>
		<div class="d-grid gap-2">
			<button type="button" name="totalSubmit" id="totalSubmit" class="btn btn-primary">Calculate total</button>
		</div>
	</div>
	<div>
		{#if total}
			<p>Total: {total}</p>
		{:else}
			<p>Enter some data to calculate</p>
		{/if}
	</div>
</div>

<style>
</style>
