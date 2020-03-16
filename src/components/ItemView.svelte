<script>
    export let character
    const { name, status, image, species, gender, location } = character

</script>

<style>
    main{
        border: 1px solid rgb(97, 26, 50);
        background: #1b171987;
        box-shadow: 0 0 6px rgba(255, 0, 0, 0.33);
        padding: 20px;
        margin: 20px;
    }
    .info{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
    }
</style>

{#if character !== {}}
    <main>
        <h2>{name}</h2>
        <img src={image} alt={name}>
        <div class='info'>
            <span>Status: {status}</span>
            <span>Species: {species}</span>
            <span>Gender: {gender}</span>
            <span>Location: {location.name}</span>
        </div>
    </main>
{:else}
    <h1>LOADING.......</h1>
{/if}
