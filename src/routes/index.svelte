<script context="module">
    import axios from 'axios'
    export async function preload(page, session) {
        let locations
        await axios.get(`https://rickandmortyapi.com/api/location?page=${2}`)
            .then(res => locations = res.data.results)
        return { locations }
    }
</script>
<script>
    import RandomPlanet from '../components/RandomPlanet.svelte'
    export let locations
</script>
<style>
    .locations {

    }
</style>


<svelte:head>
	<title>Sapper project template</title>
</svelte:head>

<RandomPlanet />
<div class='locations'>
    {#each locations as location}
        <div>
            <label>{location.name}</label>
        </div>
    {/each}
</div>





