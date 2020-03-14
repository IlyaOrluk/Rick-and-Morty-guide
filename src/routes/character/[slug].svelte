<script context="module">
    import axios from 'axios'
    import MainLayot from '../../layots/mainLayot.svelte'

	export async function preload(page, session) {
		const { slug } = page.params;

		const res = await this.fetch(`https://rickandmortyapi.com/api/character/${slug}`);
		const character = await res.json();

		return { character };
	}
</script>

<script>
	export let character;
</script>

<MainLayot>
    <h1>Character</h1>
    <h1>{character.name}</h1>
    <h2>STATUS: {character.status}</h2>
    <img src={character.image} alt={character.name}>
</MainLayot>
