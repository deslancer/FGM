<script lang="ts">
    import {onMount} from 'svelte';
    import {fade} from 'svelte/transition';
    import {createScene} from "../model/scene";
    import {
        Col,
        Container,
        Row,
        Nav,
        NavItem,
        NavLink,
        Table,
        Button,
        Modal,
        ModalHeader,
        ModalBody,
        ModalFooter,
        FormGroup,
        Input,
        Collapse
    } from 'sveltestrap';
    import Profiles from '../view/Profiles.svelte'
    import Dimensions from "../view/Dimensions.svelte";
    import Metal from "../view/Metal.svelte";
    import Stone from "../view/Stone.svelte";
    import Engraving from "../view/Engraving.svelte";
    import Preloader from "../view/Preloader.svelte"

    let el;
    let current = Profiles;
    let connect_active = false;
    let open = false;
    let isCommentOpen = false;
    const toggle = () => (open = !open);

    onMount(() => {
        createScene(el)
    });
</script>
<Container lg>
    <Row class="justify-content-center my-2">
        <Col>

        </Col>
        <Col class="text-center">
            <a href="#">
                <img width="200" src="/images/logo2.jpg" alt="logo">
            </a>
        </Col>
        <Col>
            <Nav class="justify-content-end">
                <NavLink href="#"><i class="fas fa-search"></i></NavLink>
                <NavLink href="#"><i class="far fa-user"></i></NavLink>
                <NavLink href="#"><i class="fas fa-shopping-cart"></i></NavLink>
            </Nav>
        </Col>
    </Row>
    <Row>
        <Col>
            <div class="d-flex">
                <Nav pills class="main-nav">
                    <NavItem>
                        <a class="nav-link border" aria-current="page" href="#"
                           class:active="{current === Profiles}"
                           on:click={()=>current = Profiles}>
                            1. Profile
                        </a>
                    </NavItem>
                    <NavItem>
                        <a class="nav-link border" aria-current="page" href="#"
                           class:active="{current === Dimensions}"
                           on:click={()=>current = Dimensions}>
                            2. Dimensions
                        </a>
                    </NavItem>
                    <NavItem>
                        <a class="nav-link border" aria-current="page" href="#"
                           class:active="{current === Metal}"
                           on:click={()=>current = Metal}>
                            3. Precious metal
                        </a>
                    </NavItem>
                    <!-- <NavItem>
                         <a class="nav-link border" aria-current="page" href="#"
                            class:active="{current === Edges}"
                            on:click={()=>current = Edges}>
                             4. Grooves / edges
                         </a>
                     </NavItem>-->
                    <NavItem>
                        <a class="nav-link border" aria-current="page" href="#"
                           class:active="{current === Stone}"
                           on:click={()=>current = Stone}>
                            5. Stone setting
                        </a>
                    </NavItem>
                    <NavItem>
                        <a class="nav-link border" aria-current="page" href="#"
                           class:active="{current === Engraving}"
                           on:click={()=>current = Engraving}>
                            6. Engraving
                        </a>
                    </NavItem>
                </Nav>
            </div>
            <div class="my-1 p-2 subnav_bar">
                <div class="ring-mode">
                    <a class="ring-mode-ring ring-mode-ring-profile active connected"><i
                            class="svg-icon svg-icon-ring-mode-profile-active">
                        <svg id="ring-mode-profile-active" viewBox="0 0 22 33" width="22" height="33">

                            <g id="b">
                                <path d="M6.946,31.595C-3.351,28.161.229,2.495,8.635.47,10.9-.135,12.424.058,15.45.6a.126.126,0,0,1,.018.238C7.681,3.755,4.424,27.755,13.837,31.553a.118.118,0,0,1-.017.224A14.74,14.74,0,0,1,6.946,31.595Z"
                                      transform="translate(-0.641 -0.096)" fill="currentColor"></path>
                                <path d="M14.158,31.208a1.254,1.254,0,0,0,1.06.015C21.473,28.212,24.6,6.688,16.393,1.24a.416.416,0,0,0-.381-.04,6.182,6.182,0,0,0-3.376,2.872.435.435,0,0,0-.013.432c3.642,6.954,2.645,17.621-1.869,23.185a.44.44,0,0,0-.025.527A7.534,7.534,0,0,0,14.158,31.208Z"
                                      transform="translate(-0.641 -0.096)" fill="currentColor"></path>
                                <path d="M14.158,31.208a1.254,1.254,0,0,0,1.06.015C21.473,28.212,24.6,6.688,16.393,1.24a.416.416,0,0,0-.381-.04,6.182,6.182,0,0,0-3.376,2.872.435.435,0,0,0-.013.432c3.642,6.954,2.645,17.621-1.869,23.185a.44.44,0,0,0-.025.527A7.534,7.534,0,0,0,14.158,31.208Z"
                                      transform="translate(-0.641 -0.096)" fill="url(#profile-gradient)"></path>
                            </g>
                        </svg>
                    </i>
                        <div class="ring-mode-ring-label">Ring 1</div>
                    </a>
                    <div on:click={()=> connect_active = !connect_active} class="ring-mode-connect">
                        <a class:connect_active>
                        <i icon="connect" class="svg-icon svg-icon-connect">
                            <svg id="connect" viewBox="0 0 24 24" width="24" height="24">
                                <path d="M8.33,18.36A5.17,5.17,0,1,1,9.28,8.28a5.1,5.1,0,0,1,3.43,6.43,1.37,1.37,0,0,0,.43,1.66c.23.2.48.38.79.62a7.23,7.23,0,1,0-11,1.62c2.29,2.09,6.47,2.53,8.13.92l-1.3-1.42C9.23,18.2,8.78,18.31,8.33,18.36ZM21.18,7.94c-2.28-2.16-6.45-2.64-8.24-1l1.33,1.41c.43-.09.81-.19,1.19-.24a5.17,5.17,0,1,1-2.21,9.33,5,5,0,0,1-1.94-5.67,1.43,1.43,0,0,0-.5-1.74c-.2-.18-.44-.33-.72-.55a7.17,7.17,0,0,0,2,9.65A7.25,7.25,0,0,0,21.18,7.94Z"
                                      fill="currentColor" transform="translate(0, -1)"></path>
                            </svg>
                        </i><span class="connect-label">Ring pair</span></a></div>
                    <a class="ring-mode-ring ring-mode-ring-profile connected">
                        <i class="svg-icon svg-icon-ring-mode-profile">
                            <svg id="ring-mode-profile" viewBox="0 0 22 33" width="22" height="33">
                                <path d="M6.94564 31.5948C-3.35115 28.1608 0.228986 2.49466 8.6354 0.470178C10.8975 -0.134918 12.4244 0.0576357 15.4497 0.599824C15.5647 0.620448 15.5773 0.796356 15.4678 0.837372C7.68071 3.75482 4.42417 27.7546 13.8372 31.5531C13.9425 31.5956 13.9317 31.7588 13.8198 31.7775C11.3729 32.1873 9.73884 32.2771 6.94564 31.5948Z"
                                      fill="#B8B8B8"></path>
                                <path d="M14.1583 31.2075C14.4964 31.3602 14.884 31.3836 15.2183 31.2227C21.4734 28.2116 24.5998 6.68827 16.3929 1.24031C16.2802 1.16552 16.1377 1.15155 16.0117 1.20077C14.6119 1.74782 13.6755 2.40119 12.6354 4.07287C12.554 4.20376 12.551 4.3679 12.6225 4.50446C16.265 11.4583 15.2676 22.1259 10.754 27.6897C10.6309 27.8415 10.6183 28.0556 10.7293 28.2165C11.7374 29.678 12.5842 30.4967 14.1583 31.2075Z"
                                      fill="url(#paint0_linear)"></path>
                            </svg>
                        </i>
                        <div class="ring-mode-ring-label">Ring 2</div>
                    </a>
                    <div class="ring-mode-connect"></div>
                </div>
            </div>
        </Col>
    </Row>
    <Row class="mt-3 row-cols-2">
        <Col sm="7">
            <Preloader/>
            <canvas bind:this={el}></canvas>
        </Col>
        <Col sm="5">
            <svelte:component ring_pair={connect_active} this={current}/>
            <Row>
                <Col>
                    <div class="divider"></div>
                    <div class="d-flex justify-content-between">
                        <a href=""><i class="fas px-2 fa-undo"></i><span>Undo</span></a>
                        <a href=""><i class="far px-2 fa-save"></i><span>Load/Save</span></a>
                        <a href=""><i class="fas px-2 fa-print"></i> <span>Print PDF</span></a>
                        <a href=""><i class="fas px-2 fa-share-alt"></i><span>Share</span></a>
                    </div>
                </Col>
            </Row>
        </Col>
    </Row>
    <Row class="mt-2">
        <Col sm="7">
            <Row class=" p-2 align-items-center">
                <Col sm="7">
                    <Table borderless size="sm">
                        <tfoot class="mt-2">
                        <tr>
                            <th>Total:</th>
                            <th>777$</th>
                        </tr>
                        </tfoot>
                        <tbody>
                        <tr>
                            <td>Ring 1</td>
                            <td>111$</td>
                        </tr>
                        <tr>
                            <td>Ring 2</td>
                            <td>666$</td>
                        </tr>
                        </tbody>
                    </Table>
                </Col>
                <Col sm="5">
                    <Button size="sm"><i class="fas px-2 fa-times"></i>Reset configuration</Button>
                    <Button on:click={toggle} size="sm"><i class="fas px-2 fa-list"></i>Your rings</Button>
                    <Modal isOpen={open} {toggle} size="lg">
                        <ModalHeader {toggle}>Modal title</ModalHeader>
                        <ModalBody>
                            <Table>
                                <thead>
                                <tr>
                                    <th>#</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Username</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>Larry</td>
                                    <td>the Bird</td>
                                    <td>@twitter</td>
                                </tr>
                                </tbody>
                            </Table>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="primary" on:click={toggle}>Do Something</Button>
                            <Button color="secondary" on:click={toggle}>Cancel</Button>
                        </ModalFooter>
                    </Modal>
                </Col>
            </Row>
        </Col>
        <Col sm={{ size: 5}}>
            <Row>
                <Col sm="5">
                    <div class="d-flex align-items-center">
                        <Button outline class="text-uppercase">reserve a price</Button>
                        <a href="/info" class="mx-2 question_icon"><i class="far fa-question-circle"></i></a>
                    </div>
                    <FormGroup class="mt-2">
                        <Input id="c1" type="checkbox" bind:checked={isCommentOpen} label="Order comment"/>
                    </FormGroup>
                </Col>
                <Col sm="7">
                    <Button class="text-uppercase" block>Add to Cart</Button>
                    <div class="text-end mt-2">
                        <small class="d-block">Delivery time, arrival between</small>
                        <small class="d-block fw-bold">24/01/2022 - 28/01/2022</small>
                    </div>
                </Col>
            </Row>
            {#if isCommentOpen}
                <div class="mt-3" transition:fade>
                    <FormGroup>
                        <Input type="textarea" placeholder="Comment on Ring1" name="text" id="exampleText"/>
                    </FormGroup>
                </div>
            {/if}
        </Col>
    </Row>
</Container>


