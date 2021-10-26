<script>
  import NavItem from "./NavItem.svelte";
  import Dropdown from "./Dropdown.svelte";
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
			aria-label="Toggle navigation"><span class="navbar-toggler-icon" /></button
		>
		<div class="collapse navbar-collapse" id="navbarSupportedContent">
			<ul class="navbar-nav me-auto mb-2 mb-lg-0">
				<NavItem value="Home"/>
        <Dropdown value="Utils" route="utils" items={[
          {value: 'Trip Cost', route: 'trip-cost'},
          {div: true},
          {value: 'Expense manager', route: 'expenses'},
        ]} />
			</ul>
			<!-- <form class="d-flex">
				<input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
				<button class="btn btn-success" type="submit">Search</button>
			</form> -->
		</div>
	</div>
</nav>
