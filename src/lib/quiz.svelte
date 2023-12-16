<script lang="ts">
	import { afterUpdate } from 'svelte';
	import { checkAnswer, type Quiz } from './quiz';
	import hljs from 'highlight.js'

    export let total: number;
	export let quizzes: Quiz[];
     
    const randomSelectedQuizzes = (amount: number) => {
        const selectedQuizzes = [];
        for (let i = 0; i < amount; i++) {
            const randomIndex = Math.floor(Math.random() * quizzes.length);
            selectedQuizzes.push(quizzes[randomIndex]);
        }
        return selectedQuizzes;
    };

    let selectedQuizzes = randomSelectedQuizzes(total);
	let currentQuizIndex = 0;
	let currentQuiz: Quiz = selectedQuizzes[currentQuizIndex];
	const answers: { quiz: Quiz; choices: string[], correct: boolean }[] = [];

	const onChoiceSubmitted = (event: Event) => {
		const form = new FormData(event.target as HTMLFormElement);
        const choices = Array.from(form.entries()).map((entry) => entry[1] as string)
        const correct = checkAnswer(currentQuiz, choices)
        answers.push({
            quiz: currentQuiz,
            choices,
            correct
        });

        event.preventDefault();
		currentQuizIndex++;
		currentQuiz = quizzes[currentQuizIndex];
	};

    afterUpdate(() => {
        hljs.highlightAll();
    });

	$: completed = currentQuizIndex === selectedQuizzes.length - 1;
    $: result = answers.filter((answer) => answer.correct).length;
</script>

{#if completed}
	<h1>Quiz completed ({result}/{selectedQuizzes.length})</h1>
    {#each answers as answer}
        <h2>{@html answer.quiz.question}</h2>
        {#each answer.choices as choice}
            <p>{choice} {#if !answer.correct} --- <b>wrong</b>{/if}</p>
        {/each}
    {/each}
    <button on:click={() => window.location.reload()}>Restart</button>
{/if}

{#if !completed}
	<span>{currentQuizIndex + 1}/{selectedQuizzes.length}</span>
	<div class="quiz">
		<form on:submit={onChoiceSubmitted}>
			{#each currentQuiz.content as content}
				{@html content}
			{/each}
			<input type="submit" value="Next" />
		</form>
	</div>
{/if}
