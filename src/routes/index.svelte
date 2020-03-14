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

	h2{
        color: grey;
    }
</style>


<svelte:head>
	<title>Sapper project template</title>
</svelte:head>

<Nav />
<main class='container'>
<img src='https://media.cdn.adultswim.com/uploads/20191004/191041327281-r&m4_Hero_000000.png' alt='img'>
    <h2>This is awesome application on awesome framework!</h2>
</main>



