<script lang="ts">
	import 'bootswatch/dist/cyborg/bootstrap.min.css';
	import 'bootstrap/dist/js/bootstrap.min.js';
	import 'sweetalert2/dist/sweetalert2.min.css';
	import Navbar from '$lib/components/Navbar.svelte';
	import { supabase } from '$lib/database';
	import { session } from '$app/stores';
	import { browser } from '$app/env';

	if (browser) {
		$session = supabase.auth.session();
		supabase.auth.onAuthStateChange((event, ses) => {
			$session = ses;
		});
	}
	console.log($session);
</script>

<Navbar />
<main class="container">
	<slot />
</main>
