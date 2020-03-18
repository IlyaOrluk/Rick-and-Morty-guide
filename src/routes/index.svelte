<script context="module">
    import axios from 'axios'
    export async function preload(page, session) {
        let episodes

        await axios.get(`https://rickandmortyapi.com/api/episode?page=${1}`)
            .then(res => episodes = res.data.results)
        let location
        let randomPlanet = Math.floor(Math.random() * 10)
        await axios.get(`https://rickandmortyapi.com/api/location/${randomPlanet}`)
            .then(res => {
                location = res.data
            })

        return { episodes, location }
    }
</script>
<script>
    import RandomPlanet from '../components/RandomPlanet.svelte'
    export let episodes
    export let location
    import { stores } from '@sapper/app'
    const { preloading } = stores()
</script>
<style>
    .episode {
        border: 1px solid rgb(97, 26, 50);
        background: #1b171987;
        box-shadow: 0 0 6px rgba(255, 0, 0, 0.33);
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: flex-start;
        align-items: flex-start;
        padding: 20px;
        margin: 50px;
        min-width: 50%;
    }
    .episode__item{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        margin: 20px;
    }
    .episode__item img {
        width: 160px;
        height: auto;
    }
    
</style>


<svelte:head>
	<title>Rick&Morty | Guide</title>
</svelte:head>

{#if $preloading}
	<img src='https://johnjorgenson.com/wp-content/uploads/2018/05/colorful-loader-gif-transparent.gif' alt=''>
{:else}
    {#if location}
    <RandomPlanet {location}/>
    {/if}
{/if}

<div class='episode'>
    {#each episodes as episode}
        <a href={`/episode/${episode.id}`} class='episode__item'>
            <img src={`episodes/${episode.id}.png`} alt={episode.name}>
            <span>{episode.episode}</span>
        </a>
    {/each}
</div>





