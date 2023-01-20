<script>
    import { fly } from "svelte/transition";

    let hovering = false;
</script>

<div class="w-full h-screen">
    <div
        class="grid grid-cols-1 xl:grid-cols-3 h-full w-full"
        on:mouseenter={() => {
            hovering = true;
        }}
        on:mouseleave={() => {
            hovering = false;
        }}
    >
        {#if hovering}
            <img
                class="col-span-1 h-3/4 max-w-full rounded-3xl m-10 aspect-auto"
                transition:fly={{ x: -400, duration: 1000 }}
                src="images/skydive.jpeg"
                alt="Skydiving"
            />
        {/if}
        <div class="flex flex-col col-start-2 justify-center">
            <div class="text-3xl text-center">About Me</div>
            <div class="text-justify">
                I am currently a student studying for my masters in Robotics at the University of Twente. Additionally I
                have two part time jobs as a full stack developer and as a proptype engineer. I volunteer once a week at
                Scouting Coevorden, where a accompany a group of around 20 children (ages 7-11). I my free time I enjoy
                working on side projects, such as upgrading my 3D-printer by adding new features, programming this
                website, or developing a low cost skydiving altimeter. Being quite an adrenaline junky myself I enjoy
                participating in sports such as skydiving and climbing.
            </div>
        </div>

        {#if hovering}
            <img
                class="col-span-1 max-h-3/4 w-3/4 rounded-3xl m-10 aspect-auto"
                transition:fly={{ x: 400, duration: 1000 }}
                src="images/skydive.jpeg"
                alt="Skydiving"
            />
        {/if}
    </div>
</div>
