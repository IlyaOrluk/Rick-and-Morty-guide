<script>
    export let items
    export let title
    export let link
</script>

<main>
    <label>{title}</label>
    <hr/>
    <div class='list'>
            {#each items as item}
                <a href={link+item.id} class='list__item'>
                    <img src={item.image} alt={item.name}>
                    <h4>{item.name}</h4>
                </a>
            {:else}
                <label>NOT FOUND</label>
            {/each}
    </div>
</main>



<style>
    main {
        width: 100%;
        border: 1px solid rgb(97, 26, 50);
        background: #1b171987;
        box-shadow: 0 0 6px rgba(255, 0, 0, 0.33);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
    }
    label {
        margin: 10px 20px;
        font-size: 18px;
        font-weight: 400;
    }
    .list {
        width: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
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