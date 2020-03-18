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
    :global(body) {
        background: url('https://i.pinimg.com/originals/34/d1/8c/34d18c25d8bc178147efa8a3f5dbcbf8.jpg') no-repeat center / cover;
        color: white;
    }
	:global(hr) {
        border-color: rgb(97, 26, 50);
        width: 100%;
    }
</style>

<Nav />
<main class='container'>
    <slot></slot>
</main>