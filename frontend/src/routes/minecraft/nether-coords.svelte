<script>
	let x_axis = 0;
	let z_axis = 0;

	function divide(axis) {
		return parseInt(axis / 8);
	}
</script>

<div>
	<label for="x-axis">X Axis</label>
	<input type="number" name="x-axis" placeholder="X Axis" bind:value={x_axis} />
</div>
<div>
	<label for="z-axis">Z Axis</label>
	<input type="number" name="z-axis" placeholder="Y Axis" bind:value={z_axis} />
</div>
<div>
	<label for="command">Command to tp</label>
	<h3 name="command">/tp @s {divide(x_axis)} ~ {divide(z_axis)}</h3>
</div>
