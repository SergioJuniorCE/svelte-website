<script>
	import Tutorial from '$lib/components/Tutorial.svelte';

	let tutorials = [
		{ title: 'All Mob Farm', items: [{ name: 'stone', amount: 1536 }], video: 'HtKoviqHUNs' },
		{ title: 'Villager breeder', items: [], video: '5Ehf7eLOlYw' },
		{ title: 'Easy Glow Squid Farm', items: [], video: 'Sjpj_Ra78D0' },
		{ title: 'Drowned Copper Farm', items: [], video: 'OrqkXmKimQc' },
		{ title: 'Moss Block Bone Meal Farm', items: [], video: 'B1h5TA7NOmc' },
		{ title: 'Easy Brewing Station', items: [], video: 'H9PEIOEyQmM' },
		{ title: 'Fast Super Smelter', items: [], video: 'CWPBuSGEwQY' },
		{ title: 'Easy Brewing Station', items: [], video: 'H9PEIOEyQmM' }
	];
</script>

<div class="row">
	<div class="col-sm-2">
		<h2>Navigation</h2>
		<hr />
		<ul>
			{#each tutorials as tutorial}
				<li>
					<a href="#{tutorial.title}">{tutorial.title} </a>
				</li>
			{/each}
		</ul>
	</div>
	<div class="col-sm-10" style="overflow-y: scroll; height: 90vh">
		<h2>Tutorials</h2>
		<hr />
		{#each tutorials as tutorial}
			<Tutorial
				title={tutorial.title}
				items={tutorial.items}
				video={tutorial.video}
			/>
		{/each}
	</div>
</div>
