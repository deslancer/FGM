<script lang="ts">
    import { InputGroup, Input } from 'sveltestrap';
    let enabled_thickness = false;
    let ring_width:Array<any> = [
        { id: '3', size: '3.0 mm' },
        { id: '3.5', size: '3.5 mm' },
        { id: '4', size: '4.0 mm' },
        { id: '4.5', size: '4.5 mm' },
        { id: '5', size: '5.0 mm' }
    ];
    let ring_thickness:Array<any> = [
        { id: '3', size: '3.0 mm' },
        { id: '3.5', size: '3.5 mm' },
        { id: '4', size: '4.0 mm' },
        { id: '4.5', size: '4.5 mm' },
        { id: '5', size: '5.0 mm' }
    ];
    let size_standarts:Array<any> = [
        { id: 'EU', size: 'Ring Size EU' },
        { id: 'UK', size: 'Ring Size UK' },
        { id: 'US', size: 'Ring Size US' },
    ];
</script>
<p class="mt-3">Ring Width</p>
<InputGroup>
    <Input type="select" name="select" id="ring-width">
        <option value="">2.0 mm</option>
        {#each ring_width as { id, size }, i}
            <option value="{id}">{size}</option>
        {/each}
    </Input>
</InputGroup>
<p class="mt-3">Ring Thickness</p>
<InputGroup>
    <Input type="select" name="select" id="ring-thickness" disabled={enabled_thickness}>
        <option value="">2.0 mm</option>
        {#each ring_thickness as { id, size }, i}
            <option value="{id}">{size}</option>
        {/each}
    </Input>
</InputGroup>

<Input id="c1" class="my-3" type="checkbox" bind:checked={enabled_thickness} label="Automatically set the optimal thickness for the selected ring width" />

<div class="divider"></div>
<p class="mt-3">Ring 1</p>
<InputGroup>
    <Input type="select" name="select" id="ring-standart-1">
        <option value="">Ring Size EU</option>
        {#each size_standarts as { id, size }, i}
            <option value="{id}">{size}</option>
        {/each}
    </Input>

    <Input type="select" name="select" id="ring-size-1">
        <option value="">45</option>
        <option value="">45.5</option>
        <option value="">50</option>
    </Input>
</InputGroup>

<p >Ring 2</p>
<InputGroup >
    <Input type="select" name="select" id="ring-standart-2">
        <option value="">Ring Size EU</option>
        {#each size_standarts as { id, size }, i}
            <option value="{id}">{size}</option>
        {/each}
    </Input>

    <Input type="select" name="select" id="ring-size-2">
        <option value="">45</option>
        <option value="">45.5</option>
        <option value="">50</option>
    </Input>
</InputGroup>
