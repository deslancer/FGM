<script lang="ts">
    import {
        Col,
        Row,
        Card,
        CardBody,
        CardHeader,
        Collapse,
        Input,
        InputGroup,
        Button,
        ButtonGroup,
    } from 'sveltestrap';

    let bi_coloured =
        {
            mode: 'Bi-Coloured',
            data: [{id: '3', caption: '1:1', src: '/images/two-color.svg', name: '1'},
                {id: '4', caption: '1:2', src: '/images/vertical-1-3-1.svg', name: '2'}]
        };
    let tri_coloured = {
        mode: 'Tri-Coloured',
        data: [{id: '3', caption: '1:1:1', src: '/images/three-color.svg', name: '1'},
            {id: '4', caption: '1:3:1', src: '/images/vertical-1-2.svg', name: '2'}]
    };
    let ring_colours = [
        {id: '1', name: 'White gold with rhodium', fineness: '585'},
        {id: '2', name: 'White gold without rhodium', fineness: '585'},
        {id: '3', name: 'Red gold', fineness: '585'},
        {id: '4', name: 'Rose gold', fineness: '585'},
        {id: '5', name: 'Yellow gold', fineness: '585'},
        {id: '6', name: 'Platinum', fineness: '585'}
    ];
    let ring_surfaces = [
        {id: '1', name: 'Diagonal matt'},
        {id: '2', name: 'Sand matt'},
        {id: '3', name: 'Hammered matt'},
    ]
    let metal_purity = [
        {id: '1', purity: '375', metal: 'Gold'},
        {id: '2', purity: '585', metal: 'Gold'},
        {id: '3', purity: '750', metal: 'Gold'},
        {id: '3', purity: '950', metal: 'Platinum'},
    ]
    let current_divisions = bi_coloured;
    let isOpen = false;
</script>
<Row>
    <Col>
        <p class="subheader"> Division</p>
        <Row class="justify-content-center">
            <Col>
                <figure on:click={()=>{
                    isOpen = false
                }} class="figure border p-3 m-2 profile_card">
                    <figcaption class="figure-caption pb-3 text-center">Single Coloured</figcaption>
                    <img src="/images/single-color.svg" width="100" class="figure-img img-fluid rounded"
                         alt="single-color">
                </figure>
            </Col>
            <Col>
                <figure on:click={()=>{
                    current_divisions = bi_coloured;
                    isOpen = true
                }} class="figure border p-3 m-2 profile_card">
                    <figcaption class="figure-caption pb-3 text-center">Bi-Coloured <i
                            class="fas px-1 fa-angle-down"></i></figcaption>
                    <img src="/images/two-color.svg" width="100" class="figure-img img-fluid rounded"
                         alt="two-color">
                </figure>
            </Col>
            <Col>
                <figure on:click={()=>{
                    current_divisions = tri_coloured;
                    isOpen = true
                }} class="figure border p-3 m-2 profile_card">
                    <figcaption class="figure-caption pb-3 text-center">Tri-Coloured <i
                            class="fas px-1 fa-angle-down"></i></figcaption>
                    <img src="/images/three-color.svg" width="100" class="figure-img img-fluid rounded"
                         alt="three-color">
                </figure>
            </Col>
        </Row>
        <Row>
            <Col>
                <Collapse {isOpen}>
                    <Card  on:click={()=>{isOpen = false}}>
                        <CardHeader>
                            <div class="d-flex justify-content-between">
                                <p>{current_divisions.mode}</p>
                                <p class="cursor-pointer"><i class="fas fa-times"></i></p>
                            </div>
                        </CardHeader>
                        <CardBody>
                            {#each current_divisions.data as divisions}
                                <figure class="figure border p-3 m-2 profile_card">
                                    <figcaption class="figure-caption pb-3 text-center"><b>{divisions.caption}</b>
                                    </figcaption>
                                    <img src="{divisions.src}" width="100" class="figure-img img-fluid rounded"
                                         alt="{divisions.name}">
                                </figure>
                            {/each}
                        </CardBody>
                    </Card>
                </Collapse>
            </Col>
        </Row>
    </Col>
</Row>
<Row>
    <Col>
        <p class="subheader my-2">Colour and Surface</p>
        <InputGroup>
            <Input type="select" name="select" id="ring-colour">
                <option value="">Grey Gold</option>
                {#each ring_colours as { id, name }}
                    <option value="{id}">{name}</option>
                {/each}
            </Input>
        </InputGroup>
        <InputGroup class="mt-2">
            <Input type="select" name="select" id="ring-thickness">
                <option value="">Polished</option>
                {#each ring_surfaces as { id, name }}
                    <option value="{id}">{name}</option>
                {/each}
            </Input>
        </InputGroup>
        <p class="subheader my-2">Purity</p>
        {#each metal_purity as m_purity}
            <ButtonGroup>
                <Button class="mx-1" outline>{m_purity.purity}</Button>
            </ButtonGroup>
        {/each}
    </Col>
    <Col>
        <p class="subheader my-2">Colour and Surface</p>
        <InputGroup>
            <Input type="select" name="select" id="ring-colour">
                <option value="">Grey Gold</option>
                {#each ring_colours as { id, name }}
                    <option value="{id}">{name}</option>
                {/each}
            </Input>
        </InputGroup>
        <InputGroup class="mt-2">
            <Input type="select" name="select" id="ring-thickness">
                <option value="">Polished</option>
                {#each ring_surfaces as { id, name }}
                    <option value="{id}">{name}</option>
                {/each}
            </Input>
        </InputGroup>
        <p class="subheader my-2">Purity</p>
        {#each metal_purity as m_purity}
            <ButtonGroup>
                <Button class="mx-1" outline>{m_purity.purity}</Button>
            </ButtonGroup>
        {/each}
    </Col>
    <Col>
        <p class="subheader my-2">Colour and Surface</p>
        <InputGroup>
            <Input type="select" name="select" id="ring-colour">
                <option value="">Grey Gold</option>
                {#each ring_colours as { id, name }}
                    <option value="{id}">{name}</option>
                {/each}
            </Input>
        </InputGroup>
        <InputGroup class="mt-2">
            <Input type="select" name="select" id="ring-thickness">
                <option value="">Polished</option>
                {#each ring_surfaces as { id, name }}
                    <option value="{id}">{name}</option>
                {/each}
            </Input>
        </InputGroup>
        <p class="subheader my-2">Purity</p>
        {#each metal_purity as m_purity}
            <ButtonGroup>
                <Button class="mx-1" outline>{m_purity.purity}</Button>
            </ButtonGroup>
        {/each}
    </Col>
</Row>

