<script>
	// @ts-nocheck
	import Quiz from '$components/quiz.svelte';
	import Result from '$components/result.svelte';

	export let data;
	const { modules, testQuiz, testAnswers } = data;

	modules.forEach((module) => {
		// @ts-ignore
		module.totalQuizzes = 0;
		module.topics.forEach((topic) => {
			// @ts-ignore
			module.totalQuizzes += topic.totalQuizzes;
		});
	});
</script>

<div class="hero min-h-1/2 w-full bg-pattern">
	<div class="hero-content">
		<div class="max-w-lg text-center">
			<h1 class="text-5xl font-bold">Over 300 Practice Technical Questions</h1>
			<p class="py-6 text-lg">
				Revis3 is open source and community driven technical practice questions.
			</p>
			<div class="flex space-x-2 justify-center">
				<a
					class="btn btn-accent rounded-none"
					href="https://github.com/raysca/revis3"
					target="_blank">See on Github</a
				>
			</div>
		</div>
	</div>
</div>

<div class="flex flex-col lg:flex-row lg:space-x-8 my-8 border max-w-4xl mx-auto">
	<div class="flex-1">
		<h3 class="text-3xl font-bold text-center p-8">Example Question</h3>
		<Quiz quiz={testQuiz} />
	</div>
	<div class="flex-1 bg-base-200">
		<h3 class="text-3xl font-bold text-center p-8">See The Result</h3>
		<div class="p-4">
			<Result showQuizzes={false} answers={testAnswers} total={testAnswers.length} />
		</div>
	</div>
</div>

<div class="hero w-full min-h-1/2">
	<div class="container max-w-2xl mx-auto">
		<h3 class="text-3xl font-bold text-center p-8">Start Practicing</h3>
		<div class="flex flex-wrap justify-center">
			{#each modules as module}
				<a
					href={module.path}
					class="block card w-full md:w-72 shadow-sm border-4 m-4 cursor-pointer bg-base-200 rounded-none"
				>
					<div class="card-body">
						<h2 class="card-title">{module.title}</h2>
						<div class="flex space-x-2 text-sm">
							<span>{module.totalQuizzes} Questions </span>
							<span>|</span>
							<span>{module.topics.length} Topics</span>
						</div>
					</div>
				</a>
			{/each}
		</div>
	</div>
</div>
