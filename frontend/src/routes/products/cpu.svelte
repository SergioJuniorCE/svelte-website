<script lang="ts">
	import { onMount } from 'svelte';
	import { Cpu } from './classes';
	$: cpus = [];

	let cpu = new Cpu(
		'https://cdna.pcpartpicker.com/static/forever/images/product/3ef757133d38ac40afe75da691ba7d60.256p.jpg',
		'AMD',
		'Ryzen 5',
		'5600X',
		6,
		3.7,
		4.6,
		65,
		false,
		true,
		5,
		{ value: 309, currency: 'USD' }
	);

	onMount(() => {
		for (var i = 0; i < 10; i++) {
			cpus = [...cpus, cpu];
		}
	});

	function yesOrNo(value) {
		return value ? 'Yes' : 'No';
	}

</script>

<!-- CPU table -->
<div class="table-responsive">
	<table class="table table-striped">
		<thead>
			<tr>
				<th>Name</th>
				<th>Core Count</th>
				<th>Core Clock</th>
				<th>Boost Clock</th>
				<th>TDP</th>
				<th>Integrated Graphics</th>
				<th>SMT</th>
				<th>Rating</th>
				<th>Price</th>
				<th />
			</tr>
		</thead>
		<tbody>
			{#each cpus as cpu}
				<tr>
					<td>
						<img 
							src="{cpu.image}"
							alt="{cpu.fullName} Processor"
							style="width: 2rem;">
						{cpu.fullName}
					</td>
					<td>{cpu.core_count}</td>
					<td>{cpu.core_clock} GHz</td>
					<td>{cpu.boost_clock} GHz</td>
					<td>{cpu.tdp}W</td>
					<td>{yesOrNo(cpu.integrated_graphics)}</td>
					<td>{yesOrNo(cpu.smt)}</td>
					<td>{@html cpu.ratingStars}</td>
					<td><span>$ {cpu.price.value}.00 {cpu.price.currency}</span></td>
					<td><button class="btn btn-primary">Add</button></td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>
