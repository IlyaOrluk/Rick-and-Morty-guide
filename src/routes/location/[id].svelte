<script context="module">
    import axios from 'axios'
    export async function preload(page, session) {
        const { id } = page.params
        let location
        await axios.get(`https://rickandmortyapi.com/api/location/${id}`)
            .then(res => {
                location = res.data
            })

        let relatedCharacters = []
        await location.residents.forEach(character => {
            relatedCharacters = [...relatedCharacters, character.match(/[0-9]*[0-9]/)[0]]
        });
        let characters = []
        await axios.get(`https://rickandmortyapi.com/api/character/${relatedCharacters}`)
            .then(res => characters = res.data)

        return { location, characters }
    }
</script>
<script>
    import ItemView from '../../components/ItemView.svelte'
    import RelatedItems from '../../components/RelatedItems.svelte'
    export let location
    export let characters
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
<RelatedItems items={characters} title={'Related Characters'} link={`/character/`}/>
