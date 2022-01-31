<script lang="ts">
	export let title: string;
</script>

<div class="col-md-12 col-lg-4 col-xl-6" style="max-width: fit-content;">
	<div class="card mt-3">
		<div class="card-body">
			<a class="card-title text-primary" style="color: cornflowerblue" href="/posts/{title}"
				>{title}</a
			>
		</div>
	</div>
</div>
