<script context="module">
    import ItemList from '../../components/ItemList.svelte'
    import axios from 'axios'
    import { characters, fetchCharacters } from '../../store.js'

    export async function preload(page, session) {
        fetchCharacters('https://rickandmortyapi.com/api/character/')
    }
</script>

<svelte:head>
	<title>Character</title>
</svelte:head>



    <ItemList {characters}/>

