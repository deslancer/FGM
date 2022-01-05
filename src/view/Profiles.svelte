<script lang="ts">
    import {
        Row,
        Col
    } from 'sveltestrap';

    let ring_profiles:Array<any> = [
        { id: '3', caption: 'Profile 1', src: '/images/1.png' , name: '1' },
        { id: '4', caption: 'Profile 2', src: '/images/2.png' , name: '2' },
        { id: '5', caption: 'Profile 3', src: '/images/3.png' , name: '3' },
        { id: '6', caption: 'Profile 4', src: '/images/4.png' , name: '4' },
        { id: '7', caption: 'Profile 5', src: '/images/5.png' , name: '5' }
    ];


</script>
<Row>
    <Col>
        <p class="subheader">Profile</p>
        {#each ring_profiles as profile}
            <figure class="figure border p-3 m-2 profile_card">
                <figcaption class="figure-caption pb-3 text-center">{profile.caption}</figcaption>
                <img src="{profile.src}" width="100" class="figure-img img-fluid rounded" alt="{profile.name}">
            </figure>
        {/each}
    </Col>
</Row>

