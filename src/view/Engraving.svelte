<script>
    import {
        Row,
        Col,
        FormGroup,
        Label,
        Input,
        ButtonToolbar,
        Button
    } from 'sveltestrap';
</script>
<Row>
    <Col>
        <p class="subheader my-3">Add Engraving</p>
        <FormGroup>
            <Label for="Engraving1">Engraving text Ring 1</Label>
            <Input
                    type="text"
                    name="text"
                    id="Engraving1"
                    placeholder="with a placeholder"
            />
        </FormGroup>
        <FormGroup>
            <Label for="Engraving1">Engraving text Ring 2</Label>
            <Input
                    type="text"
                    name="text"
                    id="Engraving2"
                    placeholder="with a placeholder"
            />
        </FormGroup>
        <p class="subheader my-3">Add Symbol</p>
        <ButtonToolbar>
            <Button outline><span class="icon-font"><!----> »  <!----></span></Button>
            <Button outline><span class="icon-font"><!----> ¾  <!----></span></Button>
            <Button outline><span class="icon-font"><!----> ½  <!----></span></Button>
        </ButtonToolbar>
        <p class="subheader my-3">Font</p>
        <ButtonToolbar>
            <Button outline>Alpha</Button>
            <Button outline>Bravo</Button>
            <Button outline>Charlie</Button>
        </ButtonToolbar>
    </Col>
</Row>
