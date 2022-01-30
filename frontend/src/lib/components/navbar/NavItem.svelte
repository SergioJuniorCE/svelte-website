<script>
	import { goto } from '$app/navigation';
	export let route;
	export let value;
	export let inDropdown;

	const handleClick = () => {
		goto(`/${route}`, true);
	};
</script>

{#if inDropdown == undefined || inDropdown == false || inDropdown == null}
	<li class="nav-item">
		<a class="nav-link" aria-current="page" href="/{route}" on:click={handleClick}>{value}</a>
	</li>
{/if}
{#if inDropdown}
	<li><button class="dropdown-item" on:click={handleClick}>{value}</button></li>
{/if}
