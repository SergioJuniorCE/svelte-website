<script lang="ts">
	import { session } from '$app/stores';
import SpinnerCard from '$lib/components/spinners/SpinnerCard.svelte';
	import { onMount } from 'svelte';

	let showSession: boolean;
	let showDynamicArray: boolean;
	$: array = [];

	onMount(async () => {
		showSession = false;
	});

	function toggleSessionCode() {
		showSession = !showSession;
	}

  function toggleDynamicArray() {
    showDynamicArray = !showDynamicArray;
  }

	function addObject() {
		array = [...array, 'a'];
	}

	function removeObject() {
		array = [...array.slice(0, array.length - 1)];
	}
</script>

<div class="row">
	<div class="col-2">
		<div>
			<button class="btn btn-primary mb-3" on:click={toggleSessionCode}>Session toggle</button>
      <button class="btn btn-primary mb-3" on:click={toggleDynamicArray}>Dynamic toggle</button>
		</div>
		{#if showDynamicArray}
			<div class="mx-5">
				<button on:click={addObject}>+</button>
				<button on:click={removeObject}>-</button>
			</div>
		{/if}
	</div>
	<div class="col-10">
		{#if showSession}
			Session data
			<pre>
        {JSON.stringify($session, null, 2)}
      </pre>
		{/if}
		{#if showDynamicArray}
			Dynamic array
			<pre>
        {JSON.stringify(array, null, 2)}
      </pre>
		{/if}
	</div>
</div>