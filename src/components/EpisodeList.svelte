<script>
    import Item from './Item.svelte'

    export let episodes
</script>

<style>
    .episodes {
        width: 100%;
        display: flex;
        justify-content: space-around;
        flex-direction: row;
        flex-wrap: wrap;
    }
	a {
        text-decoration: none;
	}
    .episode__img {
        width: 300px;
        height: auto;
    }
    h2 {
       font-size: 15px;
    }

    .episode {
       	width: 300px;
        height: 230px;
		margin: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        margin: 10px;
        border: 1px solid rgb(97, 26, 50);
        background: #1b171987;
        box-shadow: 0 0 6px rgba(255, 0, 0, 0.33);
    }
</style>


<div class="episodes">
	{#each episodes as episode}
        <a rel=prefetch href={`episode/${episode.id}`}>
            <div class="episode">
                <Item>
                    <img slot='img' class='episode__img' src={`episodes/${episode.id}.png`} alt={episode.titnamele}>
                    <label slot='name'>{episode.episode}</label>
                    <h2 slot="name">#{episode.id} - {episode.name}</h2>
                </Item>
            </div>
        </a>
	{:else}
		<p>loading...</p>
	{/each}
</div>