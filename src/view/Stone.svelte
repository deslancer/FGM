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
    import {StonePin} from ".././model/stone/stone_pin";
    import {StoneType} from ".././model/stone/stone_type";
    import {StoneSize} from ".././model/stone/stone_size";
    import {StoneQuality} from ".././model/stone/stone_quality";
    import {StoneQuantity} from ".././model/stone/stone_quantity";

    const stonePin: Array<object> = new StonePin().getStonePin();
    const stoneTypes: Array<object> = new StoneType().getStoneTypes();
    const stoneSizes: Array<object> = new StoneSize().getStoneSizes();
    const stoneQuality: Array<object> = new StoneQuality().getStoneQuality();
    const stoneQuantity: Array<object> = new StoneQuantity().getStoneQuantity();

    let radioGroup;
</script>
<Row>
    <Col>
        <TabContent>
            <TabPane tabId="setting" tab="Setting" active>
                <div class="my-3">
                    {#await stonePin}
                        <p>...loading</p>
                    {:then stone_arr}
                        {#each stone_arr as stone}
                            <figure class="figure border p-3 m-2 profile_card">
                                <figcaption class="figure-caption pb-3 text-center">{stone.name}</figcaption>
                                <img src="{stone.avatar}" width="100" class="figure-img img-fluid rounded" alt="{stone.name}">
                            </figure>
                        {/each}
                    {:catch error}
                        <p style="color: red">{error.message}</p>
                    {/await}
                </div>
            </TabPane>
            <TabPane tabId="stone_type" tab="Stone type">
                <p class="subheader my-3">Type</p>
                <InputGroup class="my-3">
                    <Input type="select" name="select" id="ring-colour">
                        {#await stoneTypes}
                            <option>...loading</option>
                        {:then stone_arr}
                            {#each stone_arr as stone}
                                <option value={stone.name}>
                                    {stone.name}
                                </option>
                            {/each}
                        {:catch error}
                            <option style="color: red">{error.message}</option>
                        {/await}
                    </Input>
                </InputGroup>
                <p class="subheader my-3">Stone size</p>
                <InputGroup class="my-3">
                    <Input type="select" name="select" id="ring-colour">
                        {#await stoneSizes}
                            <option>...loading</option>
                        {:then stone_size_arr}
                            {#each stone_size_arr as stone}
                                <option value={stone.value}>
                                    {stone.value} mm
                                </option>
                            {/each}
                        {:catch error}
                            <option style="color: red">{error.message}</option>
                        {/await}
                    </Input>
                </InputGroup>
                <FormGroup class="my-3">
                    <p class="subheader my-3">Stone colour and quality</p>
                    {#await stoneQuality}
                        <p>...loading</p>
                    {:then stone_arr}
                        {#each stone_arr as stone}
                            <Input
                                    id="{stone.id}"
                                    type="radio"
                                    bind:group={radioGroup}
                                    value="{stone.name}"
                                    label="{stone.name}"
                            />
                        {/each}
                    {:catch error}
                        <p style="color: red">{error.message}</p>
                    {/await}
                </FormGroup>
            </TabPane>
            <TabPane tabId="quantity" tab="Quantity">
                <p class="subheader my-3">Quantity</p>
                <InputGroup class="my-3">
                    <Input type="select" name="select" id="ring-colour">
                        {#await stoneQuantity}
                            <option>...loading</option>
                        {:then stone_arr}
                            {#each stone_arr as stone}
                                <option value={stone.name}>
                                    {stone.name}
                                </option>
                            {/each}
                        {:catch error}
                            <option style="color: red">{error.message}</option>
                        {/await}
                    </Input>
                </InputGroup>
            </TabPane>
        </TabContent>
    </Col>
</Row>
