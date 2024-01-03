<script>
	import { page } from '$app/stores';
</script>

<svelte:head>
	<title>Error</title>
</svelte:head>

<div class="hero min-h-screen bg-base-200">
	<div class="hero-content text-center">
		<div class="max-w-md">
			<h1 class="text-5xl font-bold">Opps! Error</h1>
			<p class="py-6">{$page.error?.message}</p>
			<a href="/revis3" class="btn btn-primary">Back to HomePage</a>
		</div>
	</div>
</div>
