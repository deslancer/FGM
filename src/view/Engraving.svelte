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
    let engraving_one = '';
    let engraving_two = '';
    let current_field = '';
    let selected_font = 'svnfont0';
    function addSymbol(symbol) {
        switch (current_field){
            case 'field_one':
                engraving_one += symbol
                break;
            case 'field_two':
                engraving_two += symbol
                break;
        }
    }
</script>
<Row>
    <Col>
        <p class="subheader my-3">Add Engraving</p>
        <FormGroup>
            <Label for="Engraving1">Engraving text Ring 1</Label>
            <Input
                    style="font-family: {selected_font}, sans-serif"
                    bind:value={engraving_one}
                    on:focus={()=>current_field = 'field_one'}
                    type="text"
                    name="text"
                    id="Engraving1"
                    minlength="0"
                    maxlength="35"
            />
            <div class="text-muted text-end"><small>{35 - engraving_one.length}</small></div>
        </FormGroup>
        <FormGroup>
            <Label for="Engraving1">Engraving text Ring 2</Label>
            <Input
                    bind:value={engraving_two}
                    on:focus={()=>current_field = 'field_two'}
                    style="font-family: {selected_font}, sans-serif"
                    type="text"
                    name="text"
                    id="Engraving2"
                    minlength="0"
                    maxlength="35"
            />
            <div class="text-muted text-end"><small>{35 - engraving_two.length}</small></div>
        </FormGroup>
        <p class="subheader my-3">Add Symbol</p>
        <ButtonToolbar>
            <Button on:click={ ()=> addSymbol('»') } outline><span class="icon-font"><!----> »<!----></span></Button>
            <Button on:click={ ()=> addSymbol('¾') } class="mx-2" outline><span class="icon-font"><!----> ¾<!----></span></Button>
            <Button on:click={ ()=> addSymbol('½') }  outline><span class="icon-font"><!----> ½<!----></span></Button>
        </ButtonToolbar>
        <p class="subheader my-3">Font</p>
        <ButtonToolbar>
            <Button id="cursive" on:click={()=> selected_font = 'svnfont0'} outline>Abc 123</Button>
            <Button id="serif" on:click={()=> selected_font = 'svnfont4'} class="mx-2" outline>Abc 123</Button>
        </ButtonToolbar>
    </Col>
</Row>
