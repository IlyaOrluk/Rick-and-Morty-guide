<script>

</script>

<style>
  main {
    border-radius: 50px 0;
    background: #5c756c;
    box-shadow: -15px -15px 63px #7aa74d, 15px 15px 63px #a4e168;
    margin: 5vh;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    overflow: hidden;
  }

  /* main img {
        width: 200px;
        height: 200px;
    } */
  .info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin: 20px 40px;
  }
</style>

<main>
  <slot name="image" />
  <div class="info">
    <slot name="name" />
    <hr />
    <slot name="first-label" />
    <slot name="second-label" />
    <slot name="third-label" />
    <slot name="fourth-label" />
  </div>
</main>
