<script>
	let navigation = [
    {
      name: 'Home',
      url: '/'
    },
    [
      {
        name: 'Utils',
        category: 'utils'
      },
      [
        {name: "Minecraft Stack Calculator", url:"mc-calculator"},
        {name: "div"},
        {name: "That", url:"That"},
      ]
    ],
    [
      {
        name: 'Minecraft',
        category: 'minecraft'
      },
      [
        {name: "Minecraft Stack Calculator", url:"mc-calculator"},
        {name: "div"},
        {name: "Farms", url:"farms"},
        {name: "Builds", url:"builds"},
      ]
    ],
    [
      {
        name: 'Projects',
        category: 'projects'
      },
      [
        {name: 'Pokedex', url:"pokedex"},
      ]
    ],
	];
</script>

<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
	<div class="container">
		<a class="navbar-brand" href="/">SJCE</a>
		<button
			class="navbar-toggler"
			type="button"
			data-bs-toggle="collapse"
			data-bs-target="#navbarSupportedContent"
			aria-controls="navbarSupportedContent"
			aria-expanded="false"
			aria-label="Toggle navigation"
		>
			<span class="navbar-toggler-icon" />
		</button>
		<div class="collapse navbar-collapse" id="navbarSupportedContent">
			<ul class="navbar-nav me-auto mb-2 mb-lg-0">
				{#each navigation as nav, i}
					{#if !Array.isArray(nav)}
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href={nav.url}>{nav.name}</a>
            </li>
					{:else}
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href={nav[0].category}
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {nav[0].name}
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                {#each nav[1] as link}
                  {#if link.name == "div"}
                     <li><hr class="dropdown-divider" /></li>
                  {:else}
                     <li><a class="dropdown-item" href="{nav[0].category}/{link.url}">{link.name}</a></li>
                  {/if}
                {/each}
              </ul>
            </li>
					{/if}
				{/each}
			</ul>
			<form class="d-flex">
				<input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
				<button class="btn btn-outline-success" type="submit">Search</button>
			</form>
		</div>
	</div>
</nav>
