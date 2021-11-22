<script>
	import NavItem from './NavItem.svelte';
	export let value;
	export let route;
	export let items;
</script>

<li class="nav-item dropdown">
	<a
		class="nav-link dropdown-toggle"
		id="navbarDropdown"
		role="button"
		data-bs-toggle="dropdown"
		aria-expanded="false"
	>
		{value}
	</a>
	<ul class="dropdown-menu" aria-labelledby="navbarDropdown">
		{#each items as item}
			{#if item.div}
				<li><hr class="dropdown-divider" /></li>
			{:else}
				<NavItem route="{route}/{item.route}" value={item.value} inDropdown={true} />
			{/if}
		{/each}
	</ul>
</li>
