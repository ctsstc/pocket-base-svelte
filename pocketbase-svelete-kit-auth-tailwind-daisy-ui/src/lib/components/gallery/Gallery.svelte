<script>
	export let title = '';
	export let link = '';
</script>

<a href={link}>
	<slot name="image" />
	<span>{title}</span>
</a>

<style>
	a {
		display: flex;
		flex-direction: column;
		gap: 6px;
	}
</style>
