<script>
	import { session } from '$app/stores';
	import { supabase } from '$lib/database';
	import { onMount } from 'svelte';
	import SpinnerDots from './spinners/SpinnerDots.svelte';

	let user;
	onMount(async () => {
		user = null;
		if ($session) {
			if ($session.hasOwnProperty('user')) {
				user = $session['user'];
			}
		}
	});

	async function handleLogout() {
		const { error } = await supabase.auth.signOut();
	}
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
				<li class="nav-item">
					<a class="nav-link" href="/posts">Posts</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="/minecraft">Minecraft</a>
				</li>
				<!-- <li class="nav-item">
					<a class="nav-link" href="/trips">Trips</a>
				</li> -->
				<!-- <li class="nav-item">
					<a class="nav-link" href="/about">About</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="/contact">Contact</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="/budget">Budget</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="/meals">Meals</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="/test">test</a>
				</li> -->
				<!-- <li class="nav-item dropdown">
					<a
						class="nav-link dropdown-toggle"
						href=""
						id="navbarDropdown"
						role="button"
						data-bs-toggle="dropdown"
						aria-expanded="false"
					>
						Dropdown
					</a>
					<ul class="dropdown-menu" aria-labelledby="navbarDropdown">
						<li><a class="dropdown-item" href="#!">Action</a></li>
						<li><a class="dropdown-item" href="#!">Another action</a></li>
						<li><hr class="dropdown-divider" /></li>
						<li><a class="dropdown-item" href="#!">Something else here</a></li>
					</ul>
				</li> -->
				<!-- <li class="nav-item">
					<a href="/" class="nav-link disabled">Disabled</a>
				</li> -->
			</ul>
			<form class="d-flex">
				<input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
				<button class="btn btn-outline-success" type="submit">Search</button>
			</form>
			<div class="navbar-text">
				{#if user}
					<ul class="navbar-nav me-auto mb-2 mb-lg-0">
						<li class="nav-item dropdown">
							<a
								class="nav-link dropdown-toggle"
								href="/profile"
								id="navbarDropdown"
								role="button"
								data-bs-toggle="dropdown"
								aria-expanded="false"
							>
								<span>
									{#if user}
										Hello, {user.email.split('@')[0]}
									{:else}
										<SpinnerDots />
									{/if}
								</span>
							</a>
							<ul class="dropdown-menu" aria-labelledby="navbarDropdown">
								<li><span class="dropdown-item" on:click={handleLogout}>Logout</span></li>
								<li><a class="dropdown-item" href="#!">Another action</a></li>
								<li><hr class="dropdown-divider" /></li>
								<li><a class="dropdown-item" href="#!">Something else here</a></li>
							</ul>
						</li>
					</ul>
				{:else}
					<a href="/auth" class="btn btn-outline-secondary">Login</a>
				{/if}
			</div>
		</div>
	</div>
</nav>
