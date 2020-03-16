<script context="module">
    import axios from 'axios'
    export async function preload(page, session) {
        console.log(page.query.page)
        let characters
        await axios.get(`https://rickandmortyapi.com/api/character?page=${page.query.page}`)
            .then(res => characters = res.data.results)
        return { characters }
    }
</script>
<script>
    import ItemList from '../../components/ItemList.svelte'
    import { stores } from '@sapper/app'
    const { preloading } = stores()
    export let characters
    
</script>

<svelte:head>
	<title>Character</title>
</svelte:head>



<div class='pagination'>
    <a href='/character?page=1'>1</a>
    <a href='/character?page=2'>2</a>
    <a href='/character?page=3'>3</a>
</div>
{#if $preloading}
	<img src='https://johnjorgenson.com/wp-content/uploads/2018/05/colorful-loader-gif-transparent.gif' alt=''>
{:else}
    <ItemList {characters}/>
{/if}
