<script>
	export let name;
	export let amount;

	function capitalize(string) {
		return (name.charAt(0).toUpperCase() + name.slice(1)).replace('-', ' ');
	}

	function convert() {
		let convertion, stacks, leftover, items, result;

		// Converting the
		convertion = (amount / 64).toString().split('.');

		// Getting the number of stacks and the left over of items
		stacks = convertion[0];
		leftover = convertion[1];

		if (leftover == undefined) {
			items = 0;
		} else {
			items = parseFloat('.' + convertion[1]) * 64;
		}

		if (stacks > 0 && items > 0) {
			return `${stacks} stacks and ${items} items`;
		}
		if (stacks > 0) {
			return `${stacks} stacks`;
		}
		if (items > 0) {
			return `${items} items`;
		}
	}
</script>

<img src="/minecraft/{name}.png" alt="{name}" style="width: 1rem" />&nbsp;{capitalize(name)} - {convert()}
