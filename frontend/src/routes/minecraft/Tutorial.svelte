<script>
	import Item from './Item.svelte';

  export let title;
  export let items;
  export let video;
  
</script>

<div id={title}>
	<div class="row">
		<div class="col">
			<h4>{title}</h4>
			<iframe
				width="560"
				height="315"
				src="https://www.youtube.com/embed/{video}"
				title={title}
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowfullscreen
			/>
		</div>
		<div class="col">
			<p>Materials</p>
			<ul>
        {#each items as item}
					<li><Item name={item.name} amount={item.amount} /></li>
        {:else}
          <li>None</li>
        {/each}
			</ul>
		</div>
	</div>
</div>
<hr>