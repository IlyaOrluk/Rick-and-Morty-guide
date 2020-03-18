<script context="module">
    import axios from 'axios'
    export async function preload(page, session) {
        let locations, info, currentPage = Number(page.query.page)
        await axios.get(`https://rickandmortyapi.com/api/location?page=${currentPage}`)
            .then(res => {
                info = res.data.info
                locations = res.data.results
                console.log(res.data.results)
                })
        return { locations, info, currentPage }
    }
</script>
<script>
    import LocationList from '../../components/LocationList.svelte'
    import { stores } from '@sapper/app'
    const { preloading } = stores()
    export let locations, info, currentPage

</script>

<svelte:head>
	<title>Rick&Morty | Locations</title>
</svelte:head>



<div class='pagination'>
    {#if info.prev}
    <a href={`/location?page=${currentPage-1}`}>prev</a>
    {/if}
    <a href={`/location?page=${currentPage}`}>{currentPage}</a>
    {#if info.next}
    <a href={`/location?page=${currentPage+1}`}>next</a>
    {/if}
</div>
{#if $preloading}
	<img src='https://johnjorgenson.com/wp-content/uploads/2018/05/colorful-loader-gif-transparent.gif' alt=''>
{:else}
    <LocationList {locations}/>
{/if}
