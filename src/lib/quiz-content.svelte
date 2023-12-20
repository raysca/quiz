<script lang="ts">
    import hljs from 'highlight.js';
    import { afterUpdate } from 'svelte';
    export let content: string[];

    afterUpdate(() => {
		hljs.highlightAll();
	});
</script>

<p>
    {#each content as c}
        {@html c}
    {/each}
</p>