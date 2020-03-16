<script context="module">
    import axios from 'axios'
    export async function preload(page, session) {
        let locations
        await axios.get(`https://rickandmortyapi.com/api/episode?page=${1}`)
            .then(res => locations = res.data.results)
        return { locations }
    }
</script>
<script>
    import RandomPlanet from '../components/RandomPlanet.svelte'
    export let locations
</script>
<style>
    .location {
        border: 1px solid rgb(97, 26, 50);
        background: #1b171987;
        box-shadow: 0 0 6px rgba(255, 0, 0, 0.33);
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: flex-start;
        align-items: flex-start;
        padding: 20px;
        min-width: 50%;
    }
    .location__item{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        margin: 20px;
    }
    .location__item img {
        width: 80px;
        height: auto;
    }
    
</style>


<svelte:head>
	<title>Sapper project template</title>
</svelte:head>

<RandomPlanet />
<div class='location'>
    {#each locations as location}
        <div class='location__item'>
            <img src='https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/cda08c55617997.598bcd54e5d8b.jpg' alt={location.name}>
            <span>{location.episode}</span>
        </div>
    {/each}
</div>





