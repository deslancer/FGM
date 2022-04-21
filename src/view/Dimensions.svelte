<script lang="ts">
    import { InputGroup, Input } from 'sveltestrap';
    import { RingWidthService } from "../model/dimensions/ring_width";
    import { RingSizeService } from "../model/dimensions/ring_size";
    import { current_width, current_size } from ".././controller/store";
    let selected_width;
    let selected_second_width;
    let selected_size;
    let selected_second_size;
    export let ring_pair = true;
    const ringWidthService = new RingWidthService();
    const ringSizeService = new RingSizeService();
    const widthArray: Array<object> = ringWidthService.getRingWidthValues();
    const sizesArray: Array<object> = ringSizeService.getRingSizeValues();

    let size_standarts: Array<any> = [
        {id: 'EU', size: 'Ring Size EU'},
        {id: 'UK', size: 'Ring Size UK'},
        {id: 'US', size: 'Ring Size US'},
    ];
    function ringWidth(value, name) {
        ringWidthService.setRingWidth(value, name);
        current_width.update(existing => {
            return value / 5;
        });
    }
    function ringSize(value, name) {
        ringSizeService.setRingSize(value, name);
        current_size.update(existing => {
            return value / 5;
        });
    }
</script>
<div class="row">

    {#if ring_pair}
        <div class="col my-3">Rings Width</div>
    {:else}
        <div class="col my-3">Ring 1 Width</div>
        <div class="col my-3">Ring 2 Width</div>
    {/if}
</div>

<InputGroup>
    <select class="form-select" bind:value={selected_width}
            on:change="{() => ringWidth(selected_width, 'Ring')}">
        {#await widthArray}
            <option>...loading</option>
        {:then width_arr}
            {#each width_arr as width}
                <option value={width.value}>
                    {width.value} mm
                </option>
            {/each}
        {:catch error}
            <option style="color: red">{error.message}</option>
        {/await}
    </select>
    {#if !ring_pair}
    <select class="form-select" bind:value={selected_second_width}
            on:change="{() => ringWidth(selected_second_width, 'Ring2')}">
        {#await widthArray}
            <option>...loading</option>
        {:then width_arr}
            {#each width_arr as width}
                <option value={width.value}>
                    {width.value} mm
                </option>
            {/each}
        {:catch error}
            <option style="color: red">{error.message}</option>
        {/await}
    </select>
    {/if}
</InputGroup>
<p class="mt-3">Ring Thickness</p>
<InputGroup>
    <Input type="select" name="select" id="ring-thickness" disabled>
        <option value="">1.6 mm</option>
    </Input>
</InputGroup>

<!--
<Input id="c1" class="my-3" type="checkbox" bind:checked={enabled_thickness} label="Automatically set the optimal thickness for the selected ring width" />
-->

<div class="divider"></div>
{#if ring_pair}
    <p class="my-3">Rings Size</p>
{:else}
    <p class="my-3">Ring 1 Size</p>
{/if}
<InputGroup>
    <Input type="select" name="select" id="ring-standart-1">
        <option value="">Diameter &#8960;</option>
        {#each size_standarts as {id, size}, i}
            <option value="{id}">{size}</option>
        {/each}
    </Input>

    <select class="form-select" bind:value={selected_size}
            on:change="{() => ringSize(selected_size, 'Ring') }">
        {#await sizesArray}
            <option>...loading</option>
        {:then size_arr}
            {#each size_arr as size}
                <option value={size.value}>
                    {size.value} mm
                </option>
            {/each}
        {:catch error}
            <option style="color: red">{error.message}</option>
        {/await}
    </select>
</InputGroup>
{#if !ring_pair}
<p class="my-2">Ring 2 Size</p>
<InputGroup>
    <Input type="select" name="select" id="ring-standart-1">
        <option value="">Diameter &#8960;</option>
        {#each size_standarts as {id, size}, i}
            <option value="{id}">{size}</option>
        {/each}
    </Input>

    <select class="form-select" bind:value={selected_second_size}
            on:change="{() => ringSize(selected_second_size, 'Ring2') }">
        {#await sizesArray}
            <option>...loading</option>
        {:then size_arr}
            {#each size_arr as size}
                <option value={size.value}>
                    {size.value} mm
                </option>
            {/each}
        {:catch error}
            <option style="color: red">{error.message}</option>
        {/await}
    </select>
</InputGroup>
{/if}
