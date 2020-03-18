<script context="module">
    import axios from 'axios'
export async function preload({ params, query }) {
        const { id } = params
        let episode = {}
        await axios.get(`https://rickandmortyapi.com/api/episode/${id}`)
            .then(res => episode = res.data)

        // // this.error(404, 'Персонаж не надйен')
        // const locations = [
        //         {
        //             name: character.origin.name,
        //             img: 'https://vignette.wikia.nocookie.net/rickandmorty/images/c/c4/Screenshot_2015-10-05_at_1.19.14_PM.png/revision/latest?cb=20151005172134'
        //         },
        //         {
        //             name: character.location.name,
        //             img: 'https://vignette.wikia.nocookie.net/rickandmorty/images/c/c4/Screenshot_2015-10-05_at_1.19.14_PM.png/revision/latest?cb=20151005172134'
        //         }
        //     ]
        // let relatedEpisodes = []
        // let episodes = []
        // await character.episode.forEach(episode => {
        //     relatedEpisodes = [...relatedEpisodes, episode.match(/[0-9]*[0-9]/)[0]]
        // });

        // await axios.get(`https://rickandmortyapi.com/api/episode/${relatedEpisodes}`)
        //     .then(res =>{
        //         if(res.data.length){
        //             episodes = res.data.map(episode => {
        //                 return {
        //                     name: episode.name,
        //                     img: `episodes/${episode.id}.png`
        //                 }
        //             })
        //         } else {
        //             episodes = [{
        //                 name: res.data.name,
        //                 img: `episodes/${res.data.id}.png`
        //             }]
        //         }
        //     })

        return { episode }
	}

</script>
<script>
    import ItemView from '../../components/ItemView.svelte'
    export let episode
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

