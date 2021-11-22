<script>
  import Everything from "./everything.svelte"
  import Farms from "./farms.svelte"
  let component = 0;

  function onClick() {
    component++;
    if (component == 2) 
      component = 0;
  }
</script>

<button on:click={onClick}>hola</button>

{#if component == 0}
  <Everything />
{:else if component == 1}
  <Farms />
{:else}
  <Everything />
{/if}