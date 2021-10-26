<script>
	import { goto } from '$app/navigation';
	export let route;
	export let value;
	export let inDropdown;

	const handleClick = () => {
		goto(`/${route}`, true);
	};
</script>

{#if inDropdown == undefined}
	<li class="nav-item">
		<a class="nav-link active" aria-current="page" href="/" on:click={handleClick}
			>{value}</a
		>
	</li>
{/if}
{#if inDropdown}
	<li><button class="dropdown-item" on:click={handleClick}>{value}</button></li>
{/if}
