<script lang="ts">
	import { afterUpdate } from 'svelte';
	import { checkAnswer, type Quiz } from './quiz';
	import hljs from 'highlight.js';

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
	const answers: { quiz: Quiz; choices: string[]; correct: boolean }[] = [];

	const onChoiceSubmitted = (event: Event) => {
		const form = new FormData(event.target as HTMLFormElement);
		const choices = Array.from(form.entries()).map((entry) => entry[1] as string);
		const correct = checkAnswer(currentQuiz, choices);
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
	$: inputType = currentQuiz?.answers.length > 1 ? 'checkbox' : 'radio';
</script>

<style>
    .quiz {
        margin: 0 auto;
        max-width: auto;
    }

    .quiz ul {
        list-style: none;
        padding: 0;
    }

    .quiz ul li {
        margin-bottom: 0.5rem;
    }

    .quiz ul li label {
        position: relative;
        cursor: pointer;
        display: block;
    }

    .quiz ul li label:hover {
        background-color: #eee;
    }

    /* Change label background if input is checked */
    .quiz ul li label input {
        position: absolute;
        left: 10px;
        top: 12px;
    }

    .quiz ul li label input + span {
        border: 2px solid #000;
        padding: 10px 30px;
        display: block;
    }

    .quiz ul li label input:checked + span {
        font-weight: bold;
        background-color: #eee;
    }

</style>

{#if completed}
	<h1>Quiz completed ({result}/{selectedQuizzes.length})</h1>
	{#each answers as answer}
		<h2>{@html answer.quiz.title}</h2>
		{#each answer.choices as choice}
			<p>
				{choice}
				{#if !answer.correct}
					--- <b>wrong</b>{/if}
			</p>
		{/each}
		<h3>Explanation</h3>
		<div>
			{#each answer.quiz.comment as comment}
				{@html comment}
			{/each}
		</div>
	{/each}
	<button on:click={() => window.location.reload()}>Restart</button>
{/if}

{#if !completed}
	<span>{currentQuizIndex + 1}/{selectedQuizzes.length}</span>
	<div class="quiz">
		<h2>{@html currentQuiz.title}</h2>
		<form on:submit={onChoiceSubmitted}>
			{#each currentQuiz.body as content}
				{@html content}
			{/each}
			<ul>
				{#each currentQuiz.options as option, index (option)}
					<li>
						<label for={option}>
							<input id={option} type={inputType} name="answer" value={option} checked={false} />
							<span>{@html option}</span>
						</label>
					</li>
				{/each}
			</ul>
			<input type="submit" value="Next" />
		</form>
	</div>
{/if}
