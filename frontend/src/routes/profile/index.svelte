<script>
	import { onMount } from 'svelte';
  import { variables } from '$lib/variables'
	let name;

  onMount(async () => {
    const url = `${variables.api}/users/`
    const res = await fetch()
  })
</script>

<h1>Profile</h1>
