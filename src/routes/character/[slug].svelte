<script context="module">
    import axios from 'axios'
    import ItemView from '../../components/ItemView.svelte'
    import { character, fetchCharacter } from '../../store.js'

	export async function preload(page, session) {
        fetchCharacter()
        console.log('get init', character)
    }
</script>




<svelte:head>
    <title>{'character'}</title>
</svelte:head>


<ItemView {character}/>

