<script lang="ts">
	import hljs from 'highlight.js';
	import { afterUpdate } from 'svelte';
	afterUpdate(() => {
		hljs.highlightAll();
	});
</script>

<slot />
