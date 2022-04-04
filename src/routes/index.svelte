<script lang="ts">
    import {onMount} from 'svelte';
    import {createScene} from "../model/scene";

    let el: any;
    onMount(() => {
        createScene(el)
    });
</script>

<canvas bind:this={el}></canvas>



