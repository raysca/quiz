<script>
	import { page } from '$app/stores';
	import { PUBLIC_BASE_PATH } from '$env/static/public'
</script>

<svelte:head>
	<title>Error</title>
</svelte:head>

<div class="hero min-h-screen bg-base-200">
	<div class="hero-content text-center">
		<div class="max-w-md">
			<h1 class="text-5xl font-bold">Opps! Error</h1>
			<p class="py-6">{$page.error?.message}</p>
			<a href={PUBLIC_BASE_PATH} class="btn btn-primary">Back to HomePage</a>
		</div>
	</div>
</div>
