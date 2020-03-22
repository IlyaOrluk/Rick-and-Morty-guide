<script>


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
    }

    /* main img {
        width: 200px;
        height: 200px;
    } */
    .info{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        margin: 20px 40px;
    }
</style>

<main>
<slot name='image'></slot>
    <div class='info'>
        <slot name='name'></slot>
        <hr/>
        <slot name='first-label'></slot>
        <slot name='second-label'></slot>
        <slot name='third-label'></slot>
        <slot name='fourth-label'></slot>
    </div>
</main>
