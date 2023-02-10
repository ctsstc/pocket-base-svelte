<script>
	import { counter } from '$lib/stores/counter.store';
	import { Icon } from '@steeze-ui/svelte-icon';
	import { Plus } from '@steeze-ui/heroicons';

	function addCounter() {
		counter.update((count) => ++count);
	}
</script>

<button on:click={addCounter}>
	<Icon src={Plus} theme="solid" size="24px" />
</button>
