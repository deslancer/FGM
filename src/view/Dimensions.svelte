<script lang="ts">
    import { InputGroup, Input } from 'sveltestrap';
</script>
<p class="mt-3">Ring Width</p>
<InputGroup>
    <Input type="select" name="select" id="ring-width">
        <option value="">3.0 mm</option>
        <option value="">3.5 mm</option>
        <option value="">4.0 mm</option>
    </Input>
</InputGroup>
<p class="mt-3">Ring Thickness</p>
<InputGroup>
    <Input type="select" name="select" id="ring-thickness">
        <option value="">3.0 mm</option>
        <option value="">3.5 mm</option>
        <option value="">4.0 mm</option>
    </Input>
</InputGroup>

<Input id="c1" class="my-3" type="checkbox" label="Automatically set the optimal thickness for the selected ring width" />

<div class="divider"></div>
<p class="mt-3">Ring 1</p>
<InputGroup>
    <Input type="select" name="select" id="ring-standart-1">
        <option value="">Ring Size EU</option>
        <option value="">Ring Size UK</option>
        <option value="">Ring Size US</option>
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
        <option value="">Ring Size UK</option>
        <option value="">Ring Size US</option>
    </Input>

    <Input type="select" name="select" id="ring-size-2">
        <option value="">45</option>
        <option value="">45.5</option>
        <option value="">50</option>
    </Input>
</InputGroup>
