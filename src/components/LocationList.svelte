<script>
    import Item from './Item.svelte'

    export let locations
</script>

<style>
    .locations {
        width: 100%;
        display: flex;
        justify-content: space-around;
        flex-direction: row;
        flex-wrap: wrap;
    }
	a {
        text-decoration: none;
	}
    .location__img {
        width: 200px;
        height: 200px;
        object-fit: cover;
    }
    h2 {
       font-size: 15px;
    }

    .location {
       	width: 200px;
        height: 240px;
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


<div class="locations">
	{#each locations as location}
        <a rel=prefetch href={`location/${location.id}`}>
            <div class="location">
                <Item>
                    <img slot='img' class='location__img' src={`locations/${location.id}.png`} alt={location.titnamele}>
                    <h2 slot="name">{location.name}</h2>
                </Item>
            </div>
        </a>
	{:else}
		<p>loading...</p>
	{/each}
</div>