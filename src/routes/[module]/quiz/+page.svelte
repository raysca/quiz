<script lang="ts">
	import Quiz from '$components/quiz.svelte';
	import { page } from '$app/stores';
	import { shuffle } from '$lib/shuffle';
	import type { Quiz as QuizType } from '$lib/topic';
	const { module, quizzes } = $page.data;
	const availableQuizzes = shuffle<QuizType>(quizzes).slice(0, 20);
</script>

<div class="py-4">
	<h1 class="text-4xl font-semibold text-center">{module.title} Module</h1>
	<h3 class="text-lg text-center">Total of {availableQuizzes.length} Questions</h3>
</div>


<div class="flex flex-col space-y-4 m-4">
	{#each availableQuizzes as quiz}
    <div class="border">
		<Quiz {quiz} />
    </div>
	{/each}
</div>
