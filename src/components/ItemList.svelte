<script>
	import axios from 'axios'
    import { onMount } from 'svelte'
    import Item from './Item.svelte'
    import { characters } from '../store.js'
    const fetchItems = (url) => {
        axios.get(url)
            .then((res) => {
                characters.set(res.data.results)
            })
    }
	onMount(() => {
        fetchItems(`https://rickandmortyapi.com/api/character/`)

        setTimeout(fetchItems(`https://rickandmortyapi.com/api/character/?page=2`), 2000)
    })
</script>

<!-- <main>
<form on:submit|preventDefault={()=>{}}></form>
</main> -->

<style>
	.characters {
		width: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
	}
    .character__img {
        width: 150px;
        height: 150px;
    }
</style>

<h1>All characters</h1>

<div class="characters">
	{#each $characters as character}
        <Item>
            <img slot='img' class='character__img' src={character.image} alt={character.titnamele}>
            <h2 slot="name">{character.name}</h2>
            <span slot="status">Status: {character.status}</span>
            <span slot="species">Species:{character.species}</span>
            <span slot="gender">Gender: {character.gender}</span>
        </Item>
	{:else}
		<!-- this block renders when characters.length === 0 -->
		<p>loading...</p>
	{/each}
</div>