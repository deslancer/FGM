<script lang="ts">
    import { ring_profile } from "../controller/store";
    import {
        Row,
        Col,
        Input
    } from 'sveltestrap';
    let profile_comfort = false;
    let ring_profiles = getRingProfiles();
    let selected = 'ring_01'
    const url = 'https://fgm.3dtour.ua/rings/api/ring_params/ring_profiles/';
    async function getRingProfiles() {
        const response = await fetch(url);
        const data = await response.json();
        if (response.ok) {
            return data
        } else {
            throw new Error(data);
        }
    }
    function setRingProfile(val) {
        selected = val;
        ring_profile.update(existing => {
            return val;
        });
    }
</script>
<Row>
    <Col>
        <p class="subheader">Profile</p>
        {#await ring_profiles}
        {:then profile_arr}
            {#each profile_arr as profile}
                <figure class:selected_profile="{selected === profile.filename3d}"
                        on:click="{() => setRingProfile(profile.filename3d)}" class="figure border p-3 m-2 profile_card">
                    <figcaption class="figure-caption pb-3 text-center">{profile.short_name}</figcaption>
                    <img src="{profile.avatar}" width="100" class="figure-img img-fluid rounded" alt="{profile.name_en}">
                </figure>
            {/each}
        {:catch error}
            <p style="color: red">{error.message}</p>
        {/await}
        <div class="d-flex align-items-center">
            <div class="mx-2"> <Input id="profile_comfort" class="my-3" type="checkbox" bind:checked={profile_comfort} label="Select Profile Comfort" /></div>
            <div class="mx-2"><a href="/info" class="question_icon"><i class="far fa-question-circle"></i></a></div>
        </div>

    </Col>
</Row>

