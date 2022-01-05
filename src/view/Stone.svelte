<script lang="ts">
    import {
        Row,
        Col,
        TabContent,
        TabPane,
        InputGroup,
        Input,
        FormGroup,

    } from 'sveltestrap';
    let placement_types = [
        { id: '3', caption: 'Without', src: '/images/none.svg' , name: '1' },
        { id: '4', caption: 'Bezel', src: '/images/bezel.svg' , name: '2' },
        { id: '5', caption: 'Section', src: '/images/section.svg' , name: '2' },
        { id: '6', caption: 'Channel', src: '/images/channel.svg' , name: '3' },
    ];
    let stone_types = [
        { id: '4', type: 'Diamond CVD/HPHT'},
        { id: '5', type: 'Moissanite'},
        { id: '6', type: 'Zirconium'},
    ];
    let stone_sizes = [
        { id: '4', size: '1.0 mm'},
        { id: '5', size: '1.5 mm'},
        { id: '6', size: '2.0 mm'},
    ];
    let stone_quantity = [
        { id: '5', qty: 'Half Set'},
        { id: '6', qty: 'Full Set'},
    ];
    let radioGroup;
</script>
<Row>
    <Col>
        <TabContent>
            <TabPane tabId="setting" tab="Setting" active>
                <div class="my-3">
                    {#each placement_types as profile}
                        <figure class="figure border p-3 m-2 profile_card">
                            <figcaption class="figure-caption pb-3 text-center">{profile.caption}</figcaption>
                            <img src="{profile.src}" width="100" class="figure-img img-fluid rounded" alt="{profile.name}">
                        </figure>
                    {/each}
                </div>
            </TabPane>
            <TabPane tabId="stone_type" tab="Stone type">
                <p class="subheader my-3">Type</p>
                <InputGroup class="my-3">
                    <Input type="select" name="select" id="ring-colour">
                        <option value="">Diamond natural</option>
                        {#each stone_types as { id, type }}
                            <option value="{id}">{type}</option>
                        {/each}
                    </Input>
                </InputGroup>
                <p class="subheader my-3">Stone size</p>
                <InputGroup class="my-3">
                    <Input type="select" name="select" id="ring-colour">
                        <option value="">1.3 mm</option>
                        {#each stone_sizes as { id, size }}
                            <option value="{id}">{size}</option>
                        {/each}
                    </Input>
                </InputGroup>
                <FormGroup class="my-3">
                    <p class="subheader my-3">Stone colour and quality</p>
                    <Input
                            id="r1"
                            type="radio"
                            bind:group={radioGroup}
                            value="eenie"
                            label="Eenie"
                    />
                    <Input
                            id="r2"
                            type="radio"
                            bind:group={radioGroup}
                            value="meanie"
                            label="Meanie"
                    />
                    <Input
                            id="r3"
                            type="radio"
                            bind:group={radioGroup}
                            value="minie"
                            label="Minie"
                    />
                    <Input
                            id="r4"
                            type="radio"
                            bind:group={radioGroup}
                            value="moe"
                            label="Moe"
                    />
                </FormGroup>
            </TabPane>
            <TabPane tabId="quantity" tab="Quantity">
                <p class="subheader my-3">Quantity</p>
                <InputGroup class="my-3">
                    <Input type="select" name="select" id="ring-colour">
                        <option value="">1</option>
                        {#each stone_quantity as { id, qty }}
                            <option value="{id}">{qty}&nbsp;(36 depends of stone size)</option>
                        {/each}
                    </Input>
                </InputGroup>
            </TabPane>
        </TabContent>
    </Col>
</Row>
