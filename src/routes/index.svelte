<script lang="ts">
    import {onMount} from 'svelte';
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
        ModalFooter
    } from 'sveltestrap';
    import Profiles from '../view/Profiles.svelte'
    import Dimensions from "../view/Dimensions.svelte";
    import Metal from "../view/Metal.svelte";
    import Edges from "../view/Edges.svelte";
    import Stone from "../view/Stone.svelte";
    import Engraving from "../view/Engraving.svelte";



    let el;
    let current = Profiles;

    let open = false;
    const toggle = () => (open = !open);

    onMount(() => {
        createScene(el)
    });
</script>
<Container lg>
    <Row class="justify-content-center my-4">
        <Col>
            phones
        </Col>
        <Col class="text-center">
            <a href="#">
                <img width="250" src="/images/logo.jpg" alt="logo">
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
    <Row class="my-5">
        <Col class="d-flex">

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

        </Col>
    </Row>
    <Row class="mt-5">
        <Col sm="7">
            <canvas bind:this={el}></canvas>
        </Col>
        <Col sm="5">
            <svelte:component this={current}/>
        </Col>
    </Row>
    <Row>
        <Col sm="7">
            <Row class="bg-light align-items-center">
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
        <Col sm="5">

        </Col>
    </Row>
</Container>


