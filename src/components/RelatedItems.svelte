<script>
    export let items
</script>


<div class='list'>
        {#each items as item}
            <div class='list__item'>
                <img src={item.img} alt={item.name}>
                <h4>{item.name}</h4>
            </div>
        {:else}
            <label>NOT FOUND</label>
        {/each}
</div>


<style>
    .list {
        width: 49.5%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        border: 1px solid rgb(97, 26, 50);
        background: #1b171987;
        box-shadow: 0 0 6px rgba(255, 0, 0, 0.33);
        height: 20vh;
        overflow: auto;
    }

    .list__item img {
        width: 70px;
        height: 70px;
        object-fit: cover;
        margin: 5px 0;
        border-radius: 50%;
    }
    .list__item {
        width: 100px;
        height: 130px;
        margin: 15px;
        font-size: 12px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        text-align: center;
    }
</style>