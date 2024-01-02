<script>
	export let data;
	const { modules } = data;
	modules.forEach((module) => {
		module.totalQuizzes = 0;
		module.topics.forEach((topic) => {
			module.totalQuizzes += topic.totalQuizzes;
		});
	});
</script>

<div class="hero min-h-1/2 bg-base-300">
	<div class="hero-content text-center">
		<div class="max-w-md">
			<h1 class="text-5xl font-bold">Over 600 Practice Technical Questions</h1>
			<p class="py-6 text-lg">
				Revis3 is open source and community driven technical practice questions.
			</p>
			<div class="flex space-x-2 justify-center">
				<a class="btn btn-accent" href="https://github.com/raysca/revis3">Github</a>
			</div>
		</div>
	</div>
</div>

<div class="flex flex-wrap justify-center">
	{#each modules as module}
		<a href={module.path} class="block card w-full md:w-72 shadow m-4 cursor-pointer">
			<div class="card-body">
				<h2 class="card-title text-accent-content">{module.title}</h2>
				<div class="flex space-x-2 text-sm text-base-content-secondary">
					<span>{module.totalQuizzes} Questions </span> 
					<span>|</span>
					<span>{module.topics.length} Topics</span>
				</div>
			</div>
		</a>
	{/each}
</div>
