<script lang="ts">
    import Quiz from '$lib/quiz.svelte'
    
	export let data;
    export let quizAmount: number;

</script>

<h1>The quiz page</h1>

{#if !quizAmount}
    <h1>Choose quiz amount</h1>
    <div class="quiz-amount">
        {#each [5, 10, 15] as amount}
            <button on:click={() => quizAmount = amount}>{amount}</button>
        {/each}
    </div>
{/if}

{#if quizAmount}
    <Quiz total={quizAmount} quizzes={data.quizzes} />
{/if}
