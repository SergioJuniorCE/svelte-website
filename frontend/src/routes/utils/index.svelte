<script>
	import Card from '$lib/components/Card.svelte';

	let cards = [
		{ title: 'Todo', text: 'Simple todo app'},
		{
			title: 'Trip calculator',
			text: 'App that allows you to calculate how much you will spend on gas to make a trip'
		},
    { title: 'Todo', text: 'Simple todo app'},
    { title: 'Todo', text: 'Simple todo app'},
    { title: 'Todo', text: 'Simple todo app'},
    { title: 'Todo', text: 'Simple todo app'},
    { title: 'Todo', text: 'Simple todo app'},
    { title: 'Todo', text: 'Simple todo app'},
    { title: 'Todo', text: 'Simple todo app'},
	];
</script>

<h1>Utilities</h1>
<div class="row">
	{#each cards as card}
		<div class="col-lg-4 col-md-6 col-sm-12">
			{#if card}
				<Card title={card.title} text={card.text} />
			{/if}
		</div>
	{/each}
</div>
