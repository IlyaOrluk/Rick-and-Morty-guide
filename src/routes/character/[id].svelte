<script context="module">
    import axios from 'axios'
	export async function preload({ params, query }) {
        const { id } = params
        let character = {}
        await axios.get(`https://rickandmortyapi.com/api/character/${id}`)
            .then(res => character = res.data)

        // this.error(404, 'Персонаж не надйен')
        const locations = [
                character.origin ? {
                    id: 1,
                    name: character.origin.name,
                    image: 'https://vignette.wikia.nocookie.net/rickandmorty/images/c/c4/Screenshot_2015-10-05_at_1.19.14_PM.png/revision/latest?cb=20151005172134'
                } : null,
                character.location ? {
                    id: 2,
                    name: character.location.name,
                    image: 'https://vignette.wikia.nocookie.net/rickandmorty/images/c/c4/Screenshot_2015-10-05_at_1.19.14_PM.png/revision/latest?cb=20151005172134'
                } : null
            ]
        let relatedEpisodes = []
        let episodes = []
        await character.episode.forEach(episode => {
            relatedEpisodes = [...relatedEpisodes, episode.match(/[0-9]*[0-9]/)[0]]
        });

        await axios.get(`https://rickandmortyapi.com/api/episode/${relatedEpisodes}`)
            .then(res =>{
                if(res.data.length){
                    episodes = res.data.map(episode => {
                        return {
                            id: episode.id,
                            name: episode.name,
                            image: `episodes/${episode.id}.png`
                        }
                    })
                } else {
                    episodes = [{
                        id: res.data.id,
                        name: res.data.name,
                        image: `episodes/${res.data.id}.png`
                    }]
                }
            })

        return { character, episodes, locations }
	}
</script>
<script>
    import ItemView from '../../components/ItemView.svelte'
    import TransitionWrapper from '../../components/TransitionWrapper.svelte'
    import RelatedItems from '../../components/RelatedItems.svelte'

    export let character
    export let episodes
    export let locations

</script>


<svelte:head>
    <title>{'character'}</title>
</svelte:head>

<main>

        <ItemView>
            <img slot='image' src={character.image} alt={character.name}>
            <h2 slot='name'>{character.name}</h2>
            <label slot='first-label'>Status: {character.status}</label>
            <label slot='second-label'>Species: {character.species}</label>
            <label slot='third-label'>Gender: {character.gender}</label>
            <label slot='fourth-label'>{character.type ? 'Type: ' : ''}{character.type}</label>
        </ItemView>
        <RelatedItems items={locations} title={'Related Locations'} link={`/location/`}/>
    {#if episodes !== []}
        <RelatedItems items={episodes} title={'Related Episodes'} link={`/episode/`}/>
    {/if}
</main>


<style>
    main {
        display: flex;
        flex-direction: column;
        margin: 30px;
        width: 60%;
        min-width: 570px;
    }
    img {
        width: 200px;
        height: 200px;
    }
    /* .relateds {
        display: flex;
        justify-content: space-between;
    } */
</style>