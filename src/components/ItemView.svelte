<script>
    export let character
    const { name, status, image, species, gender, location } = character

</script>

<style>
    main{
        border: 1px solid rgb(97, 26, 50);
        background: #1b171987;
        box-shadow: 0 0 6px rgba(255, 0, 0, 0.33);
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        margin: 10px 0;
    }

    main img {
        width: 200px;
        height: 200px;
    }
    .info{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        margin: 20px 40px;
    }
    h2 {

    }
</style>

{#if character !== {}}
    <main>
        <img src={image} alt={name}>
        <div class='info'>
            <h2>{name}</h2>
            <hr/>
            <span>Status: {status}</span>
            <span>Species: {species}</span>
            <span>Gender: {gender}</span>
        </div>
    </main>
{:else}
    <h1>LOADING.......</h1>
{/if}
