<script>
	export let data;
	const { modules } = data;

	const FEATURES = [
		{
			title: 'Multiple Choice',
			description: 'Questions are multiple choice with 4 possible answers.'
		},
		{
			title: 'Community Driven',
			description: 'Questions are submitted by the community and reviewed by the community.'
		},
		{
			title: 'Open Source',
			description: 'Revis3 is open source and free to use.'
		},
		{
			title: 'No Sign Up',
			description: 'No sign up required to use Revis3.'
		}
	];
</script>

<div class="hero min-h-1/2 bg-base-200">
	<div class="hero-content text-center">
		<div class="max-w-md">
			<h1 class="text-4xl font-bold">Over 600 Technical Questions</h1>
			<p class="py-6 text-lg">
				Revis3 is open source and community driven technical practice questions.
			</p>
			<div class="flex space-x-2 justify-center">
				<a class="btn btn-accent btn-wide" href="https://github.com/raysca/revis3">Github</a>
			</div>
		</div>
	</div>
</div>

<div class="p-4 bg-base-300">
	<div class="flex flex-col md:flex-row space-y-4 flex-wrap justify-between">
		{#each FEATURES as feature}
			<div class="flex-1 border-t md:border-t-0 md:border-r text-center px-4 py-4">
				<h2 class="text-xl font-semibold">{feature.title}</h2>
				<p class="py-4">{feature.description}</p>
			</div>
		{/each}
	</div>
</div>

<h3 class="text-center text-3xl py-4">Tech Modules</h3>

<div class="flex flex-wrap justify-center">
	{#each modules as module}
		<a href={module.path} class="block card w-full md:w-72 shadow m-4 cursor-pointer">
			<div class="card-body">
				<h2 class="card-title">{module.title}</h2>
				<div>
					<span class="font-semibold">{module.totalQuizzes} Questions </span>
				</div>
				<ul>
					{#each module.topics ?? [] as topic}
						<li class="py-1">{topic}</li>
					{/each}
				</ul>
			</div>
		</a>
	{/each}
</div>
