<script>
	import '../app.postcss';
	import { currentUser } from '$lib/pocketbase';
</script>

<div class="bg-neutral text-neutral-content">
	<div class="max-w-xl mx-auto navbar">
		<div class="navbar-start">
			<a href="/" class="btn btn-ghost text-xl">PB + SK</a>
		</div>
		<div class="navbar-end">
			<ul class="menu menu-horizontal">
				{#if $currentUser}
					<li><a href="/logout">Logout</a></li>
				{:else}
					<li><a href="/login">Login</a></li>
					<li><a href="/register">Register</a></li>
				{/if}
			</ul>
		</div>
	</div>
</div>

<div class="max-w-xl mx-auto py-8 px-4">
	<slot />
</div>
