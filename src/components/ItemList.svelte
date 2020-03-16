<script>
    import { onMount } from 'svelte'
    import Item from './Item.svelte'

    export let characters
</script>

<!-- <main>
<form on:submit|preventDefault={()=>{}}></form>
</main> -->

<style>
    .characters {
        width: 100%;
    }
	a {
		width: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        text-decoration: none;
	}
    .character__img {
        width: 150px;
        height: 150px;
    }
</style>

<h1>All characters</h1>

<div class="characters">
	{#each characters as character}
    <a href={`character/${character.id}`}>
        <Item>
            <img slot='img' class='character__img' src={character.image} alt={character.titnamele}>
            <h2 slot="name">{character.name}</h2>
            <span slot="status">Status: {character.status}</span>
            <span slot="species">Species:{character.species}</span>
            <span slot="gender">Gender: {character.gender}</span>
        </Item>
    </a>
	{:else}
		<p>loading...</p>
	{/each}
</div>