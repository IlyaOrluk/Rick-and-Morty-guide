<script context="module">
    import axios from 'axios'
export async function preload({ params, query }) {
        const { id } = params
        let episode = {}
        await axios.get(`https://rickandmortyapi.com/api/episode/${id}`)
            .then(res => episode = res.data)

        let relatedCharacters = []
        await episode.characters.forEach(character => {
            relatedCharacters = [...relatedCharacters, character.match(/[0-9]*[0-9]/)[0]]
        });
        let characters = []
        await axios.get(`https://rickandmortyapi.com/api/character/${relatedCharacters}`)
            .then(res => characters = res.data)

        return { episode, characters }
	}

</script>
<script>
    import ItemView from '../../components/ItemView.svelte'
    import RelatedItems from '../../components/RelatedItems.svelte'

    export let episode
    export let characters
</script>


<svelte:head>
    <title>{'title'}</title>
</svelte:head>


<ItemView>
    <img slot='image' src={`episodes/${episode.id}.png`} alt={episode.name}>
    <h2 slot='name'>#{episode.id} - {episode.name}</h2>
    <label slot='first-label'>Episode: {episode.episode}</label>
    <label slot='second-label'>Air Date: {episode.air_date}</label>
</ItemView>
<RelatedItems items={characters} title={'Related Characters'} link={`/character/`}/>

