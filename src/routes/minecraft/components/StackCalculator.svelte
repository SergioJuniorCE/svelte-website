<script lang='ts'>
  let itemAmount: number;
</script>

<div class="mb-3">
  <label for="item-input" class="form-label">Item Amount</label>
  <input
    type="number"
    name="item-input"
    class="form-control"
    placeholder="Enter the amount of items"
    bind:value={itemAmount}
  />
</div>
{#if itemAmount != undefined}
  <p>{Math.floor(itemAmount / 64)} stacks & {Math.floor(itemAmount % 64)} items</p>
{/if}