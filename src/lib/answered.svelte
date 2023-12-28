<script lang="ts">
	import type { Answered } from "$lib/quiz";
    import QuizContent from "$lib/quiz-content.svelte";

	export let answer: Answered;
	const { quiz, choices, correct } = answer;

	const choiceType = quiz.answers.length > 1 ? 'checkbox' : 'radio';
	const choiceClass = correct ? `${choiceType}-success` : `${choiceType}-error`;
</script>

<div class="grid space-y-4">
    <h2 class="font-semibold">{@html quiz.title}</h2>
    <QuizContent content={quiz.body} />
    <ul class="flex flex-col space-y-4">
        {#each quiz.options as option, index (option)}
            <li>
                <label for={option} class="label cursor-pointer justify-start space-x-4 border px-4 border-base-300">
                    <input
                        id={option}
                        type={choiceType}
                        class={`${choiceType} ${choiceClass}`}
                        value={option}
                        disabled
                        checked={choices.includes(option)}
                    />
                    <div class="flex w-full justify-between">
                        <span>{@html option}</span>
                        {#if choices.includes(option) && quiz.answers.includes(option)}
                            <span class="badge badge-success">Correct</span>
                        {:else if quiz.answers.includes(option)}
                            <span class="badge badge-success">Correct</span>
                        {/if}
                    </div>
                   
                </label>
            </li>
        {/each}
    </ul>

    {#if quiz.comment.length > 0 } 
        <details>
            <summary>View Explanation</summary>
            {#each quiz.comment as content}
                {@html content}
            {/each}
        </details>
    {/if}

</div>
