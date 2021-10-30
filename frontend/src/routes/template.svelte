<script>
	import { onMount } from 'svelte';
	$: things;
	onMount(() => {
		things = localStorage.getItem('things') || [];
		console.log('mounted');
	});
	function update() {
		things = [...things];
		localStorage.setItem('things', JSON.stringify(things));
	}
</script>
