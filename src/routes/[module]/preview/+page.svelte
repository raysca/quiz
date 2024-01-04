<script lang="ts">
	import Quiz from '$components/quiz.svelte';
	import { page } from '$app/stores';
	const { module, quizzes } = $page.data;
</script>

<h1 class="text-xl font-semibold text-center">{module.title}</h1>
<h3 class="text-lg text-center">Total of {quizzes.length}</h3>

<div class="flex flex-col space-y-4">
	{#each quizzes as quiz}
		<Quiz {quiz} showComment />
	{/each}
</div>
