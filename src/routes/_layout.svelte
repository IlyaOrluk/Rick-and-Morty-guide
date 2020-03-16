<script>
    import Nav from '../components/Nav.svelte'
</script>

<style>
	:global(.container) {
		margin: 0 auto;
		max-width: 75%;
		min-width: 300px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
</style>

<Nav />
<main class='container'>
    <slot></slot>
</main>