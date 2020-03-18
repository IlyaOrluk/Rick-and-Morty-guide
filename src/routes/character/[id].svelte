<script context="module">
    import axios from 'axios'
	export async function preload({ params, query }) {
        const { id } = params
        let character = {}
        await axios.get(`https://rickandmortyapi.com/api/character/${id}`)
            .then(res => character = res.data)

        // this.error(404, 'Персонаж не надйен')
        const locations = [
                {
                    name: character.origin.name,
                    img: 'https://vignette.wikia.nocookie.net/rickandmorty/images/c/c4/Screenshot_2015-10-05_at_1.19.14_PM.png/revision/latest?cb=20151005172134'
                },
                {
                    name: character.location.name,
                    img: 'https://vignette.wikia.nocookie.net/rickandmorty/images/c/c4/Screenshot_2015-10-05_at_1.19.14_PM.png/revision/latest?cb=20151005172134'
                }
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
                            name: episode.name,
                            img: `episodes/${episode.id}.png`
                        }
                    })
                } else {
                    episodes = [{
                        name: res.data.name,
                        img: `episodes/${res.data.id}.png`
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
    <ItemView {character}/>
    <div class='relateds'>
        {#if episodes !== []}
            <RelatedItems items={episodes} />
        {/if}
        <RelatedItems items={locations} />
    </div>
</main>


<style>
    main {
        display: flex;
        flex-direction: column;
        margin: 30px;
        width: 100%;
    }
    .relateds {
        display: flex;
        justify-content: space-between;
    }
</style>