<script lang="ts">
import NetherCoordsCalculator from "./components/NetherCoordsCalculator.svelte";
import StackCalculator from "./components/StackCalculator.svelte";


	let option: number;
  
	function handleOption(value: number) {
		option = value;
	}
</script>

<div class="row">
	<div class="col-sm-3 side-bar">
		<ul>
			<li class="item" on:click={() => handleOption(1)}><h5>Stack calculator</h5></li>
			<li class="item" on:click={() => handleOption(2)}><h5>Nether distance</h5></li>
		</ul>
	</div>
	<div class="col-sm-9">
		{#if option == undefined}
			<h2>Select an option from the left</h2>
		{:else if option == 1}
			<StackCalculator/>
		{:else if option == 2}
			<NetherCoordsCalculator/>
		{/if}
	</div>
</div>

<style type="scss">
	.side-bar {
		padding-left: 3rem;
		border: 1px solid white;
		border-top: 0px;
		border-bottom: 0px;
		border-color: whitesmoke;
		margin-bottom: 10px;

    .item {
      cursor: pointer;
      list-style-type: none;
      border: 1px solid gray;
      border-radius: 5px;
      display: inline-block;
      margin-top: 1rem;
      padding-top: 5px;
      padding-left: 10px;
      padding-right: 10px;
    }
	}
</style>
