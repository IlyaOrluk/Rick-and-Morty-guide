<script>
  import Item from "./Item.svelte";

  export let characters;
</script>

<style>
  .characters {
    width: 100%;
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    flex-wrap: wrap;
  }
  a {
    text-decoration: none;
  }
  .character__img {
    width: 200px;
    height: 200px;
  }
  h2 {
    font-size: 15px;
  }

  .character {
    width: 200px;
    height: 230px;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin: 10px;
    overflow: hidden;
    border-radius: 50px 0;
    background: #5c756c;
    box-shadow: -15px -15px 63px #7aa74d, 15px 15px 63px #a4e168;
  }
</style>

<div class="characters">
  {#each characters as character}
    <a rel="prefetch" href={`character/${character.id}`}>
      <div class="character">
        <Item>
          <img
            slot="img"
            class="character__img"
            src={character.image}
            alt={character.titnamele} />
          <h2 slot="name">{character.name}</h2>
        </Item>
      </div>
    </a>
  {:else}
    <p>loading...</p>
  {/each}
</div>
