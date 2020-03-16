<script>
    import { onMount } from 'svelte'
    import { fly } from 'svelte/transition'

    let show = false
    onMount(() =>{
        show = true
    })
</script>
<style>
    div {
        width: 100%;
    }
</style>


{#if show}
    <div in:fly={{x: 0, duration: 600}}>
        <slot></slot>
    </div>
{/if}