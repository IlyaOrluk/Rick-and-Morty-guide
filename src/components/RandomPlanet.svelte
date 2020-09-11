<script>
  export let location;
  const { name, type, dimension } = location;
</script>

<style>
  main {
    margin: 7vh;
    padding: 30px;
    overflow: hidden;
    border-radius: 50px 0;
    background: #5c756c;
    box-shadow: -15px -15px 63px #7aa74d, 15px 15px 63px #a4e168;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
  }
  .info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 30px 20px;
  }
  img {
    width: 200px;
    height: 200px;
  }
</style>

<main>
  <img
    src="https://vignette.wikia.nocookie.net/rickandmorty/images/7/74/Screenshot_2015-10-05_at_1.24.48_PM.png/revision/latest?cb=20151005172657"
    alt="" />
  <div class="info">
    <h3>{name}</h3>
    <label>TYPE: {type}</label>
    <label>dimension: {dimension}</label>
  </div>
</main>
