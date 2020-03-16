<script context="module">
    import axios from 'axios'
	export async function preload({ params, query }) {
        const { id } = params
        let character = {}
        await axios.get(`https://rickandmortyapi.com/api/character/${id}`)
            .then(res => character = res.data)
        return { character }
		this.error(404, 'Персонаж не надйен')
	}
</script>
<script>
    import ItemView from '../../components/ItemView.svelte'
    import TransitionWrapper from '../../components/TransitionWrapper.svelte'

    export let character
</script>


<svelte:head>
    <title>{'character'}</title>
</svelte:head>

<ItemView {character}/>


