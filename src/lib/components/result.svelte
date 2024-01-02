<script lang="ts">
	import Answered from '$lib/components/answered.svelte';
	export let answers: Record<string, any>[];
	export let total: number;

	const answersByTopic = answers.reduce((acc: Record<string, any>, answer: any) => {
		const topic = answer.quiz.topic?.title;
		if (!acc[topic]) {
			acc[topic] = [];
		}
		acc[topic].push(answer);
		return acc;
	}, {});

	const resultByTopic: Record<string, any> = Object.keys(answersByTopic).reduce((acc, topic) => {
		const total = answersByTopic[topic].length;
		const correct = answersByTopic[topic].filter((a) => a.correct).length;
		const percentage = Math.round((correct / total) * 100);
		const status = percentage > 50 ? 'passed' : 'failed';
		const progress = percentage > 50 ? 'text-success' : 'text-error';
		return Object.assign(acc, {
			[topic]: {
				total,
				correct,
				percentage,
				status,
				progress
			}
		});
	}, {});

</script>

<div class="card w-auto bg-base-100 shadow-xl">
	<div class="card-body">
		<div class="card-title">
			<span>{total} Total Questions</span>
		</div>
		<div class="flex flex-col space-y-4">
			<table class="table table-zebra">
				<thead>
					<tr>
						<th>Topic</th>
						<th>Total</th>
						<th>Correct</th>
					</tr>
				</thead>
				<tbody>
					{#each Object.keys(answersByTopic) as topic}
						<tr>
							<td class={resultByTopic[topic].progress}>{topic}</td>
							<td>{resultByTopic[topic].total}</td>
							<td>{resultByTopic[topic].correct}</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
		<div class="card-actions justify-end">
			<button class="btn btn-primary" on:click={() => window.location.reload()}>Restart Test</button>
		</div>
	</div>
</div>

<div class="mt-8">
	<ul class="flex flex-col space-y-8">
		{#each Object.keys(answersByTopic) as topic}
			<li class="flex flex-col space-y-4">
				<div class="grid grid-flow-row gap-12">
					{#each answersByTopic[topic] as answered}
						<Answered answer={answered} />
					{/each}
				</div>
			</li>
		{/each}
	</ul>
</div>
