<script context="module">
    import axios from 'axios'
    export async function preload(page, session) {
        let episodes, info, currentPage = Number(page.query.page)
        await axios.get(`https://rickandmortyapi.com/api/episode?page=${currentPage}`)
            .then(res => {
                info = res.data.info
                episodes = res.data.results
                console.log(res.data.results)
                })
        return { episodes, info, currentPage }
    }
</script>
<script>
    import EpisodeList from '../../components/EpisodeList.svelte'
    import { stores } from '@sapper/app'
    const { preloading } = stores()
    export let episodes, info, currentPage

</script>

<svelte:head>
	<title>Rick&Morty | Episodes</title>
</svelte:head>



<div class='pagination'>
    {#if info.prev}
    <a href={`/episode?page=${currentPage-1}`}>prev</a>
    {/if}
    <a href={`/episode?page=${currentPage}`}>{currentPage}</a>
    {#if info.next}
    <a href={`/episode?page=${currentPage+1}`}>next</a>
    {/if}
</div>
{#if $preloading}
	<img src='https://johnjorgenson.com/wp-content/uploads/2018/05/colorful-loader-gif-transparent.gif' alt=''>
{:else}
    <EpisodeList {episodes}/>
{/if}
