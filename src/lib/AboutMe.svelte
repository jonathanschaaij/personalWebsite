<script>
    import { fly } from "svelte/transition";

    let hovering = false;
    let innerHeight = 0;
    let innerWidth = 0;

    $: showImageOnSide = hovering && innerWidth > 1024;
</script>

<svelte:window bind:innerWidth bind:innerHeight />

<div class="min-h-screen items-center flex snap-start">
    <div
        class="grid grid-cols-1 lg:grid-cols-3 w-screen p-10  items-center justify-items-center"
        on:mouseenter={() => {
            hovering = true;
        }}
        on:mouseleave={() => {
            hovering = false;
        }}
    >
        {#if showImageOnSide}
            <img
                class="col-span-1 max-h-full w-3/4 mx-10 rounded-3xl"
                transition:fly={{ x: -400, duration: 1000 }}
                src="images/skydive.jpeg"
                alt="Skydiving"
            />
        {/if}
        <div class="flex flex-col col-start-2">
            <div class="text-3xl text-center my-10">About Me</div>
            <div class="text-justify">
                I am currently a student studying for my masters in Robotics at the University of Twente. Additionally I
                have two part time jobs as a full stack developer and as a proptype engineer. I volunteer once a week at
                Scouting Coevorden, where a accompany a group of around 20 children (ages 7-11). I my free time I enjoy
                working on side projects, such as upgrading my 3D-printer by adding new features, programming this
                website, or developing a low cost skydiving altimeter. Being quite an adrenaline junky myself I enjoy
                participating in sports such as skydiving and climbing.
            </div>
        </div>

        {#if showImageOnSide}
            <img
                class="col-span-1 max-h-full w-3/4 mx-10 rounded-3xl"
                transition:fly={{ x: 400, duration: 1000 }}
                src="images/skydive.jpeg"
                alt="Skydiving"
            />
        {/if}
    </div>
</div>
