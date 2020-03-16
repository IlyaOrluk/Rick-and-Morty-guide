<script context="module">
    import axios from 'axios'
    export async function preload(page, session) {
        let characters
        await axios.get(`https://rickandmortyapi.com/api/character`)
            .then(res => characters = res.data.results)
        return { characters }
    }
</script>
<script>
    import ItemList from '../../components/ItemList.svelte'
    export let characters
</script>

<svelte:head>
	<title>Character</title>
</svelte:head>



<ItemList {characters}/>

