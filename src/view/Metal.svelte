<script lang="ts">
    import {
        Col,
        Row,
        Card,
        CardBody,
        CardHeader,
        Input,
        InputGroup,
        Button,
        ButtonGroup,
    } from 'sveltestrap';
    import { MetalSurfaces } from "../model/metal/metal-surfaces";
    import { MetalDivision } from "../model/metal/metal-division";
    import { MetalColors } from "../model/metal/metal-colors";
    const metalDivision: Array<object> = new MetalDivision().getMetalDivision();
    const metalColors: Array<object> = new MetalColors().getMetalColors();
    const metalSurfaces: Array<object> = new MetalSurfaces().getMetalSurfaces();

    let selected = 'one';
    let radioGroup = '1';
</script>
<Row>
    <Col>
        <p class="subheader"> Division</p>
                <div class="d-flex">
                    <div class="col">
                        <Input id="Singlecolored" checked class="my-3" type="radio" bind:group={radioGroup} value="1" label="Single Colored" />
                        <figure on:click={radioGroup === '1'} class="figure border selected_profile p-3 m-2 profile_card">
                            <figcaption class="figure-caption pb-3 text-center">Single Coloured</figcaption>
                            <img src="/images/single-color.svg" width="100" class="figure-img img-fluid rounded"
                                 alt="single-color">
                        </figure>
                    </div>

                    {#await metalDivision}
                    {:then division_arr}
                        {#each division_arr as divisions, i}
                            <div class="col">
                                <Input id="{divisions.id}" bind:group={radioGroup} class="my-3" value="{i + 2}" type="radio" label="{divisions.mode}" />
                                {#each divisions.data as data}
                                    <figure class="figure border p-3 m-2 profile_card">
                                        <figcaption class="figure-caption pb-3 text-center"><b>{data.colors_layout}</b>
                                        </figcaption>
                                        <img src="{data.avatar}" width="100" class="figure-img img-fluid rounded"
                                             alt="{data.name_en}">
                                    </figure>
                                {/each}
                            </div>
                        {/each}
                    {:catch error}
                        <p style="color: red">{error.message}</p>
                    {/await }
                </div>
    </Col>
</Row>
<Row>
    <Col>
        <p class="subheader my-2">Colour and Surface</p>
        <InputGroup>
            <Input type="select" name="select" id="ring-colour">
                {#await metalColors}
                {:then colorsArr}
                {#each colorsArr as color}
                    <option value="{color.id}">{color.metal_color}&nbsp;{color.metal_type}</option>
                {/each}
                {:catch error}
                    <option style="color: red">{error.message}</option>
                {/await}
            </Input>
        </InputGroup>
        <InputGroup class="mt-2">
            <Input type="select" name="select" id="ring-thickness">
                {#await metalSurfaces}
                {:then surfacesArr}
                {#each surfacesArr as surface}
                    <option value="{surface.id}">{surface.name}</option>
                {/each}
                {:catch error}
                    <option style="color: red">{error.message}</option>
                {/await }
            </Input>
        </InputGroup>
    </Col>
    {#if radioGroup === 2 || radioGroup === 3}
    <Col>
        <p class="subheader my-2">Colour and Surface</p>
        <InputGroup>
            <Input type="select" name="select" id="ring-colour">
                {#await metalColors}
                {:then colorsArr}
                    {#each colorsArr as color}
                        <option value="{color.id}">{color.metal_color}&nbsp;{color.metal_type}</option>
                    {/each}
                {:catch error}
                    <option style="color: red">{error.message}</option>
                {/await}
            </Input>
        </InputGroup>
        <InputGroup class="mt-2">
            <Input type="select" name="select" id="ring-thickness">
                {#await metalSurfaces}
                {:then surfacesArr}
                    {#each surfacesArr as surface}
                        <option value="{surface.id}">{surface.name}</option>
                    {/each}
                {:catch error}
                    <option style="color: red">{error.message}</option>
                {/await }
            </Input>
        </InputGroup>
    </Col>
    {/if}
    {#if radioGroup === 3}
    <Col>
        <p class="subheader my-2">Colour and Surface</p>
        <InputGroup>
            <Input type="select" name="select" id="ring-colour">
                {#await metalColors}
                {:then colorsArr}
                    {#each colorsArr as color}
                        <option value="{color.id}">{color.metal_color}&nbsp;{color.metal_type}</option>
                    {/each}
                {:catch error}
                    <option style="color: red">{error.message}</option>
                {/await}
            </Input>
        </InputGroup>
        <InputGroup class="mt-2">
            <Input type="select" name="select" id="ring-thickness">
                {#await metalSurfaces}
                {:then surfacesArr}
                    {#each surfacesArr as surface}
                        <option value="{surface.id}">{surface.name}</option>
                    {/each}
                {:catch error}
                    <option style="color: red">{error.message}</option>
                {/await }
            </Input>
        </InputGroup>
        <p class="subheader my-2">Purity</p>
        {#each metal_purity as m_purity}
            <ButtonGroup>
                <Button class="mx-1" outline>{m_purity.purity}</Button>
            </ButtonGroup>
        {/each}
    </Col>
    {/if}
</Row>

