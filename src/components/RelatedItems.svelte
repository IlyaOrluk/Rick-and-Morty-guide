<script>
  export let items;
  export let title;
  export let link;
</script>

<style>
  main {
    width: 100%;
    border-radius: 50px 0;
    background: #5c756c;
    box-shadow: -15px -15px 63px #7aa74d, 15px 15px 63px #a4e168;
    display: flex;
    margin: 3vh;
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

<main>
  <label>{title}</label>
  <hr />
  <div class="list">
    {#each items as item}
      <a href={link + item.id} class="list__item">
        <img src={item.image} alt={item.name} />
        <h4>{item.name}</h4>
      </a>
    {:else}
      <label>NOT FOUND</label>
    {/each}
  </div>
</main>
