<script context="module">
    import axios from 'axios'
    export async function preload(page, session) {
        const { id } = page.params
        // let episodes

        // await axios.get(`https://rickandmortyapi.com/api/episode?page=${1}`)
        //     .then(res => episodes = res.data.results)
        let location
        await axios.get(`https://rickandmortyapi.com/api/location/${id}`)
            .then(res => {
                location = res.data
            })

        return { location }
    }
</script>
<script>
    import ItemView from '../../components/ItemView.svelte'
    export let location
</script>


<svelte:head>
    <title>{'title'}</title>
</svelte:head>

<style>
    img {
        width: 300px;
    }
</style>

<ItemView>
    <img slot='image' src={`locations/${location.id}.png`} alt={location.name}>
    <h2 slot='name'>{location.name}</h2>
    <label slot='first-label'>Type: {location.type}</label>
    <label slot='second-label'>Dimension: {location.dimension}</label>
</ItemView>