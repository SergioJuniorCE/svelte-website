<script lang="ts">
	import { goto } from '$app/navigation';

	export let title;
	export let description;
	export let updated_at;

	function handlePostClick(title: string) {
		goto('/posts/' + title);
	}
</script>

<div
	on:click={() => {
		handlePostClick(title);
	}}
	class="col-xs-12 col-sm-6 col-mb-4 col-lg-3 mb-3 mx-lg-2"
	style="cursor: pointer;"
>
	<div class="card" style="width: 18rem;">
		<img src="https://picsum.photos/200" class="card-img-top" alt={title} />
		<div class="card-body">
			<h5 class="card-title">{title}</h5>
			<p class="card-text">{description}</p>
			<p class="card-text"><small class="text-muted">Last updated {updated_at}</small></p>
		</div>
	</div>
</div>
