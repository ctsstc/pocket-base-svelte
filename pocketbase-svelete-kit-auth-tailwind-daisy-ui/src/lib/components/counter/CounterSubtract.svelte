<script>
	import { counter } from '$lib/stores/counter.store';
	import { Minus } from '@steeze-ui/heroicons';
	import { Icon } from '@steeze-ui/svelte-icon';

	function subtractCounter() {
		counter.update((count) => --count);
	}
</script>

<button on:click={subtractCounter}>
	<Icon src={Minus} size="24px" />
</button>
