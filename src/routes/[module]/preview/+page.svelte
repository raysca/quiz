<script lang="ts">
	import Quiz from '$components/quiz.svelte';
	import { page } from '$app/stores';
	const { module, quizzes } = $page.data;
</script>

<div class="py-4">
	<h1 class="text-4xl font-semibold text-center">{module.title} Module</h1>
	<h3 class="text-lg text-center">Total of {quizzes.length} Questions</h3>
</div>

<div class="w-full text-center">
	<a href="/{module.path}" class="btn btn-primary btn-wide mx-auto">Take Quiz</a>
</div>

<div class="flex flex-col space-y-4 border m-4">
	{#each quizzes as quiz}
		<Quiz {quiz} showComment />
	{/each}
</div>
