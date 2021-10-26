<script>
	import Swal from 'sweetalert2/dist/sweetalert2.all.js';
	let distance;
	let times;
	let roundTrip;
	let gasPrice;
	let millage;
	let tankCapacity;

	const testCalc = () => {
		distance = 5.4;
		times = 20;
		roundTrip = true;
		gasPrice = 19.19;
		millage = 330;
		tankCapacity = 40;
	};

	const calculate = () => {
		checkErrors();
		let totalDistance = distance * times;
		if (roundTrip != undefined || roundTrip) {
			totalDistance *= 2;
		}
		let performance = millage / tankCapacity;
		let pricePerDistance = gasPrice / performance;
		let cost = pricePerDistance * totalDistance;
		cost = cost.toFixed(2);
		if (!isNaN(cost)) {
			Swal.fire({
				title: `Cost for trip is $${cost}`,
				icon: 'success'
			});
		}
	};

	const checkErrors = () => {
		if (distance == undefined) {
			Swal.fire({
				title: 'Distance is missing',
				icon: 'error'
			});
		} else if (times == undefined) {
			Swal.fire({
				title: 'Times is missing',
				icon: 'error'
			});
		} else if (gasPrice == undefined || gasPrice <= 0) {
			if (gasPrice <= 0) {
				Swal.fire({
					title: "Gas price can't be negative",
					icon: 'error'
				});
			} else {
				Swal.fire({
					title: 'Gas price is missing',
					icon: 'error'
				});
			}
		}
	};
</script>

<h1>Distance calculator</h1>
<p>Calculates the cost of a trip for X amount of times</p>
<p>Make sure to use the same metric types so the calculator can be precise.</p>

<button class="btn btn-dark" on:click={testCalc}>Test</button>

<div class="form-group">
	<label for="distance">Distance</label>
	<input type="number" class="form-control" id="distance" bind:value={distance} />
</div>
<div class="form-group">
	<label for="times">Times</label>
	<input type="number" class="form-control" id="times" bind:value={times} />
</div>
<div class="form-check">
	<label class="form-check-label" for="round-trip">Round trip</label>
	<input
		type="checkbox"
		class="form-check-input"
		id="round-trip"
		bind:value={roundTrip}
		bind:checked={roundTrip}
	/>
</div>
<div class="form-group">
	<label for="gasPrice">Gas Price</label>
	<input type="number" class="form-control" id="gasPrice" bind:value={gasPrice} />
</div>
<div class="form-group">
	<label for="millage">Millage</label>
	<input type="number" class="form-control" id="millage" bind:value={millage} />
</div>
<div class="form-group">
	<label for="tankCapacity">Tank Capacity</label>
	<input type="number" class="form-control" id="tankCapacity" bind:value={tankCapacity} />
</div>
<br />
<button class="btn btn-primary" on:click={calculate}>Calculate</button>
