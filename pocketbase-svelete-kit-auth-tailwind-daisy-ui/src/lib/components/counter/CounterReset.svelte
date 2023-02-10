<script>
	import { counter } from '$lib/stores/counter.store';

	function resetCounter() {
		counter.update((count) => --count);
	}
</script>

<button on:click={resetCounter}>♻️ Reset</button>
