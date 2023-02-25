<script>
	export let title = '';
</script>

<div class="photo-section">
	<strong>{title}</strong>

	<div class="photo-row">
		<slot />
	</div>
</div>

<style>
	#photo-galleries .photo-section .photo-row {
		display: flex;
		gap: 12px;
		align-items: flex-end;
		flex-wrap: wrap;
	}
</style>
