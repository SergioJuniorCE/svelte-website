<script>
	import { onMount } from 'svelte';
  import { goto } from '$app/navigation';

	let components = [
    'CPU',
    'CPU Cooler',
    'Motherboard',
    'Memory',
    'Storage',
    'Video Card',
    'Power Supply',
    'Case',
    'Operating System',
    'Monitor',
    'Keyboard',
    'Mouse',
  ];

	onMount(() => {
		
	});

  function gotoPage(name) {
    let url = name.toLowerCase().replace(' ', '_');
    goto(`/products/${url}`);
  }

  function handleClick() {
		goto(`/`, true);
	};
</script>

<!-- Table for PCs -->
<table class="table table-striped">
  <thead>
    <tr>
      <th>Component</th>
      <th>Selection</th>
      <th>Base</th>
      <th>Promo</th>
      <th>Shipping</th>
      <th>Tax</th>
      <th>Price</th>
      <th>Where</th>
    </tr>
  </thead>
  <tbody>
    {#each components as component}
      <tr>
        <td><span class="link" on:click={() => gotoPage(component)}>{component}</span></td>
      </tr>
    {/each}
  </tbody>
</table>

<style>
  /* Blue text with blue underline */
  .link {
    color: cornflowerblue;
    text-decoration: underline;
  }

</style>