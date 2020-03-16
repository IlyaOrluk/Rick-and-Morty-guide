<script context="module">
    import axios from 'axios'
    export async function preload(page, session) {
        let characters, info, currentPage = Number(page.query.page)
        await axios.get(`https://rickandmortyapi.com/api/character?page=${currentPage}`)
            .then(res => {
                info = res.data.info
                characters = res.data.results
                })
        return { characters, info, currentPage }
    }
</script>
<script>
    import ItemList from '../../components/ItemList.svelte'
    import { stores } from '@sapper/app'
    const { preloading } = stores()
    export let characters, info, currentPage

    console.log(info, currentPage)
</script>

<svelte:head>
	<title>Character</title>
</svelte:head>



<div class='pagination'>
    {#if info.prev}
    <a href={`/character?page=${currentPage-1}`}>prev</a>
    {/if}
    <a href={`/character?page=${currentPage}`}>{currentPage}</a>
    {#if info.next}
    <a href={`/character?page=${currentPage+1}`}>next</a>
    {/if}
</div>
{#if $preloading}
	<img src='https://johnjorgenson.com/wp-content/uploads/2018/05/colorful-loader-gif-transparent.gif' alt=''>
{:else}
    <ItemList {characters}/>
{/if}
