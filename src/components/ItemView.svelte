<script>
    export let character
    const { name, status, image } = $character

    console.log('render', $character)
</script>

<style>

</style>

<figure>
    <h2>{name}</h2>
    <span>{status}</span>
    <img src={image} alt={name}>
</figure>