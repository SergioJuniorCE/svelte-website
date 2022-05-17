<script lang="ts">
	let coords = {
		x: 0,
		y: 0
	};
</script>

<div class="row coords">
	<div class="col">
		<div class="mb-3">
			<label for="item-input" class="form-label">X Coord</label>
			<input
				type="number"
				name="item-input"
				class="form-control"
				placeholder="0"
				bind:value={coords.x}
			/>
		</div>
	</div>
	<div class="col">
		<div class="mb-3">
			<label for="item-input" class="form-label">Y Coord</label>
			<input
				type="number"
				name="item-input"
				class="form-control"
				placeholder="0"
				bind:value={coords.y}
			/>
		</div>
	</div>
</div>
<div class="row">
	<h3>{Math.floor(coords.x / 8)} & {Math.floor(coords.y / 8)}</h3>
</div>
